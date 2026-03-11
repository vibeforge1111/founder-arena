"""
FOUNDER ARENA - The Agent-Only Startup Battle Royale
Where AI agents build empires and humans watch the chaos.

Run: python server.py
Dashboard: http://localhost:8888
API Docs: http://localhost:8888/docs
"""

import hashlib
import json
import random
import threading
import time
import uuid
from datetime import datetime, timezone
from enum import Enum
from pathlib import Path
from typing import Optional

from fastapi import FastAPI, Header, HTTPException, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, HTMLResponse
from pydantic import BaseModel

from action_mapper import ActionMapper
from director_adapter import ArenaDirector
from example_agent import FounderAgent
from security import AuditLogger, RateLimiter, token_fingerprint
from world_state import RichStartupState

# ─── Constants ───────────────────────────────────────────────────────────────

SECTORS = ["ai", "fintech", "healthtech", "edtech", "saas", "crypto", "gaming", "greentech"]
ROLES = ["engineer", "marketer", "salesperson", "designer"]
FIRST_NAMES = [
    "Alex", "Sam", "Jordan", "Casey", "Morgan", "Riley", "Quinn", "Avery",
    "Blake", "Drew", "Sage", "Reese", "Skyler", "Phoenix", "Dakota", "Rowan",
    "Kai", "Zion", "Nico", "Wren", "Ellis", "Finley", "Harley", "Lennox",
]
LAST_NAMES = [
    "Chen", "Patel", "Kim", "Garcia", "Nakamura", "Mueller", "Santos", "Okafor",
    "Singh", "Johansson", "Petrov", "Nguyen", "Abadi", "Fischer", "Tanaka", "Ali",
]
MAX_TURNS = 52
MAX_ACTIONS_PER_TURN = 3
TURN_TIMEOUT_SECONDS = 30
BASE_SALARY = {"engineer": 12000, "marketer": 9000, "salesperson": 10000, "designer": 10000}

BOT_CONFIGS = [
    {"name": "AlphaBot", "startup": "NeuralForge", "sector": "ai", "motto": "Intelligence is our product", "strategy": "balanced"},
    {"name": "BlazeRunner", "startup": "RocketScale", "sector": "fintech", "motto": "Move fast, raise faster", "strategy": "aggressive"},
    {"name": "ZenMaster", "startup": "CraftLabs", "sector": "saas", "motto": "Quality over quantity", "strategy": "lean"},
    {"name": "ChaosMonkey", "startup": "WildCard Inc", "sector": "crypto", "motto": "Embrace the chaos", "strategy": "chaos"},
    {"name": "DataDriven", "startup": "InsightAI", "sector": "healthtech", "motto": "Data never lies", "strategy": "balanced"},
    {"name": "GrowthHacker", "startup": "ViralLoop", "sector": "gaming", "motto": "10x or nothing", "strategy": "aggressive"},
    {"name": "SteadyEddie", "startup": "GreenStack", "sector": "greentech", "motto": "Sustainable growth wins", "strategy": "lean"},
]

# ─── Pydantic Models (API) ──────────────────────────────────────────────────

class CreateGameRequest(BaseModel):
    name: str = "Founder Arena"
    max_players: int = 8
    min_players: int = 2
    turn_timeout: int = TURN_TIMEOUT_SECONDS
    max_turns: int = MAX_TURNS
    seed: Optional[int] = None
    use_rich_state: bool = False

class JoinGameRequest(BaseModel):
    agent_name: str
    startup_name: str
    sector: str
    motto: str = ""
    strategy_description: str = ""
    join_code: str = ""

class ActionRequest(BaseModel):
    agent_token: Optional[str] = None
    actions: list[dict]

# ─── Game State Models ───────────────────────────────────────────────────────

class TeamMember:
    def __init__(self, name: str, role: str, skill: int = 50):
        self.id = str(uuid.uuid4())[:8]
        self.name = name
        self.role = role
        self.skill = skill
        self.salary = BASE_SALARY.get(role, 10000)
        self.hired_turn = 0

    def to_dict(self):
        return {"id": self.id, "name": self.name, "role": self.role,
                "skill": self.skill, "salary": self.salary}


class Startup:
    def __init__(self, agent_name: str, startup_name: str, sector: str,
                 motto: str, strategy: str):
        self.id = str(uuid.uuid4())[:8]
        self.agent_token = str(uuid.uuid4())
        self.agent_name = agent_name
        self.startup_name = startup_name
        self.sector = sector
        self.motto = motto
        self.strategy = strategy
        self.alive = True
        self.death_reason = ""
        # Financials
        self.cash = 100_000
        self.monthly_burn = 5_000
        self.revenue = 0
        # Product
        self.product_quality = 20
        self.features_built = 0
        # Market
        self.users = 0
        self.brand = 10
        # Team
        self.team: list[TeamMember] = []
        self.morale = 70
        # Fundraising
        self.total_raised = 0
        self.dilution = 0.0
        self.funding_round = "pre-seed"
        # Tracking
        self.valuation = 100_000
        self.actions_submitted = False
        self.pending_actions: list[dict] = []
        self.turn_results: list[dict] = []
        self.spy_intel: list[dict] = []
        # History for charts
        self.history: list[dict] = []
        # Add a founding engineer
        founder = TeamMember(f"{random.choice(FIRST_NAMES)} (Founder)", "engineer", 65)
        founder.salary = 0
        self.team.append(founder)

    @property
    def runway(self) -> float:
        net_burn = self.monthly_burn - self.revenue
        if net_burn <= 0:
            return 999
        return round(self.cash / net_burn, 1)

    def calc_valuation(self) -> int:
        base = self.cash
        base += self.revenue * 60  # 5yr revenue multiple
        base += self.users * 50
        base += self.product_quality * 2000
        base += self.brand * 1500
        base += len(self.team) * 30000
        if self.morale > 80:
            base = int(base * 1.15)
        if self.sector in _hot_sectors:
            base = int(base * 1.3)
        return max(int(base), 10_000)

    def snapshot(self) -> dict:
        self.valuation = self.calc_valuation()
        return {
            "id": self.id, "agent_name": self.agent_name,
            "startup_name": self.startup_name, "sector": self.sector,
            "motto": self.motto, "strategy": self.strategy, "alive": self.alive,
            "death_reason": self.death_reason,
            "cash": self.cash, "monthly_burn": self.monthly_burn,
            "revenue": self.revenue, "runway": self.runway,
            "users": self.users, "product_quality": self.product_quality,
            "features_built": self.features_built,
            "brand": self.brand, "morale": self.morale,
            "team": [m.to_dict() for m in self.team],
            "team_size": len(self.team),
            "valuation": self.valuation,
            "total_raised": self.total_raised, "dilution": round(self.dilution, 2),
            "funding_round": self.funding_round,
        }

    def private_view(self) -> dict:
        """What the owning agent sees (includes spy intel)."""
        view = self.snapshot()
        view["spy_intel"] = self.spy_intel
        view["turn_results"] = self.turn_results[-5:]
        return view

    def public_view(self) -> dict:
        """What spectators and other agents see (no secrets)."""
        snap = self.snapshot()
        cash_value = snap.pop("cash", 0)
        snap.pop("monthly_burn", None)
        snap.pop("team", None)
        snap.pop("morale", None)
        snap.pop("seven_dimension_scores", None)
        if cash_value > 1_000_000:
            snap["cash_display"] = "$1M+"
        elif cash_value > 100_000:
            snap["cash_display"] = "$100K+"
        else:
            snap["cash_display"] = "<$100K"
        return snap

    def record_history(self, turn: int):
        self.history.append({
            "turn": turn, "cash": self.cash, "users": self.users,
            "revenue": self.revenue, "valuation": self.calc_valuation(),
            "product_quality": self.product_quality, "morale": self.morale,
            "brand": self.brand, "team_size": len(self.team),
        })


SCORE_WEIGHTS = {
    "cash_efficiency": 0.17,
    "revenue_quality": 0.16,
    "customer_health": 0.16,
    "product_health": 0.14,
    "team_health": 0.13,
    "risk_management": 0.12,
    "strategic_coherence": 0.12,
}


def _clamp_score(value: float) -> float:
    return round(max(0.0, min(100.0, value)), 2)


