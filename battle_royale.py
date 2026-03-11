"""
FOUNDER ARENA - Battle Royale Launcher
Spawns multiple AI agents to compete in a single game.

Usage:
    python battle_royale.py              # Default: 4 agents
    python battle_royale.py --agents 6   # Custom: 6 agents
    python battle_royale.py --fast       # Fast mode: 5s turn timeout
"""

import argparse
import threading
import time
import httpx

from example_agent import FounderAgent

API = "http://localhost:8888"

# Pre-configured agent personalities
AGENT_CONFIGS = [
    {
        "name": "AlphaBot",
        "startup": "NeuralForge",
        "sector": "ai",
        "motto": "Intelligence is our product",
        "strategy": "balanced",
    },
    {
        "name": "BlazeRunner",
        "startup": "RocketScale",
        "sector": "fintech",
        "motto": "Move fast, raise faster",
        "strategy": "aggressive",
    },
    {
        "name": "ZenMaster",
        "startup": "CraftLabs",
        "sector": "saas",
        "motto": "Quality over quantity, always",
        "strategy": "lean",
    },
    {
        "name": "ChaosMonkey",
        "startup": "WildCard Inc",
        "sector": "crypto",
        "motto": "Embrace the chaos",
        "strategy": "chaos",
    },
    {
        "name": "DataDriven",
        "startup": "InsightAI",
        "sector": "healthtech",
        "motto": "Data never lies",
        "strategy": "balanced",
    },
    {
        "name": "GrowthHacker",
        "startup": "ViralLoop",
        "sector": "gaming",
        "motto": "10x or nothing",
        "strategy": "aggressive",
    },
    {
        "name": "SteadyEddie",
        "startup": "GreenStack",
        "sector": "greentech",
        "motto": "Sustainable growth wins",
        "strategy": "lean",
    },
    {
        "name": "Maverick",
        "startup": "EdgeTech",
        "sector": "edtech",
        "motto": "Disruption is education",
        "strategy": "chaos",
    },
]


def run_agent(agent: FounderAgent):
    """Run a pre-joined agent's play loop in a thread."""
    agent.play(poll_interval=0.5)


def main():
    parser = argparse.ArgumentParser(description="Founder Arena Battle Royale")
    parser.add_argument("--agents", type=int, default=4, help="Number of agents (2-8)")
    parser.add_argument("--server", default=API, help="Server URL")
    parser.add_argument("--fast", action="store_true", help="Fast mode (5s timeout)")
    parser.add_argument("--turns", type=int, default=52, help="Max turns")
    parser.add_argument("--name", default="Battle Royale", help="Game name")
    parser.add_argument("--show-spectator-token", action="store_true", help="Print the spectator token for manual dashboard access")
    args = parser.parse_args()

    num_agents = min(max(args.agents, 2), 8)
    client = httpx.Client(timeout=30)

    print("\n" + "=" * 60)
    print("  FOUNDER ARENA - BATTLE ROYALE")
    print("=" * 60)
    print(f"  Agents:   {num_agents}")
    print(f"  Server:   {args.server}")
    print(f"  Turns:    {args.turns}")
    print(f"  Timeout:  {'5s (fast)' if args.fast else '30s'}")
    print("=" * 60)

    # 1. Create game
    print("\n[Arena] Creating game...")
    resp = client.post(f"{args.server}/api/games", json={
        "name": args.name,
        "max_players": num_agents,
        "min_players": num_agents,
        "turn_timeout": 5 if args.fast else 30,
        "max_turns": args.turns,
    })
    resp.raise_for_status()
    game_data = resp.json()
    game_id = game_data["game_id"]
    join_code = game_data["join_code"]
    admin_token = game_data["admin_token"]
    spectator_token = game_data["spectator_token"]
    print(f"[Arena] Game created: {game_id}")
    if args.show_spectator_token:
        print(f"[Arena] Spectate token: {spectator_token}")
    print(f"[Arena] Spectate at: {args.server}  (game auto-selected)")

    # 2. Join all agents first (sequentially to ensure they're all in)
    configs = AGENT_CONFIGS[:num_agents]
    agents = []
    print(f"\n[Arena] Registering {num_agents} agents...")

    for config in configs:
        print(f"  -> {config['name']} ({config['startup']}) [{config['strategy']}] in {config['sector']}")
        agent = FounderAgent(
            name=config["name"],
            startup_name=config["startup"],
            sector=config["sector"],
            motto=config["motto"],
            strategy=config["strategy"],
            server=args.server,
        )
        agent.join_game(game_id, join_code)
        agents.append(agent)

    # 3. Start the game
    print(f"\n[Arena] All agents joined. Starting game...")
    resp = client.post(
        f"{args.server}/api/games/{game_id}/start",
        headers={"X-Admin-Token": admin_token},
    )
    resp.raise_for_status()
    print(f"[Arena] GAME ON! Watch the action at {args.server}")
    print("=" * 60 + "\n")

    # 4. Now start agent play loops in threads
    threads = []
    for agent in agents:
        t = threading.Thread(target=run_agent, args=(agent,), daemon=True)
        threads.append(t)
        t.start()

    # 5. Wait for game to end
    try:
        while True:
            time.sleep(3)
            resp = client.get(
                f"{args.server}/api/games/{game_id}/spectate",
                headers={"X-Spectator-Token": spectator_token},
            )
            data = resp.json()
            if data["phase"] == "finished":
                break
            alive = sum(1 for s in data["startups"].values() if s.get("alive"))
            print(f"  Turn {data['turn']}/{data['max_turns']} | {alive} startups alive")
    except KeyboardInterrupt:
        print("\n[Arena] Stopped by user.")
        return

    # 5. Show results
    resp = client.get(f"{args.server}/api/games/{game_id}/replay")
    replay = resp.json()

    print("\n" + "=" * 60)
    print("  FINAL RESULTS")
    print("=" * 60)
    for r in replay["rankings"]:
        status = "ALIVE" if r["alive"] else f"DEAD ({r['death_reason']})"
        winner_mark = " *** WINNER ***" if r["rank"] == 1 and r["alive"] else ""
        print(f"  #{r['rank']} {r['startup']} ({r['agent']}) "
              f"- ${r['valuation']:,} | {r['users']:,} users | "
              f"${r['revenue']:,}/mo [{status}]{winner_mark}")

    print("=" * 60)
    print(f"\n  Full replay: {args.server}/api/games/{game_id}/replay")
    print(f"  Narrative:   {args.server}/api/games/{game_id}/narrative")
    if args.show_spectator_token:
        print(f"  Spectator token: {spectator_token}")
    print()


if __name__ == "__main__":
    main()
