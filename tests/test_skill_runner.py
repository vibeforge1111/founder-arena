import sys
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

import skill_runner


class SkillRunnerTests(unittest.TestCase):
    def tearDown(self) -> None:
        for value in self.__dict__.values():
            if isinstance(value, skill_runner.SkillRunnerAgent):
                value.client.close()

    def test_compile_skill_doctrine_prefers_explicit_fields(self) -> None:
        doctrine = skill_runner.compile_skill_doctrine(
            """
            # Founder Skill
            primary_style: aggressive
            risk_posture: low
            decision_style: analytical
            preferred_foci: governance intelligence growth
            recovery_order: compliance_response board_sync
            """
        )

        self.assertEqual(doctrine["primary_style"], "aggressive")
        self.assertEqual(doctrine["risk_posture"], "low")
        self.assertEqual(doctrine["decision_style"], "analytical")
        self.assertEqual(doctrine["preferred_foci"], ["governance", "intelligence", "growth"])
        self.assertEqual(doctrine["recovery_order"], ["compliance_response", "board_sync"])

    def test_compile_skill_doctrine_falls_back_to_bounded_keyword_profile(self) -> None:
        doctrine = skill_runner.compile_skill_doctrine(
            "Quality first. Protect trust, board alignment, and customer retention with disciplined runway management.",
            fallback="balanced",
        )

        self.assertEqual(doctrine["primary_style"], "lean")
        self.assertEqual(doctrine["risk_posture"], "low")
        self.assertIn("resilience", doctrine["preferred_foci"])
        self.assertIn("governance", doctrine["preferred_foci"])
        self.assertIn("support_recovery", doctrine["recovery_order"])

    def test_decide_accepts_turn_packet_and_respects_visible_actions(self) -> None:
        doctrine = {
            "primary_style": "balanced",
            "risk_posture": "medium",
            "decision_style": "concise",
            "preferred_foci": ["governance", "growth"],
            "recovery_order": ["board_sync", "support_recovery"],
            "prefers_growth": True,
            "prefers_governance": True,
            "prefers_intelligence": False,
            "prefers_resilience": False,
        }
        self.agent = skill_runner.SkillRunnerAgent(
            skill_file=Path("SKILL.md"),
            skill_text="# test",
            doctrine=doctrine,
            name="Tester",
            startup_name="SkillCo",
            sector="saas",
            strategy="balanced",
            server="local://founder-arena",
        )
        state = {
            "game_mode": "competitive_mode",
            "turn": 12,
            "my_startup_id": "s1",
            "hot_sectors": [],
            "startups": {
                "s1": {
                    "cash": 55000,
                    "users": 1200,
                    "product_quality": 76,
                    "morale": 62,
                    "brand": 18,
                    "team_size": 3,
                    "runway": 9,
                    "revenue": 8000,
                    "sector": "saas",
                    "rich_state": {
                        "customers": {
                            "trust_score": 0.72,
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
            ]
        }

        actions = self.agent.decide(state, turn_packet=turn_packet)

        self.assertTrue(actions)
        self.assertNotIn("board_sync", [action["type"] for action in actions])
        self.assertTrue(all(action["type"] in turn_packet["visible_actions"] for action in actions))

    def test_decision_packet_exposes_doctrine_metadata(self) -> None:
        doctrine = {
            "primary_style": "lean",
            "risk_posture": "low",
            "decision_style": "narrative",
            "preferred_foci": ["resilience", "governance"],
            "recovery_order": ["support_recovery", "board_sync"],
            "prefers_growth": False,
            "prefers_governance": True,
            "prefers_intelligence": False,
            "prefers_resilience": True,
        }
        self.agent = skill_runner.SkillRunnerAgent(
            skill_file=Path("SKILL.md"),
            skill_text="# test",
            doctrine=doctrine,
            name="Tester",
            startup_name="SkillCo",
            sector="saas",
            strategy="lean",
            server="local://founder-arena",
        )
        self.agent.startup_id = "s1"
        state = {
            "game_mode": "competitive_mode",
            "game_id": "g1",
            "turn": 3,
        }
        turn_packet = {
            "startup": {"runway_months": 8, "trust_score": 0.7},
            "match_context": {"current_arc": {}, "watch_items": []},
        }
        actions = [{"type": "acquire_users", "params": {"channel": "organic"}}]

        packet = self.agent._build_decision_packet(state, turn_packet, actions)

        self.assertIsNotNone(packet)
        self.assertIn("style=lean", packet["reasoning_summary"])
        self.assertIn("risk:low", packet["public_notes"])
        self.assertIn("skill:SKILL.md", packet["public_notes"])


if __name__ == "__main__":
    unittest.main()