def _utc_now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


def _compute_seven_dimension_scores(startup) -> dict:
    if hasattr(startup, "world_state"):
        finance = startup.world_state.get("finance", {})
        customers = startup.world_state.get("customers", {})
        product = startup.world_state.get("product", {})
        team = startup.world_state.get("team", {})
        risk = startup.world_state.get("risk", {})
        sales = startup.world_state.get("sales", {})
        growth = startup.world_state.get("growth", {})
        market = startup.world_state.get("market", {})

        runway_score = min(float(finance.get("runway_weeks", 0.0)) / 0.52, 100.0)
        burn_efficiency = 100.0 if float(finance.get("net_burn_usd", 0.0)) <= 0 else min(
            100.0,
            (float(finance.get("monthly_revenue_usd", 0.0)) / max(float(finance.get("monthly_burn_usd", 1.0)), 1.0)) * 100.0,
        )
        cash_efficiency = _clamp_score(runway_score * 0.5 + burn_efficiency * 0.3 + (100.0 - startup.dilution * 100.0) * 0.2)
        revenue_quality = _clamp_score(
            burn_efficiency * 0.45
            + min(float(sales.get("weighted_pipeline_usd", 0.0)) / max(float(finance.get("monthly_burn_usd", 1.0)) * 60.0, 1.0) * 100.0, 100.0) * 0.3
            + (100.0 - min(float(customers.get("monthly_churn_rate", 0.0)) * 1000.0, 100.0)) * 0.25
        )
        customer_health = _clamp_score(
            float(customers.get("health_index", 0.0)) * 55.0
            + float(customers.get("trust_score", 0.0)) * 30.0
            + (100.0 - min(float(customers.get("monthly_churn_rate", 0.0)) * 1200.0, 100.0)) * 0.15
        )
        product_health = _clamp_score(
            float(product.get("onboarding_quality", 0.0)) * 70.0
            + min(float(product.get("launch_count", 0.0)) * 6.0, 20.0)
            + max(0.0, 10.0 - float(product.get("major_incidents_open", 0.0)) * 10.0)
        )
        team_health = _clamp_score(
            float(team.get("morale", 0.0)) * 45.0
            + float(team.get("delivery_capacity_index", 0.0)) * 35.0
            + (100.0 - float(team.get("attrition_risk", 0.0)) * 100.0) * 0.2
        )
        risk_management = _clamp_score(
            (100.0 - float(risk.get("regulatory_pressure", 0.0)) * 100.0) * 0.32
            + (100.0 - float(risk.get("financing_pressure", 0.0)) * 100.0) * 0.28
            + (100.0 - min(float(risk.get("compliance_backlog", 0.0)) * 12.0, 100.0)) * 0.2
            + (100.0 - min(float(product.get("major_incidents_open", 0.0)) * 22.0, 100.0)) * 0.2
        )
        strategic_coherence = _clamp_score(
            float(growth.get("activation_index", 0.0)) * 28.0
            + float(customers.get("segment_mix_index", 0.0)) * 22.0
            + min(float(sales.get("weighted_pipeline_usd", 0.0)) / max(float(finance.get("monthly_burn_usd", 1.0)) * 55.0, 1.0) * 100.0, 100.0) * 0.3
            + min(float(market.get("demand_index", 0.0)) / 1.5 * 20.0, 20.0)
        )
    else:
        revenue_to_burn = 100.0 if startup.monthly_burn <= 0 else min(100.0, startup.revenue / max(startup.monthly_burn, 1) * 100.0)
        cash_efficiency = _clamp_score(min(startup.runway * 12.5, 100.0) * 0.6 + revenue_to_burn * 0.25 + (100.0 - startup.dilution * 100.0) * 0.15)
        revenue_quality = _clamp_score(revenue_to_burn * 0.7 + min(startup.users / 40.0, 100.0) * 0.3)
        customer_health = _clamp_score(min(startup.users / 50.0, 100.0) * 0.55 + startup.brand * 0.25 + startup.morale * 0.2)
        product_health = _clamp_score(startup.product_quality * 0.8 + min(startup.features_built * 4.0, 20.0))
        team_health = _clamp_score(startup.morale * 0.7 + min(len(startup.team) * 8.0, 30.0))
        risk_management = _clamp_score(min(startup.runway * 10.0, 100.0) * 0.65 + (100.0 - startup.dilution * 100.0) * 0.35)
        strategic_coherence = _clamp_score(product_health * 0.35 + revenue_quality * 0.35 + customer_health * 0.3)

    dimensions = {
        "cash_efficiency": cash_efficiency,
        "revenue_quality": revenue_quality,
        "customer_health": customer_health,
        "product_health": product_health,
        "team_health": team_health,
        "risk_management": risk_management,
        "strategic_coherence": strategic_coherence,
    }
    total = 0.0
    for key, weight in SCORE_WEIGHTS.items():
        total += dimensions[key] * weight
    return {"dimensions": dimensions, "total_score": round(total, 2)}


# ─── Game Events ─────────────────────────────────────────────────────────────

_hot_sectors: list[str] = []

EVENTS = [
    {
        "id": "market_crash",
        "name": "Market Crash",
        "description": "The market takes a nosedive. Investor confidence plummets.",
        "effect": "all_valuations_drop_20",
        "emoji": "📉",
    },
    {
        "id": "viral_moment",
        "name": "Viral Moment",
        "description": "{startup} goes viral on social media! Users flood in.",
        "effect": "random_agent_10x_users",
        "emoji": "🚀",
    },
    {
        "id": "regulatory_crackdown",
        "name": "Regulatory Crackdown",
        "description": "New regulations hit the {sector} sector hard.",
        "effect": "sector_compliance_cost",
        "emoji": "⚖️",
    },
    {
        "id": "talent_shortage",
        "name": "Talent Shortage",
        "description": "Top talent is scarce. Hiring costs double for the next 3 weeks.",
        "effect": "hiring_cost_2x",
        "emoji": "🧑‍💻",
    },
    {
        "id": "tech_breakthrough",
        "name": "Tech Breakthrough",
        "description": "A major breakthrough in {sector}! Sector valuations soar.",
        "effect": "sector_boom",
        "emoji": "💡",
    },
    {
        "id": "investor_fomo",
        "name": "Investor FOMO",
        "description": "VCs are throwing money around. Fundraising is 2x easier!",
        "effect": "fundraise_boost",
        "emoji": "💸",
    },
    {
        "id": "black_swan",
        "name": "Black Swan Event",
        "description": "An unprecedented event shakes the entire market.",
        "effect": "random_chaos",
        "emoji": "🦢",
    },
    {
        "id": "copycat_wave",
        "name": "Copycat Wave",
        "description": "Copycats flood the {sector} space. Competition intensifies.",
        "effect": "sector_competition",
        "emoji": "🐱",
    },
    {
        "id": "acqui_hire",
        "name": "Acqui-Hire Frenzy",
        "description": "Big tech is acquiring talent. Your team might get poached!",
        "effect": "random_team_loss",
        "emoji": "🏢",
    },
    {
        "id": "press_scandal",
        "name": "Press Scandal",
        "description": "{startup} is caught in a PR nightmare!",
        "effect": "random_agent_brand_drop",
        "emoji": "📰",
    },
]


# ─── Game Engine ─────────────────────────────────────────────────────────────

class GamePhase(str, Enum):
    LOBBY = "lobby"
    PLAYING = "playing"
    FINISHED = "finished"


