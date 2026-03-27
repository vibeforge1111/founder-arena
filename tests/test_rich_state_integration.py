import sys
import unittest
from pathlib import Path
import shutil
from unittest import mock

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
        server.ENTRANTS.clear()
        if server.ENTRANT_ROOT.exists():
            shutil.rmtree(server.ENTRANT_ROOT)
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

    def test_create_game_defaults_to_simulator_mode(self) -> None:
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
        self.assertTrue(payload["use_rich_state"])
        self.assertEqual(payload["game_mode"], "legacy_arena")
        self.assertIn("admin_token", payload)
        self.assertIn("join_code", payload)
        self.assertIn("spectator_token", payload)

    def test_competitive_mode_exposes_turn_packet_and_decision_logs(self) -> None:
        create = self.client.post(
            "/api/games",
            json={
                "name": "Competitive Test",
                "max_players": 2,
                "min_players": 2,
                "turn_timeout": 5,
                "max_turns": 2,
                "game_mode": "competitive_mode",
            },
        )
        self.assertEqual(create.status_code, 200)
        payload = create.json()
        self.assertEqual(payload["game_mode"], "competitive_mode")
        self.assertTrue(payload["use_rich_state"])
        game_id = payload["game_id"]

        join_1 = self.client.post(
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
        join_2 = self.client.post(
            f"/api/games/{game_id}/join",
            json={
                "agent_name": "R2",
                "startup_name": "DeepTwo",
                "sector": "fintech",
                "motto": "m2",
                "strategy_description": "aggressive",
                "join_code": payload["join_code"],
            },
        )
        self.assertEqual(join_1.status_code, 200)
        self.assertEqual(join_2.status_code, 200)

        start = self.client.post(
            f"/api/games/{game_id}/start",
            headers={"X-Admin-Token": payload["admin_token"]},
        )
        self.assertEqual(start.status_code, 200)
        self.assertEqual(start.json()["game_mode"], "competitive_mode")

        turn_packet = self.client.get(
            f"/api/games/{game_id}/turn-packet",
            headers={"X-Agent-Token": join_1.json()["agent_token"]},
        )
        self.assertEqual(turn_packet.status_code, 200)
        packet_payload = turn_packet.json()
        self.assertEqual(packet_payload["schema_version"], "founder-arena.turn-packet.v1")
        self.assertEqual(packet_payload["startup"]["startup_id"], join_1.json()["startup_id"])
        self.assertIn("board_sync", packet_payload["visible_actions"])
        self.assertNotIn("pivot", packet_payload["visible_actions"])
        self.assertNotIn("spy", packet_payload["visible_actions"])
        self.assertNotIn("poach", packet_payload["visible_actions"])
        self.assertIn("shared_market", packet_payload["match_context"])
        self.assertIn("segment", packet_payload["match_context"]["shared_market"])

        action_1 = self.client.post(
            f"/api/games/{game_id}/action",
            headers={"X-Agent-Token": join_1.json()["agent_token"]},
            json={
                "actions": [{"type": "build_feature", "params": {"focus": "core"}}],
                "decision_packet": {
                    "schema_version": "founder-arena.decision-packet.v1",
                    "match_id": game_id,
                    "turn_index": 1,
                    "startup_id": join_1.json()["startup_id"],
                    "intent": "Open with product progress.",
                    "primary_risk": "Weak early quality.",
                    "confidence": "medium",
                    "reasoning_summary": "Shipping product first to establish a stronger base.",
                    "actions": [{"type": "build_feature", "params": {"focus": "core"}}],
                },
            },
        )
        action_2 = self.client.post(
            f"/api/games/{game_id}/action",
            headers={"X-Agent-Token": join_2.json()["agent_token"]},
            json={
                "actions": [{"type": "acquire_users", "params": {"channel": "organic"}}],
                "decision_packet": {
                    "schema_version": "founder-arena.decision-packet.v1",
                    "match_id": game_id,
                    "turn_index": 1,
                    "startup_id": join_2.json()["startup_id"],
                    "intent": "Test demand cheaply.",
                    "primary_risk": "No signal on customer pull.",
                    "confidence": "medium",
                    "reasoning_summary": "Need a first read on demand before heavier spend.",
                    "actions": [{"type": "acquire_users", "params": {"channel": "organic"}}],
                },
            },
        )
        self.assertEqual(action_1.status_code, 200)
        self.assertEqual(action_2.status_code, 200)
        self.assertTrue(action_1.json()["decision_packet_received"])

        spectator = self.client.get(
            f"/api/games/{game_id}/spectate",
            headers={"X-Spectator-Token": payload["spectator_token"]},
        )
        replay = self.client.get(f"/api/games/{game_id}/replay")
        private_state = self.client.get(
            f"/api/games/{game_id}/state",
            headers={"X-Agent-Token": join_1.json()["agent_token"]},
        )

        self.assertEqual(spectator.status_code, 200)
        self.assertEqual(replay.status_code, 200)
        self.assertEqual(private_state.status_code, 200)
        self.assertEqual(private_state.json()["game_mode"], "competitive_mode")
        self.assertIn("turn_packet", private_state.json())
        self.assertIn(join_1.json()["startup_id"], replay.json()["decision_logs"])
        self.assertEqual(
            spectator.json()["decision_summaries"][join_1.json()["startup_id"]]["intent"],
            "Open with product progress.",
        )

    def test_competitive_mode_exposes_named_arc_summaries(self) -> None:
        game = server.Game(
            name="Arc Summary Test",
            max_players=2,
            min_players=2,
            turn_timeout=5,
            max_turns=3,
            seed=123,
            use_rich_state=True,
            game_mode="competitive_mode",
        )
        startup_a = game.add_startup("A1", "Alpha", "ai", "m1", "balanced")
        startup_b = game.add_startup("A2", "Beta", "saas", "m2", "balanced")
        game.start()

        startup_a.challenge_info = {
            "event_id": "evt_1",
            "family_id": "financing_squeeze",
            "base_family_id": "financing_squeeze",
            "packet_kind": "adversity",
            "phase": "scaling_stress",
            "response_routes": ["cut_burn", "raise_capital"],
        }
        startup_a.stress_index = 0.72

        spectator = game.get_spectator_state()
        turn_packet = game.get_turn_packet(startup_a.agent_token)

        self.assertTrue(spectator["arc_feed"])
        self.assertEqual(spectator["arc_feed"][0]["title"], "Financing Squeeze")
        self.assertEqual(spectator["startups"][startup_a.id]["current_arc"]["arc_type"], "financing_squeeze")
        self.assertEqual(turn_packet["match_context"]["current_arc"]["title"], "Financing Squeeze")
        self.assertIn("capital", spectator["arc_feed"][0]["theme"])

    def test_skill_entrant_registration_and_queue_enforcement(self) -> None:
        register = self.client.post(
            "/api/entrants",
            json={
                "manifest": {
                    "schema_version": "founder-arena.entrant.v1",
                    "entrant_id": "skill-test",
                    "display_name": "Skill Test",
                    "entrant_type": "skill_package",
                    "skill": {"entry_file": "SKILL.md"},
                    "runtime": {
                        "timeout_seconds": 10,
                        "max_actions_per_turn": 3,
                    },
                },
                "inline_files": {
                    "SKILL.md": "# Skill Test\n"
                },
            },
        )
        self.assertEqual(register.status_code, 200)
        entrant_payload = register.json()
        self.assertEqual(entrant_payload["entrant_type"], "skill_package")
        self.assertTrue(Path(entrant_payload["workspace"]).exists())
        entrant_detail = self.client.get("/api/entrants/skill-test")
        self.assertEqual(entrant_detail.status_code, 200)
        self.assertEqual(
            entrant_detail.json()["manifest"]["runtime"]["entry_command"],
            ["python", "skill_runner.py"],
        )
        self.assertTrue((Path(entrant_payload["workspace"]) / "skill_runner.py").exists())

        create = self.client.post(
            "/api/games",
            json={
                "name": "Queue Test",
                "max_players": 2,
                "min_players": 2,
                "turn_timeout": 5,
                "max_turns": 2,
                "game_mode": "competitive_mode",
                "queue": "github_ranked",
            },
        )
        self.assertEqual(create.status_code, 200)
        game_payload = create.json()

        rejected = self.client.post(
            f"/api/games/{game_payload['game_id']}/add-entrant",
            headers={"X-Admin-Token": game_payload["admin_token"]},
            json={
                "entrant_id": "skill-test",
                "agent_name": "SkillRunner",
                "startup_name": "SkillCo",
                "sector": "ai",
                "launch": False,
            },
        )
        self.assertEqual(rejected.status_code, 400)

        create_skill = self.client.post(
            "/api/games",
            json={
                "name": "Skill Queue Test",
                "max_players": 2,
                "min_players": 2,
                "turn_timeout": 5,
                "max_turns": 2,
                "game_mode": "competitive_mode",
                "queue": "skill_ranked",
            },
        )
        self.assertEqual(create_skill.status_code, 200)
        skill_game = create_skill.json()

        accepted = self.client.post(
            f"/api/games/{skill_game['game_id']}/add-entrant",
            headers={"X-Admin-Token": skill_game["admin_token"]},
            json={
                "entrant_id": "skill-test",
                "agent_name": "SkillRunner",
                "startup_name": "SkillCo",
                "sector": "ai",
                "launch": False,
            },
        )
        self.assertEqual(accepted.status_code, 200)
        self.assertEqual(accepted.json()["queue"], "skill_ranked")

    def test_github_manifest_validation_rejects_non_github_urls(self) -> None:
        with self.assertRaises(ValueError):
            server._validate_entrant_manifest(
                {
                    "schema_version": "founder-arena.entrant.v1",
                    "entrant_id": "bad-github",
                    "display_name": "Bad GitHub",
                    "entrant_type": "github_repo",
                    "repo": {"url": "https://gitlab.com/example/repo", "ref": "main"},
                    "runtime": {"entry_command": ["python", "agent.py"], "timeout_seconds": 10, "max_actions_per_turn": 3},
                }
            )

    def test_github_launch_uses_declared_subdir_and_records_launch_metadata(self) -> None:
        workspace = server.ENTRANT_ROOT / "gh-test" / "abc123"
        app_dir = workspace / "arena"
        app_dir.mkdir(parents=True, exist_ok=True)

        entrant = {
            "entrant_id": "gh-test",
            "display_name": "GH Test",
            "entrant_type": "github_repo",
            "manifest": {
                "schema_version": "founder-arena.entrant.v1",
                "entrant_id": "gh-test",
                "display_name": "GH Test",
                "entrant_type": "github_repo",
                "repo": {"url": "https://github.com/example/repo", "ref": "main", "subdir": "arena"},
                "runtime": {"entry_command": ["python", "agent.py"], "timeout_seconds": 10, "max_actions_per_turn": 3},
            },
            "version_hash": "abc123",
            "workspace": str(workspace),
            "registered_at": server._utc_now_iso(),
        }
        server.ENTRANTS["gh-test"] = entrant

        game = server.Game(
            name="GitHub Launch Test",
            max_players=2,
            min_players=2,
            turn_timeout=5,
            max_turns=2,
            seed=123,
            use_rich_state=True,
            game_mode="competitive_mode",
            queue="github_ranked",
        )

        req = server.AddEntrantRequest(
            entrant_id="gh-test",
            agent_name="RepoRunner",
            startup_name="RepoCo",
            sector="ai",
            launch=True,
        )

        class DummyProcess:
            pid = 4242

        with mock.patch("server.subprocess.Popen", return_value=DummyProcess()) as popen_mock:
            command = server._launch_registered_entrant(
                game,
                entrant,
                req,
                mock.Mock(url=mock.Mock(scheme="http"), headers={"host": "localhost:8888"}),
            )

        popen_mock.assert_called_once()
        self.assertEqual(command[:2], ["python", "agent.py"])
        self.assertEqual(server.ENTRANTS["gh-test"]["last_launch"]["pid"], 4242)
        self.assertTrue(server.ENTRANTS["gh-test"]["last_launch"]["cwd"].endswith("arena"))

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
        self.assertIn("score", ranking_payload)
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

    def test_competitive_mode_uses_score_for_turn_rank_leader_winner_and_replay(self) -> None:
        game = server.Game(
            name="Ranked Objective Test",
            max_players=2,
            min_players=2,
            turn_timeout=5,
            max_turns=3,
            seed=123,
            use_rich_state=True,
            game_mode="competitive_mode",
            queue="github_ranked",
        )
        startup_a = game.add_startup("ScoreBot", "Alpha", "ai", "m1", "balanced")
        startup_b = game.add_startup("ValueBot", "Beta", "fintech", "m2", "aggressive")
        game.start()

        startup_a.cash = 80_000
        startup_a.users = 200
        startup_b.cash = 2_000_000
        startup_b.users = 12_000

        scorecards = {
            startup_a.id: {"dimensions": {}, "total_score": 81.5},
            startup_b.id: {"dimensions": {}, "total_score": 63.2},
        }

        with mock.patch(
            "server._compute_seven_dimension_scores",
            side_effect=lambda startup: scorecards[startup.id],
        ):
            turn_packet = game.get_turn_packet(startup_a.agent_token)
            self.assertEqual(turn_packet["startup"]["rank"], 1)
            self.assertEqual(turn_packet["rivals"][0]["startup_name"], "Beta")
            self.assertEqual(turn_packet["rivals"][0]["rank"], 2)

            startup_a.actions_submitted = True
            startup_b.actions_submitted = True
            startup_a.pending_actions = []
            startup_b.pending_actions = []

            with mock.patch.object(game.director, "decide_and_apply", return_value=None), mock.patch.object(
                game.action_mapper,
                "advance_week",
                return_value={"action": "sim.advance", "success": True},
            ):
                game._resolve_turn()

            self.assertTrue(any("Leading: Alpha (81.5 score" in entry for entry in game.narrative))

            game._end_game()
            replay = game.get_replay()

        self.assertEqual(game.winner, startup_a.id)
        self.assertEqual(replay["rankings"][0]["startup"], "Alpha")
        self.assertEqual(replay["rankings"][0]["score"], 81.5)
        self.assertGreater(replay["rankings"][1]["valuation"], replay["rankings"][0]["valuation"])
        self.assertTrue(any("WINS with 81.5 score" in entry for entry in game.narrative))

    def test_low_trust_is_a_recoverable_crisis_not_an_instant_death(self) -> None:
        game = server.Game(
            name="Trust Recovery Test",
            max_players=2,
            min_players=2,
            turn_timeout=5,
            max_turns=3,
            seed=123,
            use_rich_state=True,
        )
        startup_a = game.add_startup("A1", "Alpha", "ai", "m1", "balanced")
        startup_b = game.add_startup("A2", "Beta", "saas", "m2", "balanced")
        game.start()

        startup_a.world_state["customers"]["trust_score"] = 0.2
        startup_a.recalculate()
        startup_a.actions_submitted = True
        startup_b.actions_submitted = True

        game._resolve_turn()

        self.assertTrue(startup_a.alive)
        self.assertEqual(startup_a.death_reason, "")
        self.assertTrue(any("trust crisis" in entry.lower() for entry in game.narrative))

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

    def test_support_recovery_action_reduces_backlog(self) -> None:
        startup = RichStartupState(
            agent_name="Tester",
            startup_name="DeepCo",
            sector="ai",
            motto="Test deeply",
            strategy="balanced",
            seed=123,
        )
        startup.world_state["operations"]["support_backlog"] = 30
        startup.world_state["customers"]["trust_score"] = 0.35
        startup.recalculate()

        mapper = server.ActionMapper(server.random.Random(123))
        result = mapper.execute(startup, {"type": "support_recovery", "params": {}}, turn_index=1)

        self.assertTrue(result["success"])
        self.assertLess(startup.world_state["operations"]["support_backlog"], 30)
        self.assertGreater(startup.world_state["customers"]["trust_score"], 0.35)

    def test_ranked_competitive_mode_rejects_legacy_only_actions(self) -> None:
        game = server.Game(
            name="Ranked Legacy Action Test",
            max_players=2,
            min_players=2,
            turn_timeout=5,
            max_turns=2,
            seed=123,
            use_rich_state=True,
            game_mode="competitive_mode",
            queue="github_ranked",
        )
        startup_a = game.add_startup("A1", "Alpha", "ai", "m1", "balanced")
        game.add_startup("A2", "Beta", "saas", "m2", "balanced")
        game.start()

        with self.assertRaises(ValueError) as ctx:
            game.submit_actions(startup_a.agent_token, [{"type": "pivot", "params": {"sector": "fintech"}}])

        self.assertIn("not available in ranked competitive mode", str(ctx.exception))

    def test_ranked_action_cooldowns_are_deterministic(self) -> None:
        action_params = {
            "board_sync": {"update_type": "operating_update"},
            "research": {},
            "support_recovery": {},
            "incident_response": {},
            "compliance_response": {},
        }
        expected_turns = {
            "board_sync": 5,
            "research": 4,
            "support_recovery": 4,
            "incident_response": 4,
            "compliance_response": 4,
        }

        for action_type, params in action_params.items():
            with self.subTest(action_type=action_type):
                startup = RichStartupState(
                    agent_name="Tester",
                    startup_name="DeepCo",
                    sector="ai",
                    motto="Test deeply",
                    strategy="balanced",
                    seed=123,
                )
                startup.game_mode = "competitive_mode"
                startup.world_state["operations"]["support_backlog"] = 30
                startup.world_state["customers"]["trust_score"] = 0.35
                startup.world_state["product"]["major_incidents_open"] = 1
                startup.world_state["risk"]["regulatory_pressure"] = 0.8
                startup.recalculate()
                mapper = server.ActionMapper(server.random.Random(123))

                first = mapper.execute(startup, {"type": action_type, "params": params}, turn_index=1)
                second = mapper.execute(startup, {"type": action_type, "params": params}, turn_index=2)
                third = mapper.execute(
                    startup,
                    {"type": action_type, "params": params},
                    turn_index=expected_turns[action_type],
                )

                self.assertTrue(first["success"])
                self.assertFalse(second["success"])
                self.assertIn("cooldown", second["message"])
                self.assertTrue(third["success"])

    def test_turn_packet_exposes_ranked_cooldown_state(self) -> None:
        game = server.Game(
            name="Ranked Cooldown Packet Test",
            max_players=2,
            min_players=2,
            turn_timeout=5,
            max_turns=3,
            seed=123,
            use_rich_state=True,
            game_mode="competitive_mode",
            queue="github_ranked",
        )
        startup_a = game.add_startup("A1", "Alpha", "ai", "m1", "balanced")
        startup_b = game.add_startup("A2", "Beta", "saas", "m2", "balanced")
        game.start()

        startup_a.pending_actions = [{"type": "board_sync", "params": {"update_type": "opening_update"}}]
        startup_b.pending_actions = [{"type": "build_feature", "params": {"focus": "core"}}]
        startup_a.actions_submitted = True
        startup_b.actions_submitted = True

        with mock.patch.object(game.director, "decide_and_apply", return_value=None), mock.patch.object(
            game.action_mapper,
            "advance_week",
            return_value={"action": "sim.advance", "success": True},
        ):
            game._resolve_turn()

        packet = game.get_turn_packet(startup_a.agent_token)
        self.assertNotIn("board_sync", packet["visible_actions"])
        self.assertEqual(packet["startup"]["action_cooldowns"]["board_sync"], 3)

    def test_shared_market_contests_growth_through_demand_and_crowding(self) -> None:
        game = server.Game(
            name="Shared Market Growth Test",
            max_players=2,
            min_players=2,
            turn_timeout=5,
            max_turns=3,
            seed=123,
            use_rich_state=True,
            game_mode="competitive_mode",
            queue="github_ranked",
        )
        startup_a = game.add_startup("A1", "Alpha", "ai", "m1", "balanced")
        startup_b = game.add_startup("A2", "Beta", "edtech", "m2", "balanced")
        game.start()

        startup_a.pending_actions = [{"type": "acquire_users", "params": {"channel": "organic"}}]
        startup_b.pending_actions = [{"type": "acquire_users", "params": {"channel": "organic"}}]
        startup_a.actions_submitted = True
        startup_b.actions_submitted = True

        with mock.patch.object(game.director, "decide_and_apply", return_value=None), mock.patch.object(
            game.action_mapper,
            "advance_week",
            return_value={"action": "sim.advance", "success": True},
        ):
            game._resolve_turn()

        first = startup_a.turn_results[0]
        second = startup_b.turn_results[0]
        self.assertTrue(first["success"])
        self.assertTrue(second["success"])
        self.assertLess(first["users_gained"] + second["users_gained"], 280)
        self.assertGreater(second["channel_crowding"], 0.0)
        self.assertLess(second["demand_consumed"], 140)

    def test_shared_market_switching_can_displace_incumbent_users(self) -> None:
        game = server.Game(
            name="Shared Market Switching Test",
            max_players=2,
            min_players=2,
            turn_timeout=5,
            max_turns=3,
            seed=123,
            use_rich_state=True,
            game_mode="competitive_mode",
            queue="github_ranked",
        )
        incumbent = game.add_startup("A1", "Alpha", "ai", "m1", "balanced")
        challenger = game.add_startup("A2", "Beta", "edtech", "m2", "balanced")
        game.start()

        incumbent.users = 5000
        challenger.users = 200
        game._refresh_shared_market()

        incumbent.pending_actions = [{"type": "build_feature", "params": {"focus": "core"}}]
        challenger.pending_actions = [{"type": "acquire_users", "params": {"channel": "organic"}}]
        incumbent.actions_submitted = True
        challenger.actions_submitted = True

        with mock.patch.object(game.director, "decide_and_apply", return_value=None), mock.patch.object(
            game.action_mapper,
            "advance_week",
            return_value={"action": "sim.advance", "success": True},
        ):
            game._resolve_turn()

        result = challenger.turn_results[0]
        self.assertTrue(result["success"])
        self.assertGreater(result["users_displaced"], 0)
        self.assertLess(incumbent.users, 5000)

    def test_shared_market_climate_and_talent_hooks_affect_fundraise_and_hire(self) -> None:
        mapper = server.ActionMapper(server.random.Random(123))

        fundraise_startup = RichStartupState(
            agent_name="Tester",
            startup_name="CapitalCo",
            sector="ai",
            motto="Test deeply",
            strategy="balanced",
            seed=123,
        )
        fundraise_startup.game_mode = "competitive_mode"
        fundraise_startup.shared_market = {
            "investor_climate": 0.8,
            "talent_scarcity": 1.0,
            "segments": {},
            "channels": {},
        }

        hire_startup = RichStartupState(
            agent_name="Tester",
            startup_name="TalentCo",
            sector="ai",
            motto="Test deeply",
            strategy="balanced",
            seed=124,
        )
        hire_startup.game_mode = "competitive_mode"
        hire_startup.shared_market = {
            "investor_climate": 1.0,
            "talent_scarcity": 1.5,
            "segments": {},
            "channels": {},
        }

        raise_result = mapper.execute(fundraise_startup, {"type": "fundraise", "params": {"round": "angel"}}, turn_index=1)
        hire_result = mapper.execute(hire_startup, {"type": "hire", "params": {"role": "engineer"}}, turn_index=1)

        self.assertTrue(raise_result["success"])
        self.assertEqual(raise_result["amount"], 96000)
        self.assertTrue(hire_result["success"])
        self.assertEqual(hire_result["member"]["salary"], 18000)

    def test_fundraise_has_cooldown_and_stage_progression(self) -> None:
        startup = RichStartupState(
            agent_name="Tester",
            startup_name="DeepCo",
            sector="ai",
            motto="Test deeply",
            strategy="balanced",
            seed=123,
        )
        mapper = server.ActionMapper(server.random.Random(123))

        first = mapper.execute(startup, {"type": "fundraise", "params": {"round": "angel"}}, turn_index=1)
        second = mapper.execute(startup, {"type": "fundraise", "params": {"round": "angel"}}, turn_index=2)

        self.assertTrue(first["success"])
        self.assertFalse(second["success"])
        self.assertIn("cooldown", second["message"])

        startup.total_raised = 400000
        third = mapper.execute(startup, {"type": "fundraise", "params": {"round": "angel"}}, turn_index=5)
        self.assertTrue(third["success"])
        self.assertIn("seed", third["message"])

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
