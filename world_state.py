"""Simulator-backed startup state with Founder Arena compatibility shims."""

from __future__ import annotations

import random
import sys
import uuid
from copy import deepcopy
from pathlib import Path


SIM_SRC = Path(__file__).resolve().parent.parent / "agentic-startup-simulator" / "src"
if str(SIM_SRC) not in sys.path:
    sys.path.insert(0, str(SIM_SRC))

from agentic_startup_simulator.genesis import build_campaign_scenario
from thestartupbench.runner import initialize_world_state, recalculate_derived_metrics
from thestartupbench.runtime import RuntimeSession


SECTOR_TO_SIM_PROFILE = {
    "ai": {
        "market_area": "customer_support",
        "customer_type": "mid_market_b2b",
        "archetype": "agentic_support_automation",
        "sector_modifier": None,
    },
    "fintech": {
        "market_area": "internal_finance_ops",
        "customer_type": "enterprise",
        "archetype": "agentic_internal_ops_platform",
        "sector_modifier": "procurement_heavy_enterprise",
    },
    "healthtech": {
        "market_area": "customer_support",
        "customer_type": "enterprise",
        "archetype": "agentic_support_automation",
        "sector_modifier": "regulated_healthcare_ops",
    },
    "edtech": {
        "market_area": "customer_support",
        "customer_type": "mid_market_b2b",
        "archetype": "agentic_service_agency",
        "sector_modifier": None,
    },
    "saas": {
        "market_area": "revenue_ops",
        "customer_type": "mid_market_b2b",
        "archetype": "agentic_vertical_saas",
        "sector_modifier": None,
    },
    "crypto": {
        "market_area": "internal_finance_ops",
        "customer_type": "smb",
        "archetype": "agentic_internal_ops_platform",
        "sector_modifier": None,
    },
    "gaming": {
        "market_area": "customer_support",
        "customer_type": "mid_market_b2b",
        "archetype": "agentic_service_agency",
        "sector_modifier": "ecommerce_volume_spikes",
    },
    "greentech": {
        "market_area": "revenue_ops",
        "customer_type": "enterprise",
        "archetype": "agentic_vertical_saas",
        "sector_modifier": "procurement_heavy_enterprise",
    },
}

