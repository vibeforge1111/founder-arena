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
        self.assertEqual(payload["max_players"], 2)
        self.assertEqual(payload["min_players"], 2)
        self.assertEqual(payload["turn_timeout"], 5)
        self.assertEqual(payload["max_turns"], 2)
        self.assertIn("admin_token", payload)
        self.assertIn("join_code", payload)
        self.assertIn("spectator_token", payload)

    def test_team_health_depends_on_financial_supportability(self) -> None:
        supported = RichStartupState(
            agent_name="SupportedBot",
            startup_name="SupportCo",
            sector="ai",
            motto="Sustain the team",
            strategy="balanced",
            seed=123,
        )
        unsupported = RichStartupState(
            agent_name="UnsupportedBot",
            startup_name="StretchCo",
            sector="ai",
            motto="Overspend the team",
            strategy="balanced",
            seed=456,
        )

        for startup in (supported, unsupported):
            startup.world_state["team"]["morale"] = 0.9
            startup.world_state["team"]["delivery_capacity_index"] = 0.9
            startup.world_state["team"]["attrition_risk"] = 0.05

        supported.world_state["finance"]["monthly_revenue_usd"] = 120_000
        supported.world_state["finance"]["monthly_burn_usd"] = 100_000
        supported.world_state["finance"]["net_burn_usd"] = -20_000
        supported.world_state["risk"]["financing_pressure"] = 0.08

        unsupported.world_state["finance"]["monthly_revenue_usd"] = 10_000
        unsupported.world_state["finance"]["monthly_burn_usd"] = 220_000
        unsupported.world_state["finance"]["net_burn_usd"] = 210_000
        unsupported.world_state["risk"]["financing_pressure"] = 0.82

        supported_score = server._compute_seven_dimension_scores(supported)["dimensions"]["team_health"]
        unsupported_score = server._compute_seven_dimension_scores(unsupported)["dimensions"]["team_health"]

        self.assertGreater(supported_score, unsupported_score)
        self.assertLess(unsupported_score, 75.0)

    def test_customer_health_rewards_shared_market_capture(self) -> None:
        leader = RichStartupState(
            agent_name="LeaderBot",
            startup_name="LeaderCo",
            sector="ai",
            motto="Capture the segment",
            strategy="balanced",
            seed=321,
        )
        follower = RichStartupState(
            agent_name="FollowerBot",
            startup_name="FollowerCo",
            sector="ai",
            motto="Trail the segment",
            strategy="balanced",
            seed=654,
        )

        for startup in (leader, follower):
            startup.world_state["customers"]["health_index"] = 0.82
            startup.world_state["customers"]["trust_score"] = 0.78
            startup.world_state["customers"]["monthly_churn_rate"] = 0.012
            segment_key = startup.market_segment
            startup.shared_market = {
                "segments": {
                    segment_key: {
                        "captured_users": 6_500,
                    }
                }
            }

        leader.world_state["customers"]["user_count_estimate"] = 5_400
        follower.world_state["customers"]["user_count_estimate"] = 1_100

        leader_score = server._compute_seven_dimension_scores(leader)["dimensions"]["customer_health"]
        follower_score = server._compute_seven_dimension_scores(follower)["dimensions"]["customer_health"]

        self.assertGreater(leader_score, follower_score)
        self.assertGreater(leader_score - follower_score, 7.0)

    def test_risk_management_depends_on_operating_resilience(self) -> None:
        resilient = RichStartupState(
            agent_name="ResilientBot",
            startup_name="ResilientCo",
            sector="ai",
            motto="Manage downside with real resilience",
            strategy="balanced",
            seed=777,
        )
        exposed = RichStartupState(
            agent_name="ExposedBot",
            startup_name="ExposedCo",
            sector="ai",
            motto="Looks clean but cash is weak",
            strategy="balanced",
            seed=888,
        )

        for startup in (resilient, exposed):
            startup.world_state["risk"]["regulatory_pressure"] = 0.08
            startup.world_state["risk"]["financing_pressure"] = 0.12
            startup.world_state["risk"]["compliance_backlog"] = 1.0
            startup.world_state["product"]["major_incidents_open"] = 0

        resilient.world_state["finance"]["runway_weeks"] = 48
        resilient.world_state["finance"]["monthly_revenue_usd"] = 120_000
        resilient.world_state["finance"]["monthly_burn_usd"] = 90_000
        resilient.world_state["finance"]["net_burn_usd"] = -30_000

        exposed.world_state["finance"]["runway_weeks"] = 8
        exposed.world_state["finance"]["monthly_revenue_usd"] = 18_000
        exposed.world_state["finance"]["monthly_burn_usd"] = 120_000
        exposed.world_state["finance"]["net_burn_usd"] = 102_000

        resilient_score = server._compute_seven_dimension_scores(resilient)["dimensions"]["risk_management"]
        exposed_score = server._compute_seven_dimension_scores(exposed)["dimensions"]["risk_management"]

        self.assertGreater(resilient_score, exposed_score)
        self.assertGreater(resilient_score - exposed_score, 12.0)

    def test_team_health_rewards_supportable_org_scale(self) -> None:
        compact = RichStartupState(
            agent_name="CompactBot",
            startup_name="CompactCo",
            sector="ai",
            motto="Small but stable",
            strategy="balanced",
            seed=901,
        )
        scaled = RichStartupState(
            agent_name="ScaledBot",
            startup_name="ScaledCo",
            sector="ai",
            motto="Bigger and still stable",
            strategy="balanced",
            seed=902,
        )

        for startup in (compact, scaled):
            startup.world_state["team"]["morale"] = 0.82
            startup.world_state["team"]["delivery_capacity_index"] = 0.8
            startup.world_state["team"]["attrition_risk"] = 0.08
            startup.world_state["risk"]["financing_pressure"] = 0.1
            startup.world_state["finance"]["monthly_revenue_usd"] = 140_000
            startup.world_state["finance"]["monthly_burn_usd"] = 100_000
            startup.world_state["finance"]["net_burn_usd"] = -40_000

        compact.world_state["team"]["headcount"] = 3
        scaled.world_state["team"]["headcount"] = 8

        compact_score = server._compute_seven_dimension_scores(compact)["dimensions"]["team_health"]
        scaled_score = server._compute_seven_dimension_scores(scaled)["dimensions"]["team_health"]

        self.assertGreater(scaled_score, compact_score)
        self.assertGreater(scaled_score - compact_score, 6.0)

    def test_api_info_separates_ranked_and_legacy_action_surfaces(self) -> None:
        response = self.client.get("/api/info")

        self.assertEqual(response.status_code, 200)
        payload = response.json()
        self.assertIn("primary_mode", payload)
        self.assertEqual(payload["primary_mode"]["id"], "founder_duel")
        self.assertEqual(payload["primary_mode"]["game_mode"], "competitive_mode")
        self.assertEqual(payload["primary_mode"]["max_players"], 2)
        self.assertEqual(payload["primary_mode"]["max_turns"], 32)
        self.assertEqual(payload["primary_mode"]["practice_queue"], "showmatch")
        self.assertEqual(payload["primary_mode"]["replay_focus"], "turning points, score deltas, and loss diagnosis")
        self.assertIn("practice_benchmark_tiers", payload)
        self.assertEqual(payload["practice_benchmark_tiers"], ["baseline", "pressure", "discipline", "wildcard", "gauntlet"])
        self.assertIn("ranked_actions", payload)
        self.assertIn("legacy_arena_actions", payload)
        self.assertIn("board_sync", payload["ranked_actions"])
        self.assertNotIn("pivot", payload["ranked_actions"])
        self.assertEqual(payload["legacy_arena_actions"], ["pivot", "spy", "poach"])
        self.assertIn("pivot", payload["actions"])
        self.assertIn("support_recovery", payload["actions"])

    def test_leaderboard_uses_score_for_competitive_results(self) -> None:
        competitive_game = server.Game(
            name="Competitive Finals",
            max_players=2,
            min_players=2,
            turn_timeout=5,
            max_turns=4,
            seed=11,
            use_rich_state=True,
            game_mode="competitive_mode",
        )
        score_bot = competitive_game.add_startup("ScoreBot", "Alpha", "ai", "m1", "balanced")
        value_bot = competitive_game.add_startup("ValueBot", "Beta", "saas", "m2", "balanced")
        competitive_game.phase = server.GamePhase.FINISHED
        competitive_game.turn = 4
        competitive_game.winner = score_bot.id
        score_bot.seven_dimension_scores = {"total_score": 88.0}
        value_bot.seven_dimension_scores = {"total_score": 71.0}
        score_bot.calc_valuation = lambda: 300_000
        value_bot.calc_valuation = lambda: 900_000
        server.games[competitive_game.id] = competitive_game

        legacy_game = server.Game(
            name="Legacy Finals",
            max_players=1,
            min_players=1,
            turn_timeout=5,
            max_turns=4,
            seed=12,
            use_rich_state=True,
            game_mode="legacy_arena",
        )
        legacy_bot = legacy_game.add_startup("LegacyBot", "Gamma", "fintech", "m3", "balanced")
        legacy_game.phase = server.GamePhase.FINISHED
        legacy_game.turn = 4
        legacy_game.winner = legacy_bot.id
        legacy_bot.calc_valuation = lambda: 500_000
        server.games[legacy_game.id] = legacy_game

        response = self.client.get("/api/leaderboard")

        self.assertEqual(response.status_code, 200)
        payload = response.json()
        self.assertEqual(payload["agent_rankings"][0]["agent_name"], "ScoreBot")
        self.assertEqual(payload["agent_rankings"][0]["rank_basis"], "competitive_score")
        self.assertEqual(payload["agent_rankings"][0]["best_score"], 88.0)
        self.assertEqual(payload["agent_rankings"][0]["best_valuation"], 300_000)

        competitive_entries = [entry for entry in payload["leaderboard"] if entry["game_mode"] == "competitive_mode"]
        self.assertEqual(competitive_entries[0]["agent_name"], "ScoreBot")
        self.assertEqual(competitive_entries[0]["rank"], 1)
        self.assertEqual(competitive_entries[0]["official_metric_kind"], "score")
        self.assertEqual(competitive_entries[0]["score"], 88.0)
        self.assertGreater(competitive_entries[1]["valuation"], competitive_entries[0]["valuation"])

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
        preview = self.client.post(
            "/api/entrants/preview",
            json={
                "manifest": {
                    "schema_version": "founder-arena.entrant.v1",
                    "entrant_id": "skill-test",
                    "display_name": "Skill Test",
                    "entrant_type": "skill_package",
                    "queue_targets": ["skill_ranked"],
                    "skill": {"entry_file": "SKILL.md"},
                    "runtime": {
                        "timeout_seconds": 10,
                        "max_actions_per_turn": 3,
                    },
                },
                "inline_files": {
                    "SKILL.md": "# Skill Test\nprimary_style: lean\nrisk_posture: low\nfocus: governance trust\n"
                },
            },
        )
        self.assertEqual(preview.status_code, 200)
        preview_payload = preview.json()
        self.assertTrue(preview_payload["preview_available"])
        self.assertEqual(preview_payload["compiled_doctrine"]["doctrine"]["primary_style"], "lean")
        self.assertEqual(preview_payload["compiled_doctrine"]["doctrine"]["risk_posture"], "low")

        register = self.client.post(
            "/api/entrants",
            json={
                "manifest": {
                    "schema_version": "founder-arena.entrant.v1",
                    "entrant_id": "skill-test",
                    "display_name": "Skill Test",
                    "entrant_type": "skill_package",
                    "queue_targets": ["skill_ranked"],
                    "skill": {"entry_file": "SKILL.md"},
                    "runtime": {
                        "timeout_seconds": 10,
                        "max_actions_per_turn": 3,
                    },
                },
                "inline_files": {
                    "SKILL.md": "# Skill Test\nprimary_style: lean\nrisk_posture: low\nfocus: governance trust\n"
                },
            },
        )
        self.assertEqual(register.status_code, 200)
        entrant_payload = register.json()
        self.assertEqual(entrant_payload["entrant_type"], "skill_package")
        self.assertTrue(Path(entrant_payload["workspace"]).exists())
        self.assertEqual(entrant_payload["compiled_doctrine"]["doctrine"]["primary_style"], "lean")
        entrant_detail = self.client.get("/api/entrants/skill-test")
        self.assertEqual(entrant_detail.status_code, 200)
        self.assertEqual(
            entrant_detail.json()["manifest"]["runtime"]["entry_command"],
            ["python", "skill_runner.py"],
        )
        self.assertEqual(
            entrant_detail.json()["compiled_doctrine"]["doctrine"]["risk_posture"],
            "low",
        )
        entrant_listing = self.client.get("/api/entrants")
        self.assertEqual(entrant_listing.status_code, 200)
        listed_entrant = next(item for item in entrant_listing.json()["entrants"] if item["entrant_id"] == "skill-test")
        self.assertEqual(listed_entrant["queue_targets"], ["skill_ranked"])
        self.assertEqual(listed_entrant["compiled_doctrine"]["doctrine"]["primary_style"], "lean")
        self.assertTrue((Path(entrant_payload["workspace"]) / "skill_runner.py").exists())
        self.assertTrue((Path(entrant_payload["workspace"]) / "example_agent.py").exists())

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

    def test_skill_entrant_metadata_flows_into_public_state_and_replay(self) -> None:
        register = self.client.post(
            "/api/entrants",
            json={
                "manifest": {
                    "schema_version": "founder-arena.entrant.v1",
                    "entrant_id": "skill-replay",
                    "display_name": "Skill Replay",
                    "entrant_type": "skill_package",
                    "skill": {"entry_file": "SKILL.md"},
                    "runtime": {
                        "timeout_seconds": 10,
                        "max_actions_per_turn": 3,
                    },
                },
                "inline_files": {
                    "SKILL.md": "# Skill Replay\nprimary_style: lean\nrisk_posture: low\npreferred_foci: governance resilience growth\n"
                },
            },
        )
        self.assertEqual(register.status_code, 200)
        entrant_payload = register.json()

        create = self.client.post(
            "/api/games",
            json={
                "name": "Doctrine Replay",
                "max_players": 2,
                "min_players": 2,
                "turn_timeout": 5,
                "max_turns": 1,
                "game_mode": "competitive_mode",
                "queue": "skill_ranked",
            },
        )
        self.assertEqual(create.status_code, 200)
        game_payload = create.json()
        game_id = game_payload["game_id"]

        join_1 = self.client.post(
            f"/api/games/{game_id}/join",
            json={
                "agent_name": "SkillOne",
                "startup_name": "DoctrineCo",
                "sector": "saas",
                "motto": "m1",
                "strategy_description": "lean",
                "join_code": game_payload["join_code"],
                "entrant_id": "skill-replay",
                "entrant_version_hash": entrant_payload["version_hash"],
                "entrant_type": "skill_package",
            },
        )
        self.assertEqual(join_1.status_code, 200)
        startup_1_id = join_1.json()["startup_id"]

        join_2 = self.client.post(
            f"/api/games/{game_id}/join",
            json={
                "agent_name": "SkillTwo",
                "startup_name": "BaselineCo",
                "sector": "ai",
                "motto": "m2",
                "strategy_description": "balanced",
                "join_code": game_payload["join_code"],
            },
        )
        self.assertEqual(join_2.status_code, 200)

        public_state = self.client.get(f"/api/games/{game_id}")
        self.assertEqual(public_state.status_code, 200)
        startup_payload = public_state.json()["startups"][startup_1_id]
        self.assertEqual(startup_payload["entrant_id"], "skill-replay")
        self.assertEqual(startup_payload["entrant_type"], "skill_package")
        self.assertEqual(startup_payload["compiled_doctrine"]["doctrine"]["primary_style"], "lean")

        start = self.client.post(
            f"/api/games/{game_id}/start",
            headers={"X-Admin-Token": game_payload["admin_token"]},
        )
        self.assertEqual(start.status_code, 200)

        action_1 = self.client.post(
            f"/api/games/{game_id}/action",
            headers={"X-Agent-Token": join_1.json()["agent_token"]},
            json={"actions": [{"type": "build_feature", "params": {"focus": "core"}}]},
        )
        self.assertEqual(action_1.status_code, 200)
        action_2 = self.client.post(
            f"/api/games/{game_id}/action",
            headers={"X-Agent-Token": join_2.json()["agent_token"]},
            json={"actions": [{"type": "build_feature", "params": {"focus": "core"}}]},
        )
        self.assertEqual(action_2.status_code, 200)

        replay = self.client.get(f"/api/games/{game_id}/replay")
        self.assertEqual(replay.status_code, 200)
        replay_entry = next(item for item in replay.json()["rankings"] if item["startup"] == "DoctrineCo")
        self.assertEqual(replay_entry["entrant_id"], "skill-replay")
        self.assertEqual(replay_entry["compiled_doctrine"]["doctrine"]["risk_posture"], "low")

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
        self.assertTrue(Path(server.ENTRANTS["gh-test"]["last_launch"]["stdout_path"]).exists())
        self.assertTrue(Path(server.ENTRANTS["gh-test"]["last_launch"]["stderr_path"]).exists())
        self.assertTrue(Path(server.ENTRANTS["gh-test"]["last_launch"]["launch_meta_path"]).exists())

    def test_validate_registered_skill_entrant_reports_ready_and_log_warning(self) -> None:
        register = self.client.post(
            "/api/entrants",
            json={
                "manifest": {
                    "schema_version": "founder-arena.entrant.v1",
                    "entrant_id": "skill-validate",
                    "display_name": "Skill Validate",
                    "entrant_type": "skill_package",
                    "queue_targets": ["skill_ranked"],
                    "skill": {"entry_file": "SKILL.md"},
                    "runtime": {"timeout_seconds": 10, "max_actions_per_turn": 3},
                },
                "inline_files": {
                    "SKILL.md": "# Skill Validate\nprimary_style: lean\nrisk_posture: low\n"
                },
            },
        )
        self.assertEqual(register.status_code, 200)
        entrant = server.ENTRANTS["skill-validate"]
        run_dir = server.ENTRANT_RUN_ROOT / "skill-validate" / "game-123" / "run-1"
        run_dir.mkdir(parents=True, exist_ok=True)
        stdout_path = run_dir / "stdout.log"
        stderr_path = run_dir / "stderr.log"
        stdout_path.write_text("joined ok\n", encoding="utf-8")
        stderr_path.write_text("timeout warning\nretrying\n", encoding="utf-8")
        entrant["last_launch"] = {
            "game_id": "game-123",
            "stdout_path": str(stdout_path),
            "stderr_path": str(stderr_path),
            "cwd": entrant["workspace"],
            "command": ["python", "skill_runner.py"],
            "launched_at": server._utc_now_iso(),
        }
        server.ENTRANTS["skill-validate"] = entrant

        response = self.client.get("/api/entrants/skill-validate/validate")
        self.assertEqual(response.status_code, 200)
        payload = response.json()
        self.assertTrue(payload["ready"])
        self.assertIn("Last launch produced stderr output", " ".join(payload["warnings"]))
        self.assertIn("timeout warning", payload["last_launch"]["stderr_tail"])
        self.assertEqual(payload["entry_command"], ["python", "skill_runner.py"])

        listing = self.client.get("/api/entrants")
        self.assertEqual(listing.status_code, 200)
        listed = next(item for item in listing.json()["entrants"] if item["entrant_id"] == "skill-validate")
        self.assertEqual(listed["last_launch"]["diagnosis"]["label"], "runner timeout")

    def test_validate_registered_entrant_reports_missing_workspace(self) -> None:
        server.ENTRANTS["missing-validate"] = {
            "entrant_id": "missing-validate",
            "display_name": "Missing Validate",
            "entrant_type": "skill_package",
            "manifest": {
                "schema_version": "founder-arena.entrant.v1",
                "entrant_id": "missing-validate",
                "display_name": "Missing Validate",
                "entrant_type": "skill_package",
                "queue_targets": ["skill_ranked"],
                "skill": {"entry_file": "SKILL.md"},
                "runtime": {"entry_command": ["python", "skill_runner.py"], "timeout_seconds": 10, "max_actions_per_turn": 3},
            },
            "version_hash": "missing123",
            "workspace": str(server.ENTRANT_ROOT / "missing-validate" / "missing123"),
            "registered_at": server._utc_now_iso(),
            "compiled_doctrine": None,
        }

        response = self.client.get("/api/entrants/missing-validate/validate")
        self.assertEqual(response.status_code, 200)
        payload = response.json()
        self.assertFalse(payload["ready"])
        self.assertTrue(any("Workspace is missing or invalid" in item for item in payload["errors"]))

    def test_skill_entrant_compare_tracks_versions_and_skill_content_changes(self) -> None:
        first = self.client.post(
            "/api/entrants",
            json={
                "manifest": {
                    "schema_version": "founder-arena.entrant.v1",
                    "entrant_id": "skill-compare",
                    "display_name": "Skill Compare",
                    "entrant_type": "skill_package",
                    "queue_targets": ["skill_ranked"],
                    "skill": {"entry_file": "SKILL.md"},
                    "runtime": {"timeout_seconds": 10, "max_actions_per_turn": 3},
                },
                "inline_files": {
                    "SKILL.md": "# Skill Compare\nprimary_style: lean\nrisk_posture: low\npreferred_foci: governance resilience\n"
                },
            },
        )
        self.assertEqual(first.status_code, 200)
        first_hash = first.json()["version_hash"]

        second = self.client.post(
            "/api/entrants",
            json={
                "manifest": {
                    "schema_version": "founder-arena.entrant.v1",
                    "entrant_id": "skill-compare",
                    "display_name": "Skill Compare",
                    "entrant_type": "skill_package",
                    "queue_targets": ["skill_ranked"],
                    "skill": {"entry_file": "SKILL.md"},
                    "runtime": {"timeout_seconds": 10, "max_actions_per_turn": 3},
                },
                "inline_files": {
                    "SKILL.md": "# Skill Compare\nprimary_style: aggressive\nrisk_posture: high\npreferred_foci: growth intelligence\n"
                },
            },
        )
        self.assertEqual(second.status_code, 200)
        second_hash = second.json()["version_hash"]
        self.assertNotEqual(first_hash, second_hash)

        compare = self.client.get("/api/entrants/skill-compare/compare")
        self.assertEqual(compare.status_code, 200)
        compare_payload = compare.json()
        self.assertEqual(compare_payload["version_count"], 2)
        self.assertEqual(compare_payload["version_hashes"], [first_hash, second_hash])
        self.assertIn("primary_style: lean -> aggressive", compare_payload["compare"]["change_lines"])
        self.assertIn("risk_posture: low -> high", compare_payload["compare"]["change_lines"])

        detail = self.client.get("/api/entrants/skill-compare")
        self.assertEqual(detail.status_code, 200)
        detail_payload = detail.json()
        self.assertEqual(detail_payload["version_count"], 2)
        self.assertEqual(len(detail_payload["version_history"]), 1)
        self.assertEqual(detail_payload["version_history"][0]["version_hash"], first_hash)

        listing = self.client.get("/api/entrants")
        self.assertEqual(listing.status_code, 200)
        listed = next(item for item in listing.json()["entrants"] if item["entrant_id"] == "skill-compare")
        self.assertEqual(listed["version_count"], 2)

    def test_add_registered_entrant_returns_400_for_missing_workspace(self) -> None:
        missing_workspace = server.ENTRANT_ROOT / "missing-skill" / "deadbeef"
        server.ENTRANTS["missing-skill"] = {
            "entrant_id": "missing-skill",
            "display_name": "Missing Skill",
            "entrant_type": "skill_package",
            "manifest": {
                "schema_version": "founder-arena.entrant.v1",
                "entrant_id": "missing-skill",
                "display_name": "Missing Skill",
                "entrant_type": "skill_package",
                "queue_targets": ["showmatch"],
                "skill": {"entry_file": "SKILL.md"},
                "runtime": {"entry_command": ["python", "skill_runner.py"], "timeout_seconds": 10, "max_actions_per_turn": 3},
            },
            "version_hash": "deadbeef",
            "workspace": str(missing_workspace),
            "registered_at": server._utc_now_iso(),
            "compiled_doctrine": None,
        }

        create = self.client.post(
            "/api/games",
            json={
                "name": "Missing Workspace Queue Test",
                "max_players": 2,
                "min_players": 2,
                "turn_timeout": 5,
                "max_turns": 2,
                "game_mode": "competitive_mode",
                "queue": "showmatch",
            },
        )
        self.assertEqual(create.status_code, 200)
        game_payload = create.json()

        queued = self.client.post(
            f"/api/games/{game_payload['game_id']}/add-entrant",
            headers={"X-Admin-Token": game_payload["admin_token"]},
            json={
                "entrant_id": "missing-skill",
                "agent_name": "MissingRunner",
                "startup_name": "MissingCo",
                "sector": "ai",
                "launch": True,
            },
        )
        self.assertEqual(queued.status_code, 400)
        self.assertIn("workspace is missing", queued.json()["detail"])

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
                "game_mode": "competitive_mode",
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
        self.assertIn("summary", replay_payload)
        self.assertIn("winner_summary", replay_payload["summary"])
        self.assertIn("turning_points", replay_payload["summary"])
        self.assertIn("startup_outcomes", replay_payload["summary"])
        self.assertTrue(replay_payload["summary"]["turning_points"])
        self.assertTrue(replay_payload["summary"]["startup_outcomes"])
        winner_outcome = next(iter(replay_payload["summary"]["startup_outcomes"].values()))
        self.assertIn("headline", winner_outcome)
        self.assertIn("strengths", winner_outcome)
        self.assertIn("gaps", winner_outcome)
        self.assertTrue(all("score" in history[0] for history in replay_payload["histories"].values() if history))
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

    def test_showmatch_replay_labels_benchmark_pressure(self) -> None:
        game = server.Game(
            name="Practice Verdict Test",
            max_players=2,
            min_players=2,
            turn_timeout=5,
            max_turns=3,
            seed=123,
            use_rich_state=True,
            game_mode="competitive_mode",
            queue="showmatch",
        )
        startup_a = game.add_startup("BuilderBot", "BuilderCo", "ai", "m1", "balanced")
        startup_b = game.add_startup("AlphaBot", "NeuralForge", "ai", "m2", "balanced")
        startup_b.control_type = "benchmark"
        startup_b.benchmark_profile = {
            "label": "AlphaBot benchmark",
            "strategy": "balanced",
            "tier": "baseline",
        }

        scorecards = {
            startup_a.id: {
                "dimensions": {
                    "cash_efficiency": 66.0,
                    "revenue_quality": 67.0,
                    "customer_health": 82.0,
                    "product_health": 70.0,
                    "team_health": 68.0,
                    "risk_management": 69.0,
                    "strategic_coherence": 73.0,
                },
                "total_score": 72.4,
            },
            startup_b.id: {
                "dimensions": {
                    "cash_efficiency": 78.0,
                    "revenue_quality": 76.0,
                    "customer_health": 74.0,
                    "product_health": 74.0,
                    "team_health": 70.0,
                    "risk_management": 72.0,
                    "strategic_coherence": 75.0,
                },
                "total_score": 79.1,
            },
        }

        with mock.patch(
            "server._compute_seven_dimension_scores",
            side_effect=lambda startup: scorecards[startup.id],
        ):
            replay = game.get_replay()

        self.assertEqual(replay["rankings"][0]["control_type"], "benchmark")
        self.assertEqual(replay["rankings"][0]["benchmark_profile"]["label"], "AlphaBot benchmark")
        self.assertEqual(replay["summary"]["practice_takeaway"]["category"], "benchmark_pressure")
        self.assertEqual(replay["summary"]["practice_takeaway"]["benchmark_name"], "AlphaBot benchmark")
        builder_outcome = replay["summary"]["startup_outcomes"][startup_a.id]
        self.assertEqual(builder_outcome["practice_takeaway"]["category"], "benchmark_pressure")

    def test_showmatch_replay_labels_execution_mistake_against_benchmark(self) -> None:
        game = server.Game(
            name="Practice Execution Test",
            max_players=2,
            min_players=2,
            turn_timeout=5,
            max_turns=3,
            seed=123,
            use_rich_state=True,
            game_mode="competitive_mode",
            queue="showmatch",
        )
        startup_a = game.add_startup("BuilderBot", "BuilderCo", "ai", "m1", "balanced")
        startup_b = game.add_startup("AlphaBot", "NeuralForge", "ai", "m2", "balanced")
        startup_b.control_type = "benchmark"
        startup_b.benchmark_profile = {
            "label": "AlphaBot benchmark",
            "strategy": "balanced",
            "tier": "baseline",
        }
        startup_a.diagnostics.append({"kind": "illegal_action", "message": "submitted blocked move"})

        scorecards = {
            startup_a.id: {
                "dimensions": {
                    "cash_efficiency": 52.0,
                    "revenue_quality": 55.0,
                    "customer_health": 71.0,
                    "product_health": 63.0,
                    "team_health": 66.0,
                    "risk_management": 58.0,
                    "strategic_coherence": 61.0,
                },
                "total_score": 61.0,
            },
            startup_b.id: {
                "dimensions": {
                    "cash_efficiency": 79.0,
                    "revenue_quality": 77.0,
                    "customer_health": 72.0,
                    "product_health": 74.0,
                    "team_health": 71.0,
                    "risk_management": 73.0,
                    "strategic_coherence": 75.0,
                },
                "total_score": 80.3,
            },
        }

        with mock.patch(
            "server._compute_seven_dimension_scores",
            side_effect=lambda startup: scorecards[startup.id],
        ):
            replay = game.get_replay()

        self.assertEqual(replay["summary"]["practice_takeaway"]["category"], "execution_mistake")
        self.assertIn("illegal action", replay["summary"]["practice_takeaway"]["headline"])

    def test_create_game_and_fill_bots_use_selected_benchmark_tier(self) -> None:
        create = self.client.post(
            "/api/games",
            json={
                "name": "Wildcard Practice",
                "max_players": 2,
                "min_players": 2,
                "turn_timeout": 5,
                "max_turns": 8,
                "use_rich_state": True,
                "game_mode": "competitive_mode",
                "queue": "showmatch",
                "benchmark_tier": "wildcard",
            },
        )
        self.assertEqual(create.status_code, 200)
        create_payload = create.json()
        self.assertEqual(create_payload["benchmark_tier"], "wildcard")

        joined = self.client.post(
            f"/api/games/{create_payload['game_id']}/join",
            json={
                "agent_name": "Builder",
                "startup_name": "BuilderCo",
                "sector": "ai",
                "motto": "m1",
                "strategy_description": "balanced",
                "join_code": create_payload["join_code"],
            },
        )
        self.assertEqual(joined.status_code, 200)

        with mock.patch("server.threading.Thread") as thread_cls:
            filled = self.client.post(
                f"/api/games/{create_payload['game_id']}/fill-bots",
                headers={"X-Admin-Token": create_payload["admin_token"]},
                json={"benchmark_tier": "wildcard"},
            )

        self.assertEqual(filled.status_code, 200)
        self.assertEqual(filled.json()["benchmark_tier"], "wildcard")
        self.assertEqual(filled.json()["bot_names"], ["ChaosMonkey"])
        thread_cls.assert_called()

        public_state = self.client.get(f"/api/games/{create_payload['game_id']}")
        self.assertEqual(public_state.status_code, 200)
        payload = public_state.json()
        self.assertEqual(payload["benchmark_tier"], "wildcard")
        benchmark_startups = [
            startup for startup in payload["startups"].values()
            if startup.get("control_type") == "benchmark"
        ]
        self.assertEqual(len(benchmark_startups), 1)
        self.assertEqual(benchmark_startups[0]["benchmark_profile"]["tier"], "wildcard")
        self.assertEqual(benchmark_startups[0]["strategy"], "chaos")

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

    def test_build_feature_focus_aliases_normalize_to_ranked_surface(self) -> None:
        for raw_focus, expected_focus in (("ai", "core"), ("speed", "scale"), ("polish", "ux"), ("unknown", "core")):
            with self.subTest(raw_focus=raw_focus):
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
                    {"type": "build_feature", "params": {"focus": raw_focus}},
                    turn_index=1,
                )

                self.assertTrue(result["success"])
                self.assertEqual(result["resolved_focus"], expected_focus)
                self.assertIn(expected_focus, result["message"])

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
        self.assertTrue(startup_a.diagnostics)
        self.assertEqual(startup_a.diagnostics[-1]["kind"], "illegal_action")

    def test_check_timeout_records_missing_submission_diagnostic(self) -> None:
        game = server.Game(
            name="Timeout Diagnostic Test",
            max_players=2,
            min_players=2,
            turn_timeout=1,
            max_turns=2,
            seed=123,
            use_rich_state=True,
            game_mode="competitive_mode",
            queue="github_ranked",
        )
        startup_a = game.add_startup("A1", "Alpha", "ai", "m1", "balanced")
        startup_b = game.add_startup("A2", "Beta", "saas", "m2", "balanced")
        game.start()
        startup_a.actions_submitted = True
        startup_a.pending_actions = [{"type": "build_feature", "params": {"focus": "core"}}]
        game.turn_deadline = 0

        with mock.patch.object(game.director, "decide_and_apply", return_value=None), mock.patch.object(
            game.action_mapper,
            "advance_week",
            return_value={"action": "sim.advance", "success": True},
        ):
            game.check_timeout()

        self.assertTrue(startup_b.diagnostics)
        self.assertEqual(startup_b.diagnostics[-1]["kind"], "timeout")
        self.assertIn("auto-resolved", startup_b.diagnostics[-1]["message"])

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
        log_entry = game.action_log[startup_a.id][0]
        self.assertIn("pressure_snapshot", log_entry)
        self.assertIn("runway", log_entry["pressure_snapshot"])
        self.assertIn("support_backlog", log_entry["pressure_snapshot"])

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
