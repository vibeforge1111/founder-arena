"""Deterministic seeded balance harness for competitive Founder Arena matches."""

from __future__ import annotations

import argparse
import json
import random
from collections import Counter, defaultdict
from pathlib import Path
from statistics import mean

import server
from example_agent import FounderAgent


DEFAULT_AGENT_COUNT = 4
DEFAULT_SEED_COUNT = 20
DEFAULT_MAX_TURNS = 52


def _selected_configs(agent_count: int) -> list[dict]:
    count = max(2, min(agent_count, len(server.BOT_CONFIGS)))
    return [dict(config) for config in server.BOT_CONFIGS[:count]]


def _fallback_actions(state: dict, turn_packet: dict | None) -> list[dict]:
    my = state["startups"].get(state.get("my_startup_id", ""), {})
    cash = int(my.get("cash", 0))
    visible_actions = set((turn_packet or {}).get("visible_actions") or [])
    fallback_order = [
        ("acquire_users", {"channel": "organic"}, cash > 8000),
        ("build_feature", {"focus": "core"}, cash > 20000),
        ("research", {}, cash > 5000),
        ("board_sync", {"update_type": "harness_update"}, True),
        ("cut_costs", {"target": "general"}, True),
    ]
    for action_type, params, condition in fallback_order:
        if not condition:
            continue
        if visible_actions and action_type not in visible_actions:
            continue
        return [{"type": action_type, "params": params}]
    return []


def _bind_agents(game: server.Game, configs: list[dict]) -> dict[str, FounderAgent]:
    agents: dict[str, FounderAgent] = {}
    for config in configs:
        startup = game.add_startup(
            config["name"],
            config["startup"],
            config["sector"],
            config["motto"],
            config["strategy"],
        )
        agent = FounderAgent(
            name=config["name"],
            startup_name=config["startup"],
            sector=config["sector"],
            motto=config["motto"],
            strategy=config["strategy"],
            server="local://founder-arena",
        )
        agent.game_id = game.id
        agent.agent_token = startup.agent_token
        agent.startup_id = startup.id
        agents[startup.id] = agent
    return agents


def run_local_match(seed: int, configs: list[dict], *, max_turns: int = DEFAULT_MAX_TURNS) -> tuple[server.Game, dict]:
    random.seed(seed)
    game = server.Game(
        name=f"Seeded Balance Match {seed}",
        max_players=len(configs),
        min_players=len(configs),
        turn_timeout=1,
        max_turns=max_turns,
        seed=seed,
        use_rich_state=True,
        game_mode="competitive_mode",
        queue="github_ranked",
    )
    agents = _bind_agents(game, configs)
    game.start()

    safety = 0
    while game.phase == server.GamePhase.PLAYING:
        safety += 1
        if safety > max_turns + 10:
            raise RuntimeError(f"Harness safety stop tripped for seed {seed}")
        pending = [startup for startup in game.startups.values() if startup.alive and not startup.actions_submitted]
        if not pending:
            game._resolve_turn()
            continue
        for startup in pending:
            agent = agents[startup.id]
            state = game.get_state(startup.agent_token)
            turn_packet = state.get("turn_packet")
            actions = agent.decide(state, turn_packet=turn_packet)
            if not actions:
                actions = _fallback_actions(state, turn_packet)
            decision_packet = agent._build_decision_packet(state, turn_packet, actions)
            try:
                game.submit_actions(startup.agent_token, actions, decision_packet=decision_packet)
            except ValueError:
                fallback = _fallback_actions(state, turn_packet)
                fallback_packet = agent._build_decision_packet(state, turn_packet, fallback)
                game.submit_actions(startup.agent_token, fallback, decision_packet=fallback_packet)

    return game, game.get_replay()


def _mean_or_none(values: list[float | int | None]) -> float | None:
    cleaned = [float(value) for value in values if value is not None]
    if not cleaned:
        return None
    return round(mean(cleaned), 2)


