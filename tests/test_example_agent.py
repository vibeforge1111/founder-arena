import sys
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from example_agent import FounderAgent


class ExampleAgentTests(unittest.TestCase):
    def tearDown(self) -> None:
        for value in self.__dict__.values():
            if isinstance(value, FounderAgent):
                value.client.close()

    def test_lean_strategy_adds_brand_and_governance_when_quality_is_stable(self) -> None:
        self.agent = FounderAgent(
            name="Tester",
            startup_name="LeanCo",
            sector="saas",
            strategy="lean",
            server="local://founder-arena",
        )
        state = {
            "game_mode": "competitive_mode",
            "turn": 12,
            "my_startup_id": "s1",
            "hot_sectors": ["ai"],
            "startups": {
                "s1": {
                    "cash": 30000,
                    "users": 450,
                    "product_quality": 78,
                    "morale": 60,
                    "brand": 18,
                    "team_size": 3,
                    "runway": 10,
                    "revenue": 4000,
                    "sector": "saas",
                    "rich_state": {
                        "customers": {
                            "trust_score": 0.7,
                            "monthly_churn_rate": 0.03,
                        },
                        "operations": {
                            "support_backlog": 4,
                        },
                        "risk": {
                            "regulatory_pressure": 0.1,
                        },
                    },
                }
            },
        }
        turn_packet = {
            "visible_actions": [
                "build_feature",
                "acquire_users",
                "launch_pr",
                "board_sync",
                "research",
                "cut_costs",
                "fundraise",
                "hire",
            ]
        }

        actions = self.agent.decide(state, turn_packet=turn_packet)
        action_types = [action["type"] for action in actions]

        self.assertEqual(action_types, ["acquire_users", "launch_pr", "board_sync"])

    def test_lean_strategy_uses_partnerships_and_earlier_marketer_hire(self) -> None:
        self.agent = FounderAgent(
            name="Tester",
            startup_name="LeanCo",
            sector="saas",
            strategy="lean",
            server="local://founder-arena",
        )
        state = {
            "game_mode": "competitive_mode",
            "turn": 7,
            "my_startup_id": "s1",
            "hot_sectors": ["ai"],
            "startups": {
                "s1": {
                    "cash": 42000,
                    "users": 700,
                    "product_quality": 78,
                    "morale": 62,
                    "brand": 20,
                    "team_size": 3,
                    "runway": 9,
                    "revenue": 5000,
                    "sector": "saas",
                    "rich_state": {
                        "customers": {
                            "trust_score": 0.72,
                            "monthly_churn_rate": 0.025,
                        },
                        "operations": {
                            "support_backlog": 3,
                        },
                        "risk": {
                            "regulatory_pressure": 0.1,
                        },
                    },
                }
            },
        }
        turn_packet = {
            "visible_actions": [
                "build_feature",
                "acquire_users",
                "launch_pr",
                "board_sync",
                "research",
                "cut_costs",
                "fundraise",
                "hire",
            ]
        }

        actions = self.agent.decide(state, turn_packet=turn_packet)

        self.assertEqual(actions[0], {"type": "acquire_users", "params": {"channel": "partnerships"}})
        self.assertEqual(actions[1]["type"], "launch_pr")
        self.assertEqual(actions[2], {"type": "hire", "params": {"role": "marketer"}})

    def test_balanced_scale_phase_does_not_schedule_support_recovery_without_pressure(self) -> None:
        self.agent = FounderAgent(
            name="Tester",
            startup_name="BalancedCo",
            sector="saas",
            strategy="balanced",
            server="local://founder-arena",
        )
        state = {
            "game_mode": "competitive_mode",
            "turn": 30,
            "my_startup_id": "s1",
            "hot_sectors": [],
            "startups": {
                "s1": {
                    "cash": 90000,
                    "users": 2400,
                    "product_quality": 66,
                    "morale": 60,
                    "brand": 38,
                    "team_size": 4,
                    "runway": 8,
                    "revenue": 18000,
                    "sector": "saas",
                    "rich_state": {
                        "customers": {
                            "trust_score": 0.74,
                            "monthly_churn_rate": 0.025,
                        },
                        "operations": {
                            "support_backlog": 10,
                        },
                        "risk": {
                            "regulatory_pressure": 0.1,
                        },
                    },
                }
            },
        }
        turn_packet = {
            "visible_actions": [
                "build_feature",
                "acquire_users",
                "launch_pr",
                "support_recovery",
                "fundraise",
                "hire",
            ]
        }

        actions = self.agent.decide(state, turn_packet=turn_packet)
        action_types = [action["type"] for action in actions]

        self.assertEqual(action_types, ["acquire_users", "launch_pr", "build_feature"])
        self.assertNotIn("support_recovery", action_types)

    def test_balanced_scale_phase_ignores_mild_backlog_when_customers_are_stable(self) -> None:
        self.agent = FounderAgent(
            name="Tester",
            startup_name="BalancedCo",
            sector="saas",
            strategy="balanced",
            server="local://founder-arena",
        )
        state = {
            "game_mode": "competitive_mode",
            "turn": 30,
            "my_startup_id": "s1",
            "hot_sectors": [],
            "startups": {
                "s1": {
                    "cash": 90000,
                    "users": 2400,
                    "product_quality": 66,
                    "morale": 60,
                    "brand": 38,
                    "team_size": 4,
                    "runway": 8,
                    "revenue": 18000,
                    "sector": "saas",
                    "rich_state": {
                        "customers": {
                            "trust_score": 0.58,
                            "monthly_churn_rate": 0.04,
                        },
                        "operations": {
                            "support_backlog": 30,
                        },
                        "risk": {
                            "regulatory_pressure": 0.1,
                        },
                    },
                }
            },
        }
        turn_packet = {
            "visible_actions": [
                "build_feature",
                "acquire_users",
                "launch_pr",
                "support_recovery",
                "fundraise",
                "hire",
            ]
        }

        actions = self.agent.decide(state, turn_packet=turn_packet)
        action_types = [action["type"] for action in actions]

        self.assertEqual(action_types, ["acquire_users", "launch_pr", "build_feature"])
        self.assertNotIn("support_recovery", action_types)

    def test_chaos_limits_multiple_resilience_actions_when_state_is_healthy(self) -> None:
        self.agent = FounderAgent(
            name="Tester",
            startup_name="ChaosCo",
            sector="saas",
            strategy="chaos",
            server="local://founder-arena",
        )
        my = {
            "rich_state": {
                "customers": {
                    "trust_score": 0.74,
                    "monthly_churn_rate": 0.03,
                },
                "operations": {
                    "support_backlog": 8,
                },
                "risk": {
                    "regulatory_pressure": 0.1,
                    "financial_risk": 0.2,
                },
            },
        }
        chosen = ["support_recovery", "fundraise", "build_feature"]
        population = [
            "support_recovery",
            "fundraise",
            "build_feature",
            "acquire_users",
            "launch_pr",
        ]

        normalized = self.agent._chaos_limit_resilience_stack(
            chosen,
            population,
            cash=85000,
            runway=10,
            my=my,
        )

        self.assertEqual(len(normalized), 3)
        self.assertEqual(sum(action in {"support_recovery", "fundraise", "board_sync", "incident_response", "compliance_response"} for action in normalized), 1)
        self.assertIn("build_feature", normalized)

    def test_chaos_keeps_multiple_resilience_actions_under_real_pressure(self) -> None:
        self.agent = FounderAgent(
            name="Tester",
            startup_name="ChaosCo",
            sector="saas",
            strategy="chaos",
            server="local://founder-arena",
        )
        my = {
            "rich_state": {
                "customers": {
                    "trust_score": 0.42,
                    "monthly_churn_rate": 0.08,
                },
                "operations": {
                    "support_backlog": 36,
                },
                "risk": {
                    "regulatory_pressure": 0.1,
                    "financial_risk": 0.72,
                },
            },
        }
        chosen = ["support_recovery", "fundraise", "build_feature"]
        population = [
            "support_recovery",
            "fundraise",
            "build_feature",
            "acquire_users",
            "launch_pr",
        ]

        normalized = self.agent._chaos_limit_resilience_stack(
            chosen,
            population,
            cash=24000,
            runway=4,
            my=my,
        )

        self.assertEqual(normalized, chosen)

if __name__ == "__main__":
    unittest.main()