SIMULATOR_CONFIG = {
    "config_version": "0.1.0",
    "simulator_id": "founder_arena_rich_state",
    "title": "Founder Arena Rich State",
    "difficulty": "medium",
    "starting_capital_usd": 100000,
    "time_horizon_weeks": 52,
    "checkpoint_interval_weeks": 4,
    "start_time": "2026-01-15T09:00:00Z",
    "investor_expectations": "Show durable execution, trust, and capital discipline.",
    "allowed_archetypes": [
        "agentic_vertical_saas",
        "agentic_internal_ops_platform",
        "agentic_service_agency",
        "agentic_support_automation",
    ],
    "default_tools": [
        "metrics.report",
        "research.market.read",
        "product.roadmap.write",
        "product.launch",
        "growth.experiment.create",
        "sales.pipeline.update",
        "finance.plan.write",
        "finance.raise.propose",
        "people.hiring.update",
        "people.org.adjust",
        "ops.support.resolve",
        "ops.incident.respond",
        "board.update",
        "legal.compliance.respond",
        "notes.write",
        "sim.advance",
    ],
    "market_options": [
        {
            "market_area": "customer_support",
            "customer_type": "mid_market_b2b",
            "demand_index": 0.88,
            "competitor_pressure": "moderate",
            "pricing_pressure": "moderate",
            "initial_revenue_ratio": 0.015,
            "pipeline_multiple": 0.36,
            "pipeline_bonus": 2,
            "starting_arpa_usd": 3200,
            "trust_bonus": 0.02,
            "churn_penalty": 0.002,
            "category_fit": 0.78,
            "competition_map": ["legacy_bpo_suite", "horizontal_ai_agent_vendor"],
        },
        {
            "market_area": "customer_support",
            "customer_type": "enterprise",
            "demand_index": 0.79,
            "competitor_pressure": "high",
            "pricing_pressure": "moderate",
            "initial_revenue_ratio": 0.012,
            "pipeline_multiple": 0.41,
            "pipeline_bonus": 1,
            "starting_arpa_usd": 6100,
            "trust_bonus": 0.03,
            "churn_penalty": 0.001,
            "category_fit": 0.73,
            "competition_map": ["enterprise_ccaas_suite", "workflow_ai_platform"],
        },
        {
            "market_area": "revenue_ops",
            "customer_type": "enterprise",
            "demand_index": 0.81,
            "competitor_pressure": "high",
            "pricing_pressure": "high",
            "initial_revenue_ratio": 0.013,
            "pipeline_multiple": 0.42,
            "pipeline_bonus": 1,
            "starting_arpa_usd": 5400,
            "trust_bonus": 0.0,
            "churn_penalty": 0.001,
            "category_fit": 0.71,
            "competition_map": ["crm_extension_vendor", "workflow_agent_startup"],
        },
        {
            "market_area": "revenue_ops",
            "customer_type": "mid_market_b2b",
            "demand_index": 0.9,
            "competitor_pressure": "moderate",
            "pricing_pressure": "moderate",
            "initial_revenue_ratio": 0.014,
            "pipeline_multiple": 0.37,
            "pipeline_bonus": 2,
            "starting_arpa_usd": 3600,
            "trust_bonus": 0.01,
            "churn_penalty": 0.002,
            "category_fit": 0.76,
            "competition_map": ["sales_enablement_ai_vendor", "pipeline_ops_tool"],
        },
        {
            "market_area": "internal_finance_ops",
            "customer_type": "smb",
            "demand_index": 0.76,
            "competitor_pressure": "low",
            "pricing_pressure": "moderate",
            "initial_revenue_ratio": 0.011,
            "pipeline_multiple": 0.31,
            "pipeline_bonus": 0,
            "starting_arpa_usd": 2100,
            "trust_bonus": 0.01,
            "churn_penalty": 0.003,
            "category_fit": 0.69,
            "competition_map": ["spreadsheet_workflow_tools", "accounting_automation_vendor"],
        },
        {
            "market_area": "internal_finance_ops",
            "customer_type": "enterprise",
            "demand_index": 0.72,
            "competitor_pressure": "moderate",
            "pricing_pressure": "moderate",
            "initial_revenue_ratio": 0.012,
            "pipeline_multiple": 0.39,
            "pipeline_bonus": 1,
            "starting_arpa_usd": 4900,
            "trust_bonus": 0.02,
            "churn_penalty": 0.001,
            "category_fit": 0.72,
            "competition_map": ["erp_workflow_suite", "close_ops_platform"],
        },
    ],
}


def _market_option_for_profile(profile: dict) -> dict:
    for option in SIMULATOR_CONFIG["market_options"]:
        if option["market_area"] == profile["market_area"] and option["customer_type"] == profile["customer_type"]:
            return deepcopy(option)
    return deepcopy(SIMULATOR_CONFIG["market_options"][0])

FIRST_NAMES = [
    "Alex", "Sam", "Jordan", "Casey", "Morgan", "Riley", "Quinn", "Avery",
    "Blake", "Drew", "Sage", "Reese", "Skyler", "Phoenix", "Dakota", "Rowan",
    "Kai", "Zion", "Nico", "Wren", "Ellis", "Finley", "Harley", "Lennox",
]
LAST_NAMES = [
    "Chen", "Patel", "Kim", "Garcia", "Nakamura", "Mueller", "Santos", "Okafor",
    "Singh", "Johansson", "Petrov", "Nguyen", "Abadi", "Fischer", "Tanaka", "Ali",
]
BASE_SALARY = {"engineer": 12000, "marketer": 9000, "salesperson": 10000, "designer": 10000}


def _clamp(value: float, minimum: float, maximum: float) -> float:
    return max(minimum, min(maximum, value))


class TeamMember:
    def __init__(self, name: str, role: str, salary: int, skill: int = 50):
        self.id = str(uuid.uuid4())[:8]
        self.name = name
        self.role = role
        self.skill = skill
        self.salary = salary
        self.hired_turn = 0

    def to_dict(self) -> dict:
        return {
            "id": self.id,
            "name": self.name,
            "role": self.role,
            "skill": self.skill,
            "salary": self.salary,
        }


