import sys
import unittest
from pathlib import Path

from fastapi.testclient import TestClient


ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

import server
from world_state import RichStartupState


class RichStateIntegrationTests(unittest.TestCase):
    def setUp(self) -> None:
        server.games.clear()
        server.RATE_LIMITER.clear()
        if server.AUDIT_LOGGER.path.exists():
            server.AUDIT_LOGGER.path.unlink()
        self.client = TestClient(server.app)

    def test_rich_startup_snapshot_contains_compat_and_rich_fields(self) -> None:
        startup = RichStartupState(
            agent_name="Tester",
            startup_name="DeepCo",
            sector="ai",
            motto="Test deeply",
            strategy="balanced",
            seed=123,
        )

        snapshot = startup.snapshot()

        self.assertIn("cash", snapshot)
        self.assertIn("users", snapshot)
        self.assertIn("revenue", snapshot)
        self.assertIn("product_quality", snapshot)
        self.assertIn("rich_state", snapshot)
        self.assertIn("finance", snapshot["rich_state"])
        self.assertIn("customers", snapshot["rich_state"])
        self.assertGreaterEqual(snapshot["team_size"], 1)

    def test_create_game_defaults_to_legacy_mode(self) -> None:
        response = self.client.post(
            "/api/games",
            json={
                "name": "Legacy Test",
                "max_players": 2,
                "min_players": 2,
                "turn_timeout": 5,
                "max_turns": 2,
            },
        )

        self.assertEqual(response.status_code, 200)
        payload = response.json()
        self.assertFalse(payload["use_rich_state"])
        self.assertIn("admin_token", payload)
        self.assertIn("join_code", payload)
        self.assertIn("spectator_token", payload)

    def test_rich_game_replay_exposes_scores_and_director_fields(self) -> None:
        create = self.client.post(
            "/api/games",
            json={
                "name": "Rich Test",
                "max_players": 2,
                "min_players": 2,
                "turn_timeout": 5,
                "max_turns": 1,
                "use_rich_state": True,
            },
        )
        self.assertEqual(create.status_code, 200)
        create_payload = create.json()
        game_id = create_payload["game_id"]

        join_1 = self.client.post(
            f"/api/games/{game_id}/join",
            json={
                "agent_name": "R1",
                "startup_name": "DeepOne",
                "sector": "ai",
                "motto": "m1",
                "strategy_description": "balanced",
                "join_code": create_payload["join_code"],
            },
        )
        join_2 = self.client.post(
            f"/api/games/{game_id}/join",
            json={
                "agent_name": "R2",
                "startup_name": "DeepTwo",
                "sector": "fintech",
                "motto": "m2",
                "strategy_description": "aggressive",
                "join_code": create_payload["join_code"],
            },
        )
        self.assertEqual(join_1.status_code, 200)
        self.assertEqual(join_2.status_code, 200)

        self.assertEqual(
            self.client.post(
                f"/api/games/{game_id}/start",
                headers={"X-Admin-Token": create_payload["admin_token"]},
            ).status_code,
            200,
        )
        self.assertEqual(
            self.client.post(
                f"/api/games/{game_id}/action",
                headers={"X-Agent-Token": join_1.json()["agent_token"]},
                json={
                    "actions": [{"type": "build_feature", "params": {"focus": "core"}}],
                },
            ).status_code,
            200,
        )
        self.assertEqual(
            self.client.post(
                f"/api/games/{game_id}/action",
                headers={"X-Agent-Token": join_2.json()["agent_token"]},
                json={
                    "actions": [{"type": "hire", "params": {"role": "engineer"}}],
                },
            ).status_code,
            200,
        )

        spectator = self.client.get(
            f"/api/games/{game_id}/spectate",
            headers={"X-Spectator-Token": create_payload["spectator_token"]},
        )
        replay = self.client.get(f"/api/games/{game_id}/replay")

        self.assertEqual(spectator.status_code, 200)
        self.assertEqual(replay.status_code, 200)

        spectator_payload = spectator.json()
        replay_payload = replay.json()
        startup_payload = next(iter(spectator_payload["startups"].values()))
        ranking_payload = replay_payload["rankings"][0]

        self.assertTrue(spectator_payload["use_rich_state"])
        self.assertIn("director_state", startup_payload)
        self.assertIn("stress_index", startup_payload)
        self.assertIn("challenge_info", startup_payload)
        self.assertIn("seven_dimension_scores", startup_payload)
        self.assertIn("seven_dimension_scores", ranking_payload)
        self.assertEqual(
            set(ranking_payload["seven_dimension_scores"]["dimensions"].keys()),
            {
                "cash_efficiency",
                "revenue_quality",
                "customer_health",
                "product_health",
                "team_health",
                "risk_management",
                "strategic_coherence",
            },
        )

    def test_public_game_endpoint_redacts_private_fields(self) -> None:
        create = self.client.post(
            "/api/games",
            json={
                "name": "Public Redaction Test",
                "max_players": 2,
                "min_players": 2,
                "turn_timeout": 5,
                "max_turns": 2,
                "use_rich_state": True,
            },
        )
        payload = create.json()
        game_id = payload["game_id"]
        self.client.post(
            f"/api/games/{game_id}/join",
            json={
                "agent_name": "R1",
                "startup_name": "DeepOne",
                "sector": "ai",
                "motto": "m1",
                "strategy_description": "balanced",
                "join_code": payload["join_code"],
            },
        )
        public_state = self.client.get(f"/api/games/{game_id}")
        self.assertEqual(public_state.status_code, 200)
        startup_payload = next(iter(public_state.json()["startups"].values()))
        self.assertNotIn("cash", startup_payload)
        self.assertNotIn("rich_state", startup_payload)
        self.assertNotIn("team", startup_payload)
        self.assertNotIn("seven_dimension_scores", startup_payload)

    def test_auth_guards_reject_invalid_join_start_and_spectate_tokens(self) -> None:
        create = self.client.post(
            "/api/games",
            json={
                "name": "Auth Guard Test",
                "max_players": 2,
                "min_players": 2,
                "turn_timeout": 5,
                "max_turns": 2,
            },
        )
        payload = create.json()
        game_id = payload["game_id"]

        bad_join = self.client.post(
            f"/api/games/{game_id}/join",
            json={
                "agent_name": "BadJoin",
                "startup_name": "BadCo",
                "sector": "ai",
                "motto": "m1",
                "strategy_description": "balanced",
                "join_code": "wrongcode",
            },
        )
        self.assertEqual(bad_join.status_code, 403)

        good_join = self.client.post(
            f"/api/games/{game_id}/join",
            json={
                "agent_name": "GoodJoin",
                "startup_name": "GoodCo",
                "sector": "ai",
                "motto": "m1",
                "strategy_description": "balanced",
                "join_code": payload["join_code"],
            },
        )
        self.assertEqual(good_join.status_code, 200)

        bad_start = self.client.post(
            f"/api/games/{game_id}/start",
            headers={"X-Admin-Token": "wrong-admin-token"},
        )
        self.assertEqual(bad_start.status_code, 403)

        bad_spectate = self.client.get(
            f"/api/games/{game_id}/spectate",
            headers={"X-Spectator-Token": "wrong-spectator-token"},
        )
        self.assertEqual(bad_spectate.status_code, 403)

    def test_private_endpoints_require_headers_and_reject_query_token_fallback(self) -> None:
        create = self.client.post(
            "/api/games",
            json={
                "name": "Header Auth Test",
                "max_players": 2,
                "min_players": 2,
                "turn_timeout": 5,
                "max_turns": 2,
            },
        )
        payload = create.json()
        game_id = payload["game_id"]

        join = self.client.post(
            f"/api/games/{game_id}/join",
            json={
                "agent_name": "HeaderUser",
                "startup_name": "HeaderCo",
                "sector": "ai",
                "motto": "m1",
                "strategy_description": "balanced",
                "join_code": payload["join_code"],
            },
        )
        self.assertEqual(join.status_code, 200)
        agent_token = join.json()["agent_token"]

        missing_state = self.client.get(f"/api/games/{game_id}/state")
        self.assertEqual(missing_state.status_code, 403)

        query_state = self.client.get(
            f"/api/games/{game_id}/state",
            params={"agent_token": agent_token},
        )
        self.assertEqual(query_state.status_code, 403)

        body_only_action = self.client.post(
            f"/api/games/{game_id}/action",
            json={
                "agent_token": agent_token,
                "actions": [{"type": "research", "params": {}}],
            },
        )
        self.assertEqual(body_only_action.status_code, 403)

        missing_start = self.client.post(f"/api/games/{game_id}/start")
        self.assertEqual(missing_start.status_code, 403)

        query_start = self.client.post(
            f"/api/games/{game_id}/start",
            params={"admin_token": payload["admin_token"]},
        )
        self.assertEqual(query_start.status_code, 403)

        missing_spectate = self.client.get(f"/api/games/{game_id}/spectate")
        self.assertEqual(missing_spectate.status_code, 403)

        query_spectate = self.client.get(
            f"/api/games/{game_id}/spectate",
            params={"spectator_token": payload["spectator_token"]},
        )
        self.assertEqual(query_spectate.status_code, 403)

    def test_direct_mutating_tool_access_is_rejected(self) -> None:
        startup = RichStartupState(
            agent_name="Tester",
            startup_name="DeepCo",
            sector="ai",
            motto="Test deeply",
            strategy="balanced",
            seed=123,
        )
        mapper = server.ActionMapper(server.random.Random(123))
        result = mapper.execute(
            startup,
            {
                "tool_name": "finance.raise.propose",
                "arguments": {"raise_amount_usd": 1000000000},
            },
            turn_index=1,
        )
        self.assertFalse(result["success"])
        self.assertIn("restricted", result["message"])

    def test_create_game_writes_audit_log(self) -> None:
        response = self.client.post(
            "/api/games",
            json={
                "name": "Audit Test",
                "max_players": 2,
                "min_players": 2,
                "turn_timeout": 5,
                "max_turns": 2,
            },
        )
        self.assertEqual(response.status_code, 200)
        self.assertTrue(server.AUDIT_LOGGER.path.exists())
        contents = server.AUDIT_LOGGER.path.read_text(encoding="utf-8")
        self.assertIn("\"event_type\":\"game_created\"", contents)

    def test_rate_limiter_blocks_after_limit(self) -> None:
        allowed_1, retry_after_1 = server.RATE_LIMITER.check(
            scope="unit_test",
            identity="tester",
            limit=1,
            window_seconds=60,
        )
        allowed_2, retry_after_2 = server.RATE_LIMITER.check(
            scope="unit_test",
            identity="tester",
            limit=1,
            window_seconds=60,
        )
        self.assertTrue(allowed_1)
        self.assertEqual(retry_after_1, 0)
        self.assertFalse(allowed_2)
        self.assertGreaterEqual(retry_after_2, 1)


if __name__ == "__main__":
    unittest.main()
