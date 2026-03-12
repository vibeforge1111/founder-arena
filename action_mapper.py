"""Map Founder Arena actions to simulator runtime tool calls."""

from __future__ import annotations

import sys
from pathlib import Path


SIM_SRC = Path(__file__).resolve().parent.parent / "agentic-startup-simulator" / "src"
if str(SIM_SRC) not in sys.path:
    sys.path.insert(0, str(SIM_SRC))

from thestartupbench.runtime import execute_tool_call


LEGACY_ARENA_ONLY_ACTIONS = {"pivot", "spy", "poach"}
ROUND_ORDER = ["angel", "seed", "series_a", "series_b"]
READ_ONLY_EXTENDED_TOOLS = {
    "metrics.report",
    "research.market.read",
}


class ActionMapper:
    def __init__(self, rng):
        self.rng = rng

    @staticmethod
    def _bump_metric(startup, area: str, key: str, delta: float, *, minimum: float = 0.0, maximum: float = 1.0) -> None:
        bucket = startup.world_state.setdefault(area, {})
        current = float(bucket.get(key, 0.0))
        bucket[key] = round(max(minimum, min(maximum, current + delta)), 4)
        startup.recalculate()

    def execute(self, startup, action: dict, turn_index: int) -> dict | None:
        action_type = str(action.get("type", ""))
        params = action.get("params", {})
        tool_name = action.get("tool_name") or (action_type if "." in action_type else None)

        if tool_name:
            arguments = action.get("arguments", params if isinstance(params, dict) else {})
            if tool_name not in READ_ONLY_EXTENDED_TOOLS:
                return {
                    "action": tool_name,
                    "success": False,
                    "message": f"Direct tool access is restricted for security: {tool_name}",
                }
            return self._run_tool(startup, tool_name, arguments, action_label=tool_name, turn_index=turn_index)

        if action_type in LEGACY_ARENA_ONLY_ACTIONS:
            return None

        handler = getattr(self, f"_map_{action_type}", None)
        if handler is None:
            return {
                "action": action_type,
                "success": False,
                "message": f"Unknown action: {action_type}",
            }
        return handler(startup, params or {}, turn_index)

    def advance_week(self, startup, turn_index: int) -> dict:
        return self._run_tool(
            startup,
            "sim.advance",
            {"advance_by": 1, "unit": "week"},
            action_label="sim.advance",
            turn_index=turn_index,
        )

    def _map_build_feature(self, startup, params: dict, turn_index: int) -> dict:
        focus = str(params.get("focus", "general"))
        focus_delta = {
            "core": 0.07,
            "ux": 0.05,
            "scale": 0.04,
            "growth": 0.04,
            "polish": 0.05,
            "quality": 0.06,
            "security": 0.06,
            "general": 0.05,
        }.get(focus, 0.05)
        cost = 15000
        if startup.cash < cost:
            return {"action": "build_feature", "success": False, "message": "Not enough cash to build features"}
        result = self._run_tool(
            startup,
            "product.roadmap.write",
            {
                "roadmap_items_delta": 1,
                "onboarding_quality_delta": focus_delta,
                "budget_change_monthly_burn_usd": 2200,
            },
            action_label="build_feature",
            turn_index=turn_index,
        )
        if result["success"]:
            startup.cash = startup.cash - cost
            startup.features_built = startup.features_built + 1
            if focus in {"ux", "quality", "polish", "security"}:
                self._bump_metric(startup, "customers", "trust_score", 0.025)
                self._bump_metric(startup, "customers", "monthly_churn_rate", -0.004)
            if focus in {"security", "quality"}:
                self._bump_metric(startup, "risk", "regulatory_pressure", -0.05)
                self._bump_metric(startup, "risk", "compliance_backlog", -1.0, maximum=1000.0)
            result["quality_gain"] = max(1, startup.product_quality - int(result.get("before_product_quality", startup.product_quality)))
            result["message"] = f"Built {focus} roadmap work through simulator product planning."
        return result

    def _map_hire(self, startup, params: dict, turn_index: int) -> dict:
        role = str(params.get("role", "engineer"))
        salary = {"engineer": 12000, "marketer": 9000, "salesperson": 10000, "designer": 10000}.get(role, 10000)
        signing_bonus = salary
        if startup.cash < signing_bonus:
            return {"action": "hire", "success": False, "message": "Not enough cash for signing bonus"}
        startup.queue_hire_roles(role, count=1)
        result = self._run_tool(
            startup,
            "people.hiring.update",
            {
                "accepted_hires": 1,
                "open_roles_delta": 1,
                "critical_roles_delta": 1 if role in {"engineer", "salesperson"} else 0,
                "monthly_burn_change_usd": salary,
                "hiring_plan": {"role": role, "arena_action": "hire"},
            },
            action_label="hire",
            turn_index=turn_index,
        )
        if result["success"]:
            startup.cash = startup.cash - signing_bonus
            startup.sync_team_roster()
            if role in {"engineer", "designer"}:
                self._bump_metric(startup, "team", "morale", 0.03)
            result["member"] = startup.team[-1].to_dict()
            result["message"] = f"Hired {result['member']['name']} as {role} via simulator hiring flow."
        return result

    def _map_fundraise(self, startup, params: dict, turn_index: int) -> dict:
        requested_round = str(params.get("round", "angel"))
        round_terms = {
            "angel": {"raise_amount_usd": 120000, "dilution_pct": 0.08, "transaction_cost_usd": 6000},
            "seed": {"raise_amount_usd": 350000, "dilution_pct": 0.14, "transaction_cost_usd": 12000},
            "series_a": {"raise_amount_usd": 1200000, "dilution_pct": 0.18, "transaction_cost_usd": 24000},
            "series_b": {"raise_amount_usd": 2800000, "dilution_pct": 0.22, "transaction_cost_usd": 45000},
        }
        total_raised = startup.total_raised
        minimum_round = "angel"
        if total_raised >= 1_500_000:
            minimum_round = "series_a"
        elif total_raised >= 300_000:
            minimum_round = "seed"
        if requested_round not in round_terms:
            return {"action": "fundraise", "success": False, "message": "Invalid round"}
        round_type = ROUND_ORDER[max(ROUND_ORDER.index(requested_round), ROUND_ORDER.index(minimum_round))]
        last_raise_turn = getattr(startup, "last_fundraise_turn", None)
        if last_raise_turn is not None and turn_index - int(last_raise_turn) < 3:
            return {"action": "fundraise", "success": False, "message": "Investors will not take another round this soon"}
        config = round_terms.get(round_type)
        if config is None:
            return {"action": "fundraise", "success": False, "message": "Invalid round"}
        result = self._run_tool(
            startup,
            "finance.raise.propose",
            {
                **config,
                "financing_risk_reduction": 0.2,
                "trust_delta": -0.005 if round_type in {"series_a", "series_b"} else 0.0,
            },
            action_label="fundraise",
            turn_index=turn_index,
        )
        if result["success"]:
            startup.last_fundraise_turn = turn_index
            startup.total_raised = startup.total_raised + int(config["raise_amount_usd"])
            startup.funding_round = round_type
            startup.dilution = startup.dilution
            result["amount"] = int(config["raise_amount_usd"])
            result["dilution"] = round(float(startup.world_state["finance"].get("dilution_index", 0.0)), 3)
            result["message"] = f"Proposed and closed a {round_type} raise through simulator finance tools."
        return result

    def _map_acquire_users(self, startup, params: dict, turn_index: int) -> dict:
        channel = str(params.get("channel", "organic"))
        channel_config = {
            "organic": {"cost": 5000, "users": 140, "burn": 800, "pipeline": 1, "pipeline_usd": 12000, "trust": 0.005},
            "paid_ads": {"cost": 20000, "users": 420, "burn": 3500, "pipeline": 2, "pipeline_usd": 32000, "trust": -0.002},
            "viral": {"cost": 8000, "users": 680, "burn": 1400, "pipeline": 1, "pipeline_usd": 18000, "trust": 0.01},
            "partnerships": {"cost": 15000, "users": 300, "burn": 2400, "pipeline": 2, "pipeline_usd": 26000, "trust": 0.01},
        }
        config = channel_config.get(channel)
        if config is None:
            return {"action": "acquire_users", "success": False, "message": "Invalid acquisition channel"}
        if startup.cash < config["cost"]:
            return {"action": "acquire_users", "success": False, "message": "Not enough cash for growth spend"}
        experiment = self._run_tool(
            startup,
            "growth.experiment.create",
            {
                "experiment_name": f"{channel}_turn_{turn_index}",
                "channel": channel,
                "budget_change_monthly_burn_usd": config["burn"],
                "weighted_pipeline_usd_delta": config["pipeline_usd"] * 0.4,
                "pipeline_count_delta": config["pipeline"] - 1,
                "trust_delta": config["trust"],
                "activation_delta": 0.02,
                "demand_index_delta": 0.01 if channel in {"viral", "partnerships"} else 0.0,
            },
            action_label="acquire_users",
            turn_index=turn_index,
        )
        sales = self._run_tool(
            startup,
            "sales.pipeline.update",
            {
                "pipeline_count_delta": config["pipeline"],
                "weighted_pipeline_usd_delta": config["pipeline_usd"],
                "closed_won_revenue_delta_usd": 1200 if channel == "partnerships" else 0,
            },
            action_label="acquire_users",
            turn_index=turn_index,
        )
        success = experiment["success"] and sales["success"]
        result = {
            "action": "acquire_users",
            "success": success,
            "message": f"Ran simulator growth + sales motion on {channel}.",
            "tool_results": [experiment, sales],
        }
        if success:
            startup.cash = startup.cash - config["cost"]
            startup.users = startup.users + config["users"]
            startup.brand = min(100, startup.brand + (4 if channel in {"viral", "partnerships"} else 2))
            result["users_gained"] = config["users"]
        return result

    def _map_cut_costs(self, startup, params: dict, turn_index: int) -> dict:
        target = str(params.get("target", "general"))
        plan = self._run_tool(
            startup,
            "finance.plan.write",
            {"budget_changes": {"monthly_burn_usd": -4200}},
            action_label="cut_costs",
            turn_index=turn_index,
        )
        org = self._run_tool(
            startup,
            "people.org.adjust",
            {
                "morale_delta": -0.08,
                "attrition_risk_delta": 0.06,
                "bandwidth_load_delta": 0.07,
                "monthly_burn_change_usd": -2800,
                "onboarding_quality_delta": -0.03,
            },
            action_label="cut_costs",
            turn_index=turn_index,
        )
        savings = 7000
        if target == "layoff":
            member = startup.remove_last_non_founder()
            if member is not None:
                startup.world_state["finance"]["monthly_burn_usd"] = max(
                    0.0,
                    float(startup.world_state["finance"].get("monthly_burn_usd", 0.0)) - member.salary,
                )
                startup.recalculate()
                savings += member.salary
        return {
            "action": "cut_costs",
            "success": plan["success"] and org["success"],
            "message": f"Cut costs through simulator finance + org adjustments ({target}).",
            "savings": savings,
            "tool_results": [plan, org],
        }

    def _map_launch_pr(self, startup, params: dict, turn_index: int) -> dict:
        if startup.cash < 10000:
            return {"action": "launch_pr", "success": False, "message": "Not enough cash for PR"}
        board = self._run_tool(
            startup,
            "board.update",
            {
                "summary": f"PR launch plan for {startup.startup_name}",
                "forecast": {"brand_push": True, "turn": turn_index},
                "asks": ["Support brand amplification"],
            },
            action_label="launch_pr",
            turn_index=turn_index,
        )
        sales = self._run_tool(
            startup,
            "sales.pipeline.update",
            {
                "pipeline_count_delta": 1,
                "weighted_pipeline_usd_delta": 18000,
                "closed_won_revenue_delta_usd": 800,
            },
            action_label="launch_pr",
            turn_index=turn_index,
        )
        startup.cash = startup.cash - 10000
        startup.brand = min(100, startup.brand + 9)
        startup.users = startup.users + 160
        self._bump_metric(startup, "customers", "trust_score", 0.015)
        return {
            "action": "launch_pr",
            "success": board["success"] and sales["success"],
            "message": "Ran board + commercial update to simulate a PR push.",
            "brand_gain": 9,
            "user_gain": 160,
            "tool_results": [board, sales],
        }

    def _map_support_recovery(self, startup, params: dict, turn_index: int) -> dict:
        backlog = float(startup.world_state.get("operations", {}).get("support_backlog", 0.0))
        intensity = "major" if backlog > 25 else "standard"
        response = self._run_tool(
            startup,
            "ops.support.resolve",
            {
                "backlog_reduction": 18 if intensity == "major" else 10,
                "sla_risk_reduction": 0.18 if intensity == "major" else 0.1,
                "trust_recovery": 0.05 if intensity == "major" else 0.03,
                "churn_reduction": 0.008 if intensity == "major" else 0.004,
                "monthly_burn_increase_usd": 6000 if intensity == "major" else 3500,
            },
            action_label="support_recovery",
            turn_index=turn_index,
        )
        if response["success"]:
            response["message"] = "Ran a simulator support recovery plan to reduce backlog and rebuild trust."
        return response

    def _map_incident_response(self, startup, params: dict, turn_index: int) -> dict:
        response = self._run_tool(
            startup,
            "ops.incident.respond",
            {
                "incident_reduction": 1,
                "trust_recovery": 0.06,
                "churn_reduction": 0.008,
                "monthly_burn_increase_usd": 9000,
                "customer_comms_plan": "rapid disclosure and resolution",
            },
            action_label="incident_response",
            turn_index=turn_index,
        )
        if response["success"]:
            response["message"] = "Activated a simulator incident response plan."
        return response

    def _map_compliance_response(self, startup, params: dict, turn_index: int) -> dict:
        response = self._run_tool(
            startup,
            "legal.compliance.respond",
            {
                "pressure_reduction": 0.2,
                "matters_reduction": 1,
                "compliance_backlog_reduction": 5,
                "trust_recovery": 0.02,
                "monthly_burn_increase_usd": 7000,
            },
            action_label="compliance_response",
            turn_index=turn_index,
        )
        if response["success"]:
            response["message"] = "Ran a simulator compliance response to reduce legal and regulatory pressure."
        return response

    def _map_board_sync(self, startup, params: dict, turn_index: int) -> dict:
        response = self._run_tool(
            startup,
            "board.update",
            {
                "update_type": params.get("update_type", "operating_update"),
                "summary": f"{startup.startup_name} board update for week {turn_index}",
                "forecast": {
                    "cash": startup.cash,
                    "revenue": startup.revenue,
                    "users": startup.users,
                    "trust_score": startup.world_state.get("customers", {}).get("trust_score"),
                    "support_backlog": startup.world_state.get("operations", {}).get("support_backlog"),
                },
                "asks": ["support recovery", "capital discipline", "focus"],
            },
            action_label="board_sync",
            turn_index=turn_index,
        )
        if response["success"]:
            self._bump_metric(startup, "risk", "financing_pressure", -0.04)
            response["message"] = "Sent a formal simulator board update and reduced financing uncertainty."
        return response

    def _map_research(self, startup, params: dict, turn_index: int) -> dict:
        if startup.cash > 0:
            startup.cash = max(0, startup.cash - 5000)
        result = self._run_tool(
            startup,
            "research.market.read",
            {},
            action_label="research",
            turn_index=turn_index,
        )
        market = startup.world_state.get("market", {})
        result["insights"] = {
            "competitor_pressure_index": market.get("competitor_pressure_index", market.get("competitor_pressure")),
            "pricing_pressure_index": market.get("pricing_pressure_index", market.get("pricing_pressure")),
            "demand_index": market.get("demand_index"),
            "segment_mix_index": startup.world_state.get("customers", {}).get("segment_mix_index"),
            "market_reads_count": market.get("market_reads_count", 0),
            "trust_score": startup.world_state.get("customers", {}).get("trust_score"),
            "monthly_churn_rate": startup.world_state.get("customers", {}).get("monthly_churn_rate"),
            "support_backlog": startup.world_state.get("operations", {}).get("support_backlog"),
            "regulatory_pressure": startup.world_state.get("risk", {}).get("regulatory_pressure"),
        }
        result["message"] = "Simulator market research complete."
        return result

    def _run_tool(self, startup, tool_name: str, arguments: dict, *, action_label: str, turn_index: int) -> dict:
        before_product_quality = startup.product_quality
        response = execute_tool_call(
            startup.runtime,
            {
                "tool_name": tool_name,
                "request_id": f"{startup.id}_{turn_index}_{tool_name.replace('.', '_')}",
                "arguments": arguments,
            },
        )
        startup.recalculate()
        return {
            "action": action_label,
            "success": bool(response.get("ok")),
            "message": response.get("error_message", f"{tool_name} executed"),
            "tool_name": tool_name,
            "result": response.get("result", {}),
            "state_delta_summary": response.get("state_delta_summary", {}),
            "before_product_quality": before_product_quality,
        }