class RichStartupState:
    """Founder Arena startup wrapper backed by simulator world state."""

    def __init__(self, agent_name: str, startup_name: str, sector: str, motto: str, strategy: str, seed: int):
        self.id = str(uuid.uuid4())[:8]
        self.agent_token = str(uuid.uuid4())
        self.agent_name = agent_name
        self.startup_name = startup_name
        self.sector = sector
        self.motto = motto
        self.strategy = strategy
        self.seed = seed
        self.rng = random.Random(seed)
        self.alive = True
        self.death_reason = ""
        self.bankruptcy_turn: int | None = None
        self.actions_submitted = False
        self.pending_actions: list[dict] = []
        self.turn_results: list[dict] = []
        self.spy_intel: list[dict] = []
        self.history: list[dict] = []
        self.team: list[TeamMember] = []
        self.director_state = "pressure_build"
        self.stress_index = 0.0
        self.challenge_info: dict | None = None
        self.seven_dimension_scores: dict | None = None
        self._queued_hire_roles: list[str] = []

        scenario = self._build_scenario()
        self.scenario = scenario
        self.world_state = initialize_world_state(scenario, seed=seed)
        self.runtime = RuntimeSession(scenario=scenario, world_state=self.world_state)
        profile = SECTOR_TO_SIM_PROFILE.get(self.sector, SECTOR_TO_SIM_PROFILE["ai"])
        market_option = _market_option_for_profile(profile)
        segment_key = f"{profile['market_area']}:{profile['customer_type']}"
        self.world_state["company"]["founder_arena_sector"] = sector
        self.world_state["company"]["founder_arena_strategy"] = strategy
        self.world_state["company"]["founder_arena_market_segment"] = segment_key
        self.world_state["company"]["brand_index"] = 0.1
        self.world_state["finance"]["total_raised_usd"] = 0.0
        self.world_state["finance"]["funding_round"] = "pre-seed"
        self.world_state["market"]["market_area"] = profile["market_area"]
        self.world_state["market"]["customer_type"] = profile["customer_type"]
        self.world_state["market"]["segment_key"] = segment_key
        self.world_state["market"]["segment_label"] = f"{profile['market_area']} / {profile['customer_type']}"
        self.world_state["market"]["category_fit"] = market_option.get("category_fit", self.world_state["market"].get("category_fit", 0.72))
        self.world_state["product"]["features_built"] = 0
        self.world_state["customers"]["user_count_estimate"] = max(
            100,
            int(self.world_state["customers"].get("paying_accounts", 0) * 35),
        )
        self._bootstrap_team()
        self.recalculate()

    def _build_scenario(self) -> dict:
        profile = SECTOR_TO_SIM_PROFILE.get(self.sector, SECTOR_TO_SIM_PROFILE["ai"])
        thesis = {
            "thesis_version": "0.1.0",
            "company_name": self.startup_name,
            "market_area": profile["market_area"],
            "customer_type": profile["customer_type"],
            "archetype": profile["archetype"],
            "pricing_model": "subscription",
            "initial_strategy": self.strategy or "balanced execution under uncertainty",
            "budget_allocation": {
                "product_pct": 0.34,
                "go_to_market_pct": 0.28,
                "ops_pct": 0.18,
                "reserve_pct": 0.20,
            },
        }
        if profile["sector_modifier"]:
            thesis["sector_modifier"] = profile["sector_modifier"]
        return build_campaign_scenario(config=deepcopy(SIMULATOR_CONFIG), thesis=thesis, seed=self.seed)

    def _bootstrap_team(self) -> None:
        founder = TeamMember(f"{self.rng.choice(FIRST_NAMES)} (Founder)", "engineer", 0, skill=68)
        self.team.append(founder)
        self.sync_team_roster()

    def recalculate(self) -> None:
        recalculate_derived_metrics(self.world_state)
        company = self.world_state.setdefault("company", {})
        finance = self.world_state.setdefault("finance", {})
        product = self.world_state.setdefault("product", {})
        customers = self.world_state.setdefault("customers", {})
        market = self.world_state.setdefault("market", {})
        trust = float(customers.get("trust_score", 0.7))
        demand = float(market.get("demand_index", 0.85))
        brand_floor = trust * 0.62 + min(demand / 1.5, 1.0) * 0.38
        company["brand_index"] = round(_clamp(float(company.get("brand_index", brand_floor)), 0.0, 1.0), 4)
        finance["total_raised_usd"] = round(float(finance.get("total_raised_usd", 0.0)), 2)
        finance["funding_round"] = finance.get("funding_round", "pre-seed")
        product["features_built"] = int(product.get("features_built", 0))
        customers["user_count_estimate"] = max(0, int(round(float(customers.get("user_count_estimate", 0)))))
        self.sync_team_roster()

    def sync_team_roster(self) -> None:
        target_headcount = max(1, int(self.world_state.setdefault("team", {}).get("headcount", len(self.team) or 1)))
        while len(self.team) < target_headcount:
            role = self._queued_hire_roles.pop(0) if self._queued_hire_roles else self._fallback_role_for_headcount()
            salary = BASE_SALARY.get(role, 10000)
            name = f"{self.rng.choice(FIRST_NAMES)} {self.rng.choice(LAST_NAMES)}"
            member = TeamMember(name, role, salary, skill=45 + self.rng.randint(0, 25))
            self.team.append(member)
        while len(self.team) > target_headcount:
            removable = [member for member in self.team if "Founder" not in member.name]
            if not removable:
                break
            self.team.remove(removable[-1])
        self.world_state["team"]["headcount"] = len(self.team)

    def queue_hire_roles(self, role: str, count: int = 1) -> None:
        self._queued_hire_roles.extend([role] * max(0, count))

    def remove_last_non_founder(self) -> TeamMember | None:
        removable = [member for member in self.team if "Founder" not in member.name]
        if not removable:
            return None
        member = removable[-1]
        self.team.remove(member)
        self.world_state["team"]["headcount"] = len(self.team)
        self.recalculate()
        return member

    def _fallback_role_for_headcount(self) -> str:
        roles = ["engineer", "marketer", "salesperson", "designer"]
        return roles[(len(self.team) - 1) % len(roles)]

    @property
    def cash(self) -> int:
        return int(round(float(self.world_state["finance"].get("cash_usd", 0.0))))

    @cash.setter
    def cash(self, value: float) -> None:
        self.world_state["finance"]["cash_usd"] = round(max(0.0, float(value)), 2)
        self.recalculate()

    @property
    def monthly_burn(self) -> int:
        return int(round(float(self.world_state["finance"].get("monthly_burn_usd", 0.0))))

    @monthly_burn.setter
    def monthly_burn(self, value: float) -> None:
        self.world_state["finance"]["monthly_burn_usd"] = round(max(0.0, float(value)), 2)
        self.recalculate()

    @property
    def revenue(self) -> int:
        return int(round(float(self.world_state["finance"].get("monthly_revenue_usd", 0.0))))

    @revenue.setter
    def revenue(self, value: float) -> None:
        self.world_state["finance"]["monthly_revenue_usd"] = round(max(0.0, float(value)), 2)
        self.recalculate()

    @property
    def runway(self) -> float:
        return round(float(self.world_state["finance"].get("runway_weeks", 0.0)) / 4.0, 1)

    @property
    def users(self) -> int:
        return int(self.world_state["customers"].get("user_count_estimate", 0))

    @users.setter
    def users(self, value: float) -> None:
        self.world_state["customers"]["user_count_estimate"] = max(0, int(round(float(value))))
        self.recalculate()

    @property
    def product_quality(self) -> int:
        product = self.world_state["product"]
        onboarding = float(product.get("onboarding_quality", 0.0))
        roadmap_items = float(product.get("roadmap_items", 0))
        launch_count = float(product.get("launch_count", 0))
        incidents = float(product.get("major_incidents_open", 0))
        score = onboarding * 72 + min(roadmap_items, 12) * 1.6 + min(launch_count, 10) * 2.4 - incidents * 8
        return int(round(_clamp(score, 0, 100)))

    @product_quality.setter
    def product_quality(self, value: float) -> None:
        self.world_state["product"]["onboarding_quality"] = round(_clamp(float(value) / 100.0, 0.0, 1.0), 4)
        self.recalculate()

    @property
    def features_built(self) -> int:
        return int(self.world_state["product"].get("features_built", 0))

    @features_built.setter
    def features_built(self, value: int) -> None:
        self.world_state["product"]["features_built"] = max(0, int(value))
        self.recalculate()

    @property
    def brand(self) -> int:
        return int(round(float(self.world_state["company"].get("brand_index", 0.0)) * 100))

    @brand.setter
    def brand(self, value: float) -> None:
        self.world_state["company"]["brand_index"] = round(_clamp(float(value) / 100.0, 0.0, 1.0), 4)
        self.recalculate()

    @property
    def morale(self) -> int:
        return int(round(float(self.world_state["team"].get("morale", 0.0)) * 100))

    @morale.setter
    def morale(self, value: float) -> None:
        self.world_state["team"]["morale"] = round(_clamp(float(value) / 100.0, 0.0, 1.0), 4)
        self.recalculate()

    @property
    def total_raised(self) -> int:
        return int(round(float(self.world_state["finance"].get("total_raised_usd", 0.0))))

    @total_raised.setter
    def total_raised(self, value: float) -> None:
        self.world_state["finance"]["total_raised_usd"] = round(max(0.0, float(value)), 2)
        self.recalculate()

    @property
    def dilution(self) -> float:
        return round(float(self.world_state["finance"].get("dilution_index", 0.0)), 3)

    @dilution.setter
    def dilution(self, value: float) -> None:
        self.world_state["finance"]["dilution_index"] = round(_clamp(float(value), 0.0, 1.0), 4)
        self.recalculate()

    @property
    def funding_round(self) -> str:
        return str(self.world_state["finance"].get("funding_round", "pre-seed"))

    @funding_round.setter
    def funding_round(self, value: str) -> None:
        self.world_state["finance"]["funding_round"] = value
        self.recalculate()

    def calc_valuation(self) -> int:
        finance = self.world_state["finance"]
        customers = self.world_state["customers"]
        risk = self.world_state["risk"]
        trust = float(customers.get("trust_score", 0.7))
        health = float(customers.get("health_index", 0.55))
        demand = float(self.world_state["market"].get("demand_index", 0.85))
        penalty = 1.0 - (_clamp(float(risk.get("financing_pressure", 0.0)) * 0.12 + float(risk.get("regulatory_pressure", 0.0)) * 0.08, 0.0, 0.35))
        base = (
            self.cash
            + self.revenue * 48
            + self.users * 34
            + self.product_quality * 1750
            + self.brand * 1400
            + len(self.team) * 26000
        )
        multiplier = 0.72 + trust * 0.18 + health * 0.12 + min(demand / 1.5, 1.0) * 0.08
        valuation = int(base * multiplier * penalty)
        if float(finance.get("net_burn_usd", 0.0)) <= 0:
            valuation = int(valuation * 1.08)
        return max(valuation, 10000)

    @property
    def market_segment(self) -> str:
        return str(self.world_state.get("market", {}).get("segment_key", "unknown:unknown"))

    def snapshot(self) -> dict:
        score = self.seven_dimension_scores
        return {
            "id": self.id,
            "agent_name": self.agent_name,
            "startup_name": self.startup_name,
            "sector": self.sector,
            "motto": self.motto,
            "strategy": self.strategy,
            "alive": self.alive,
            "death_reason": self.death_reason,
            "cash": self.cash,
            "monthly_burn": self.monthly_burn,
            "revenue": self.revenue,
            "runway": self.runway,
            "users": self.users,
            "product_quality": self.product_quality,
            "features_built": self.features_built,
            "brand": self.brand,
            "morale": self.morale,
            "team": [member.to_dict() for member in self.team],
            "team_size": len(self.team),
            "valuation": self.calc_valuation(),
            "total_raised": self.total_raised,
            "dilution": round(self.dilution, 2),
            "funding_round": self.funding_round,
            "market_segment": self.market_segment,
            "director_state": self.director_state,
            "stress_index": round(self.stress_index, 4),
            "challenge_info": deepcopy(self.challenge_info),
            "seven_dimension_scores": deepcopy(score),
            "rich_state": deepcopy(self.world_state),
        }

    def private_view(self) -> dict:
        view = self.snapshot()
        view["spy_intel"] = self.spy_intel
        view["turn_results"] = self.turn_results[-5:]
        return view

    def public_view(self) -> dict:
        snap = self.snapshot()
        cash_value = snap.pop("cash", 0)
        snap.pop("monthly_burn", None)
        snap.pop("team", None)
        snap.pop("morale", None)
        snap.pop("director_state", None)
        snap.pop("stress_index", None)
        snap.pop("challenge_info", None)
        snap.pop("rich_state", None)
        snap.pop("seven_dimension_scores", None)
        if cash_value > 1_000_000:
            snap["cash_display"] = "$1M+"
        elif cash_value > 100_000:
            snap["cash_display"] = "$100K+"
        else:
            snap["cash_display"] = "<$100K"
        return snap

    def record_history(self, turn: int) -> None:
        self.history.append(
            {
                "turn": turn,
                "cash": self.cash,
                "users": self.users,
                "revenue": self.revenue,
                "valuation": self.calc_valuation(),
                "product_quality": self.product_quality,
                "morale": self.morale,
                "brand": self.brand,
                "team_size": len(self.team),
                "stress_index": round(self.stress_index, 4),
            }
        )
