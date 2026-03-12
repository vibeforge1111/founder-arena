"""
Founder Arena native runner for SKILL.md entrants.

This wrapper turns a Skill package into a live arena agent without requiring the
entrant author to provide a custom runtime binary. The current implementation is
a deterministic bridge: it reads the skill file, infers operating posture, and
uses the standard FounderAgent play loop with skill-aware preferences.
"""

from __future__ import annotations

import argparse
from pathlib import Path

from example_agent import FounderAgent


def _read_skill(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def _infer_strategy(skill_text: str, fallback: str) -> str:
    text = skill_text.lower()
    if any(token in text for token in ["blitz", "aggressive", "growth at all costs", "raise faster"]):
        return "aggressive"
    if any(token in text for token in ["lean", "runway", "discipline", "trust", "quality first"]):
        return "lean"
    if any(token in text for token in ["chaos", "wildcard", "random"]):
        return "chaos"
    return fallback if fallback in {"balanced", "aggressive", "lean", "chaos"} else "balanced"


def _skill_biases(skill_text: str) -> dict[str, bool]:
    text = skill_text.lower()
    return {
        "prefers_board_sync": any(token in text for token in ["board", "governance", "stakeholder"]),
        "prefers_compliance": any(token in text for token in ["compliance", "security", "legal", "policy"]),
        "prefers_support": any(token in text for token in ["support", "trust", "retention", "customer"]),
        "prefers_growth": any(token in text for token in ["growth", "distribution", "acquisition", "viral"]),
    }


class SkillRunnerAgent(FounderAgent):
    def __init__(self, *, skill_file: Path, skill_text: str, **kwargs):
        super().__init__(**kwargs)
        self.skill_file = skill_file
        self.skill_text = skill_text
        self.skill_bias = _skill_biases(skill_text)

    def decide(self, state: dict) -> list[dict]:
        actions = super().decide(state)
        my = state["startups"].get(state.get("my_startup_id", ""), {})
        if not my:
            return actions

        rich_state = my.get("rich_state", {})
        support_backlog = float(rich_state.get("operations", {}).get("support_backlog", 0.0))
        regulatory_pressure = float(rich_state.get("risk", {}).get("regulatory_pressure", 0.0))
        trust = float(rich_state.get("customers", {}).get("trust_score", 0.7))

        if self.skill_bias["prefers_compliance"] and regulatory_pressure > 0.22:
            return [
                {"type": "compliance_response", "params": {}},
                {"type": "build_feature", "params": {"focus": "security"}},
                {"type": "board_sync", "params": {"update_type": "risk_update"}},
            ][:3]

        if self.skill_bias["prefers_support"] and (support_backlog > 24 or trust < 0.58):
            return [
                {"type": "support_recovery", "params": {}},
                {"type": "build_feature", "params": {"focus": "quality"}},
                {"type": "board_sync", "params": {"update_type": "customer_update"}},
            ][:3]

        if self.skill_bias["prefers_board_sync"] and not any(action["type"] == "board_sync" for action in actions):
            actions = list(actions[:2]) + [{"type": "board_sync", "params": {"update_type": "skill_update"}}]

        if self.skill_bias["prefers_growth"] and len(actions) < 3 and not any(action["type"] == "acquire_users" for action in actions):
            actions.append({"type": "acquire_users", "params": {"channel": "organic"}})

        return actions[:3]

    def _build_decision_packet(self, state: dict, turn_packet: dict | None, actions: list[dict]) -> dict | None:
        packet = super()._build_decision_packet(state, turn_packet, actions)
        if packet is None:
            return None
        packet["reasoning_summary"] = (
            f"Skill file {self.skill_file.name} guided this turn. " + packet["reasoning_summary"]
        )
        notes = list(packet.get("public_notes", []))
        notes.append(f"skill:{self.skill_file.name}")
        packet["public_notes"] = notes[:4]
        return packet


def main() -> None:
    parser = argparse.ArgumentParser(description="Founder Arena SKILL.md runner")
    parser.add_argument("--skill-file", default="SKILL.md", help="Path to the SKILL.md entry file")
    parser.add_argument("--game-id", required=True)
    parser.add_argument("--join-code", required=True)
    parser.add_argument("--name", required=True)
    parser.add_argument("--startup", required=True)
    parser.add_argument("--sector", required=True)
    parser.add_argument("--motto", default="")
    parser.add_argument("--strategy", default="balanced")
    parser.add_argument("--server", default="http://localhost:8888")
    args = parser.parse_args()

    skill_path = Path(args.skill_file).resolve()
    skill_text = _read_skill(skill_path)
    inferred_strategy = _infer_strategy(skill_text, args.strategy)

    agent = SkillRunnerAgent(
        skill_file=skill_path,
        skill_text=skill_text,
        name=args.name,
        startup_name=args.startup,
        sector=args.sector,
        motto=args.motto,
        strategy=inferred_strategy,
        server=args.server,
    )
    agent.join_game(args.game_id, args.join_code)
    agent.play()


if __name__ == "__main__":
    main()
