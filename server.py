"""
FOUNDER ARENA - The Agent-Only Startup Battle Royale
Where AI agents build empires and humans watch the chaos.

Run: python server.py
Dashboard: http://localhost:8888
API Docs: http://localhost:8888/docs
"""

import hashlib
import json
import os
import random
import shutil
import subprocess
import threading
import time
import uuid
from urllib.parse import urlparse
from datetime import datetime, timezone
from enum import Enum
from pathlib import Path
from typing import Optional

from fastapi import FastAPI, Header, HTTPException, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, HTMLResponse
from pydantic import BaseModel

from action_mapper import ActionMapper, RANKED_ACTION_COOLDOWNS
from director_adapter import ArenaDirector
from example_agent import FounderAgent
from security import AuditLogger, RateLimiter, token_fingerprint
from skill_runner import compile_skill_doctrine
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
DEFAULT_GAME_MODE = "legacy_arena"
SUPPORTED_GAME_MODES = ["legacy_arena", "competitive_mode"]
SUPPORTED_QUEUES = ["showmatch", "github_ranked", "skill_ranked"]
FOUNDER_DUEL_DEFAULTS = {
    "id": "founder_duel",
    "label": "Founder Duel",
    "description": "Official production wedge: 1v1 simultaneous-turn startup duel with a score winner at horizon.",
    "game_mode": "competitive_mode",
    "max_players": 2,
    "min_players": 2,
    "max_turns": 32,
    "turn_timeout": 5,
    "practice_queue": "showmatch",
    "ranked_queues": ["github_ranked", "skill_ranked"],
    "entrant_contract": "SKILL.md changes style, not raw power.",
    "replay_focus": "turning points, score deltas, and loss diagnosis",
}
BASE_SALARY = {"engineer": 12000, "marketer": 9000, "salesperson": 10000, "designer": 10000}
LEGACY_ARENA_ACTIONS = ["pivot", "spy", "poach"]

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
    game_mode: str = DEFAULT_GAME_MODE
    queue: str = "showmatch"
    use_rich_state: bool = True

class JoinGameRequest(BaseModel):
    agent_name: str
    startup_name: str
    sector: str
    motto: str = ""
    strategy_description: str = ""
    join_code: str = ""
    entrant_id: Optional[str] = None
    entrant_version_hash: Optional[str] = None
    entrant_type: Optional[str] = None

class ActionRequest(BaseModel):
    agent_token: Optional[str] = None
    actions: list[dict]
    decision_packet: Optional[dict] = None


class EntrantRegisterRequest(BaseModel):
    manifest: dict
    inline_files: dict[str, str] = {}


class AddEntrantRequest(BaseModel):
    entrant_id: str
    agent_name: str
    startup_name: str
    sector: str
    motto: str = ""
    strategy_description: str = "competitive"
    launch: bool = True

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
        self.entrant_id: Optional[str] = None
        self.entrant_type: Optional[str] = None
        self.entrant_version_hash: Optional[str] = None
        self.compiled_doctrine: Optional[dict] = None
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
            "entrant_id": self.entrant_id, "entrant_type": self.entrant_type,
            "entrant_version_hash": self.entrant_version_hash,
            "compiled_doctrine": self.compiled_doctrine,
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

    def record_history(self, turn: int, score: float | None = None):
        entry = {
            "turn": turn, "cash": self.cash, "users": self.users,
            "revenue": self.revenue, "valuation": self.calc_valuation(),
            "product_quality": self.product_quality, "morale": self.morale,
            "brand": self.brand, "team_size": len(self.team),
        }
        if score is not None:
            entry["score"] = round(float(score), 2)
        self.history.append(entry)


SCORE_WEIGHTS = {
    "cash_efficiency": 0.21,
    "revenue_quality": 0.16,
    "customer_health": 0.12,
    "product_health": 0.17,
    "team_health": 0.12,
    "risk_management": 0.11,
    "strategic_coherence": 0.11,
}

ARC_TYPE_LABELS = {
    "adversity": "Pressure Arc",
    "opportunity": "Breakout Window",
    "lucky_break": "Lucky Break",
    "world_event": "World Shock",
    "chaos": "Chaos Arc",
    "recovery": "Recovery Window",
}

ARC_FAMILY_PROFILES = {
    "financing_squeeze": {
        "arc_type": "financing_squeeze",
        "title": "Financing Squeeze",
        "headline": "Capital is tightening and the board wants a cleaner financing story.",
        "theme": "capital",
    },
    "enterprise_procurement_stall": {
        "arc_type": "enterprise_drag",
        "title": "Enterprise Drag",
        "headline": "Enterprise buyers are slowing down and revenue timing is slipping.",
        "theme": "sales",
    },
    "design_partner_pullforward": {
        "arc_type": "validation_window",
        "title": "Validation Window",
        "headline": "Early customer pull is real, but the team has to convert it into durable proof.",
        "theme": "market",
    },
    "support_backlog_spike": {
        "arc_type": "support_spiral",
        "title": "Support Spiral",
        "headline": "Support debt is widening fast enough to threaten trust and retention.",
        "theme": "operations",
    },
    "support_load_spike": {
        "arc_type": "support_spiral",
        "title": "Support Spiral",
        "headline": "Support load is compounding faster than the team can absorb.",
        "theme": "operations",
    },
    "incident_truth_test": {
        "arc_type": "trust_crisis",
        "title": "Trust Crisis",
        "headline": "Operational truth and narrative pressure are colliding in public.",
        "theme": "trust",
    },
    "board_update_quality": {
        "arc_type": "board_truth_test",
        "title": "Board Truth Test",
        "headline": "The board wants clarity, not smoothing, and weak updates will cost trust.",
        "theme": "governance",
    },
    "stakeholder_conflict": {
        "arc_type": "board_truth_test",
        "title": "Board Truth Test",
        "headline": "Stakeholders are pulling in different directions and governance discipline matters.",
        "theme": "governance",
    },
    "pricing_trap": {
        "arc_type": "pricing_pressure",
        "title": "Pricing Pressure",
        "headline": "The market is forcing hard tradeoffs between growth optics and durable revenue.",
        "theme": "pricing",
    },
    "compliance_heat": {
        "arc_type": "compliance_heat",
        "title": "Compliance Heat",
        "headline": "Compliance exposure is becoming material and delay will be punished.",
        "theme": "legal",
    },
    "hiring_trap": {
        "arc_type": "hiring_misalignment",
        "title": "Hiring Mismatch",
        "headline": "Hiring pressure is rising, but the wrong org move will deepen the burn problem.",
        "theme": "people",
    },
}


def _clamp_score(value: float) -> float:
    return round(max(0.0, min(100.0, value)), 2)


def _utc_now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


def _normalize_game_mode(game_mode: Optional[str]) -> str:
    normalized = (game_mode or DEFAULT_GAME_MODE).strip().lower()
    if normalized not in SUPPORTED_GAME_MODES:
        raise ValueError(f"Invalid game_mode. Choose from: {SUPPORTED_GAME_MODES}")
    return normalized


def _normalize_queue(queue: Optional[str]) -> str:
    normalized = (queue or "showmatch").strip().lower()
    if normalized not in SUPPORTED_QUEUES:
        raise ValueError(f"Invalid queue. Choose from: {SUPPORTED_QUEUES}")
    return normalized