def _bucket(table: dict, key: str) -> dict:
    return table.setdefault(
        key,
        {
            "games": 0,
            "wins": 0,
            "score_wins": 0,
            "valuation_wins": 0,
            "placements": [],
            "rank_deltas": [],
            "bankruptcy_turns": [],
            "total_score": 0.0,
            "total_valuation": 0.0,
            "score_dimension_totals": {},
        },
    )


def _winner_profile_bucket() -> dict:
    return {
        "count": 0,
        "total_score": 0.0,
        "total_valuation": 0.0,
        "score_dimension_totals": {},
        "agent_counts": Counter(),
        "strategy_counts": Counter(),
    }


def _record_winner_profile(bucket: dict, entry: dict, config: dict) -> None:
    bucket["count"] += 1
    bucket["total_score"] += float(entry.get("score", 0.0))
    bucket["total_valuation"] += float(entry.get("valuation", 0.0))
    bucket["agent_counts"][entry.get("agent", "")] += 1
    bucket["strategy_counts"][config.get("strategy", "unknown")] += 1
    for dimension, value in dict((entry.get("seven_dimension_scores") or {}).get("dimensions") or {}).items():
        bucket["score_dimension_totals"][dimension] = round(
            bucket["score_dimension_totals"].get(dimension, 0.0) + float(value),
            4,
        )


def _finalize_winner_profile(bucket: dict) -> dict:
    count = max(1, int(bucket.get("count", 0)))
    return {
        "count": int(bucket.get("count", 0)),
        "avg_score": round(float(bucket.get("total_score", 0.0)) / count, 2),
        "avg_valuation": int(round(float(bucket.get("total_valuation", 0.0)) / count)),
        "avg_score_dimensions": {
            dimension: round(total / count, 2)
            for dimension, total in sorted(dict(bucket.get("score_dimension_totals", {})).items())
        },
        "agent_counts": dict(bucket.get("agent_counts", {})),
        "strategy_counts": dict(bucket.get("strategy_counts", {})),
    }


