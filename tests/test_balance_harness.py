import sys
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

import balance_harness
import server


class BalanceHarnessTests(unittest.TestCase):
    def setUp(self) -> None:
        server.games.clear()
        server.RATE_LIMITER.clear()

    def test_seeded_tournament_is_deterministic_for_same_inputs(self) -> None:
        first = balance_harness.run_seeded_tournament(
            seed_start=1,
            seed_count=2,
            agent_count=2,
            max_turns=8,
        )
        second = balance_harness.run_seeded_tournament(
            seed_start=1,
            seed_count=2,
            agent_count=2,
            max_turns=8,
        )

        self.assertEqual(first, second)

    def test_seeded_tournament_reports_expected_balance_metrics(self) -> None:
        summary = balance_harness.run_seeded_tournament(
            seed_start=3,
            seed_count=2,
            agent_count=3,
            max_turns=10,
        )

        self.assertEqual(summary["seed_start"], 3)
        self.assertEqual(summary["seed_count"], 2)
        self.assertEqual(summary["agent_count"], 3)
        self.assertEqual(len(summary["matches"]), 2)
        self.assertEqual(len(summary["agents"]), 3)
        self.assertIn("aggressive", summary["archetypes"])
        self.assertIn("balanced", summary["archetypes"])
        self.assertIn("lean", summary["archetypes"])
        self.assertIn("winner_divergence_rate", summary["score_valuation_divergence"])
        self.assertIn("avg_absolute_rank_delta", summary["score_valuation_divergence"])
        self.assertIn("winner_profiles", summary)
        self.assertIn("winner_profile_deltas", summary)
        self.assertIn("score_winners", summary["winner_profiles"])
        self.assertIn("valuation_winners", summary["winner_profiles"])
        self.assertIn("by_sector", summary["scenario_bias"])
        self.assertIn("by_market_segment", summary["scenario_bias"])
        self.assertTrue(summary["action_usage"])
        self.assertTrue(summary["decision_intent_usage"])
        self.assertTrue(summary["watch_metric_usage"])

        for match in summary["matches"]:
            self.assertEqual(len(match["rankings"]), 3)
            self.assertIn("winner_agent", match)
            self.assertIn("valuation_winner_agent", match)
            self.assertIn("bankruptcy_turns", match)

        aggressive = summary["archetypes"]["aggressive"]
        self.assertIn("win_rate", aggressive)
        self.assertIn("avg_placement", aggressive)
        self.assertIn("avg_bankruptcy_turn", aggressive)
        self.assertIn("avg_rank_delta", aggressive)
        self.assertIn("avg_score", aggressive)
        self.assertIn("avg_valuation", aggressive)
        self.assertIn("score_wins", aggressive)
        self.assertIn("valuation_wins", aggressive)
        self.assertIn("avg_score_dimensions", aggressive)
        self.assertIn("action_usage", aggressive)
        self.assertIn("failed_action_usage", aggressive)
        self.assertIn("intent_usage", aggressive)
        self.assertIn("watch_metric_usage", aggressive)
        self.assertIn("cash_efficiency", aggressive["avg_score_dimensions"])

        score_winners = summary["winner_profiles"]["score_winners"]
        self.assertIn("avg_score", score_winners)
        self.assertIn("avg_valuation", score_winners)
        self.assertIn("agent_counts", score_winners)
        self.assertIn("strategy_counts", score_winners)
        self.assertIn("action_usage", score_winners)
        self.assertIn("intent_usage", score_winners)
        self.assertIn("watch_metric_usage", score_winners)
        self.assertIn("avg_action_usage_per_winner", score_winners)
        self.assertIn("avg_intent_usage_per_winner", score_winners)
        self.assertIn("avg_watch_metric_usage_per_winner", score_winners)
        self.assertIn("avg_score_dimensions", summary["winner_profile_deltas"])
        self.assertIn("avg_action_usage_per_winner", summary["winner_profile_deltas"])

    def test_threshold_failures_trigger_when_metrics_exceed_limits(self) -> None:
        summary = {
            "score_valuation_divergence": {"winner_divergence_rate": 0.4},
            "archetypes": {
                "balanced": {"win_rate": 0.2, "games": 10, "score_wins": 2, "valuation_wins": 1},
                "chaos": {"win_rate": 0.6, "games": 10, "score_wins": 6, "valuation_wins": 2},
            },
            "scenario_bias": {
                "by_sector": {
                    "ai": {"win_rate": 0.25},
                    "crypto": {"win_rate": 0.7},
                }
            },
        }
        args = type(
            "Args",
            (),
            {
                "max_winner_divergence_rate": 0.2,
                "max_best_archetype_win_rate": 0.5,
                "max_best_sector_win_rate": 0.6,
                "max_best_archetype_score_bias": 0.1,
            },
        )()

        failures = balance_harness._threshold_failures(summary, args)

        self.assertEqual(len(failures), 4)
        self.assertIn("winner divergence rate 0.400 exceeded 0.200", failures[0])
        self.assertIn("best archetype win rate 0.600 exceeded 0.500", failures[1])
        self.assertIn("best sector win rate 0.700 exceeded 0.600", failures[2])
        self.assertIn("best archetype score bias 0.400 exceeded 0.100", failures[3])


if __name__ == "__main__":
    unittest.main()
