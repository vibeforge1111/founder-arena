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


if __name__ == "__main__":
    unittest.main()