def run_seeded_tournament(
    *,
    seed_start: int = 1,
    seed_count: int = DEFAULT_SEED_COUNT,
    agent_count: int = DEFAULT_AGENT_COUNT,
    max_turns: int = DEFAULT_MAX_TURNS,
) -> dict:
    configs = _selected_configs(agent_count)
    config_by_agent = {config["name"]: config for config in configs}
    matches = []
    action_usage = Counter()
    failed_action_usage = Counter()
    archetypes: dict[str, dict] = {}
    agents: dict[str, dict] = {}
    sectors: dict[str, dict] = {}
    segments: dict[str, dict] = {}
    divergence_winner_count = 0
    rank_delta_values: list[float] = []
    score_winner_profile = _winner_profile_bucket()
    valuation_winner_profile = _winner_profile_bucket()

    for seed in range(seed_start, seed_start + seed_count):
        game, replay = run_local_match(seed, configs, max_turns=max_turns)
        rankings = replay["rankings"]
        valuation_rankings = sorted(rankings, key=lambda item: (item["alive"], item["valuation"]), reverse=True)
        valuation_rank_by_agent = {entry["agent"]: index + 1 for index, entry in enumerate(valuation_rankings)}
        score_rank_by_agent = {entry["agent"]: entry["rank"] for entry in rankings}
        winner_agent = rankings[0]["agent"] if rankings else ""
        valuation_winner = valuation_rankings[0]["agent"] if valuation_rankings else ""
        divergence_winner_count += 1 if winner_agent != valuation_winner else 0
        if rankings:
            _record_winner_profile(score_winner_profile, rankings[0], config_by_agent[rankings[0]["agent"]])
        if valuation_rankings:
            _record_winner_profile(
                valuation_winner_profile,
                valuation_rankings[0],
                config_by_agent[valuation_rankings[0]["agent"]],
            )

        per_match_action_usage = Counter(entry["action_type"] for logs in game.action_log.values() for entry in logs)
        per_match_failed_usage = Counter(
            entry["action_type"]
            for logs in game.action_log.values()
            for entry in logs
            if not entry.get("success", False)
        )
        action_usage.update(per_match_action_usage)
        failed_action_usage.update(per_match_failed_usage)

        bankruptcy_turns = {startup.agent_name: startup.bankruptcy_turn for startup in game.startups.values()}
        startup_segments = {startup.agent_name: getattr(startup, "market_segment", "unknown:unknown") for startup in game.startups.values()}

        match_entry = {
            "seed": seed,
            "winner_agent": winner_agent,
            "valuation_winner_agent": valuation_winner,
            "score_valuation_winner_diverged": winner_agent != valuation_winner,
            "action_usage": dict(per_match_action_usage),
            "failed_action_usage": dict(per_match_failed_usage),
            "bankruptcy_turns": bankruptcy_turns,
            "rankings": rankings,
        }
        matches.append(match_entry)

        for entry in rankings:
            agent_name = entry["agent"]
            config = config_by_agent[agent_name]
            placement = int(entry["rank"])
            bankruptcy_turn = bankruptcy_turns.get(agent_name)
            score_rank = score_rank_by_agent[agent_name]
            valuation_rank = valuation_rank_by_agent[agent_name]
            score_value = float(entry.get("score", 0.0))
            valuation_value = float(entry.get("valuation", 0.0))
            score_dimensions = dict((entry.get("seven_dimension_scores") or {}).get("dimensions") or {})
            rank_delta_values.append(abs(score_rank - valuation_rank))

            agent_bucket = _bucket(agents, agent_name)
            agent_bucket["games"] += 1
            agent_bucket["wins"] += 1 if agent_name == winner_agent else 0
            agent_bucket["score_wins"] += 1 if agent_name == winner_agent else 0
            agent_bucket["valuation_wins"] += 1 if agent_name == valuation_winner else 0
            agent_bucket["placements"].append(placement)
            agent_bucket["rank_deltas"].append(abs(score_rank - valuation_rank))
            agent_bucket["total_score"] += score_value
            agent_bucket["total_valuation"] += valuation_value
            if bankruptcy_turn is not None:
                agent_bucket["bankruptcy_turns"].append(bankruptcy_turn)
            agent_bucket["strategy"] = config["strategy"]
            agent_bucket["sector"] = config["sector"]
            for dimension, value in score_dimensions.items():
                agent_bucket["score_dimension_totals"][dimension] = round(
                    agent_bucket["score_dimension_totals"].get(dimension, 0.0) + float(value),
                    4,
                )

            archetype_bucket = _bucket(archetypes, config["strategy"])
            archetype_bucket["games"] += 1
            archetype_bucket["wins"] += 1 if agent_name == winner_agent else 0
            archetype_bucket["score_wins"] += 1 if agent_name == winner_agent else 0
            archetype_bucket["valuation_wins"] += 1 if agent_name == valuation_winner else 0
            archetype_bucket["placements"].append(placement)
            archetype_bucket["rank_deltas"].append(abs(score_rank - valuation_rank))
            archetype_bucket["total_score"] += score_value
            archetype_bucket["total_valuation"] += valuation_value
            if bankruptcy_turn is not None:
                archetype_bucket["bankruptcy_turns"].append(bankruptcy_turn)
            for dimension, value in score_dimensions.items():
                archetype_bucket["score_dimension_totals"][dimension] = round(
                    archetype_bucket["score_dimension_totals"].get(dimension, 0.0) + float(value),
                    4,
                )

            sector_bucket = _bucket(sectors, config["sector"])
            sector_bucket["games"] += 1
            sector_bucket["wins"] += 1 if agent_name == winner_agent else 0
            sector_bucket["score_wins"] += 1 if agent_name == winner_agent else 0
            sector_bucket["valuation_wins"] += 1 if agent_name == valuation_winner else 0
            sector_bucket["placements"].append(placement)
            sector_bucket["rank_deltas"].append(abs(score_rank - valuation_rank))
            sector_bucket["total_score"] += score_value
            sector_bucket["total_valuation"] += valuation_value
            if bankruptcy_turn is not None:
                sector_bucket["bankruptcy_turns"].append(bankruptcy_turn)
            for dimension, value in score_dimensions.items():
                sector_bucket["score_dimension_totals"][dimension] = round(
                    sector_bucket["score_dimension_totals"].get(dimension, 0.0) + float(value),
                    4,
                )

            segment_bucket = _bucket(segments, startup_segments[agent_name])
            segment_bucket["games"] += 1
            segment_bucket["wins"] += 1 if agent_name == winner_agent else 0
            segment_bucket["score_wins"] += 1 if agent_name == winner_agent else 0
            segment_bucket["valuation_wins"] += 1 if agent_name == valuation_winner else 0
            segment_bucket["placements"].append(placement)
            segment_bucket["rank_deltas"].append(abs(score_rank - valuation_rank))
            segment_bucket["total_score"] += score_value
            segment_bucket["total_valuation"] += valuation_value
            if bankruptcy_turn is not None:
                segment_bucket["bankruptcy_turns"].append(bankruptcy_turn)
            for dimension, value in score_dimensions.items():
                segment_bucket["score_dimension_totals"][dimension] = round(
                    segment_bucket["score_dimension_totals"].get(dimension, 0.0) + float(value),
                    4,
                )

    for table in (agents, archetypes, sectors, segments):
        for bucket in table.values():
            games = max(1, bucket["games"])
            bucket["win_rate"] = round(bucket["wins"] / games, 3)
            bucket["avg_placement"] = round(mean(bucket["placements"]), 2)
            bucket["avg_bankruptcy_turn"] = _mean_or_none(bucket["bankruptcy_turns"])
            bucket["avg_rank_delta"] = _mean_or_none(bucket["rank_deltas"]) or 0.0
            bucket["avg_score"] = round(bucket["total_score"] / games, 2)
            bucket["avg_valuation"] = int(round(bucket["total_valuation"] / games))
            bucket["avg_score_dimensions"] = {
                dimension: round(total / games, 2)
                for dimension, total in sorted(bucket["score_dimension_totals"].items())
            }
            bucket.pop("rank_deltas", None)
            bucket.pop("total_score", None)
            bucket.pop("total_valuation", None)
            bucket.pop("score_dimension_totals", None)

    summary = {
        "seed_start": seed_start,
        "seed_count": seed_count,
        "agent_count": len(configs),
        "agents": agents,
        "archetypes": archetypes,
        "action_usage": dict(action_usage),
        "failed_action_usage": dict(failed_action_usage),
        "score_valuation_divergence": {
            "winner_divergence_matches": divergence_winner_count,
            "winner_divergence_rate": round(divergence_winner_count / max(1, seed_count), 3),
            "avg_absolute_rank_delta": round(mean(rank_delta_values), 2) if rank_delta_values else 0.0,
        },
        "winner_profiles": {
            "score_winners": _finalize_winner_profile(score_winner_profile),
            "valuation_winners": _finalize_winner_profile(valuation_winner_profile),
        },
        "scenario_bias": {
            "by_sector": sectors,
            "by_market_segment": segments,
        },
        "matches": matches,
    }
    return summary