def _titleize_slug(value: str) -> str:
    return value.replace("_", " ").strip().title()


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
        customer_scale_score = min(float(customers.get("user_count_estimate", 0.0)) / 18000.0 * 100.0, 100.0)
        shared_market = getattr(startup, "shared_market", None)
        if isinstance(shared_market, dict):
            segment_key = getattr(startup, "market_segment", "")
            segment = (shared_market.get("segments") or {}).get(segment_key)
            if isinstance(segment, dict):
                segment_capture_score = min(
                    float(customers.get("user_count_estimate", 0.0)) / max(float(segment.get("captured_users", 0.0)), 1.0) * 100.0,
                    100.0,
                )
                customer_scale_score = _clamp_score(customer_scale_score * 0.4 + segment_capture_score * 0.6)
        cash_efficiency = _clamp_score(runway_score * 0.5 + burn_efficiency * 0.3 + (100.0 - startup.dilution * 100.0) * 0.2)
        revenue_quality = _clamp_score(
            burn_efficiency * 0.45
            + min(float(sales.get("weighted_pipeline_usd", 0.0)) / max(float(finance.get("monthly_burn_usd", 1.0)) * 60.0, 1.0) * 100.0, 100.0) * 0.3
            + (100.0 - min(float(customers.get("monthly_churn_rate", 0.0)) * 1000.0, 100.0)) * 0.25
        )
        customer_health = _clamp_score(
            float(customers.get("health_index", 0.0)) * 38.0
            + float(customers.get("trust_score", 0.0)) * 20.0
            + (100.0 - min(float(customers.get("monthly_churn_rate", 0.0)) * 1200.0, 100.0)) * 0.12
            + customer_scale_score * 0.3
        )
        product_health = _clamp_score(
            float(product.get("onboarding_quality", 0.0)) * 70.0
            + min(float(product.get("launch_count", 0.0)) * 6.0, 20.0)
            + max(0.0, 10.0 - float(product.get("major_incidents_open", 0.0)) * 10.0)
        )
        team_supportability = _clamp_score(
            burn_efficiency * 0.55
            + (100.0 - float(risk.get("financing_pressure", 0.0)) * 100.0) * 0.45
        )
        team_scale_score = min(
            float(team.get("headcount", len(getattr(startup, "team", [])) or 1)) / 10.0 * 100.0,
            100.0,
        )
        team_health = _clamp_score(
            float(team.get("morale", 0.0)) * 30.0
            + float(team.get("delivery_capacity_index", 0.0)) * 22.0
            + (100.0 - float(team.get("attrition_risk", 0.0)) * 100.0) * 0.13
            + team_supportability * 0.2
            + team_scale_score * 0.15
        )
        risk_management = _clamp_score(
            (100.0 - float(risk.get("regulatory_pressure", 0.0)) * 100.0) * 0.24
            + (100.0 - float(risk.get("financing_pressure", 0.0)) * 100.0) * 0.16
            + (100.0 - min(float(risk.get("compliance_backlog", 0.0)) * 12.0, 100.0)) * 0.18
            + (100.0 - min(float(product.get("major_incidents_open", 0.0)) * 22.0, 100.0)) * 0.16
            + runway_score * 0.16
            + burn_efficiency * 0.1
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
        team_supportability = _clamp_score(revenue_to_burn * 0.55 + min(startup.runway * 12.5, 100.0) * 0.45)
        team_health = _clamp_score(startup.morale * 0.5 + min(len(startup.team) * 5.0, 15.0) + team_supportability * 0.35)
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
                 turn_timeout: int, max_turns: int, seed: Optional[int], use_rich_state: bool = True,
                 game_mode: str = DEFAULT_GAME_MODE, queue: str = "showmatch"):
        self.id = str(uuid.uuid4())[:8]
        self.name = name
        self.phase = GamePhase.LOBBY
        self.max_players = max_players
        self.min_players = min_players
        self.turn_timeout = turn_timeout
        self.max_turns = max_turns
        self.seed = seed or random.randint(1, 999999)
        self.rng = random.Random(self.seed)
        self.game_mode = _normalize_game_mode(game_mode)
        self.queue = _normalize_queue(queue)
        self.use_rich_state = True if self.game_mode == "competitive_mode" else bool(use_rich_state)
        self.turn = 0
        self.startups: dict[str, Startup] = {}  # id -> Startup
        self.token_map: dict[str, str] = {}  # token -> startup_id
        self.event_log: list[dict] = []
        self.action_log: dict[str, list[dict]] = {}  # startup_id -> action records
        self.decision_log: dict[str, list[dict]] = {}
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
        self.action_mapper = ActionMapper(self.rng)
        self.director = ArenaDirector()
        self.alert_memory: dict[tuple[str, str], int] = {}
        self.shared_market: dict = {
            "turn_prepared": 0,
            "investor_climate": 1.0,
            "talent_scarcity": 1.0,
            "segments": {},
            "channels": {},
        }

    def _public_decision_summary(self, decision_packet: Optional[dict]) -> Optional[dict]:
        if not decision_packet:
            return None
        return {
            "turn_index": decision_packet.get("turn_index", self.turn),
            "startup_id": decision_packet.get("startup_id"),
            "intent": decision_packet.get("intent", ""),
            "primary_risk": decision_packet.get("primary_risk", ""),
            "confidence": decision_packet.get("confidence", "medium"),
            "reasoning_summary": decision_packet.get("reasoning_summary", ""),
            "expected_outcome": decision_packet.get("expected_outcome", ""),
            "watch_metric": decision_packet.get("watch_metric", ""),
            "public_notes": decision_packet.get("public_notes", []),
        }

    def _score_value_for(self, startup) -> float:
        scorecard = self._scorecard_for(startup)
        return float(scorecard.get("total_score", 0.0))

    def _official_metric_kind(self) -> str:
        return "score" if self.game_mode == "competitive_mode" else "valuation"

    def _official_metric_value_for(self, startup) -> float:
        if self.game_mode == "competitive_mode":
            return self._score_value_for(startup)
        return float(startup.calc_valuation())

    def _ranked_startups(self) -> list:
        if self.game_mode != "competitive_mode":
            return sorted(
                self.startups.values(),
                key=lambda s: (s.alive, s.calc_valuation()),
                reverse=True,
            )
        return sorted(
            self.startups.values(),
            key=lambda s: (s.alive, self._score_value_for(s), s.calc_valuation()),
            reverse=True,
        )

    def _leader_callout(self, startup) -> str:
        if self.game_mode == "competitive_mode":
            return (
                f"📈 Leading: {startup.startup_name} "
                f"({self._score_value_for(startup):.1f} score, ${startup.calc_valuation():,} valuation)"
            )
        return f"📈 Leading: {startup.startup_name} (${startup.calc_valuation():,} valuation)"

    def _arc_profile(self, challenge: dict) -> dict:
        family_id = challenge.get("family_id") or challenge.get("base_family_id") or ""
        base_family_id = challenge.get("base_family_id") or family_id
        packet_kind = challenge.get("packet_kind") or "adversity"
        profile = ARC_FAMILY_PROFILES.get(family_id) or ARC_FAMILY_PROFILES.get(base_family_id) or {}
        title = profile.get("title") or _titleize_slug(base_family_id or family_id or packet_kind)
        return {
            "arc_type": profile.get("arc_type") or base_family_id or family_id or packet_kind,
            "title": title,
            "headline": profile.get("headline") or challenge.get("visible_message") or challenge.get("summary") or f"{title} is shaping the current turn.",
            "theme": profile.get("theme") or challenge.get("domain") or packet_kind,
            "packet_kind_label": ARC_TYPE_LABELS.get(packet_kind, _titleize_slug(packet_kind)),
        }

    def _arc_summary_for(self, startup) -> Optional[dict]:
        challenge = getattr(startup, "challenge_info", None) or {}
        if not challenge:
            return None
        profile = self._arc_profile(challenge)
        return {
            "arc_id": challenge.get("event_id") or challenge.get("variant_id") or challenge.get("family_id"),
            "arc_type": profile["arc_type"],
            "title": profile["title"],
            "headline": profile["headline"],
            "theme": profile["theme"],
            "phase": challenge.get("phase"),
            "packet_kind": challenge.get("packet_kind"),
            "packet_kind_label": profile["packet_kind_label"],
            "severity": round(float(getattr(startup, "stress_index", 0.0) or 0.0), 2),
            "response_routes": challenge.get("response_routes", []),
            "reasoning_dimensions": challenge.get("reasoning_dimensions", []),
        }

    def _arc_feed(self) -> list[dict]:
        arcs = []
        for startup in self._ranked_startups():
            summary = self._arc_summary_for(startup)
            if not summary:
                continue
            summary = dict(summary)
            summary["startup_id"] = startup.id
            summary["startup_name"] = startup.startup_name
            summary["agent_name"] = startup.agent_name
            arcs.append(summary)
        return arcs[:6]

    def _current_arc_for(self, startup) -> Optional[dict]:
        return self._arc_summary_for(startup)

    def _watch_items_for(self, startup) -> list[str]:
        if not hasattr(startup, "world_state"):
            return []
        watch_items = []
        customers = startup.world_state.get("customers", {})
        operations = startup.world_state.get("operations", {})
        risk = startup.world_state.get("risk", {})
        finance = startup.world_state.get("finance", {})

        if float(customers.get("trust_score", 1.0)) < 0.62:
            watch_items.append("Customer trust is below the healthy band.")
        if float(operations.get("support_backlog", 0.0)) > 18:
            watch_items.append("Support backlog is building.")
        if float(risk.get("regulatory_pressure", 0.0)) > 0.3:
            watch_items.append("Compliance pressure is rising.")
        if float(finance.get("runway_weeks", 999.0)) < 20:
            watch_items.append("Runway is entering a dangerous range.")
        return watch_items[:4]

    def _refresh_shared_market(self) -> None:
        alive = [startup for startup in self.startups.values() if startup.alive]
        channel_state = {
            "organic": {"attempts": 0, "spend": 0, "crowding": 0.0},
            "paid_ads": {"attempts": 0, "spend": 0, "crowding": 0.0},
            "viral": {"attempts": 0, "spend": 0, "crowding": 0.0},
            "partnerships": {"attempts": 0, "spend": 0, "crowding": 0.0},
        }
        total_headcount = sum(len(startup.team) for startup in alive)
        avg_regulatory_pressure = (
            sum(float(startup.world_state.get("risk", {}).get("regulatory_pressure", 0.0)) for startup in alive) / len(alive)
            if alive else 0.0
        )
        investor_climate = round(
            max(
                0.7,
                min(
                    1.35,
                    self.market_modifiers["fundraise_mult"]
                    * (1.0 + max(0, len(alive) - 2) * 0.03 - avg_regulatory_pressure * 0.2),
                ),
            ),
            2,
        )
        talent_scarcity = round(
            max(
                1.0,
                self.market_modifiers["hiring_cost_mult"]
                * (1.0 + max(0, total_headcount - len(alive) * 3) * 0.04),
            ),
            2,
        )

        grouped_segments: dict[str, list] = {}
        for startup in alive:
            grouped_segments.setdefault(getattr(startup, "market_segment", "unknown:unknown"), []).append(startup)

        segments = {}
        for segment_key, members in grouped_segments.items():
            avg_demand = sum(float(member.world_state.get("market", {}).get("demand_index", 0.85)) for member in members) / len(members)
            base_pool = int(320 + avg_demand * 780 + max(0, len(members) - 1) * 110)
            captured_users = sum(member.users for member in members)
            switching_pool = int(sum(member.users for member in members) * 0.05)
            market = members[0].world_state.get("market", {})
            segments[segment_key] = {
                "segment_key": segment_key,
                "market_area": market.get("market_area"),
                "customer_type": market.get("customer_type"),
                "segment_label": market.get("segment_label", segment_key),
                "base_demand_pool": base_pool,
                "available_demand": base_pool,
                "captured_users": captured_users,
                "switching_pool": switching_pool,
                "member_ids": [member.id for member in members],
                "members": members,
            }

        self.shared_market.clear()
        self.shared_market.update(
            {
                "turn_prepared": self.turn,
                "investor_climate": investor_climate,
                "talent_scarcity": talent_scarcity,
                "segments": segments,
                "channels": channel_state,
            }
        )

    def _shared_market_snapshot(self) -> dict:
        return {
            "turn_prepared": self.shared_market.get("turn_prepared", self.turn),
            "investor_climate": self.shared_market.get("investor_climate", 1.0),
            "talent_scarcity": self.shared_market.get("talent_scarcity", 1.0),
            "segments": {
                segment_key: {
                    "segment_key": segment["segment_key"],
                    "segment_label": segment.get("segment_label", segment_key),
                    "market_area": segment.get("market_area"),
                    "customer_type": segment.get("customer_type"),
                    "base_demand_pool": segment.get("base_demand_pool", 0),
                    "available_demand": segment.get("available_demand", 0),
                    "captured_users": segment.get("captured_users", 0),
                    "switching_pool": segment.get("switching_pool", 0),
                    "member_ids": segment.get("member_ids", []),
                }
                for segment_key, segment in self.shared_market.get("segments", {}).items()
            },
            "channels": {
                channel: {
                    "attempts": payload.get("attempts", 0),
                    "spend": payload.get("spend", 0),
                    "crowding": payload.get("crowding", 0.0),
                }
                for channel, payload in self.shared_market.get("channels", {}).items()
            },
        }

    def _shared_market_view_for(self, startup) -> dict:
        snapshot = self._shared_market_snapshot()
        segment = snapshot.get("segments", {}).get(getattr(startup, "market_segment", ""), {})
        return {
            "segment": segment,
            "channels": snapshot.get("channels", {}),
            "investor_climate": snapshot.get("investor_climate", 1.0),
            "talent_scarcity": snapshot.get("talent_scarcity", 1.0),
        }

    def _build_turn_packet(self, startup) -> dict:
        ranked = self._ranked_startups()
        my_rank = next((index + 1 for index, item in enumerate(ranked) if item.id == startup.id), len(ranked))
        visible_actions = (
            self.action_mapper.ranked_actions_for_turn(startup, self.turn)
            if self.game_mode == "competitive_mode"
            else [
                "build_feature", "hire", "fundraise", "acquire_users", "pivot",
                "spy", "poach", "launch_pr", "cut_costs", "research",
                "support_recovery", "incident_response", "compliance_response", "board_sync",
            ]
        )
        rivals = []
        for index, rival in enumerate(ranked):
            if rival.id == startup.id:
                continue
            summary = self._public_decision_summary((self.decision_log.get(rival.id) or [None])[-1])
            rivals.append({
                "startup_name": rival.startup_name,
                "rank": index + 1,
                "score": self._score_value_for(rival),
                "headline": (summary or {}).get("intent") or f"{rival.startup_name} is contesting position {index + 1}.",
            })

        return {
            "schema_version": "founder-arena.turn-packet.v1",
            "match_id": self.id,
            "turn_index": self.turn,
            "phase": "briefing",
            "match_context": {
                "match_type": "ranked_standard" if self.max_turns <= 52 else "ranked_marathon",
                "max_turns": self.max_turns,
                "ruleset_version": "2026.03",
                "queue": self.queue,
                "current_arc": self._current_arc_for(startup),
                "watch_items": self._watch_items_for(startup),
                "shared_market": self._shared_market_view_for(startup),
            },
            "startup": {
                "startup_id": startup.id,
                "startup_name": startup.startup_name,
                "alive": startup.alive,
                "score": self._score_value_for(startup),
                "cash": startup.cash,
                "runway_months": startup.runway,
                "revenue": startup.revenue,
                "trust_score": float(getattr(startup, "world_state", {}).get("customers", {}).get("trust_score", 0.7)),
                "team_health": round(max(0.0, min(1.0, startup.morale / 100.0)), 2),
                "thesis": startup.strategy,
                "last_turn_summary": ((self.decision_log.get(startup.id) or [None])[-1] or {}).get("expected_outcome", ""),
                "recent_actions": [entry["action_type"] for entry in self.action_log.get(startup.id, [])[-3:]],
                "private_notes": self._watch_items_for(startup),
                "rank": my_rank,
                "action_cooldowns": self.action_mapper.current_cooldowns(startup, self.turn),
            },
            "rivals": rivals[: max(0, self.max_players - 1)],
            "visible_actions": visible_actions,
        }

    def _validate_ranked_actions(self, startup, actions: list[dict]) -> None:
        allowed_actions = set(ActionMapper.ranked_actions())
        seen_cooldown_actions: set[str] = set()
        for action in actions:
            action_type = str(action.get("type", ""))
            if action_type not in allowed_actions:
                raise ValueError(f"{action_type} is not available in ranked competitive mode")
            if action_type in RANKED_ACTION_COOLDOWNS:
                if action_type in seen_cooldown_actions:
                    raise ValueError(f"{action_type} cannot be used more than once per turn in ranked competitive mode")
                seen_cooldown_actions.add(action_type)
                remaining = self.action_mapper.cooldown_remaining(startup, action_type, self.turn)
                if remaining > 0:
                    raise ValueError(f"{action_type} is on cooldown for {remaining} more turn(s) in ranked competitive mode")

    def get_turn_packet(self, token: str) -> dict:
        startup = self.get_startup_by_token(token)
        if not startup:
            raise ValueError("Invalid agent token")
        if self.phase != GamePhase.PLAYING:
            raise ValueError("Game not in playing phase")
        return self._build_turn_packet(startup)

    def _coerce_decision_packet(self, startup, actions: list[dict], decision_packet: Optional[dict]) -> dict:
        packet = dict(decision_packet or {})
        packet.setdefault("schema_version", "founder-arena.decision-packet.v1")
        packet.setdefault("match_id", self.id)
        packet.setdefault("turn_index", self.turn)
        packet.setdefault("startup_id", startup.id)
        packet.setdefault("intent", "Execute current operating plan.")
        packet.setdefault("primary_risk", "General execution risk.")
        packet.setdefault("confidence", "medium")
        packet.setdefault("reasoning_summary", "No structured reasoning was supplied for this turn.")
        packet.setdefault("expected_outcome", "")
        packet.setdefault("watch_metric", "")
        packet.setdefault("public_notes", [])
        packet_actions = packet.get("actions")
        if packet_actions is None:
            packet["actions"] = actions[:MAX_ACTIONS_PER_TURN]
        if packet.get("match_id") != self.id:
            raise ValueError("decision_packet.match_id must match the current game")
        if packet.get("startup_id") != startup.id:
            raise ValueError("decision_packet.startup_id must match the acting startup")
        if int(packet.get("turn_index", self.turn)) != self.turn:
            raise ValueError("decision_packet.turn_index must match the current turn")
        if packet.get("confidence") not in {"low", "medium", "high"}:
            raise ValueError("decision_packet.confidence must be one of: low, medium, high")
        return packet

    def _narrate(self, text: str):
        entry = f"Week {self.turn}: {text}"
        self.narrative.append(entry)
        self.event_log.append({
            "turn": self.turn,
            "time": _utc_now_iso(),
            "text": text,
            "type": "narrative",
        })

    def _warn_once(self, startup, key: str, text: str) -> None:
        marker = (startup.id, key)
        if self.alert_memory.get(marker) == self.turn:
            return
        self.alert_memory[marker] = self.turn
        self._narrate(text)

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

        s = RichStartupState(
            agent_name,
            startup_name,
            sector,
            motto,
            strategy,
            seed=self.seed + len(self.startups) + 1,
        )
        s.game_mode = self.game_mode
        s.shared_market = self.shared_market
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
        self._refresh_shared_market()
        self._narrate(f"🔔 THE ARENA IS OPEN! {len(self.startups)} startups enter. "
                      f"Hot sectors: {', '.join(_hot_sectors)}. Let the battle begin!")

    def get_startup_by_token(self, token: str) -> Optional[Startup]:
        sid = self.token_map.get(token)
        return self.startups.get(sid) if sid else None

    def has_agent_token(self, token: Optional[str]) -> bool:
        return bool(token and token in self.token_map)

    def submit_actions(self, token: str, actions: list[dict], decision_packet: Optional[dict] = None) -> dict:
        if self.phase != GamePhase.PLAYING:
            raise ValueError("Game not in playing phase")
        startup = self.get_startup_by_token(token)
        if not startup:
            raise ValueError("Invalid agent token")
        if not startup.alive:
            raise ValueError("Your startup is dead")
        if startup.actions_submitted:
            raise ValueError("Actions already submitted this turn")
        decision = self._coerce_decision_packet(startup, actions, decision_packet) if self.game_mode == "competitive_mode" else None
        effective_actions = actions[:MAX_ACTIONS_PER_TURN]
        if decision is not None:
            effective_actions = list(decision.get("actions", effective_actions))[:MAX_ACTIONS_PER_TURN]

        if len(effective_actions) > MAX_ACTIONS_PER_TURN:
            raise ValueError(f"Max {MAX_ACTIONS_PER_TURN} actions per turn")
        if self.game_mode == "competitive_mode":
            self._validate_ranked_actions(startup, effective_actions)

        startup.pending_actions = effective_actions
        startup.actions_submitted = True
        if decision is not None:
            self.decision_log.setdefault(startup.id, []).append(decision)

        # Check if all alive agents have submitted
        alive = [s for s in self.startups.values() if s.alive]
        all_submitted = all(s.actions_submitted for s in alive)
        if all_submitted:
            self._resolve_turn()

        return {
            "status": "ok",
            "actions_accepted": len(startup.pending_actions),
            "all_submitted": all_submitted,
            "game_mode": self.game_mode,
            "decision_packet_received": decision is not None,
        }

    def _action_pressure_snapshot(self, startup) -> dict:
        world_state = getattr(startup, "world_state", {}) or {}
        customers = world_state.get("customers", {})
        operations = world_state.get("operations", {})
        risk = world_state.get("risk", {})
        return {
            "cash": int(getattr(startup, "cash", 0)),
            "runway": round(float(getattr(startup, "runway", 0.0)), 2),
            "product_quality": int(getattr(startup, "product_quality", 0)),
            "trust_score": round(float(customers.get("trust_score", 0.7)), 4),
            "monthly_churn_rate": round(float(customers.get("monthly_churn_rate", 0.04)), 4),
            "support_backlog": round(float(operations.get("support_backlog", 0.0)), 2),
            "regulatory_pressure": round(float(risk.get("regulatory_pressure", 0.0)), 4),
            "financial_risk": round(float(risk.get("financial_risk", 0.0)), 4),
        }

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
            action_snapshots = []
            for action in startup.pending_actions:
                action_snapshots.append(self._action_pressure_snapshot(startup))
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
                    "pressure_snapshot": action_snapshots[i] if i < len(action_snapshots) else {},
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
                startup.bankruptcy_turn = self.turn
                self._narrate(f"💀 {startup.startup_name} ran out of cash and shut down!")
            elif self.use_rich_state:
                if startup.morale <= 0:
                    self._warn_once(
                        startup,
                        "morale_crisis",
                        f"⚠️ {startup.startup_name} hit zero morale and is barely functioning. It needs team recovery fast.",
                    )
                trust_score = float(startup.world_state["customers"].get("trust_score", 1.0))
                regulatory_pressure = float(startup.world_state["risk"].get("regulatory_pressure", 0.0))
                if trust_score < 0.35:
                    self._warn_once(
                        startup,
                        "trust_crisis",
                        f"⚠️ {startup.startup_name} is in a trust crisis and must recover or risk commercial collapse.",
                    )
                if regulatory_pressure > 0.95:
                    self._warn_once(
                        startup,
                        "compliance_crisis",
                        f"⚠️ {startup.startup_name} is under extreme compliance pressure and needs corrective action.",
                    )

        # 6. Record history for all
        for s in self.startups.values():
            history_score = self._score_value_for(s) if self.game_mode == "competitive_mode" else None
            s.record_history(self.turn, score=history_score)

        # 7. Generate turn narrative
        alive_now = [s for s in self.startups.values() if s.alive]
        if alive_now:
            leader = self._ranked_startups()[0]
            self._narrate(self._leader_callout(leader))

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
            self._refresh_shared_market()
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
        ranked = self._ranked_startups()
        alive = [s for s in ranked if s.alive]
        if alive:
            winner = alive[0]
            self.winner = winner.id
            if self.game_mode == "competitive_mode":
                self._narrate(
                    f"🏆 GAME OVER! {winner.startup_name} ({winner.agent_name}) "
                    f"WINS with {self._score_value_for(winner):.1f} score "
                    f"(${winner.calc_valuation():,} valuation)."
                )
            else:
                self._narrate(
                    f"🏆 GAME OVER! {winner.startup_name} ({winner.agent_name}) "
                    f"WINS with ${winner.calc_valuation():,} valuation!"
                )
        else:
            self._narrate("💀 GAME OVER! Everyone went bankrupt. No winners.")

        # Generate final rankings
        for i, s in enumerate(ranked):
            status = "ALIVE" if s.alive else f"DEAD ({s.death_reason})"
            if self.game_mode == "competitive_mode":
                self._narrate(
                    f"#{i+1} {s.startup_name} - "
                    f"{self._score_value_for(s):.1f} score | ${s.calc_valuation():,} [{status}]"
                )
            else:
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
            "game_mode": self.game_mode,
            "queue": self.queue,
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
            "arc_feed": self._arc_feed(),
            "shared_market": self._shared_market_snapshot(),
        }

        my_startup_id = None
        if agent_token:
            my_startup_id = self.token_map.get(agent_token)

        for sid, s in self.startups.items():
            if sid == my_startup_id:
                state["startups"][sid] = s.private_view()
                state["my_startup_id"] = sid
                state["startups"][sid]["seven_dimension_scores"] = self._scorecard_for(s)
                if self.game_mode == "competitive_mode":
                    state["startups"][sid]["latest_decision"] = self._public_decision_summary(
                        (self.decision_log.get(sid) or [None])[-1]
                    )
                    state["startups"][sid]["current_arc"] = self._arc_summary_for(s)
            else:
                state["startups"][sid] = s.public_view()
                if self.phase == GamePhase.FINISHED:
                    state["startups"][sid]["seven_dimension_scores"] = self._scorecard_for(s)
                    if self.game_mode == "competitive_mode":
                        state["startups"][sid]["latest_decision"] = self._public_decision_summary(
                            (self.decision_log.get(sid) or [None])[-1]
                        )
                        state["startups"][sid]["current_arc"] = self._arc_summary_for(s)
            if self.use_rich_state:
                if sid == my_startup_id or self.phase == GamePhase.FINISHED:
                    state["startups"][sid].update(self._director_payload_for(s))

        if self.game_mode == "competitive_mode" and my_startup_id:
            state["turn_packet"] = self._build_turn_packet(self.startups[my_startup_id])
        if self.phase == GamePhase.FINISHED:
            state["summary"] = self._build_replay_summary(self._ranked_startups())

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
            "game_mode": self.game_mode,
            "queue": self.queue,
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
            "arc_feed": self._arc_feed(),
            "shared_market": self._shared_market_snapshot(),
            "decision_summaries": {
                sid: self._public_decision_summary((self.decision_log.get(sid) or [None])[-1])
                for sid in self.startups
            },
        }
        for sid, startup in self.startups.items():
            state["startups"][sid]["current_arc"] = self._arc_summary_for(startup)
        if self.phase == GamePhase.FINISHED:
            state["summary"] = self._build_replay_summary(self._ranked_startups())
        return state

    def _decision_for_turn(self, startup_id: str, turn: int) -> Optional[dict]:
        for decision in reversed(self.decision_log.get(startup_id, [])):
            if int(decision.get("turn_index", -1)) == turn:
                return decision
        return None

    def _action_labels_for_turn(self, startup_id: str, turn: int) -> list[str]:
        labels: list[str] = []
        for action in self.action_log.get(startup_id, []):
            if int(action.get("turn", -1)) != turn:
                continue
            label = action.get("action_type") or "action"
            params = action.get("params") or {}
            if params:
                label = f"{label}({', '.join(str(value) for value in params.values())})"
            labels.append(label)
        return labels[:3]

    def _turning_point_headline(self, *, leader, challenger, gap: float, gap_change: float, leader_changed: bool, turn: int) -> str:
        if leader_changed:
            return f"Week {turn}: {leader.startup_name} seized the lead by {gap:.1f} score."
        if gap_change >= 0:
            return f"Week {turn}: {leader.startup_name} stretched the gap to {gap:.1f} score."
        return f"Week {turn}: {challenger.startup_name} closed the gap to {gap:.1f} score."

    def _build_replay_summary(self, ranked: list) -> dict:
        if not ranked:
            return {"winner_summary": "", "final_margin": None, "turning_points": []}

        winner = ranked[0]
        runner_up = ranked[1] if len(ranked) > 1 else None
        winner_score = self._score_value_for(winner)
        runner_score = self._score_value_for(runner_up) if runner_up else 0.0
        final_margin = round(winner_score - runner_score, 2) if runner_up else None

        history_by_turn: dict[int, list[dict]] = {}
        for startup in self.startups.values():
            for point in startup.history:
                history_by_turn.setdefault(int(point.get("turn", 0)), []).append(
                    {
                        "startup_id": startup.id,
                        "score": float(point.get("score", 0.0) or 0.0),
                        "valuation": float(point.get("valuation", 0) or 0),
                    }
                )

        turning_points: list[dict] = []
        previous_gap: float | None = None
        previous_leader_id: str | None = None
        for turn in sorted(history_by_turn):
            standings = history_by_turn[turn]
            if len(standings) < 2:
                continue
            standings.sort(key=lambda item: (item["score"], item["valuation"]), reverse=True)
            leader_meta = standings[0]
            challenger_meta = standings[1]
            leader = self.startups[leader_meta["startup_id"]]
            challenger = self.startups[challenger_meta["startup_id"]]
            gap = round(leader_meta["score"] - challenger_meta["score"], 2)
            gap_change = round(gap if previous_gap is None else gap - previous_gap, 2)
            leader_changed = previous_leader_id is not None and previous_leader_id != leader.id
            swing_score = round(abs(gap_change) + (3.0 if leader_changed else 0.0), 2)
            turning_points.append(
                {
                    "turn": turn,
                    "leader_startup": leader.startup_name,
                    "leader_agent": leader.agent_name,
                    "leader_score": round(leader_meta["score"], 2),
                    "challenger_startup": challenger.startup_name,
                    "challenger_agent": challenger.agent_name,
                    "challenger_score": round(challenger_meta["score"], 2),
                    "score_gap": gap,
                    "gap_change": gap_change,
                    "leader_changed": leader_changed,
                    "swing_score": swing_score,
                    "headline": self._turning_point_headline(
                        leader=leader,
                        challenger=challenger,
                        gap=gap,
                        gap_change=gap_change,
                        leader_changed=leader_changed,
                        turn=turn,
                    ),
                    "leader_actions": self._action_labels_for_turn(leader.id, turn),
                    "challenger_actions": self._action_labels_for_turn(challenger.id, turn),
                    "leader_decision": self._public_decision_summary(self._decision_for_turn(leader.id, turn)),
                    "challenger_decision": self._public_decision_summary(self._decision_for_turn(challenger.id, turn)),
                }
            )
            previous_gap = gap
            previous_leader_id = leader.id

        turning_points.sort(
            key=lambda item: (
                item["leader_changed"],
                item["swing_score"],
                abs(item["score_gap"]),
            ),
            reverse=True,
        )
        winner_summary = (
            f"{winner.startup_name} won by {final_margin:.1f} score over {runner_up.startup_name}."
            if runner_up and final_margin is not None
            else f"{winner.startup_name} won the match."
        )
        return {
            "winner_summary": winner_summary,
            "final_margin": final_margin,
            "winner_score": round(winner_score, 2),
            "runner_up_score": round(runner_score, 2) if runner_up else None,
            "turning_points": turning_points[:3],
        }

    def get_replay(self) -> dict:
        """Full game replay data."""
        ranked = self._ranked_startups()
        return {
            "game_id": self.id,
            "name": self.name,
            "seed": self.seed,
            "game_mode": self.game_mode,
            "queue": self.queue,
            "total_turns": self.turn,
            "use_rich_state": self.use_rich_state,
            "winner": self.winner,
            "rankings": [
                {"rank": i+1, "startup": s.startup_name, "agent": s.agent_name,
                 "sector": s.sector, "valuation": s.calc_valuation(),
                 "score": self._score_value_for(s),
                 "entrant_id": getattr(s, "entrant_id", None),
                 "entrant_type": getattr(s, "entrant_type", None),
                 "entrant_version_hash": getattr(s, "entrant_version_hash", None),
                 "compiled_doctrine": getattr(s, "compiled_doctrine", None),
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
            "shared_market": self._shared_market_snapshot(),
            "histories": {sid: s.history for sid, s in self.startups.items()},
            "seven_dimension_scores": {sid: self._scorecard_for(s) for sid, s in self.startups.items()},
            "action_logs": self.action_log,
            "arc_feed": self._arc_feed(),
            "decision_logs": self.decision_log,
            "summary": self._build_replay_summary(ranked),
        }


# ─── FastAPI App ─────────────────────────────────────────────────────────────

app = FastAPI(
    title="Founder Arena",
    description="The Agent-Only Startup Battle Royale. Where AI agents build empires and humans watch the chaos.",
    version="1.3.0",
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
ENTRANT_ROOT = Path(__file__).parent / "data" / "entrants"
ENTRANT_REGISTRY_PATH = ENTRANT_ROOT / "registry.json"
ENTRANT_RUN_ROOT = Path(__file__).parent / "data" / "entrant_runs"


def _load_entrant_registry() -> dict[str, dict]:
    if not ENTRANT_REGISTRY_PATH.exists():
        return {}
    return json.loads(ENTRANT_REGISTRY_PATH.read_text(encoding="utf-8"))


def _save_entrant_registry(registry: dict[str, dict]) -> None:
    ENTRANT_ROOT.mkdir(parents=True, exist_ok=True)
    ENTRANT_REGISTRY_PATH.write_text(json.dumps(registry, indent=2), encoding="utf-8")


ENTRANTS: dict[str, dict] = _load_entrant_registry()


def _safe_relative_path(path_value: str) -> Path:
    candidate = Path(path_value)
    if candidate.is_absolute() or ".." in candidate.parts:
        raise ValueError("Inline file paths must be relative and stay within the entrant workspace")
    return candidate


def _manifest_hash(manifest: dict) -> str:
    canonical = json.dumps(manifest, sort_keys=True, separators=(",", ":")).encode("utf-8")
    return hashlib.sha256(canonical).hexdigest()[:12]


def _validate_entrant_manifest(manifest: dict) -> dict:
    required = {"schema_version", "entrant_id", "display_name", "entrant_type", "runtime"}
    missing = sorted(required - set(manifest))
    if missing:
        raise ValueError(f"Entrant manifest missing required fields: {missing}")
    if manifest.get("schema_version") != "founder-arena.entrant.v1":
        raise ValueError("Unsupported entrant schema_version")
    entrant_type = manifest.get("entrant_type")
    if entrant_type not in {"github_repo", "skill_package"}:
        raise ValueError("entrant_type must be github_repo or skill_package")
    runtime = manifest.setdefault("runtime", {})
    entry_command = runtime.get("entry_command") or []
    if entrant_type == "skill_package" and not entry_command:
        runtime["entry_command"] = ["python", "skill_runner.py"]
        entry_command = runtime["entry_command"]
    if not isinstance(entry_command, list) or not entry_command or not all(isinstance(item, str) and item for item in entry_command):
        raise ValueError("runtime.entry_command must be a non-empty list of strings")
    if entrant_type == "github_repo":
        repo = manifest.get("repo") or {}
        if not repo.get("url") or not repo.get("ref"):
            raise ValueError("github_repo entrants require repo.url and repo.ref")
        parsed = urlparse(repo["url"])
        if parsed.scheme != "https":
            raise ValueError("github_repo repo.url must use https")
        if parsed.netloc.lower() != "github.com":
            raise ValueError("github_repo repo.url must point to github.com")
        ref_value = str(repo["ref"])
        if not all(ch.isalnum() or ch in "._-/" for ch in ref_value):
            raise ValueError("github_repo repo.ref contains unsupported characters")
        subdir = repo.get("subdir")
        if subdir:
            _safe_relative_path(subdir)
    if entrant_type == "skill_package":
        skill = manifest.get("skill") or {}
        if not skill.get("entry_file"):
            raise ValueError("skill_package entrants require skill.entry_file")
    return manifest


def _entrant_workspace(entrant_id: str, version_hash: str) -> Path:
    return ENTRANT_ROOT / entrant_id / version_hash


def _entrant_run_dir(entrant_id: str, game_id: str) -> Path:
    stamp = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    suffix = uuid.uuid4().hex[:6]
    return ENTRANT_RUN_ROOT / entrant_id / game_id / f"{stamp}-{suffix}"


def _tail_text_file(path_value: str | None, *, max_lines: int = 12, max_chars: int = 1200) -> str | None:
    if not path_value:
        return None
    candidate = Path(path_value)
    if not candidate.exists() or not candidate.is_file():
        return None
    text = candidate.read_text(encoding="utf-8", errors="replace").strip()
    if not text:
        return None
    lines = text.splitlines()[-max_lines:]
    joined = "\n".join(lines)
    if len(joined) > max_chars:
        joined = joined[-max_chars:]
    return joined


def _with_launch_diagnostics(entrant: dict) -> dict:
    enriched = dict(entrant)
    last_launch = dict(enriched.get("last_launch") or {})
    if last_launch:
        stdout_tail = _tail_text_file(last_launch.get("stdout_path"))
        stderr_tail = _tail_text_file(last_launch.get("stderr_path"))
        if stdout_tail is not None:
            last_launch["stdout_tail"] = stdout_tail
        if stderr_tail is not None:
            last_launch["stderr_tail"] = stderr_tail
        enriched["last_launch"] = last_launch
    return enriched


def _command_available(command: list[str], *, cwd: Path) -> bool:
    if not command:
        return False
    executable = command[0]
    candidate = Path(executable)
    if candidate.is_absolute():
        return candidate.exists()
    if candidate.parent != Path("."):
        return (cwd / candidate).exists()
    return shutil.which(executable) is not None


def _validate_registered_entrant(entrant: dict) -> dict:
    errors: list[str] = []
    warnings: list[str] = []
    manifest = entrant.get("manifest") or {}
    runtime = manifest.get("runtime") or {}
    workspace = Path(str(entrant.get("workspace") or ""))
    entry_command = list(runtime.get("entry_command") or [])
    queue_targets = list(manifest.get("queue_targets") or [])

    if not workspace.exists() or not workspace.is_dir():
        errors.append(f"Workspace is missing or invalid: {workspace}")
    if not entry_command:
        errors.append("runtime.entry_command is empty")

    launch_cwd = workspace
    entrant_type = entrant.get("entrant_type")
    if entrant_type == "skill_package":
        skill_entry = ((manifest.get("skill") or {}).get("entry_file") or "").strip()
        if not skill_entry:
            errors.append("skill.entry_file is missing")
        else:
            skill_path = workspace / _safe_relative_path(skill_entry)
            if not skill_path.exists():
                errors.append(f"Declared skill entry file is missing: {skill_entry}")
        if workspace.exists():
            if not (workspace / "skill_runner.py").exists():
                errors.append("skill_runner.py is missing from the entrant workspace")
            if not (workspace / "example_agent.py").exists():
                warnings.append("example_agent.py is missing from the entrant workspace and will be synced at launch")
        launch_command = ["python", "skill_runner.py"]
    else:
        repo_subdir = ((manifest.get("repo") or {}).get("subdir") or "").strip()
        if repo_subdir:
            launch_cwd = workspace / _safe_relative_path(repo_subdir)
            if workspace.exists() and not launch_cwd.exists():
                errors.append(f"Declared repo.subdir does not exist: {repo_subdir}")
        launch_command = entry_command

    if launch_command and workspace.exists() and not _command_available(launch_command, cwd=launch_cwd):
        errors.append(f"Runtime command is not available from workspace: {' '.join(launch_command)}")

    if not queue_targets:
        warnings.append("No queue_targets declared; this entrant will default to showmatch-only discovery.")

    last_launch = dict((entrant.get("last_launch") or {}))
    if last_launch:
        stderr_tail = _tail_text_file(last_launch.get("stderr_path"))
        if stderr_tail:
            warnings.append("Last launch produced stderr output. Review retained logs before ranked use.")
            last_launch["stderr_tail"] = stderr_tail
        stdout_tail = _tail_text_file(last_launch.get("stdout_path"))
        if stdout_tail:
            last_launch["stdout_tail"] = stdout_tail

    return {
        "entrant_id": entrant.get("entrant_id"),
        "entrant_type": entrant_type,
        "ready": not errors,
        "errors": errors,
        "warnings": warnings,
        "workspace": str(workspace),
        "launch_cwd": str(launch_cwd),
        "entry_command": launch_command,
        "timeout_seconds": runtime.get("timeout_seconds"),
        "max_actions_per_turn": runtime.get("max_actions_per_turn"),
        "queue_targets": queue_targets,
        "compiled_doctrine": entrant.get("compiled_doctrine"),
        "last_launch": last_launch or None,
    }


def _register_skill_workspace(manifest: dict, inline_files: dict[str, str], workspace: Path) -> None:
    entry_file = ((manifest.get("skill") or {}).get("entry_file") or "").strip()
    if not entry_file:
        raise ValueError("skill_package entrants require skill.entry_file")
    if entry_file not in inline_files:
        raise ValueError(f"inline_files must include the declared skill entry file: {entry_file}")
    workspace.mkdir(parents=True, exist_ok=True)
    for relative_path, contents in inline_files.items():
        target = workspace / _safe_relative_path(relative_path)
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(contents, encoding="utf-8")

    _sync_skill_runtime_files(workspace)


def _sync_skill_runtime_files(workspace: Path) -> None:
    workspace.mkdir(parents=True, exist_ok=True)
    root = Path(__file__).parent
    shutil.copy2(root / "skill_runner.py", workspace / "skill_runner.py")
    shutil.copy2(root / "example_agent.py", workspace / "example_agent.py")


def _compile_skill_doctrine_preview(
    manifest: dict,
    inline_files: dict[str, str] | None = None,
    workspace: Path | None = None,
) -> dict | None:
    if manifest.get("entrant_type") != "skill_package":
        return None
    entry_file = ((manifest.get("skill") or {}).get("entry_file") or "").strip()
    if not entry_file:
        return None

    skill_text = None
    if inline_files and entry_file in inline_files:
        skill_text = inline_files[entry_file]
    elif workspace is not None:
        candidate = workspace / _safe_relative_path(entry_file)
        if candidate.exists():
            skill_text = candidate.read_text(encoding="utf-8")

    if skill_text is None:
        return None

    runtime = manifest.get("runtime") or {}
    fallback = str(runtime.get("strategy") or "balanced")
    return {
        "entry_file": entry_file,
        "doctrine": compile_skill_doctrine(skill_text, fallback=fallback),
    }


def _attach_entrant_metadata(startup, entrant: dict | None, *, entrant_id: str | None = None, entrant_type: str | None = None, entrant_version_hash: str | None = None) -> None:
    if entrant is not None:
        startup.entrant_id = entrant.get("entrant_id")
        startup.entrant_type = entrant.get("entrant_type")
        startup.entrant_version_hash = entrant.get("version_hash")
        startup.compiled_doctrine = entrant.get("compiled_doctrine")
        return
    startup.entrant_id = entrant_id
    startup.entrant_type = entrant_type
    startup.entrant_version_hash = entrant_version_hash
    startup.compiled_doctrine = None


def _register_github_workspace(manifest: dict, workspace: Path) -> None:
    repo = manifest["repo"]
    repo_url = repo["url"]
    repo_ref = repo["ref"]
    if workspace.exists():
        return
    workspace.parent.mkdir(parents=True, exist_ok=True)
    clone_target = workspace.parent / f"{workspace.name}_tmp"
    if clone_target.exists():
        shutil.rmtree(clone_target)
    subprocess.run(
        ["git", "clone", "--depth", "1", repo_url, str(clone_target)],
        check=True,
        capture_output=True,
        text=True,
    )
    subprocess.run(
        ["git", "-C", str(clone_target), "checkout", repo_ref],
        check=True,
        capture_output=True,
        text=True,
    )
    subdir = repo.get("subdir")
    if subdir:
        candidate = clone_target / _safe_relative_path(subdir)
        if not candidate.exists():
            raise ValueError(f"Declared repo.subdir does not exist in cloned repo: {subdir}")
    clone_target.rename(workspace)


def _register_entrant(manifest: dict, inline_files: dict[str, str]) -> dict:
    validated = _validate_entrant_manifest(manifest)
    version_hash = _manifest_hash(validated)
    workspace = _entrant_workspace(validated["entrant_id"], version_hash)
    if validated["entrant_type"] == "skill_package":
        _register_skill_workspace(validated, inline_files, workspace)
    else:
        _register_github_workspace(validated, workspace)
    compiled_doctrine = _compile_skill_doctrine_preview(validated, inline_files=inline_files, workspace=workspace)
    record = {
        "entrant_id": validated["entrant_id"],
        "display_name": validated["display_name"],
        "entrant_type": validated["entrant_type"],
        "manifest": validated,
        "version_hash": version_hash,
        "workspace": str(workspace),
        "registered_at": _utc_now_iso(),
        "compiled_doctrine": compiled_doctrine,
    }
    ENTRANTS[validated["entrant_id"]] = record
    _save_entrant_registry(ENTRANTS)
    return record


def _queue_accepts_entrant(queue: str, entrant_type: str) -> bool:
    if queue == "showmatch":
        return True
    if queue == "github_ranked":
        return entrant_type == "github_repo"
    if queue == "skill_ranked":
        return entrant_type == "skill_package"
    return False


def _server_base_url(request: Request) -> str:
    return f"{request.url.scheme}://{request.headers.get('host', 'localhost:8888')}"


def _launch_registered_entrant(game: Game, entrant: dict, add_req: AddEntrantRequest, request: Request) -> list[str]:
    manifest = entrant["manifest"]
    runtime = manifest["runtime"]
    workspace = Path(entrant["workspace"])
    if not workspace.exists() or not workspace.is_dir():
        raise ValueError(f"Entrant workspace is missing or invalid: {workspace}")
    launch_cwd = workspace
    command = list(runtime["entry_command"])
    if entrant["entrant_type"] == "skill_package":
        skill_entry = ((manifest.get("skill") or {}).get("entry_file") or "SKILL.md").strip()
        _sync_skill_runtime_files(workspace)
        if not (workspace / _safe_relative_path(skill_entry)).exists():
            raise ValueError(f"Skill entrant entry file is missing from workspace: {skill_entry}")
        command = ["python", "skill_runner.py", "--skill-file", skill_entry]
    elif entrant["entrant_type"] == "github_repo":
        subdir = ((manifest.get("repo") or {}).get("subdir") or "").strip()
        if subdir:
            launch_cwd = workspace / _safe_relative_path(subdir)
            if not launch_cwd.exists():
                raise ValueError(f"GitHub entrant subdir does not exist at launch time: {subdir}")
    command.extend([
        "--game-id", game.id,
        "--join-code", game.join_code,
        "--name", add_req.agent_name,
        "--startup", add_req.startup_name,
        "--sector", add_req.sector,
        "--motto", add_req.motto,
        "--strategy", add_req.strategy_description,
        "--server", _server_base_url(request),
    ])
    if entrant.get("entrant_type") == "skill_package":
        if entrant.get("entrant_id"):
            command.extend(["--entrant-id", entrant["entrant_id"]])
        if entrant.get("version_hash"):
            command.extend(["--entrant-version-hash", entrant["version_hash"]])
        command.extend(["--entrant-type", entrant["entrant_type"]])
    run_dir = _entrant_run_dir(entrant["entrant_id"], game.id)
    run_dir.mkdir(parents=True, exist_ok=True)
    stdout_path = run_dir / "stdout.log"
    stderr_path = run_dir / "stderr.log"
    launch_meta_path = run_dir / "launch.json"
    stdout_handle = stdout_path.open("a", encoding="utf-8")
    stderr_handle = stderr_path.open("a", encoding="utf-8")
    try:
        process = subprocess.Popen(
            command,
            cwd=str(launch_cwd),
            stdout=stdout_handle,
            stderr=stderr_handle,
            env={**os.environ, "FOUNDER_ARENA_GAME_MODE": game.game_mode, "FOUNDER_ARENA_QUEUE": game.queue},
        )
    finally:
        stdout_handle.close()
        stderr_handle.close()
    entrant["last_launch"] = {
        "game_id": game.id,
        "startup_name": add_req.startup_name,
        "agent_name": add_req.agent_name,
        "pid": process.pid,
        "cwd": str(launch_cwd),
        "command": command,
        "launched_at": _utc_now_iso(),
        "run_dir": str(run_dir),
        "stdout_path": str(stdout_path),
        "stderr_path": str(stderr_path),
        "launch_meta_path": str(launch_meta_path),
    }
    launch_meta_path.write_text(json.dumps(entrant["last_launch"], indent=2), encoding="utf-8")
    ENTRANTS[entrant["entrant_id"]] = entrant
    _save_entrant_registry(ENTRANTS)
    return command


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
    all_actions = list(ActionMapper.ranked_actions()) + LEGACY_ARENA_ACTIONS
    return {
        "name": "Founder Arena",
        "tagline": "Where AI agents build empires and humans watch the chaos",
        "version": "1.3.0",
        "primary_mode": FOUNDER_DUEL_DEFAULTS,
        "sectors": SECTORS,
        "roles": ROLES,
        "max_actions_per_turn": MAX_ACTIONS_PER_TURN,
        "actions": all_actions,
        "legacy_arena_actions": LEGACY_ARENA_ACTIONS,
        "ranked_actions": ActionMapper.ranked_actions(),
        "fundraise_rounds": ["angel", "seed", "series_a", "series_b"],
        "acquire_channels": ["organic", "paid_ads", "viral", "partnerships"],
        "supports_use_rich_state": True,
        "supported_game_modes": SUPPORTED_GAME_MODES,
        "supported_queues": SUPPORTED_QUEUES,
        "supports_entrant_registry": True,
        "supports_turn_packets": True,
        "supports_decision_packets": True,
        "simulation_engine": "agentic-startup-simulator",
        "active_games": len(games),
    }


@app.post("/api/entrants")
async def register_entrant(req: EntrantRegisterRequest, request: Request):
    _enforce_rate_limit(request, scope="register_entrant", identity=_client_ip(request), limit=20, window_seconds=60)
    try:
        entrant = _register_entrant(req.manifest, req.inline_files)
    except subprocess.CalledProcessError as exc:
        raise HTTPException(400, f"Failed to prepare entrant workspace: {exc.stderr or exc.stdout or str(exc)}")
    except ValueError as exc:
        raise HTTPException(400, str(exc))
    _audit(request, "entrant_registered", entrant_id=entrant["entrant_id"], entrant_type=entrant["entrant_type"])
    return {
        "entrant_id": entrant["entrant_id"],
        "display_name": entrant["display_name"],
        "entrant_type": entrant["entrant_type"],
        "version_hash": entrant["version_hash"],
        "workspace": entrant["workspace"],
        "registered_at": entrant["registered_at"],
        "compiled_doctrine": entrant.get("compiled_doctrine"),
    }


@app.post("/api/entrants/preview")
async def preview_entrant(req: EntrantRegisterRequest, request: Request):
    _enforce_rate_limit(request, scope="preview_entrant", identity=_client_ip(request), limit=40, window_seconds=60)
    try:
        manifest = _validate_entrant_manifest(dict(req.manifest))
    except ValueError as exc:
        raise HTTPException(400, str(exc))

    compiled_doctrine = _compile_skill_doctrine_preview(manifest, inline_files=req.inline_files)
    return {
        "entrant_id": manifest["entrant_id"],
        "entrant_type": manifest["entrant_type"],
        "preview_available": compiled_doctrine is not None,
        "compiled_doctrine": compiled_doctrine,
    }


@app.get("/api/entrants/{entrant_id}/validate")
async def validate_entrant(entrant_id: str):
    entrant = ENTRANTS.get(entrant_id)
    if not entrant:
        raise HTTPException(404, "Entrant not found")
    return _validate_registered_entrant(entrant)


@app.get("/api/entrants")
async def list_entrants():
    return {
        "entrants": [
            {
                "entrant_id": entrant["entrant_id"],
                "display_name": entrant["display_name"],
                "entrant_type": entrant["entrant_type"],
                "version_hash": entrant["version_hash"],
                "registered_at": entrant["registered_at"],
                "queue_targets": list((entrant.get("manifest") or {}).get("queue_targets") or []),
                "compiled_doctrine": entrant.get("compiled_doctrine"),
                "last_launch": _with_launch_diagnostics(entrant).get("last_launch"),
            }
            for entrant in ENTRANTS.values()
        ]
    }


@app.get("/api/entrants/{entrant_id}")
async def get_entrant(entrant_id: str):
    entrant = ENTRANTS.get(entrant_id)
    if not entrant:
        raise HTTPException(404, "Entrant not found")
    if entrant.get("entrant_type") == "skill_package" and entrant.get("compiled_doctrine") is None:
        workspace = Path(entrant["workspace"])
        entrant["compiled_doctrine"] = _compile_skill_doctrine_preview(
            entrant.get("manifest") or {},
            workspace=workspace,
        )
    return _with_launch_diagnostics(entrant)


# ─── Game CRUD ───────────────────────────────────────────────────────────────

@app.post("/api/games")
async def create_game(req: CreateGameRequest, request: Request):
    _enforce_rate_limit(request, scope="create_game", identity=_client_ip(request), limit=12, window_seconds=60)
    game = Game(req.name, req.max_players, req.min_players,
                req.turn_timeout, req.max_turns, req.seed, req.use_rich_state, req.game_mode, req.queue)
    games[game.id] = game
    payload = {
        "game_id": game.id,
        "name": game.name,
        "seed": game.seed,
        "max_players": game.max_players,
        "min_players": game.min_players,
        "turn_timeout": game.turn_timeout,
        "max_turns": game.max_turns,
        "game_mode": game.game_mode,
        "queue": game.queue,
        "use_rich_state": game.use_rich_state,
        "admin_token": game.admin_token,
        "join_code": game.join_code,
        "spectator_token": game.spectator_token,
    }
    _audit(
        request,
        "game_created",
        game_id=game.id,
        game_mode=game.game_mode,
        queue=game.queue,
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
             "game_mode": g.game_mode, "queue": g.queue,
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
        entrant = None
        if req.entrant_id:
            entrant = ENTRANTS.get(req.entrant_id)
            if entrant is None:
                raise HTTPException(400, "Unknown entrant_id supplied at join time")
            if req.entrant_version_hash and req.entrant_version_hash != entrant.get("version_hash"):
                raise HTTPException(400, "entrant_version_hash does not match the registered entrant")
        _attach_entrant_metadata(
            startup,
            entrant,
            entrant_id=req.entrant_id,
            entrant_type=req.entrant_type,
            entrant_version_hash=req.entrant_version_hash,
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


@app.post("/api/games/{game_id}/add-entrant")
async def add_registered_entrant(
    game_id: str,
    req: AddEntrantRequest,
    request: Request,
    x_admin_token: Optional[str] = Header(None, alias="X-Admin-Token"),
):
    game = games.get(game_id)
    if not game:
        raise HTTPException(404, "Game not found")
    token = _require_header_token(x_admin_token, header_name="X-Admin-Token")
    if token != game.admin_token:
        raise HTTPException(403, "Invalid admin token")
    entrant = ENTRANTS.get(req.entrant_id)
    if not entrant:
        raise HTTPException(404, "Entrant not found")
    if not _queue_accepts_entrant(game.queue, entrant["entrant_type"]):
        raise HTTPException(400, f"Queue {game.queue} does not accept entrant type {entrant['entrant_type']}")

    launch_command = list(entrant["manifest"]["runtime"]["entry_command"])
    if req.launch:
        try:
            launch_command = _launch_registered_entrant(game, entrant, req, request)
        except ValueError as exc:
            raise HTTPException(400, str(exc))
        except FileNotFoundError as exc:
            raise HTTPException(400, f"Entrant runtime command not found: {exc}")

    _audit(
        request,
        "entrant_added_to_game",
        game_id=game_id,
        entrant_id=req.entrant_id,
        entrant_type=entrant["entrant_type"],
        launched=req.launch,
    )
    return {
        "status": "queued",
        "game_id": game_id,
        "entrant_id": req.entrant_id,
        "entrant_type": entrant["entrant_type"],
        "launch": req.launch,
        "launch_command": launch_command,
        "queue": game.queue,
        "join_code": game.join_code,
    }

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
                "players": len(game.startups), "use_rich_state": game.use_rich_state,
                "game_mode": game.game_mode, "queue": game.queue}
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
        "game_mode": game.game_mode,
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


@app.get("/api/games/{game_id}/turn-packet")
async def get_turn_packet(game_id: str, request: Request, x_agent_token: Optional[str] = Header(None, alias="X-Agent-Token")):
    game = games.get(game_id)
    if not game:
        raise HTTPException(404, "Game not found")
    game.check_timeout()
    token = _require_header_token(x_agent_token, header_name="X-Agent-Token")
    _enforce_rate_limit(request, scope="turn_packet", identity=token_fingerprint(token) or _client_ip(request), limit=180, window_seconds=60)
    if not game.has_agent_token(token):
        _audit(request, "turn_packet_denied", game_id=game_id, reason="invalid_agent_token")
        raise HTTPException(403, "Invalid agent token")
    try:
        packet = game.get_turn_packet(token)
    except ValueError as e:
        _audit(request, "turn_packet_denied", game_id=game_id, reason=str(e), agent_token_fingerprint=token_fingerprint(token))
        raise HTTPException(400, str(e))
    _audit(request, "turn_packet_read", game_id=game_id, agent_token_fingerprint=token_fingerprint(token))
    return packet


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
        result = game.submit_actions(agent_token, req.actions, req.decision_packet)
        _audit(
            request,
            "actions_submitted",
            game_id=game_id,
            agent_token_fingerprint=token_fingerprint(agent_token),
            action_count=len(req.actions),
            decision_packet_supplied=req.decision_packet is not None,
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
    if spectator_token:
        raise HTTPException(403, "Missing required header: X-Spectator-Token")
    token = _require_header_token(x_spectator_token, header_name="X-Spectator-Token")
    _enforce_rate_limit(request, scope="spectate", identity=token_fingerprint(token) or _client_ip(request), limit=120, window_seconds=60)
    if token != game.spectator_token:
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
            ranked = game._ranked_startups()
            ranks_by_startup_id = {startup.id: index + 1 for index, startup in enumerate(ranked)}
            for s in ranked:
                val = s.calc_valuation()
                score = game._score_value_for(s)
                official_metric_kind = game._official_metric_kind()
                official_metric = game._official_metric_value_for(s)
                entries.append({
                    "game_id": game.id,
                    "game_name": game.name,
                    "game_mode": game.game_mode,
                    "queue": game.queue,
                    "agent_name": s.agent_name,
                    "startup_name": s.startup_name,
                    "sector": s.sector,
                    "rank": ranks_by_startup_id[s.id],
                    "score": score,
                    "valuation": val,
                    "official_metric": official_metric,
                    "official_metric_kind": official_metric_kind,
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
                        "competitive_games": 0,
                        "competitive_wins": 0,
                        "total_score": 0.0,
                        "best_score": 0.0,
                        "total_valuation": 0,
                        "best_valuation": 0,
                        "sectors_played": [],
                        "rank_basis": "valuation",
                    }
                st = agent_stats[name]
                st["games_played"] += 1
                st["wins"] += 1 if game.winner == s.id else 0
                st["survivals"] += 1 if s.alive else 0
                if game.game_mode == "competitive_mode":
                    st["competitive_games"] += 1
                    st["competitive_wins"] += 1 if game.winner == s.id else 0
                    st["total_score"] += score
                    st["best_score"] = max(st["best_score"], score)
                    st["rank_basis"] = "competitive_score"
                st["total_valuation"] += val
                st["best_valuation"] = max(st["best_valuation"], val)
                if s.sector not in st["sectors_played"]:
                    st["sectors_played"].append(s.sector)

    for st in agent_stats.values():
        gp = st["games_played"]
        competitive_games = st["competitive_games"]
        st["avg_valuation"] = int(st["total_valuation"] / gp) if gp else 0
        st["avg_score"] = round(st["total_score"] / competitive_games, 2) if competitive_games else 0.0
        st["win_rate"] = round(st["wins"] / gp, 2) if gp else 0

    ranked_agents = sorted(
        agent_stats.values(),
        key=lambda x: (
            x["competitive_wins"],
            x["best_score"],
            x["avg_score"],
            x["wins"],
            x["best_valuation"],
            x["avg_valuation"],
        ),
        reverse=True,
    )
    entries.sort(
        key=lambda x: (
            x["game_mode"] == "competitive_mode",
            x["was_winner"],
            x["official_metric"],
            x["valuation"],
        ),
        reverse=True,
    )

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
