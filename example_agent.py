"""
FOUNDER ARENA - Example Agent
A smart agent that plays the startup game using strategy and adaptation.

Usage:
    python example_agent.py --game-id <GAME_ID> --join-code <JOIN_CODE> --name "MyAgent" --startup "CoolStartup" --sector ai

This shows how any AI agent (Claude, GPT, Gemini, etc.) can play Founder Arena
by making HTTP calls to the API.
"""

import argparse
import random
import time
import httpx

API = "http://localhost:8888"


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

    def get_state(self) -> dict:
        """Get current game state with private view."""
        resp = self.client.get(
            f"{self.server}/api/games/{self.game_id}/state",
            headers={"X-Agent-Token": self.agent_token},
        )
        resp.raise_for_status()
        return resp.json()

    def submit_actions(self, actions: list[dict]) -> dict:
        """Submit turn actions."""
        resp = self.client.post(
            f"{self.server}/api/games/{self.game_id}/action",
            headers={"X-Agent-Token": self.agent_token},
            json={"actions": actions},
        )
        resp.raise_for_status()
        return resp.json()

    def decide(self, state: dict) -> list[dict]:
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

        actions = []

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
                cash, users, quality, morale, brand, team_size, runway, revenue, turn, hot_sectors, my, state
            )
        else:
            actions = self._strategy_balanced(
                cash, users, quality, morale, brand, team_size, runway, revenue, turn, hot_sectors, my
            )

        # Fallback: always do at least something
        if not actions:
            if cash > 8000:
                actions = [{"type": "acquire_users", "params": {"channel": "organic"}}]
            else:
                actions = [{"type": "research", "params": {}}]

        return actions[:3]

    def _strategy_balanced(self, cash, users, quality, morale, brand,
                           team_size, runway, revenue, turn, hot_sectors, my):
        """Balanced growth: build quality, then users, then fundraise when needed."""
        actions = []

        # Phase 1 (weeks 1-10): Build the product
        if turn <= 10:
            if quality < 50 and cash > 20000:
                actions.append({"type": "build_feature", "params": {"focus": "core"}})
            if team_size < 3 and cash > 30000:
                actions.append({"type": "hire", "params": {"role": "engineer"}})
            if len(actions) < 3 and cash > 10000:
                actions.append({"type": "acquire_users", "params": {"channel": "organic"}})

        # Phase 2 (weeks 11-25): Growth
        elif turn <= 25:
            if cash < 50000 and runway < 8:
                actions.append({"type": "fundraise", "params": {"round": "seed"}})
            if quality < 60 and cash > 20000:
                actions.append({"type": "build_feature", "params": {"focus": "ux"}})
            if users < 2000 and cash > 15000:
                channel = "paid_ads" if brand > 30 else "organic"
                actions.append({"type": "acquire_users", "params": {"channel": channel}})
            if team_size < 5 and cash > 40000:
                role = "marketer" if team_size >= 3 else "engineer"
                actions.append({"type": "hire", "params": {"role": role}})

        # Phase 3 (weeks 26-40): Scale
        elif turn <= 40:
            if runway < 6 and cash < 200000:
                actions.append({"type": "fundraise", "params": {"round": "series_a"}})
            if cash > 30000:
                actions.append({"type": "acquire_users", "params": {"channel": "paid_ads"}})
            if brand < 50 and cash > 15000:
                actions.append({"type": "launch_pr", "params": {}})
            if quality < 70 and cash > 20000:
                actions.append({"type": "build_feature", "params": {"focus": "scale"}})

        # Phase 4 (weeks 41-52): Maximize valuation
        else:
            if cash > 30000:
                actions.append({"type": "acquire_users", "params": {"channel": "viral"}})
            if brand < 70:
                actions.append({"type": "launch_pr", "params": {}})
            if quality < 80 and cash > 20000:
                actions.append({"type": "build_feature", "params": {"focus": "polish"}})

        # Emergency: low morale
        if morale < 30 and not any(a["type"] == "cut_costs" for a in actions):
            actions.insert(0, {"type": "hire", "params": {"role": "designer"}})

        # Emergency: almost dead
        if runway < 3 and cash < 30000:
            actions = [{"type": "fundraise", "params": {"round": "angel"}}]
            if morale > 30:
                actions.append({"type": "cut_costs", "params": {"target": "general"}})

        # Consider pivot if sector is cold
        if turn > 15 and turn < 35 and my.get("sector") not in hot_sectors and users < 500:
            if random.random() < 0.15:
                new_sector = random.choice(hot_sectors) if hot_sectors else "ai"
                actions = [{"type": "pivot", "params": {"sector": new_sector}}]

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
        if team_size < 8 and cash > 50000:
            role = random.choice(["engineer", "marketer", "salesperson"])
            actions.append({"type": "hire", "params": {"role": role}})

        # Growth at all costs
        if cash > 25000:
            actions.append({"type": "acquire_users", "params": {"channel": "paid_ads"}})

        # PR when possible
        if len(actions) < 3 and cash > 15000:
            actions.append({"type": "launch_pr", "params": {}})

        # Build only when nothing else to do
        if len(actions) < 3 and cash > 20000:
            actions.append({"type": "build_feature", "params": {"focus": "growth"}})

        # Poach competitors when strong
        if brand > 50 and cash > 30000 and len(actions) < 3:
            others = [s for sid, s in my.items() if isinstance(s, dict) and s.get("startup_name")]
            actions.append({"type": "spy", "params": {}})

        return actions[:3]

    def _strategy_lean(self, cash, users, quality, morale, brand,
                       team_size, runway, revenue, turn, hot_sectors, my):
        """Bootstrap: minimize spend, maximize product quality, grow organically."""
        actions = []

        # Focus on product quality
        if quality < 80 and cash > 15000:
            actions.append({"type": "build_feature", "params": {"focus": "quality"}})

        # Organic growth only
        if cash > 8000:
            actions.append({"type": "acquire_users", "params": {"channel": "organic"}})

        # Small team, high skill
        if team_size < 3 and cash > 30000:
            actions.append({"type": "hire", "params": {"role": "engineer"}})

        # Research to find opportunities
        if len(actions) < 3 and turn % 5 == 0:
            actions.append({"type": "research", "params": {}})

        # Only fundraise when desperate
        if runway < 4:
            actions.insert(0, {"type": "fundraise", "params": {"round": "angel"}})

        # Cut costs to survive
        if runway < 6 and len(actions) < 3:
            actions.append({"type": "cut_costs", "params": {"target": "general"}})

        return actions[:3]

    def _strategy_chaos(self, cash, users, quality, morale, brand,
                        team_size, runway, revenue, turn, hot_sectors, my, state):
        """The Chaotic Agent: unpredictable, spies, poaches, pivots randomly."""
        actions = []
        all_types = [
            "build_feature", "hire", "fundraise", "acquire_users",
            "pivot", "spy", "poach", "launch_pr", "cut_costs", "research"
        ]

        # Pick 3 random actions
        chosen = random.sample(all_types, 3)

        for action_type in chosen:
            if action_type == "build_feature":
                actions.append({"type": "build_feature", "params": {"focus": random.choice(["ai", "ux", "speed", "security"])}})
            elif action_type == "hire":
                actions.append({"type": "hire", "params": {"role": random.choice(["engineer", "marketer", "salesperson", "designer"])}})
            elif action_type == "fundraise":
                actions.append({"type": "fundraise", "params": {"round": random.choice(["angel", "seed", "series_a"])}})
            elif action_type == "acquire_users":
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
            elif action_type == "launch_pr":
                actions.append({"type": "launch_pr", "params": {}})
            elif action_type == "cut_costs":
                actions.append({"type": "cut_costs", "params": {"target": random.choice(["general", "layoff"])}})
            elif action_type == "research":
                actions.append({"type": "research", "params": {}})

        return actions[:3]

    def play_turn(self) -> bool:
        """Play a single turn. Returns False if game is over."""
        state = self.get_state()

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
        actions = self.decide(state)
        if actions:
            try:
                result = self.submit_actions(actions)
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