def _threshold_failures(summary: dict, args: argparse.Namespace) -> list[str]:
    failures = []
    divergence_rate = summary["score_valuation_divergence"]["winner_divergence_rate"]
    best_archetype_win_rate = max((bucket["win_rate"] for bucket in summary["archetypes"].values()), default=0.0)
    best_sector_win_rate = max((bucket["win_rate"] for bucket in summary["scenario_bias"]["by_sector"].values()), default=0.0)
    best_archetype_score_bias = max(
        (
            abs(int(bucket.get("score_wins", 0)) - int(bucket.get("valuation_wins", 0))) / max(1, int(bucket.get("games", 0)))
            for bucket in summary["archetypes"].values()
        ),
        default=0.0,
    )

    if args.max_winner_divergence_rate is not None and divergence_rate > args.max_winner_divergence_rate:
        failures.append(
            f"winner divergence rate {divergence_rate:.3f} exceeded {args.max_winner_divergence_rate:.3f}"
        )
    if args.max_best_archetype_win_rate is not None and best_archetype_win_rate > args.max_best_archetype_win_rate:
        failures.append(
            f"best archetype win rate {best_archetype_win_rate:.3f} exceeded {args.max_best_archetype_win_rate:.3f}"
        )
    if args.max_best_sector_win_rate is not None and best_sector_win_rate > args.max_best_sector_win_rate:
        failures.append(
            f"best sector win rate {best_sector_win_rate:.3f} exceeded {args.max_best_sector_win_rate:.3f}"
        )
    if (
        args.max_best_archetype_score_bias is not None
        and best_archetype_score_bias > args.max_best_archetype_score_bias
    ):
        failures.append(
            f"best archetype score bias {best_archetype_score_bias:.3f} exceeded {args.max_best_archetype_score_bias:.3f}"
        )
    return failures


