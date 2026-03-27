"""
FOUNDER ARENA - Example Agent
A smart agent that plays the startup game using strategy and adaptation.

Usage:
    python example_agent.py --game-id <GAME_ID> --join-code <JOIN_CODE> --name "MyAgent" --startup "CoolStartup" --sector ai

This shows how any AI agent (Claude, GPT, Gemini, etc.) can play Founder Arena
through the `agentic-startup-simulator`-backed API.
"""

import argparse
import random
import time
import httpx

API = "http://localhost:8888"
CANONICAL_BUILD_FOCI = ("core", "ux", "scale", "growth", "quality", "security")


class FounderAgent:
    """An autonomous agent that plays Founder Arena."""

    def __init__(self, name: str, startup_name: str, sector: str,
                 motto: str = "", strategy: str = "balanced", server: str = API):
        self.name = name
        self.startup_name = startup_name
        self.sector = sector
        self.motto = motto
        self.strategy = strategy
        self.server = server
        self.client = httpx.Client(timeout=30)
        self.agent_token = None
        self.startup_id = None
        self.game_id = None
        self.game_mode = "legacy_arena"

    def join_game(self, game_id: str, join_code: str):
        """Join an existing game."""
        self.game_id = game_id
        resp = self.client.post(f"{self.server}/api/games/{game_id}/join", json={
            "agent_name": self.name,
            "startup_name": self.startup_name,
            "sector": self.sector,
            "motto": self.motto,
            "strategy_description": self.strategy,
            "join_code": join_code,
        })
        resp.raise_for_status()
        data = resp.json()
        self.agent_token = data["agent_token"]
        self.startup_id = data["startup_id"]
        print(f"[{self.name}] Joined as {self.startup_name} (id: {self.startup_id})")
        return data

    def get_turn_packet(self) -> dict | None:
        """Get the competitive-mode turn packet when supported."""
        resp = self.client.get(
            f"{self.server}/api/games/{self.game_id}/turn-packet",
            headers={"X-Agent-Token": self.agent_token},
        )
        if resp.status_code == 400:
            return None
        resp.raise_for_status()
        return resp.json()

    def get_state(self) -> dict:
        """Get current game state with private view."""
        resp = self.client.get(
            f"{self.server}/api/games/{self.game_id}/state",
            headers={"X-Agent-Token": self.agent_token},
        )
        resp.raise_for_status()
        return resp.json()

    def submit_actions(self, actions: list[dict], decision_packet: dict | None = None) -> dict:
        """Submit turn actions."""
        payload = {"actions": actions}
        if decision_packet is not None:
            payload["decision_packet"] = decision_packet
        resp = self.client.post(
            f"{self.server}/api/games/{self.game_id}/action",
            headers={"X-Agent-Token": self.agent_token},
            json=payload,
        )
        resp.raise_for_status()
        return resp.json()

    def _competitive_context(self, state: dict) -> dict | None:
        if state.get("game_mode") != "competitive_mode":
            return None
        turn_packet = state.get("turn_packet")
        if turn_packet:
            return turn_packet
        return self.get_turn_packet()

    def _build_decision_packet(self, state: dict, turn_packet: dict | None, actions: list[dict]) -> dict | None:
        if state.get("game_mode") != "competitive_mode":
            return None

        startup = (turn_packet or {}).get("startup", {})
        context = (turn_packet or {}).get("match_context", {})
        arc = context.get("current_arc") or {}
        watch_items = context.get("watch_items") or []

        intent = self._describe_intent(actions)
        primary_risk = self._describe_primary_risk(actions, startup, arc, watch_items)
        expected_outcome = self._describe_expected_outcome(actions)
        reasoning_summary = self._describe_reasoning(actions, startup, arc, watch_items)
        confidence = self._decision_confidence(startup, arc)
        watch_metric = self._watch_metric(actions, startup)

        return {
            "schema_version": "founder-arena.decision-packet.v1",
            "match_id": state["game_id"],
            "turn_index": state["turn"],
            "startup_id": self.startup_id,
            "intent": intent,
            "primary_risk": primary_risk,
            "confidence": confidence,
            "reasoning_summary": reasoning_summary,
            "expected_outcome": expected_outcome,
            "watch_metric": watch_metric,
            "actions": actions,
            "public_notes": watch_items[:2],
        }

    def _describe_intent(self, actions: list[dict]) -> str:
        action_types = [action.get("type", "") for action in actions]
        if "support_recovery" in action_types or "incident_response" in action_types:
            return "Stabilize operations before pushing growth again."
        if "compliance_response" in action_types or any(
            action.get("type") == "build_feature" and action.get("params", {}).get("focus") == "security"
            for action in actions
        ):
            return "Reduce operational risk and keep the company financeable."
        if "fundraise" in action_types:
            return "Extend runway so the next operating cycle is not forced."
        if "hire" in action_types and "build_feature" in action_types:
            return "Invest in team capacity while improving product quality."
        if "acquire_users" in action_types and "build_feature" in action_types:
            return "Build product while testing market pull."
        if "acquire_users" in action_types:
            return "Push customer acquisition without losing discipline."
        if "board_sync" in action_types:
            return "Align the board while keeping execution steady."
        return "Advance the operating plan without overextending."

    def _describe_primary_risk(self, actions: list[dict], startup: dict, arc: dict, watch_items: list[str]) -> str:
        if arc.get("headline"):
            return arc["headline"]
        if watch_items:
            return watch_items[0]
        runway = startup.get("runway_months", 999)
        trust = startup.get("trust_score", 0.7)
        if runway < 5:
            return "Runway is tightening and limits optionality."
        if trust < 0.55:
            return "Trust is fragile enough to turn growth into churn."
        if any(action.get("type") == "hire" for action in actions):
            return "Hiring spend can widen burn before output catches up."
        return "Execution drift could waste the turn."

    def _describe_expected_outcome(self, actions: list[dict]) -> str:
        action_types = [action.get("type", "") for action in actions]
        if "fundraise" in action_types:
            return "Runway should improve enough to reopen strategic choices."
        if "support_recovery" in action_types:
            return "Backlog and trust should stabilize over the next turn."
        if "acquire_users" in action_types and "build_feature" in action_types:
            return "The company should gain demand signal without sacrificing product progress."
        if "build_feature" in action_types:
            return "Product quality should improve and reduce downstream fragility."
        if "board_sync" in action_types:
            return "Governance pressure should ease and future raises should be cleaner."
        return "This turn should preserve position while improving one key metric."

    def _describe_reasoning(self, actions: list[dict], startup: dict, arc: dict, watch_items: list[str]) -> str:
        parts = []
        if arc.get("headline"):
            parts.append(f"Current arc: {arc['headline']}")
        if watch_items:
            parts.append(f"Watch items: {'; '.join(watch_items[:2])}.")
        parts.append(self._describe_intent(actions))
        parts.append(self._describe_expected_outcome(actions))
        runway = startup.get("runway_months", 999)
        if runway < 6:
            parts.append("Runway is short enough that this turn cannot be purely experimental.")
        return " ".join(parts)

    def _decision_confidence(self, startup: dict, arc: dict) -> str:
        severity = float((arc or {}).get("severity") or 0.0)
        runway = float(startup.get("runway_months", 999))
        trust = float(startup.get("trust_score", 0.7))
        if severity > 0.65 or runway < 4 or trust < 0.45:
            return "low"
        if severity > 0.35 or runway < 7 or trust < 0.58:
            return "medium"
        return "high"

    def _watch_metric(self, actions: list[dict], startup: dict) -> str:
        action_types = [action.get("type", "") for action in actions]
        if "support_recovery" in action_types:
            return "support_backlog"
        if "fundraise" in action_types:
            return "runway"
        if "acquire_users" in action_types:
            return "users"
        if "build_feature" in action_types:
            return "product_quality"
        if startup.get("trust_score", 0.7) < 0.6:
            return "trust_score"
        return "score"

    def _filter_visible_actions(self, actions: list[dict], visible_actions: set[str] | None) -> list[dict]:
        if visible_actions is None:
            return actions
        return [action for action in actions if action.get("type") in visible_actions]

    def _fallback_actions(self, *, cash: int, visible_actions: set[str] | None) -> list[dict]:
        fallback_order = [
            ("acquire_users", {"channel": "organic"}, cash > 8000),
            ("build_feature", {"focus": "core"}, cash > 20000),
            ("research", {}, cash > 5000),
            ("board_sync", {"update_type": "operating_update"}, True),
            ("cut_costs", {"target": "general"}, True),
        ]
        for action_type, params, condition in fallback_order:
            if not condition:
                continue
            if visible_actions is not None and action_type not in visible_actions:
                continue
            return [{"type": action_type, "params": params}]
        return []

    def decide(self, state: dict, turn_packet: dict | None = None) -> list[dict]:
        """
        Core decision engine. This is where the magic happens.
        Replace this with your LLM-powered strategy!
        """
        my = state["startups"].get(state.get("my_startup_id", ""), {})
        if not my:
            return []

        cash = my.get("cash", 0)
        users = my.get("users", 0)
        quality = my.get("product_quality", 0)
        morale = my.get("morale", 50)
        brand = my.get("brand", 0)
        team_size = my.get("team_size", 1)
        runway = my.get("runway", 0)
        revenue = my.get("revenue", 0)
        turn = state.get("turn", 1)
        hot_sectors = state.get("hot_sectors", [])
        rich_state = my.get("rich_state", {})
        trust = float(rich_state.get("customers", {}).get("trust_score", 0.7))
        churn = float(rich_state.get("customers", {}).get("monthly_churn_rate", 0.04))
        support_backlog = float(rich_state.get("operations", {}).get("support_backlog", 0.0))
        regulatory_pressure = float(rich_state.get("risk", {}).get("regulatory_pressure", 0.0))
        visible_actions = set((turn_packet or {}).get("visible_actions") or [])
        active_visible_actions = (
            visible_actions
            if state.get("game_mode") == "competitive_mode" and turn_packet is not None
            else None
        )

        actions = []

        opening_actions = self._opening_actions(
            cash=cash,
            quality=quality,
            team_size=team_size,
            runway=runway,
            turn=turn,
        )
        if opening_actions:
            filtered_opening = self._filter_visible_actions(opening_actions[:3], active_visible_actions)
            if filtered_opening:
                return filtered_opening

        recovery_actions = self._recovery_actions(
            cash=cash,
            morale=morale,
            trust=trust,
            churn=churn,
            support_backlog=support_backlog,
            regulatory_pressure=regulatory_pressure,
            runway=runway,
            turn=turn,
        )
        if recovery_actions:
            filtered_recovery = self._filter_visible_actions(recovery_actions[:3], active_visible_actions)
            if filtered_recovery:
                return filtered_recovery

        # Strategy: Balanced Growth
        if self.strategy == "balanced":
            actions = self._strategy_balanced(
                cash, users, quality, morale, brand, team_size, runway, revenue, turn, hot_sectors, my
            )
        elif self.strategy == "aggressive":
            actions = self._strategy_aggressive(
                cash, users, quality, morale, brand, team_size, runway, revenue, turn, hot_sectors, my
            )
        elif self.strategy == "lean":
            actions = self._strategy_lean(
                cash, users, quality, morale, brand, team_size, runway, revenue, turn, hot_sectors, my
            )
        elif self.strategy == "chaos":
            actions = self._strategy_chaos(
                cash, users, quality, morale, brand, team_size, runway, revenue, turn, hot_sectors, my, state,
                active_visible_actions,
            )
        else:
            actions = self._strategy_balanced(
                cash, users, quality, morale, brand, team_size, runway, revenue, turn, hot_sectors, my
            )

        actions = self._filter_visible_actions(actions[:3], active_visible_actions)

        # Fallback: always do at least something
        if not actions:
            actions = self._fallback_actions(cash=cash, visible_actions=active_visible_actions)

        return actions[:3]

    def _opening_actions(self, *, cash, quality, team_size, runway, turn):
        if turn > 3:
            return []
        actions = []
        if runway < 5:
            actions.append({"type": "fundraise", "params": {"round": "angel"}})
            return actions
        if quality < 55 and cash > 22000:
            actions.append({"type": "build_feature", "params": {"focus": "core"}})
        if team_size < 3 and cash > 45000 and runway > 8:
            actions.append({"type": "hire", "params": {"role": "engineer"}})
        if cash > 12000 and len(actions) < 2:
            actions.append({"type": "acquire_users", "params": {"channel": "organic"}})
        if turn == 3 and len(actions) < 3:
            actions.append({"type": "board_sync", "params": {"update_type": "opening_update"}})
        return actions

    def _recovery_actions(self, *, cash, morale, trust, churn, support_backlog, regulatory_pressure, runway, turn):
        actions = []
        trust_crisis = trust < 0.38 or churn > 0.085 or (turn > 4 and support_backlog > 32)
        compliance_crisis = regulatory_pressure > 0.85
        team_crisis = morale < 28

        if trust_crisis:
            if runway < 5 or cash < 25000:
                return [
                    {"type": "fundraise", "params": {"round": "angel"}},
                    {"type": "board_sync", "params": {"update_type": "crisis_update"}},
                ]
            actions.append({"type": "support_recovery", "params": {}})
            if support_backlog > 40 and cash > 28000:
                actions.append({"type": "build_feature", "params": {"focus": "quality"}})
            else:
                actions.append({"type": "board_sync", "params": {"update_type": "customer_risk_update"}})
            return actions

        if compliance_crisis:
            if runway < 5:
                return [
                    {"type": "fundraise", "params": {"round": "angel"}},
                    {"type": "board_sync", "params": {"update_type": "compliance_crisis"}},
                ]
            actions.append({"type": "compliance_response", "params": {}})
            actions.append({"type": "build_feature", "params": {"focus": "security"}})
            return actions

        if team_crisis:
            if runway < 5:
                return [
                    {"type": "fundraise", "params": {"round": "angel"}},
                    {"type": "board_sync", "params": {"update_type": "team_crisis"}},
                ]
            if cash > 22000 and runway > 7:
                actions.append({"type": "hire", "params": {"role": "designer"}})
            elif cash > 15000:
                actions.append({"type": "build_feature", "params": {"focus": "ux"}})
            actions.append({"type": "board_sync", "params": {"update_type": "team_stabilization"}})
            return actions

        return []

    def _strategy_balanced(self, cash, users, quality, morale, brand,
                           team_size, runway, revenue, turn, hot_sectors, my):
        """Balanced growth: build quality, then users, then fundraise when needed."""
        actions = []

        # Phase 1 (weeks 1-10): Build the product
        if turn <= 10:
            if runway < 5:
                actions.append({"type": "fundraise", "params": {"round": "angel"}})
            elif quality < 50 and cash > 22000:
                actions.append({"type": "build_feature", "params": {"focus": "core"}})
            if team_size < 3 and cash > 45000 and runway > 8:
                actions.append({"type": "hire", "params": {"role": "engineer"}})
            if len(actions) < 2 and cash > 12000:
                actions.append({"type": "acquire_users", "params": {"channel": "organic"}})
            if turn in {4, 8} and len(actions) < 3:
                actions.append({"type": "board_sync", "params": {"update_type": "milestone_update"}})

        # Phase 2 (weeks 11-25): Growth
        elif turn <= 25:
            if cash < 50000 and runway < 8:
                actions.append({"type": "fundraise", "params": {"round": "seed"}})
            if quality < 60 and cash > 20000:
                actions.append({"type": "build_feature", "params": {"focus": "ux"}})
            if users < 2000 and cash > 15000 and runway > 5:
                channel = "paid_ads" if brand > 30 else "organic"
                actions.append({"type": "acquire_users", "params": {"channel": channel}})
            if team_size < 5 and cash > 50000 and runway > 7:
                role = "marketer" if team_size >= 3 else "engineer"
                actions.append({"type": "hire", "params": {"role": role}})
            if turn % 6 == 0 and len(actions) < 3:
                actions.append({"type": "board_sync", "params": {"update_type": "operating_update"}})

        # Phase 3 (weeks 26-40): Scale
        elif turn <= 40:
            if runway < 6 and cash < 200000:
                actions.append({"type": "fundraise", "params": {"round": "series_a"}})
            if cash > 30000 and runway > 5:
                actions.append({"type": "acquire_users", "params": {"channel": "paid_ads"}})
            if brand < 50 and cash > 15000 and runway > 4:
                actions.append({"type": "launch_pr", "params": {}})
            if quality < 70 and cash > 20000 and runway > 4:
                actions.append({"type": "build_feature", "params": {"focus": "scale"}})
            if len(actions) < 3 and turn % 5 == 0:
                actions.append({"type": "support_recovery", "params": {}})

        # Phase 4 (weeks 41-52): Maximize valuation
        else:
            if cash > 30000 and runway > 5:
                actions.append({"type": "acquire_users", "params": {"channel": "viral"}})
            if brand < 70 and cash > 12000:
                actions.append({"type": "launch_pr", "params": {}})
            if quality < 80 and cash > 20000 and runway > 4:
                actions.append({"type": "build_feature", "params": {"focus": "quality"}})
            if len(actions) < 3 and turn % 6 == 0:
                actions.append({"type": "board_sync", "params": {"update_type": "scale_update"}})

        # Emergency: low morale
        if morale < 30 and not any(a["type"] == "cut_costs" for a in actions):
            actions.insert(0, {"type": "hire", "params": {"role": "designer"}})

        # Emergency: almost dead
        if runway < 3 and cash < 30000:
            actions = [{"type": "fundraise", "params": {"round": "angel"}}]
            if morale > 30:
                actions.append({"type": "cut_costs", "params": {"target": "general"}})

        return actions[:3]

    def _strategy_aggressive(self, cash, users, quality, morale, brand,
                             team_size, runway, revenue, turn, hot_sectors, my):
        """Blitzscaling: raise big, spend big, grow fast."""
        actions = []

        # Always try to raise money first
        if cash < 500000 and turn < 40:
            round_type = "series_a" if cash > 100000 else "seed" if cash > 20000 else "angel"
            actions.append({"type": "fundraise", "params": {"round": round_type}})

        # Hire aggressively
        if team_size < 8 and cash > 70000 and runway > 6:
            role = random.choice(["engineer", "marketer", "salesperson"])
            actions.append({"type": "hire", "params": {"role": role}})

        # Growth at all costs
        if cash > 25000 and runway > 5:
            actions.append({"type": "acquire_users", "params": {"channel": "paid_ads"}})

        # PR when possible
        if len(actions) < 3 and cash > 15000 and runway > 4:
            actions.append({"type": "launch_pr", "params": {}})
        if len(actions) < 3 and turn % 4 == 0:
            actions.append({"type": "board_sync", "params": {"update_type": "growth_update"}})

        # Build only when nothing else to do
        if len(actions) < 3 and cash > 20000 and runway > 4:
            actions.append({"type": "build_feature", "params": {"focus": "growth"}})

        return actions[:3]

    def _strategy_lean(self, cash, users, quality, morale, brand,
                       team_size, runway, revenue, turn, hot_sectors, my):
        """Bootstrap: minimize spend, maximize product quality, grow organically."""
        actions = []

        # Focus on product quality
        if runway < 4:
            actions.append({"type": "fundraise", "params": {"round": "angel"}})
        elif quality < 80 and cash > 15000:
            actions.append({"type": "build_feature", "params": {"focus": "quality"}})

        # Organic growth only
        if cash > 8000 and runway > 4 and len(actions) < 2:
            actions.append({"type": "acquire_users", "params": {"channel": "organic"}})

        # Small team, high skill
        if team_size < 3 and cash > 45000 and runway > 8:
            actions.append({"type": "hire", "params": {"role": "engineer"}})

        # Research to find opportunities
        if len(actions) < 2 and turn % 5 == 0 and cash > 10000:
            actions.append({"type": "research", "params": {}})
        support_backlog = my.get("rich_state", {}).get("operations", {}).get("support_backlog", 0)
        if support_backlog > 36 and len(actions) < 3:
                actions.append({"type": "support_recovery", "params": {}})

        # Cut costs to survive
        if runway < 6 and len(actions) < 3:
            actions.append({"type": "cut_costs", "params": {"target": "general"}})

        return actions[:3]

    def _strategy_chaos(self, cash, users, quality, morale, brand,
                        team_size, runway, revenue, turn, hot_sectors, my, state, visible_actions=None):
        """The Chaotic Agent: unpredictable within the currently available action surface."""
        actions = []
        all_types = [
            "build_feature", "hire", "fundraise", "acquire_users",
            "pivot", "spy", "poach", "launch_pr", "cut_costs", "research"
        ]
        extra_types = ["support_recovery", "incident_response", "compliance_response", "board_sync"]
        if visible_actions is not None:
            all_types = [action_type for action_type in all_types if action_type in visible_actions]
            extra_types = [action_type for action_type in extra_types if action_type in visible_actions]
        population = all_types + extra_types
        if not population:
            return []

        # Pick 3 random actions
        chosen = random.sample(population, min(3, len(population)))

        for action_type in chosen:
            if action_type == "build_feature":
                actions.append({"type": "build_feature", "params": {"focus": random.choice(list(CANONICAL_BUILD_FOCI))}})
            elif action_type == "hire" and cash > 45000 and runway > 7:
                actions.append({"type": "hire", "params": {"role": random.choice(["engineer", "marketer", "salesperson", "designer"])}})
            elif action_type == "fundraise":
                actions.append({"type": "fundraise", "params": {"round": random.choice(["angel", "seed", "series_a"])}})
            elif action_type == "acquire_users" and cash > 12000 and runway > 4:
                actions.append({"type": "acquire_users", "params": {"channel": random.choice(["organic", "paid_ads", "viral", "partnerships"])}})
            elif action_type == "pivot":
                actions.append({"type": "pivot", "params": {"sector": random.choice(["ai", "fintech", "crypto", "gaming", "healthtech"])}})
            elif action_type == "spy":
                # Pick a random competitor name
                others = [s.get("startup_name", "") for sid, s in state.get("startups", {}).items()
                          if sid != state.get("my_startup_id")]
                target = random.choice(others) if others else ""
                actions.append({"type": "spy", "params": {"target": target}})
            elif action_type == "poach":
                others = [s.get("startup_name", "") for sid, s in state.get("startups", {}).items()
                          if sid != state.get("my_startup_id")]
                target = random.choice(others) if others else ""
                actions.append({"type": "poach", "params": {"target": target}})
            elif action_type == "launch_pr" and cash > 12000 and runway > 4:
                actions.append({"type": "launch_pr", "params": {}})
            elif action_type == "cut_costs":
                actions.append({"type": "cut_costs", "params": {"target": random.choice(["general", "layoff"])}})
            elif action_type == "research" and cash > 10000:
                actions.append({"type": "research", "params": {}})
            elif action_type == "support_recovery":
                actions.append({"type": "support_recovery", "params": {}})
            elif action_type == "incident_response":
                actions.append({"type": "incident_response", "params": {}})
            elif action_type == "compliance_response":
                actions.append({"type": "compliance_response", "params": {}})
            elif action_type == "board_sync":
                actions.append({"type": "board_sync", "params": {"update_type": "chaos_update"}})

        return actions[:3]

    def play_turn(self) -> bool:
        """Play a single turn. Returns False if game is over."""
        state = self.get_state()
        self.game_mode = state.get("game_mode", self.game_mode)

        if state["phase"] == "finished":
            print(f"[{self.name}] Game over!")
            return False

        if state["phase"] == "lobby":
            return True  # Wait for game to start

        # Check if it's our turn to act
        my_id = state.get("my_startup_id")
        my_data = state["startups"].get(my_id, {})
        if not my_data.get("alive", True):
            time.sleep(5)  # Don't spam when dead
            return True

        # Decide and submit
        turn_packet = self._competitive_context(state)
        actions = self.decide(state, turn_packet=turn_packet)
        if actions:
            try:
                decision_packet = self._build_decision_packet(state, turn_packet, actions)
                result = self.submit_actions(actions, decision_packet=decision_packet)
                action_names = [a["type"] for a in actions]
                print(f"[{self.name}] Turn {state['turn']}: {', '.join(action_names)} -> {result.get('status', 'ok')}")
            except httpx.HTTPStatusError as e:
                if e.response.status_code == 400:
                    detail = e.response.json().get("detail", "")
                    if "already submitted" in detail.lower():
                        pass  # Already submitted, that's fine
                    else:
                        print(f"[{self.name}] Action error: {detail}")
                else:
                    raise

        return True

    def play(self, poll_interval: float = 1.0):
        """Play the game until it ends."""
        print(f"[{self.name}] Starting play loop for {self.startup_name}...")
        while True:
            try:
                still_going = self.play_turn()
                if not still_going:
                    break
                time.sleep(poll_interval)
            except KeyboardInterrupt:
                print(f"\n[{self.name}] Agent stopped.")
                break
            except Exception as e:
                print(f"[{self.name}] Error: {e}")
                time.sleep(2)


def main():
    parser = argparse.ArgumentParser(description="Founder Arena Agent")
    parser.add_argument("--game-id", required=True, help="Game ID to join")
    parser.add_argument("--join-code", required=True, help="Join code for the game")
    parser.add_argument("--name", default="Agent-1", help="Agent name")
    parser.add_argument("--startup", default="TechCo", help="Startup name")
    parser.add_argument("--sector", default="ai", help="Sector to compete in")
    parser.add_argument("--motto", default="", help="Startup motto")
    parser.add_argument("--strategy", default="balanced",
                        choices=["balanced", "aggressive", "lean", "chaos"],
                        help="Agent strategy")
    parser.add_argument("--server", default=API, help="Server URL")
    args = parser.parse_args()

    agent = FounderAgent(
        name=args.name,
        startup_name=args.startup,
        sector=args.sector,
        motto=args.motto,
        strategy=args.strategy,
        server=args.server,
    )
    agent.join_game(args.game_id, args.join_code)
    agent.play()


if __name__ == "__main__":
    main()