class Game:
    def __init__(self, name: str, max_players: int, min_players: int,
                 turn_timeout: int, max_turns: int, seed: Optional[int], use_rich_state: bool = False):
        self.id = str(uuid.uuid4())[:8]
        self.name = name
        self.phase = GamePhase.LOBBY
        self.max_players = max_players
        self.min_players = min_players
        self.turn_timeout = turn_timeout
        self.max_turns = max_turns
        self.seed = seed or random.randint(1, 999999)
        self.rng = random.Random(self.seed)
        self.use_rich_state = use_rich_state
        self.turn = 0
        self.startups: dict[str, Startup] = {}  # id -> Startup
        self.token_map: dict[str, str] = {}  # token -> startup_id
        self.event_log: list[dict] = []
        self.action_log: dict[str, list[dict]] = {}  # startup_id -> action records
        self.narrative: list[str] = []
        self.market_modifiers: dict = {
            "hiring_cost_mult": 1.0,
            "fundraise_mult": 1.0,
            "hiring_cost_expires": 0,
            "fundraise_expires": 0,
        }
        self.created_at = _utc_now_iso()
        self.turn_deadline: float = 0
        self.winner: Optional[str] = None
        self.admin_token = str(uuid.uuid4())
        self.join_code = str(uuid.uuid4())[:8]
        self.spectator_token = str(uuid.uuid4())
        self.action_mapper = ActionMapper(self.rng) if use_rich_state else None
        self.director = ArenaDirector() if use_rich_state else None

    def _narrate(self, text: str):
        entry = f"Week {self.turn}: {text}"
        self.narrative.append(entry)
        self.event_log.append({
            "turn": self.turn,
            "time": _utc_now_iso(),
            "text": text,
            "type": "narrative",
        })

    def _event(self, event_data: dict, text: str):
        self.event_log.append({
            "turn": self.turn,
            "time": _utc_now_iso(),
            "text": text,
            "type": "event",
            "event_id": event_data["id"],
            "emoji": event_data.get("emoji", ""),
        })
        self.narrative.append(f"Week {self.turn}: {event_data['emoji']} {text}")

    def add_startup(self, agent_name: str, startup_name: str, sector: str,
                    motto: str, strategy: str) -> Startup:
        if self.phase != GamePhase.LOBBY:
            raise ValueError("Game already started")
        if len(self.startups) >= self.max_players:
            raise ValueError("Game is full")
        if sector not in SECTORS:
            raise ValueError(f"Invalid sector. Choose from: {SECTORS}")

        if self.use_rich_state:
            s = RichStartupState(
                agent_name,
                startup_name,
                sector,
                motto,
                strategy,
                seed=self.seed + len(self.startups) + 1,
            )
        else:
            s = Startup(agent_name, startup_name, sector, motto, strategy)
        self.startups[s.id] = s
        self.token_map[s.agent_token] = s.id
        self._narrate(f"🏁 {startup_name} ({agent_name}) enters the arena in {sector}! \"{motto}\"")
        return s

    def start(self):
        if self.phase != GamePhase.LOBBY:
            raise ValueError("Game already started")
        if len(self.startups) < self.min_players:
            raise ValueError(f"Need at least {self.min_players} players")
        self.phase = GamePhase.PLAYING
        self.turn = 1
        self.turn_deadline = time.time() + self.turn_timeout
        # Pick initial hot sectors
        global _hot_sectors
        _hot_sectors = self.rng.sample(SECTORS, 2)
        self._narrate(f"🔔 THE ARENA IS OPEN! {len(self.startups)} startups enter. "
                      f"Hot sectors: {', '.join(_hot_sectors)}. Let the battle begin!")

    def get_startup_by_token(self, token: str) -> Optional[Startup]:
        sid = self.token_map.get(token)
        return self.startups.get(sid) if sid else None

    def has_agent_token(self, token: Optional[str]) -> bool:
        return bool(token and token in self.token_map)

    def submit_actions(self, token: str, actions: list[dict]) -> dict:
        if self.phase != GamePhase.PLAYING:
            raise ValueError("Game not in playing phase")
        startup = self.get_startup_by_token(token)
        if not startup:
            raise ValueError("Invalid agent token")
        if not startup.alive:
            raise ValueError("Your startup is dead")
        if startup.actions_submitted:
            raise ValueError("Actions already submitted this turn")
        if len(actions) > MAX_ACTIONS_PER_TURN:
            raise ValueError(f"Max {MAX_ACTIONS_PER_TURN} actions per turn")

        startup.pending_actions = actions[:MAX_ACTIONS_PER_TURN]
        startup.actions_submitted = True

        # Check if all alive agents have submitted
        alive = [s for s in self.startups.values() if s.alive]
        all_submitted = all(s.actions_submitted for s in alive)
        if all_submitted:
            self._resolve_turn()

        return {"status": "ok", "actions_accepted": len(startup.pending_actions),
                "all_submitted": all_submitted}

    def check_timeout(self):
        """Call periodically to auto-resolve turns on timeout."""
        if self.phase != GamePhase.PLAYING:
            return
        if time.time() > self.turn_deadline:
            self._resolve_turn()

    def _resolve_turn(self):
        """Resolve all actions, apply events, advance turn."""
        alive_startups = [s for s in self.startups.values() if s.alive]

        # 1. Expire market modifiers
        if self.turn >= self.market_modifiers["hiring_cost_expires"]:
            self.market_modifiers["hiring_cost_mult"] = 1.0
        if self.turn >= self.market_modifiers["fundraise_expires"]:
            self.market_modifiers["fundraise_mult"] = 1.0

        # 2. Process each startup's actions
        for startup in alive_startups:
            results = []
            for action in startup.pending_actions:
                result = self._execute_action(startup, action, alive_startups)
                results.append(result)
            startup.turn_results = results

            # Persist to action log
            if startup.id not in self.action_log:
                self.action_log[startup.id] = []
            for i, result in enumerate(results):
                action_type = startup.pending_actions[i].get("type", "unknown") if i < len(startup.pending_actions) else "unknown"
                params = startup.pending_actions[i].get("params", {}) if i < len(startup.pending_actions) else {}
                self.action_log[startup.id].append({
                    "turn": self.turn,
                    "action_type": action_type,
                    "params": params,
                    "success": result.get("success", False),
                    "message": result.get("message", ""),
                })

        # 3. Apply simulation progression
        if self.use_rich_state:
            for startup in alive_startups:
                rich_event = self.director.decide_and_apply(startup, self.turn)
                if rich_event:
                    self.event_log.append({
                        "turn": self.turn,
                        "time": _utc_now_iso(),
                        "text": rich_event["description"],
                        "type": "event",
                        "event_id": rich_event["id"],
                        "emoji": rich_event["emoji"],
                        "startup_id": startup.id,
                        "startup_name": startup.startup_name,
                        "director_state": rich_event["director_state"],
                        "stress_index": rich_event["stress_index"],
                        "challenge": {
                            "family_id": rich_event["family_id"],
                            "base_family_id": rich_event["base_family_id"],
                            "variant_id": rich_event["variant_id"],
                            "packet_kind": rich_event["packet_kind"],
                            "transfer_pack_id": rich_event["transfer_pack_id"],
                            "transfer_pack_step": rich_event["transfer_pack_step"],
                            "transfer_pack_length": rich_event["transfer_pack_length"],
                        },
                    })
                    self.narrative.append(
                        f"Week {self.turn}: {rich_event['emoji']} {startup.startup_name} - {rich_event['description']}"
                    )
                self.action_mapper.advance_week(startup, self.turn)
        else:
            for startup in alive_startups:
                self._apply_economics(startup)

            # 4. Random events (30% chance)
            if self.rng.random() < 0.30:
                self._trigger_event(alive_startups)

        # 4. Rotate hot sectors occasionally
        if self.turn % 8 == 0:
            global _hot_sectors
            _hot_sectors = self.rng.sample(SECTORS, 2)
            self._narrate(f"📊 Market shift! Hot sectors now: {', '.join(_hot_sectors)}")

        # 5. Check for deaths
        for startup in alive_startups:
            if startup.cash <= 0:
                startup.alive = False
                startup.death_reason = "Ran out of money"
                self._narrate(f"💀 {startup.startup_name} ran out of cash and shut down!")
            elif startup.morale <= 0:
                startup.alive = False
                startup.death_reason = "Team mutiny - everyone quit"
                self._narrate(f"💀 {startup.startup_name} collapsed from zero morale!")
            elif self.use_rich_state and float(startup.world_state["customers"].get("trust_score", 1.0)) < 0.35:
                startup.alive = False
                startup.death_reason = "Trust collapse"
                self._narrate(f"💀 {startup.startup_name} lost customer trust and collapsed!")
            elif self.use_rich_state and float(startup.world_state["risk"].get("regulatory_pressure", 0.0)) > 0.95:
                startup.alive = False
                startup.death_reason = "Compliance failure"
                self._narrate(f"💀 {startup.startup_name} was crushed by compliance pressure!")

        # 6. Record history for all
        for s in self.startups.values():
            s.record_history(self.turn)

        # 7. Generate turn narrative
        alive_now = [s for s in self.startups.values() if s.alive]
        if alive_now:
            leader = max(alive_now, key=lambda s: s.calc_valuation())
            self._narrate(f"📈 Leading: {leader.startup_name} (${leader.calc_valuation():,} valuation)")

        # 8. Reset for next turn
        for s in self.startups.values():
            s.actions_submitted = False
            s.pending_actions = []
            s.spy_intel = []

        # 9. Check game over
        alive_count = len([s for s in self.startups.values() if s.alive])
        if alive_count <= 1 or self.turn >= self.max_turns:
            self._end_game()
        else:
            self.turn += 1
            self.turn_deadline = time.time() + self.turn_timeout

    def _execute_action(self, startup: Startup, action: dict,
                        all_startups: list) -> dict:
        if self.use_rich_state:
            mapped = self.action_mapper.execute(startup, action, self.turn)
            if mapped is not None:
                return mapped

        action_type = action.get("type", "")
        params = action.get("params", {})

        if action_type == "build_feature":
            return self._action_build_feature(startup, params)
        elif action_type == "hire":
            return self._action_hire(startup, params)
        elif action_type == "fundraise":
            return self._action_fundraise(startup, params)
        elif action_type == "acquire_users":
            return self._action_acquire_users(startup, params)
        elif action_type == "pivot":
            return self._action_pivot(startup, params)
        elif action_type == "spy":
            return self._action_spy(startup, params, all_startups)
        elif action_type == "poach":
            return self._action_poach(startup, params, all_startups)
        elif action_type == "launch_pr":
            return self._action_launch_pr(startup, params)
        elif action_type == "cut_costs":
            return self._action_cut_costs(startup, params)
        elif action_type == "research":
            return self._action_research(startup, params)
        else:
            return {"action": action_type, "success": False,
                    "message": f"Unknown action: {action_type}"}

    def _action_build_feature(self, s: Startup, params: dict) -> dict:
        focus = params.get("focus", "general")
        cost = 15000
        if s.cash < cost:
            return {"action": "build_feature", "success": False,
                    "message": "Not enough cash to build features"}
        s.cash -= cost
        eng_count = sum(1 for m in s.team if m.role == "engineer")
        quality_gain = 5 + eng_count * 3 + self.rng.randint(-2, 5)
        # Small chance of failure
        if self.rng.random() < 0.1:
            quality_gain = max(1, quality_gain // 3)
            msg = f"Feature development hit snags. Only +{quality_gain} quality."
        else:
            msg = f"Built {focus} features! +{quality_gain} quality."
        s.product_quality = min(100, s.product_quality + quality_gain)
        s.features_built += 1
        self._narrate(f"🔧 {s.startup_name} built new {focus} features (quality now {s.product_quality})")
        return {"action": "build_feature", "success": True, "message": msg,
                "quality_gain": quality_gain}

    def _action_hire(self, s: Startup, params: dict) -> dict:
        role = params.get("role", "engineer")
        if role not in ROLES:
            return {"action": "hire", "success": False,
                    "message": f"Invalid role. Choose from: {ROLES}"}
        salary = int(BASE_SALARY[role] * self.market_modifiers["hiring_cost_mult"])
        signing_bonus = salary
        if s.cash < signing_bonus:
            return {"action": "hire", "success": False,
                    "message": "Not enough cash for signing bonus"}
        # Hire success depends on brand + morale
        hire_chance = 0.5 + (s.brand / 200) + (s.morale / 200)
        if self.rng.random() > hire_chance:
            s.cash -= signing_bonus // 2  # Recruiting costs even on fail
            return {"action": "hire", "success": False,
                    "message": f"Failed to attract a {role}. Brand/morale too low."}
        name = f"{self.rng.choice(FIRST_NAMES)} {self.rng.choice(LAST_NAMES)}"
        member = TeamMember(name, role, 40 + self.rng.randint(0, 30))
        member.salary = salary
        member.hired_turn = self.turn
        s.team.append(member)
        s.cash -= signing_bonus
        s.monthly_burn += salary
        self._narrate(f"👤 {s.startup_name} hired {name} as {role}")
        return {"action": "hire", "success": True,
                "message": f"Hired {name} as {role} (skill: {member.skill})",
                "member": member.to_dict()}

    def _action_fundraise(self, s: Startup, params: dict) -> dict:
        round_type = params.get("round", "angel")
        rounds = {
            "angel": {"amount": (50_000, 200_000), "dilution": (0.05, 0.15)},
            "seed": {"amount": (200_000, 1_000_000), "dilution": (0.10, 0.20)},
            "series_a": {"amount": (1_000_000, 5_000_000), "dilution": (0.15, 0.25)},
            "series_b": {"amount": (5_000_000, 20_000_000), "dilution": (0.15, 0.30)},
        }
        if round_type not in rounds:
            return {"action": "fundraise", "success": False,
                    "message": f"Invalid round. Choose from: {list(rounds.keys())}"}
        config = rounds[round_type]
        # Success chance based on metrics
        base_chance = 0.3
        base_chance += (s.product_quality / 200)
        base_chance += (s.users / 10000)
        base_chance += (s.brand / 200)
        base_chance *= self.market_modifiers["fundraise_mult"]
        base_chance = min(base_chance, 0.9)

        if self.rng.random() > base_chance:
            self._narrate(f"🚫 {s.startup_name} pitched for {round_type} funding but got rejected")
            return {"action": "fundraise", "success": False,
                    "message": f"{round_type} pitch rejected. Need better metrics."}

        amount = self.rng.randint(*config["amount"])
        dilution = self.rng.uniform(*config["dilution"])
        s.cash += amount
        s.total_raised += amount
        s.dilution += dilution
        s.funding_round = round_type
        self._narrate(f"💰 {s.startup_name} raised ${amount:,} in {round_type} "
                      f"({dilution:.0%} dilution)")
        return {"action": "fundraise", "success": True,
                "message": f"Raised ${amount:,} at {dilution:.0%} dilution!",
                "amount": amount, "dilution": round(dilution, 3)}

    def _action_acquire_users(self, s: Startup, params: dict) -> dict:
        channel = params.get("channel", "organic")
        channels = {
            "organic": {"cost": 5000, "base_users": 50, "variance": 80},
            "paid_ads": {"cost": 20000, "base_users": 200, "variance": 150},
            "viral": {"cost": 8000, "base_users": 20, "variance": 500},
            "partnerships": {"cost": 15000, "base_users": 100, "variance": 200},
        }
        if channel not in channels:
            return {"action": "acquire_users", "success": False,
                    "message": f"Invalid channel. Choose from: {list(channels.keys())}"}
        config = channels[channel]
        if s.cash < config["cost"]:
            return {"action": "acquire_users", "success": False,
                    "message": "Not enough cash for marketing"}
        s.cash -= config["cost"]
        mkt_count = sum(1 for m in s.team if m.role == "marketer")
        users_gained = config["base_users"] + self.rng.randint(0, config["variance"])
        users_gained += mkt_count * 30
        users_gained = int(users_gained * (s.product_quality / 50))  # Quality multiplier
        s.users += users_gained
        s.brand = min(100, s.brand + self.rng.randint(1, 5))
        self._narrate(f"📢 {s.startup_name} acquired {users_gained:,} users via {channel}")
        return {"action": "acquire_users", "success": True,
                "message": f"Gained {users_gained:,} users via {channel}!",
                "users_gained": users_gained}

    def _action_pivot(self, s: Startup, params: dict) -> dict:
        new_sector = params.get("sector", "")
        if new_sector not in SECTORS:
            return {"action": "pivot", "success": False,
                    "message": f"Invalid sector. Choose from: {SECTORS}"}
        if new_sector == s.sector:
            return {"action": "pivot", "success": False,
                    "message": "Already in that sector!"}
        old_sector = s.sector
        s.sector = new_sector
        if hasattr(s, "world_state"):
            s.world_state["company"]["founder_arena_sector"] = new_sector
            s.world_state["market"]["demand_index"] = min(1.5, float(s.world_state["market"].get("demand_index", 0.85)) + 0.03)
        quality_loss = int(s.product_quality * 0.3)
        s.product_quality -= quality_loss
        s.users = int(s.users * 0.5)  # Lose half the users
        s.morale -= 10
        if hasattr(s, "recalculate"):
            s.recalculate()
        self._narrate(f"🔄 {s.startup_name} PIVOTS from {old_sector} to {new_sector}! "
                      f"Lost {quality_loss} quality and half their users.")
        return {"action": "pivot", "success": True,
                "message": f"Pivoted to {new_sector}. Lost {quality_loss} quality, 50% users.",
                "quality_loss": quality_loss}

    def _action_spy(self, s: Startup, params: dict, all_startups: list) -> dict:
        target_name = params.get("target", "")
        target = None
        for other in all_startups:
            if other.id != s.id and (other.startup_name == target_name or
                                      other.agent_name == target_name):
                target = other
                break
        if not target:
            # Spy on random competitor
            others = [o for o in all_startups if o.id != s.id and o.alive]
            if not others:
                return {"action": "spy", "success": False, "message": "No competitors to spy on"}
            target = self.rng.choice(others)

        cost = 3000
        s.cash -= min(cost, s.cash)
        intel = {
            "target": target.startup_name,
            "cash": target.cash,
            "users": target.users,
            "revenue": target.revenue,
            "product_quality": target.product_quality,
            "team_size": len(target.team),
            "morale": target.morale,
        }
        s.spy_intel.append(intel)
        return {"action": "spy", "success": True,
                "message": f"Gathered intel on {target.startup_name}", "intel": intel}

    def _action_poach(self, s: Startup, params: dict, all_startups: list) -> dict:
        target_name = params.get("target", "")
        target = None
        for other in all_startups:
            if other.id != s.id and (other.startup_name == target_name or
                                      other.agent_name == target_name):
                target = other
                break
        if not target:
            return {"action": "poach", "success": False,
                    "message": "Target startup not found"}
        if not target.team:
            return {"action": "poach", "success": False,
                    "message": f"{target.startup_name} has no team to poach"}

        cost = 20000
        if s.cash < cost:
            return {"action": "poach", "success": False, "message": "Not enough cash to poach"}
        s.cash -= cost

        # Success depends on your brand vs their morale
        poach_chance = 0.3 + (s.brand / 200) - (target.morale / 200)
        if self.rng.random() > poach_chance:
            self._narrate(f"🛡️ {s.startup_name} tried to poach from {target.startup_name} but failed")
            return {"action": "poach", "success": False,
                    "message": f"Failed to poach from {target.startup_name}"}

        # Steal a random team member (not founder)
        poachable = [m for m in target.team if "Founder" not in m.name]
        if not poachable:
            return {"action": "poach", "success": False,
                    "message": f"{target.startup_name}'s founder can't be poached"}
        if hasattr(s, "world_state") and hasattr(target, "world_state"):
            stolen = self.rng.choice(poachable)
            target.team.remove(stolen)
            target.world_state["team"]["headcount"] = len(target.team)
            target.world_state["finance"]["monthly_burn_usd"] = max(
                0.0, float(target.world_state["finance"].get("monthly_burn_usd", 0.0)) - stolen.salary
            )
            target.world_state["team"]["morale"] = max(
                0.0, float(target.world_state["team"].get("morale", 0.0)) - 0.15
            )
            stolen.salary = int(stolen.salary * 1.3)
            s.team.append(stolen)
            s.world_state["team"]["headcount"] = len(s.team)
            s.world_state["finance"]["monthly_burn_usd"] = float(s.world_state["finance"].get("monthly_burn_usd", 0.0)) + stolen.salary
            target.recalculate()
            s.recalculate()
            self._narrate(f"😈 {s.startup_name} POACHED {stolen.name} ({stolen.role}) "
                          f"from {target.startup_name}!")
            return {"action": "poach", "success": True,
                    "message": f"Poached {stolen.name} ({stolen.role}) from {target.startup_name}!",
                    "member": stolen.to_dict()}
        stolen = self.rng.choice(poachable)
        target.team.remove(stolen)
        target.monthly_burn -= stolen.salary
        target.morale -= 15
        stolen.salary = int(stolen.salary * 1.3)  # Pay premium
        s.team.append(stolen)
        s.monthly_burn += stolen.salary
        if hasattr(target, "world_state"):
            target.world_state["team"]["headcount"] = len(target.team)
            target.recalculate()
        if hasattr(s, "world_state"):
            s.world_state["team"]["headcount"] = len(s.team)
            s.recalculate()
        self._narrate(f"😈 {s.startup_name} POACHED {stolen.name} ({stolen.role}) "
                      f"from {target.startup_name}!")
        return {"action": "poach", "success": True,
                "message": f"Poached {stolen.name} ({stolen.role}) from {target.startup_name}!",
                "member": stolen.to_dict()}

    def _action_launch_pr(self, s: Startup, params: dict) -> dict:
        cost = 10000
        if s.cash < cost:
            return {"action": "launch_pr", "success": False, "message": "Not enough cash for PR"}
        s.cash -= cost
        # PR can backfire
        if self.rng.random() < 0.15:
            brand_change = -self.rng.randint(5, 15)
            s.brand = max(0, s.brand + brand_change)
            self._narrate(f"📰 {s.startup_name}'s PR campaign BACKFIRED! Brand dropped by {abs(brand_change)}")
            return {"action": "launch_pr", "success": False,
                    "message": f"PR backfired! Brand -{abs(brand_change)}"}
        brand_gain = 8 + self.rng.randint(0, 12)
        user_gain = self.rng.randint(50, 300)
        s.brand = min(100, s.brand + brand_gain)
        s.users += user_gain
        self._narrate(f"📣 {s.startup_name} launched a PR campaign! +{brand_gain} brand, +{user_gain} users")
        return {"action": "launch_pr", "success": True,
                "message": f"PR success! +{brand_gain} brand, +{user_gain} users",
                "brand_gain": brand_gain, "user_gain": user_gain}

    def _action_cut_costs(self, s: Startup, params: dict) -> dict:
        target = params.get("target", "general")
        if target == "layoff" and len(s.team) > 1:
            # Fire the most recently hired non-founder
            fireable = [m for m in s.team if "Founder" not in m.name]
            if fireable:
                fired = fireable[-1]
                s.team.remove(fired)
                s.monthly_burn -= fired.salary
                s.morale -= 20
                if hasattr(s, "world_state"):
                    s.world_state["team"]["headcount"] = len(s.team)
                    s.recalculate()
                self._narrate(f"✂️ {s.startup_name} laid off {fired.name}. Morale tanks.")
                return {"action": "cut_costs", "success": True,
                        "message": f"Laid off {fired.name}. Burn reduced by ${fired.salary:,}/mo. Morale -20.",
                        "savings": fired.salary}
        # General cost cutting
        savings = int(s.monthly_burn * 0.15)
        s.monthly_burn = max(2000, s.monthly_burn - savings)
        s.morale -= 8
        s.product_quality = max(0, s.product_quality - 3)
        self._narrate(f"✂️ {s.startup_name} cut costs by ${savings:,}/mo")
        return {"action": "cut_costs", "success": True,
                "message": f"Cut ${savings:,}/mo. Quality -3, Morale -8.",
                "savings": savings}

    def _action_research(self, s: Startup, params: dict) -> dict:
        global _hot_sectors
        cost = 5000
        s.cash -= min(cost, s.cash)
        insights = {
            "hot_sectors": _hot_sectors,
            "market_modifiers": {
                "hiring_cost_mult": self.market_modifiers["hiring_cost_mult"],
                "fundraise_mult": self.market_modifiers["fundraise_mult"],
            },
            "competitor_count": len([x for x in self.startups.values()
                                     if x.alive and x.id != s.id]),
            "sectors_in_play": list(set(x.sector for x in self.startups.values() if x.alive)),
            "avg_valuation": int(sum(x.calc_valuation() for x in self.startups.values()
                                     if x.alive) / max(1, len([x for x in self.startups.values()
                                                               if x.alive]))),
        }
        return {"action": "research", "success": True,
                "message": "Market research complete.", "insights": insights}

    def _apply_economics(self, s: Startup):
        """Apply weekly economic effects."""
        # Revenue from users (depends on product quality and sales team)
        sales_count = sum(1 for m in s.team if m.role == "salesperson")
        revenue_per_user = 0.5 + (s.product_quality / 100) * 2 + sales_count * 0.3
        s.revenue = int(s.users * revenue_per_user)
        # Apply burn
        weekly_burn = s.monthly_burn // 4
        s.cash = s.cash - weekly_burn + (s.revenue // 4)
        # Natural user churn (5-15% monthly, so ~2-4% weekly)
        churn_rate = 0.02 + (1 - s.product_quality / 100) * 0.03
        s.users = max(0, int(s.users * (1 - churn_rate)))
        # Morale drift toward 50
        if s.morale > 50:
            s.morale -= 1
        elif s.morale < 50:
            s.morale += 1
        # Brand natural decay
        s.brand = max(0, s.brand - 1)

    def _trigger_event(self, alive_startups: list):
        """Trigger a random market event."""
        event = self.rng.choice(EVENTS)
        effect = event["effect"]

        if effect == "all_valuations_drop_20":
            for s in alive_startups:
                s.cash = int(s.cash * 0.9)
                s.users = int(s.users * 0.85)
            self._event(event, "Market crash! All startups lose 10% cash and 15% users.")

        elif effect == "random_agent_10x_users":
            lucky = self.rng.choice(alive_startups)
            boost = lucky.users * 5
            lucky.users += max(boost, 500)
            lucky.brand = min(100, lucky.brand + 20)
            self._event(event, f"{lucky.startup_name} goes VIRAL! Users explode by {boost:,}!")

        elif effect == "sector_compliance_cost":
            sector = self.rng.choice(SECTORS)
            for s in alive_startups:
                if s.sector == sector:
                    cost = 25000
                    s.cash -= min(cost, s.cash)
                    s.morale -= 5
            self._event(event, f"Regulatory crackdown hits {sector}! Compliance costs $25K.")

        elif effect == "hiring_cost_2x":
            self.market_modifiers["hiring_cost_mult"] = 2.0
            self.market_modifiers["hiring_cost_expires"] = self.turn + 3
            self._event(event, "Talent shortage! Hiring costs double for 3 weeks.")

        elif effect == "sector_boom":
            global _hot_sectors
            boom_sector = self.rng.choice(SECTORS)
            _hot_sectors = [boom_sector]
            for s in alive_startups:
                if s.sector == boom_sector:
                    s.users += self.rng.randint(200, 1000)
                    s.brand += 10
            self._event(event, f"Tech breakthrough in {boom_sector}! Sector booms!")

        elif effect == "fundraise_boost":
            self.market_modifiers["fundraise_mult"] = 2.0
            self.market_modifiers["fundraise_expires"] = self.turn + 3
            self._event(event, "Investor FOMO! Fundraising is 2x easier for 3 weeks.")

        elif effect == "random_chaos":
            for s in alive_startups:
                chaos = self.rng.choice(["cash", "users", "morale"])
                if chaos == "cash":
                    s.cash = int(s.cash * 0.8)
                elif chaos == "users":
                    s.users = int(s.users * 0.7)
                else:
                    s.morale = max(0, s.morale - 15)
            self._event(event, "Black Swan! Chaos sweeps the market. Everyone takes a hit.")

        elif effect == "sector_competition":
            sector = self.rng.choice(SECTORS)
            for s in alive_startups:
                if s.sector == sector:
                    s.users = int(s.users * 0.85)
            self._event(event, f"Copycat wave in {sector}! Competition intensifies.")

        elif effect == "random_team_loss":
            for s in alive_startups:
                fireable = [m for m in s.team if "Founder" not in m.name]
                if fireable and self.rng.random() < 0.3:
                    lost = self.rng.choice(fireable)
                    s.team.remove(lost)
                    s.monthly_burn -= lost.salary
                    s.morale -= 10
            self._event(event, "Big tech is acqui-hiring! Teams get poached.")

        elif effect == "random_agent_brand_drop":
            unlucky = self.rng.choice(alive_startups)
            unlucky.brand = max(0, unlucky.brand - 25)
            unlucky.morale -= 15
            self._event(event, f"Press scandal! {unlucky.startup_name}'s brand takes a massive hit.")

    def _end_game(self):
        """End the game and determine winner."""
        self.phase = GamePhase.FINISHED
        for startup in self.startups.values():
            startup.seven_dimension_scores = _compute_seven_dimension_scores(startup)
        alive = [s for s in self.startups.values() if s.alive]
        if alive:
            winner = max(alive, key=lambda s: s.calc_valuation())
            self.winner = winner.id
            self._narrate(f"🏆 GAME OVER! {winner.startup_name} ({winner.agent_name}) "
                          f"WINS with ${winner.calc_valuation():,} valuation!")
        else:
            self._narrate("💀 GAME OVER! Everyone went bankrupt. No winners.")

        # Generate final rankings
        ranked = sorted(self.startups.values(),
                        key=lambda s: (s.alive, s.calc_valuation()), reverse=True)
        for i, s in enumerate(ranked):
            status = "ALIVE" if s.alive else f"DEAD ({s.death_reason})"
            self._narrate(f"#{i+1} {s.startup_name} - ${s.calc_valuation():,} [{status}]")

    def _scorecard_for(self, startup) -> dict:
        if getattr(startup, "seven_dimension_scores", None) is None:
            startup.seven_dimension_scores = _compute_seven_dimension_scores(startup)
        return startup.seven_dimension_scores

    def _director_payload_for(self, startup) -> dict:
        return {
            "director_state": getattr(startup, "director_state", None),
            "stress_index": getattr(startup, "stress_index", None),
            "challenge_info": getattr(startup, "challenge_info", None),
        }

    def get_state(self, agent_token: Optional[str] = None) -> dict:
        """Get game state. If agent_token provided, includes private view."""
        state = {
            "game_id": self.id,
            "name": self.name,
            "phase": self.phase.value,
            "turn": self.turn,
            "max_turns": self.max_turns,
            "turn_deadline": self.turn_deadline,
            "use_rich_state": self.use_rich_state,
            "hot_sectors": _hot_sectors,
            "startups": {},
            "event_log": self.event_log[-20:],
            "narrative": self.narrative[-20:],
            "winner": self.winner,
        }

        my_startup_id = None
        if agent_token:
            my_startup_id = self.token_map.get(agent_token)

        for sid, s in self.startups.items():
            if sid == my_startup_id:
                state["startups"][sid] = s.private_view()
                state["my_startup_id"] = sid
                state["startups"][sid]["seven_dimension_scores"] = self._scorecard_for(s)
            else:
                state["startups"][sid] = s.public_view()
                if self.phase == GamePhase.FINISHED:
                    state["startups"][sid]["seven_dimension_scores"] = self._scorecard_for(s)
            if self.use_rich_state:
                if sid == my_startup_id or self.phase == GamePhase.FINISHED:
                    state["startups"][sid].update(self._director_payload_for(s))

        return state

    def get_public_state(self) -> dict:
        return self.get_state()

    def get_spectator_state(self) -> dict:
        """Full state for spectator dashboard - shows everything."""
        startup_payload = {}
        for sid, startup in self.startups.items():
            payload = startup.snapshot()
            payload["seven_dimension_scores"] = self._scorecard_for(startup)
            if self.use_rich_state:
                payload.update(self._director_payload_for(startup))
            startup_payload[sid] = payload
        state = {
            "game_id": self.id,
            "name": self.name,
            "phase": self.phase.value,
            "turn": self.turn,
            "max_turns": self.max_turns,
            "use_rich_state": self.use_rich_state,
            "hot_sectors": _hot_sectors,
            "startups": startup_payload,
            "histories": {sid: s.history for sid, s in self.startups.items()},
            "event_log": self.event_log,
            "narrative": self.narrative,
            "winner": self.winner,
            "market_modifiers": self.market_modifiers,
            "seven_dimension_scores": {sid: self._scorecard_for(s) for sid, s in self.startups.items()},
            "action_logs": self.action_log,
        }
        return state

    def get_replay(self) -> dict:
        """Full game replay data."""
        ranked = sorted(self.startups.values(),
                        key=lambda s: (s.alive, s.calc_valuation()), reverse=True)
        return {
            "game_id": self.id,
            "name": self.name,
            "seed": self.seed,
            "total_turns": self.turn,
            "use_rich_state": self.use_rich_state,
            "winner": self.winner,
            "rankings": [
                {"rank": i+1, "startup": s.startup_name, "agent": s.agent_name,
                 "sector": s.sector, "valuation": s.calc_valuation(),
                 "alive": s.alive, "death_reason": s.death_reason,
                 "users": s.users, "revenue": s.revenue, "cash": s.cash,
                 "total_raised": s.total_raised, "features_built": s.features_built,
                 "seven_dimension_scores": self._scorecard_for(s),
                 "director_state": getattr(s, "director_state", None),
                 "stress_index": getattr(s, "stress_index", None),
                 "challenge_info": getattr(s, "challenge_info", None)}
                for i, s in enumerate(ranked)
            ],
            "narrative": self.narrative,
            "event_log": self.event_log,
            "histories": {sid: s.history for sid, s in self.startups.items()},
            "seven_dimension_scores": {sid: self._scorecard_for(s) for sid, s in self.startups.items()},
            "action_logs": self.action_log,
        }


# ─── FastAPI App ─────────────────────────────────────────────────────────────

app = FastAPI(
    title="Founder Arena",
    description="The Agent-Only Startup Battle Royale. Where AI agents build empires and humans watch the chaos.",
    version="1.0.0",
)

# In-memory game store
games: dict[str, Game] = {}

# Serve static files
STATIC_DIR = Path(__file__).parent / "static"
if STATIC_DIR.exists():
    app.mount("/static", StaticFiles(directory=str(STATIC_DIR)), name="static")


def _require_header_token(token: Optional[str], *, header_name: str) -> str:
    if token:
        return token
    raise HTTPException(403, f"Missing required header: {header_name}")


RATE_LIMITER = RateLimiter()
AUDIT_LOGGER = AuditLogger(Path(__file__).parent / "data" / "security_audit.jsonl")


def _client_ip(request: Request) -> str:
    forwarded = request.headers.get("x-forwarded-for")
    if forwarded:
        return forwarded.split(",")[0].strip()
    if request.client and request.client.host:
        return request.client.host
    return "unknown"


def _enforce_rate_limit(request: Request, *, scope: str, identity: str, limit: int, window_seconds: int) -> None:
    allowed, retry_after = RATE_LIMITER.check(
        scope=scope,
        identity=identity,
        limit=limit,
        window_seconds=window_seconds,
    )
    if allowed:
        return
    AUDIT_LOGGER.log(
        "rate_limited",
        scope=scope,
        identity=identity,
        ip=_client_ip(request),
        retry_after=retry_after,
    )
    raise HTTPException(429, f"Rate limit exceeded for {scope}. Retry in {retry_after}s.")


def _audit(request: Request, event_type: str, **payload) -> None:
    AUDIT_LOGGER.log(event_type, ip=_client_ip(request), **payload)


@app.get("/", response_class=HTMLResponse)
async def root():
    index_path = STATIC_DIR / "index.html"
    if index_path.exists():
        return FileResponse(str(index_path))
    return HTMLResponse("<h1>Founder Arena</h1><p>Put index.html in ./static/</p>")


@app.get("/api/info")
async def info():
    return {
        "name": "Founder Arena",
        "tagline": "Where AI agents build empires and humans watch the chaos",
        "version": "1.0.0",
        "sectors": SECTORS,
        "roles": ROLES,
        "max_actions_per_turn": MAX_ACTIONS_PER_TURN,
        "actions": [
            "build_feature", "hire", "fundraise", "acquire_users", "pivot",
            "spy", "poach", "launch_pr", "cut_costs", "research",
        ],
        "fundraise_rounds": ["angel", "seed", "series_a", "series_b"],
        "acquire_channels": ["organic", "paid_ads", "viral", "partnerships"],
        "supports_use_rich_state": True,
        "active_games": len(games),
    }


# ─── Game CRUD ───────────────────────────────────────────────────────────────

@app.post("/api/games")
async def create_game(req: CreateGameRequest, request: Request):
    _enforce_rate_limit(request, scope="create_game", identity=_client_ip(request), limit=12, window_seconds=60)
    game = Game(req.name, req.max_players, req.min_players,
                req.turn_timeout, req.max_turns, req.seed, req.use_rich_state)
    games[game.id] = game
    payload = {
        "game_id": game.id,
        "name": game.name,
        "seed": game.seed,
        "use_rich_state": game.use_rich_state,
        "admin_token": game.admin_token,
        "join_code": game.join_code,
        "spectator_token": game.spectator_token,
    }
    _audit(
        request,
        "game_created",
        game_id=game.id,
        use_rich_state=game.use_rich_state,
        admin_token_fingerprint=token_fingerprint(game.admin_token),
        spectator_token_fingerprint=token_fingerprint(game.spectator_token),
    )
    return payload


@app.get("/api/games")
async def list_games():
    return {
        "games": [
            {"id": g.id, "name": g.name, "phase": g.phase.value,
             "players": len(g.startups), "turn": g.turn,
             "max_turns": g.max_turns, "created_at": g.created_at,
             "use_rich_state": g.use_rich_state}
            for g in games.values()
        ]
    }


@app.get("/api/games/{game_id}")
async def get_game(game_id: str, request: Request):
    game = games.get(game_id)
    if not game:
        raise HTTPException(404, "Game not found")
    _enforce_rate_limit(request, scope="get_game", identity=_client_ip(request), limit=120, window_seconds=60)
    _audit(request, "public_game_state", game_id=game_id)
    return game.get_public_state()


@app.post("/api/games/{game_id}/join")
async def join_game(game_id: str, req: JoinGameRequest, request: Request):
    game = games.get(game_id)
    if not game:
        raise HTTPException(404, "Game not found")
    _enforce_rate_limit(request, scope="join_game", identity=_client_ip(request), limit=30, window_seconds=60)
    if req.join_code != game.join_code:
        _audit(request, "join_denied", game_id=game_id, reason="invalid_join_code")
        raise HTTPException(403, "Invalid join code")
    try:
        startup = game.add_startup(
            req.agent_name, req.startup_name, req.sector,
            req.motto, req.strategy_description,
        )
        payload = {
            "startup_id": startup.id,
            "agent_token": startup.agent_token,
            "message": f"Welcome to the arena, {startup.startup_name}!",
        }
        _audit(
            request,
            "startup_joined",
            game_id=game_id,
            startup_id=startup.id,
            agent_name=startup.agent_name,
            agent_token_fingerprint=token_fingerprint(startup.agent_token),
        )
        return payload
    except ValueError as e:
        _audit(request, "join_denied", game_id=game_id, reason=str(e))
        raise HTTPException(400, str(e))

@app.post("/api/games/{game_id}/start")
async def start_game(game_id: str, request: Request, x_admin_token: Optional[str] = Header(None, alias="X-Admin-Token")):
    game = games.get(game_id)
    if not game:
        raise HTTPException(404, "Game not found")
    token = _require_header_token(x_admin_token, header_name="X-Admin-Token")
    _enforce_rate_limit(request, scope="start_game", identity=token_fingerprint(token) or _client_ip(request), limit=20, window_seconds=60)
    if token != game.admin_token:
        _audit(request, "start_denied", game_id=game_id, reason="invalid_admin_token")
        raise HTTPException(403, "Invalid admin token")
    try:
        game.start()
        _audit(request, "game_started", game_id=game_id, admin_token_fingerprint=token_fingerprint(token))
        return {"status": "started", "turn": game.turn,
                "players": len(game.startups), "use_rich_state": game.use_rich_state}
    except ValueError as e:
        _audit(request, "start_denied", game_id=game_id, reason=str(e))
        raise HTTPException(400, str(e))


def _run_bot(agent: FounderAgent):
    """Run a bot agent's play loop (called in a daemon thread)."""
    agent.play(poll_interval=0.5)


@app.post("/api/games/{game_id}/fill-bots")
async def fill_bots(game_id: str, request: Request,
                    x_admin_token: Optional[str] = Header(None, alias="X-Admin-Token")):
    """Fill remaining player slots with built-in bot agents, then auto-start."""
    game = games.get(game_id)
    if not game:
        raise HTTPException(404, "Game not found")
    token = _require_header_token(x_admin_token, header_name="X-Admin-Token")
    if token != game.admin_token:
        raise HTTPException(403, "Invalid admin token")
    if game.phase != GamePhase.LOBBY:
        raise HTTPException(400, "Game already started")

    current = len(game.startups)
    slots = game.max_players - current
    if slots <= 0:
        raise HTTPException(400, "Game is full")

    configs = BOT_CONFIGS[:slots]
    bot_agents = []
    for cfg in configs:
        # Add bot directly to game (no HTTP, avoids deadlock)
        startup = game.add_startup(
            cfg["name"], cfg["startup"], cfg["sector"],
            cfg["motto"], cfg["strategy"],
        )
        # Create a FounderAgent with pre-set tokens for the play loop
        agent = FounderAgent(
            name=cfg["name"],
            startup_name=cfg["startup"],
            sector=cfg["sector"],
            motto=cfg["motto"],
            strategy=cfg["strategy"],
            server="http://localhost:8888",
        )
        agent.game_id = game_id
        agent.agent_token = startup.agent_token
        agent.startup_id = startup.id
        bot_agents.append(agent)

    # Start the game
    game.start()
    _audit(request, "game_started_via_fill_bots", game_id=game_id, bots_added=len(bot_agents))

    # Launch bot play loops in daemon threads
    for agent in bot_agents:
        t = threading.Thread(target=_run_bot, args=(agent,), daemon=True)
        t.start()

    return {
        "status": "started",
        "bots_added": len(bot_agents),
        "bot_names": [c["name"] for c in configs],
        "total_players": len(game.startups),
        "turn": game.turn,
    }


# ─── Gameplay ────────────────────────────────────────────────────────────────

@app.get("/api/games/{game_id}/state")
async def get_state(game_id: str, request: Request, x_agent_token: Optional[str] = Header(None, alias="X-Agent-Token")):
    game = games.get(game_id)
    if not game:
        raise HTTPException(404, "Game not found")
    game.check_timeout()
    token = _require_header_token(x_agent_token, header_name="X-Agent-Token")
    _enforce_rate_limit(request, scope="get_state", identity=token_fingerprint(token) or _client_ip(request), limit=180, window_seconds=60)
    if not game.has_agent_token(token):
        _audit(request, "state_denied", game_id=game_id, reason="invalid_agent_token")
        raise HTTPException(403, "Invalid agent token")
    _audit(request, "state_read", game_id=game_id, agent_token_fingerprint=token_fingerprint(token))
    return game.get_state(token)


@app.post("/api/games/{game_id}/action")
async def submit_action(game_id: str, req: ActionRequest, request: Request, x_agent_token: Optional[str] = Header(None, alias="X-Agent-Token")):
    game = games.get(game_id)
    if not game:
        raise HTTPException(404, "Game not found")
    game.check_timeout()
    agent_token = _require_header_token(x_agent_token, header_name="X-Agent-Token")
    _enforce_rate_limit(request, scope="submit_action", identity=token_fingerprint(agent_token) or _client_ip(request), limit=60, window_seconds=60)
    if not game.has_agent_token(agent_token):
        _audit(request, "action_denied", game_id=game_id, reason="invalid_agent_token")
        raise HTTPException(403, "Invalid agent token")
    try:
        result = game.submit_actions(agent_token, req.actions)
        _audit(
            request,
            "actions_submitted",
            game_id=game_id,
            agent_token_fingerprint=token_fingerprint(agent_token),
            action_count=len(req.actions),
        )
        return result
    except ValueError as e:
        _audit(request, "action_denied", game_id=game_id, reason=str(e), agent_token_fingerprint=token_fingerprint(agent_token))
        raise HTTPException(400, str(e))


@app.get("/api/games/{game_id}/spectate")
async def spectate(game_id: str, request: Request, spectator_token: Optional[str] = None, x_spectator_token: Optional[str] = Header(None, alias="X-Spectator-Token")):
    game = games.get(game_id)
    if not game:
        raise HTTPException(404, "Game not found")
    token = x_spectator_token or spectator_token
    _enforce_rate_limit(request, scope="spectate", identity=token_fingerprint(token) or _client_ip(request), limit=120, window_seconds=60)
    if token and token != game.spectator_token:
        _audit(request, "spectate_denied", game_id=game_id, reason="invalid_spectator_token")
        raise HTTPException(403, "Invalid spectator token")
    game.check_timeout()
    _audit(request, "spectate_granted", game_id=game_id, spectator_token_fingerprint=token_fingerprint(token))
    return game.get_spectator_state()


@app.get("/api/games/{game_id}/replay")
async def get_replay(game_id: str):
    game = games.get(game_id)
    if not game:
        raise HTTPException(404, "Game not found")
    return game.get_replay()


@app.get("/api/games/{game_id}/narrative")
async def get_narrative(game_id: str):
    game = games.get(game_id)
    if not game:
        raise HTTPException(404, "Game not found")
    return {"narrative": game.narrative}


# ─── Action Logs ─────────────────────────────────────────────────────────────

@app.get("/api/games/{game_id}/actions")
async def get_all_actions(game_id: str):
    """Get action history for all startups in a game."""
    game = games.get(game_id)
    if not game:
        raise HTTPException(404, "Game not found")
    return {"action_logs": game.action_log}


@app.get("/api/games/{game_id}/actions/{startup_id}")
async def get_startup_actions(game_id: str, startup_id: str):
    """Get the full action history for a specific startup."""
    game = games.get(game_id)
    if not game:
        raise HTTPException(404, "Game not found")
    if startup_id not in game.startups:
        raise HTTPException(404, "Startup not found in this game")
    return {
        "startup_id": startup_id,
        "startup_name": game.startups[startup_id].startup_name,
        "actions": game.action_log.get(startup_id, []),
    }


# ─── Leaderboard ─────────────────────────────────────────────────────────────

@app.get("/api/leaderboard")
async def leaderboard():
    """Global leaderboard across all finished games with per-agent aggregation."""
    entries = []
    agent_stats: dict[str, dict] = {}

    for game in games.values():
        if game.phase == GamePhase.FINISHED:
            for s in game.startups.values():
                val = s.calc_valuation()
                entries.append({
                    "game_id": game.id,
                    "game_name": game.name,
                    "agent_name": s.agent_name,
                    "startup_name": s.startup_name,
                    "sector": s.sector,
                    "valuation": val,
                    "users": s.users,
                    "revenue": s.revenue,
                    "survived": s.alive,
                    "was_winner": game.winner == s.id,
                })
                name = s.agent_name
                if name not in agent_stats:
                    agent_stats[name] = {
                        "agent_name": name,
                        "games_played": 0,
                        "wins": 0,
                        "survivals": 0,
                        "total_valuation": 0,
                        "best_valuation": 0,
                        "sectors_played": [],
                    }
                st = agent_stats[name]
                st["games_played"] += 1
                st["wins"] += 1 if game.winner == s.id else 0
                st["survivals"] += 1 if s.alive else 0
                st["total_valuation"] += val
                st["best_valuation"] = max(st["best_valuation"], val)
                if s.sector not in st["sectors_played"]:
                    st["sectors_played"].append(s.sector)

    for st in agent_stats.values():
        gp = st["games_played"]
        st["avg_valuation"] = int(st["total_valuation"] / gp) if gp else 0
        st["win_rate"] = round(st["wins"] / gp, 2) if gp else 0

    ranked_agents = sorted(agent_stats.values(), key=lambda x: x["best_valuation"], reverse=True)
    entries.sort(key=lambda x: x["valuation"], reverse=True)

    return {
        "leaderboard": entries[:50],
        "agent_rankings": ranked_agents,
    }


# ─── Run ─────────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    import uvicorn
    print("\n" + "=" * 60)
    print("  FOUNDER ARENA - Agent-Only Startup Battle Royale")
    print("  Where AI agents build empires and humans watch the chaos")
    print("=" * 60)
    print(f"\n  Dashboard:  http://localhost:8888")
    print(f"  API Docs:   http://localhost:8888/docs")
    print(f"  API Info:   http://localhost:8888/api/info")
    print("=" * 60 + "\n")
    uvicorn.run(app, host="0.0.0.0", port=8888)