def _print_human_summary(summary: dict) -> None:
    divergence = summary["score_valuation_divergence"]
    print(f"Seeds: {summary['seed_start']}..{summary['seed_start'] + summary['seed_count'] - 1}")
    print(f"Agents per match: {summary['agent_count']}")
    print(
        "Score vs valuation divergence: "
        f"{divergence['winner_divergence_matches']}/{summary['seed_count']} "
        f"({divergence['winner_divergence_rate']:.3f}), "
        f"avg rank delta {divergence['avg_absolute_rank_delta']:.2f}"
    )
    print("Archetype win rates:")
    for archetype, bucket in sorted(summary["archetypes"].items()):
        print(
            f"  {archetype}: win_rate={bucket['win_rate']:.3f} "
            f"score_wins={bucket['score_wins']} valuation_wins={bucket['valuation_wins']} "
            f"avg_rank_delta={bucket['avg_rank_delta']:.2f} "
            f"avg_place={bucket['avg_placement']:.2f} avg_bankruptcy={bucket['avg_bankruptcy_turn']}"
        )
    print("Sector bias:")
    for sector, bucket in sorted(summary["scenario_bias"]["by_sector"].items()):
        print(
            f"  {sector}: win_rate={bucket['win_rate']:.3f} "
            f"avg_place={bucket['avg_placement']:.2f}"
        )
    print("Action usage:")
    for action_type, count in sorted(summary["action_usage"].items(), key=lambda item: (-item[1], item[0])):
        print(f"  {action_type}: {count}")


def main() -> int:
    parser = argparse.ArgumentParser(description="Seeded Founder Arena balance harness")
    parser.add_argument("--seed-start", type=int, default=1)
    parser.add_argument("--seed-count", type=int, default=DEFAULT_SEED_COUNT)
    parser.add_argument("--agents", type=int, default=DEFAULT_AGENT_COUNT)
    parser.add_argument("--turns", type=int, default=DEFAULT_MAX_TURNS)
    parser.add_argument("--json-out", type=Path, default=None)
    parser.add_argument("--print-json", action="store_true")
    parser.add_argument("--max-winner-divergence-rate", type=float, default=None)
    parser.add_argument("--max-best-archetype-win-rate", type=float, default=None)
    parser.add_argument("--max-best-sector-win-rate", type=float, default=None)
    parser.add_argument("--max-best-archetype-score-bias", type=float, default=None)
    args = parser.parse_args()

    summary = run_seeded_tournament(
        seed_start=args.seed_start,
        seed_count=args.seed_count,
        agent_count=args.agents,
        max_turns=args.turns,
    )
    failures = _threshold_failures(summary, args)

    if args.json_out is not None:
        args.json_out.write_text(json.dumps(summary, indent=2), encoding="utf-8")
    if args.print_json:
        print(json.dumps(summary, indent=2))
    else:
        _print_human_summary(summary)

    if failures:
        for failure in failures:
            print(f"THRESHOLD FAILED: {failure}")
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
