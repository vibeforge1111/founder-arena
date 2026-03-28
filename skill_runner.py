"""
Founder Arena native runner for SKILL.md entrants.

This runner compiles a free-form skill package into a bounded doctrine profile
that can influence strategy style and priorities without changing core rules.
"""

from __future__ import annotations

import argparse
import re
from pathlib import Path

from example_agent import FounderAgent


VALID_STYLES = {"balanced", "aggressive", "lean", "chaos"}
VALID_RISK_POSTURES = {"low", "medium", "high"}
VALID_DECISION_STYLES = {"concise", "analytical", "narrative"}
FOCUS_CLASSES = ("product", "growth", "resilience", "governance", "intelligence")
RECOVERY_ACTIONS = ("support_recovery", "compliance_response", "incident_response", "board_sync", "fundraise")


def _read_skill(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def _contains_any(text: str, tokens: tuple[str, ...] | list[str]) -> bool:
    return any(token in text for token in tokens)


def _explicit_value(text: str, labels: tuple[str, ...], allowed: set[str]) -> str | None:
    pattern = r"(?mi)^\s*(?:%s)\s*[:=]\s*([a-z_ -]+)\s*$" % "|".join(re.escape(label) for label in labels)
    match = re.search(pattern, text)
    if not match:
        return None
    candidate = match.group(1).strip().lower().replace(" ", "_")
    return candidate if candidate in allowed else None


def _ordered_focuses(text: str) -> list[str]:
    explicit = re.search(r"(?mis)^\s*(?:preferred_foci|preferred_focus|focus)\s*[:=]\s*([a-z_, \n-]+)", text)
    if explicit:
        raw_items = re.split(r"[\s,]+", explicit.group(1).strip().lower().replace("-", "_"))
        ordered = []
        for item in raw_items:
            if item in FOCUS_CLASSES and item not in ordered:
                ordered.append(item)
        if ordered:
            return ordered

    ranked: list[tuple[int, str]] = []
    heuristics = {
        "product": ("product", "quality", "ux", "reliability", "shipping"),
        "growth": ("growth", "distribution", "acquisition", "viral", "demand"),
        "resilience": ("trust", "support", "retention", "runway", "stability"),
        "governance": ("board", "governance", "stakeholder", "alignment"),
        "intelligence": ("research", "intelligence", "insight", "signal"),
    }
    for focus, tokens in heuristics.items():
        score = sum(text.count(token) for token in tokens)
        if score > 0:
            ranked.append((score, focus))
    ranked.sort(key=lambda item: (-item[0], FOCUS_CLASSES.index(item[1])))
    ordered = [focus for _, focus in ranked]
    return ordered or ["product", "growth"]


def _recovery_biases(text: str) -> list[str]:
    explicit = re.search(r"(?mi)^\s*(?:recovery_order|recovery_bias|recovery)\s*[:=]\s*(.+)$", text)
    if explicit:
        ordered = []
        tokens = re.split(r"[\s,]+", explicit.group(1).strip().lower().replace("-", "_"))
        for token in tokens:
            if token in RECOVERY_ACTIONS and token not in ordered:
                ordered.append(token)
        if ordered:
            return ordered

    ordered = []
    heuristics = {
        "compliance_response": ("compliance", "security", "legal", "policy"),
        "support_recovery": ("support", "trust", "retention", "customer"),
        "incident_response": ("incident", "reliability", "outage"),
        "board_sync": ("board", "governance", "stakeholder"),
        "fundraise": ("runway", "fundraise", "capital"),
    }
    for action_type, tokens in heuristics.items():
        if _contains_any(text, tokens):
            ordered.append(action_type)
    if "support_recovery" not in ordered:
        ordered.append("support_recovery")
    if "board_sync" not in ordered:
        ordered.append("board_sync")
    return ordered[:3]


def compile_skill_doctrine(skill_text: str, fallback: str = "balanced") -> dict[str, object]:
    text = skill_text.lower()
    primary_style = _explicit_value(text, ("primary_style", "style", "strategy"), VALID_STYLES)
    if primary_style is None:
        if _contains_any(text, ("blitz", "aggressive", "growth at all costs", "raise faster")):
            primary_style = "aggressive"
        elif _contains_any(text, ("lean", "runway", "discipline", "trust", "quality first")):
            primary_style = "lean"
        elif _contains_any(text, ("chaos", "wildcard", "random")):
            primary_style = "chaos"
        else:
            primary_style = fallback if fallback in VALID_STYLES else "balanced"

    risk_posture = _explicit_value(text, ("risk_posture", "risk"), VALID_RISK_POSTURES)
    if risk_posture is None:
        if _contains_any(text, ("capital preservation", "discipline", "cautious", "low risk")):
            risk_posture = "low"
        elif _contains_any(text, ("blitz", "swing hard", "high risk", "all costs")):
            risk_posture = "high"
        else:
            risk_posture = "medium"

    decision_style = _explicit_value(text, ("decision_style", "explanation_style", "tone"), VALID_DECISION_STYLES)
    if decision_style is None:
        if _contains_any(text, ("narrative", "story", "spectator")):
            decision_style = "narrative"
        elif _contains_any(text, ("analysis", "analytical", "reason step by step")):
            decision_style = "analytical"
        else:
            decision_style = "concise"

    preferred_foci = _ordered_focuses(text)
    recovery_order = _recovery_biases(text)
    doctrine = {
        "primary_style": primary_style,
        "risk_posture": risk_posture,
        "decision_style": decision_style,
        "preferred_foci": preferred_foci[:3],
        "recovery_order": recovery_order[:3],
        "prefers_growth": "growth" in preferred_foci,
        "prefers_governance": "governance" in preferred_foci,
        "prefers_intelligence": "intelligence" in preferred_foci,
        "prefers_resilience": "resilience" in preferred_foci,
    }
    return doctrine


class SkillRunnerAgent(FounderAgent):
    def __init__(self, *, skill_file: Path, skill_text: str, doctrine: dict[str, object], **kwargs):
        super().__init__(**kwargs)
        self.skill_file = skill_file
        self.skill_text = skill_text
        self.doctrine = doctrine

    def _recovery_override(self, *, support_backlog: float, regulatory_pressure: float, trust: float) -> list[dict] | None:
        recovery_order = list(self.doctrine.get("recovery_order", []))
        severe_backlog = support_backlog > 28 or trust < 0.56
        if not severe_backlog and regulatory_pressure <= 0.22:
            return None

        actions: list[dict] = []
        for action_type in recovery_order:
            if action_type == "compliance_response" and regulatory_pressure > 0.22:
                actions.append({"type": "compliance_response", "params": {}})
                actions.append({"type": "build_feature", "params": {"focus": "security"}})
            elif action_type == "support_recovery" and severe_backlog:
                actions.append({"type": "support_recovery", "params": {}})
                actions.append({"type": "build_feature", "params": {"focus": "quality"}})
            elif action_type == "incident_response" and support_backlog > 35:
                actions.append({"type": "incident_response", "params": {}})
            elif action_type == "board_sync":
                actions.append({"type": "board_sync", "params": {"update_type": "skill_recovery"}})
            elif action_type == "fundraise" and trust < 0.5:
                actions.append({"type": "fundraise", "params": {"round": "angel"}})
            if actions:
                return actions[:3]
        return None

    def _apply_doctrine(self, actions: list[dict], *, state: dict, visible_actions: set[str] | None) -> list[dict]:
        my = state["startups"].get(state.get("my_startup_id", ""), {})
        if not my:
            return actions

        rich_state = my.get("rich_state", {})
        support_backlog = float(rich_state.get("operations", {}).get("support_backlog", 0.0))
        regulatory_pressure = float(rich_state.get("risk", {}).get("regulatory_pressure", 0.0))
        trust = float(rich_state.get("customers", {}).get("trust_score", 0.7))
        runway = float(my.get("runway", 0))
        cash = float(my.get("cash", 0))

        override = self._recovery_override(
            support_backlog=support_backlog,
            regulatory_pressure=regulatory_pressure,
            trust=trust,
        )
        if override:
            filtered = self._filter_visible_actions(override, visible_actions)
            if filtered:
                return filtered[:3]

        adjusted = list(actions[:3])
        risk_posture = str(self.doctrine.get("risk_posture", "medium"))

        if risk_posture == "low" and runway < 6 and not any(action["type"] == "fundraise" for action in adjusted):
            adjusted = [{"type": "fundraise", "params": {"round": "angel"}}] + adjusted[:2]

        if self.doctrine.get("prefers_governance") and not any(action["type"] == "board_sync" for action in adjusted):
            adjusted = list(adjusted[:2]) + [{"type": "board_sync", "params": {"update_type": "skill_doctrine"}}]

        if self.doctrine.get("prefers_intelligence") and len(adjusted) < 3 and not any(action["type"] == "research" for action in adjusted):
            adjusted.append({"type": "research", "params": {}})

        if (
            self.doctrine.get("prefers_growth")
            and len(adjusted) < 3
            and not any(action["type"] == "acquire_users" for action in adjusted)
            and cash > 12000
            and runway > 4
        ):
            adjusted.append({"type": "acquire_users", "params": {"channel": "organic"}})

        filtered = self._filter_visible_actions(adjusted, visible_actions)
        if filtered:
            return filtered[:3]
        return self._fallback_actions(cash=int(cash), visible_actions=visible_actions)

    def decide(self, state: dict, turn_packet: dict | None = None) -> list[dict]:
        visible_actions = (
            set((turn_packet or {}).get("visible_actions") or [])
            if state.get("game_mode") == "competitive_mode" and turn_packet is not None
            else None
        )
        actions = super().decide(state, turn_packet=turn_packet)
        return self._apply_doctrine(actions, state=state, visible_actions=visible_actions)

    def _build_decision_packet(self, state: dict, turn_packet: dict | None, actions: list[dict]) -> dict | None:
        packet = super()._build_decision_packet(state, turn_packet, actions)
        if packet is None:
            return None
        style = self.doctrine.get("primary_style", "balanced")
        risk = self.doctrine.get("risk_posture", "medium")
        focus = ",".join(self.doctrine.get("preferred_foci", [])[:2])
        packet["reasoning_summary"] = (
            f"Skill doctrine style={style} risk={risk} focus={focus}. " + packet["reasoning_summary"]
        )
        notes = list(packet.get("public_notes", []))
        notes.extend([
            f"skill:{self.skill_file.name}",
            f"style:{style}",
            f"risk:{risk}",
        ])
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
    parser.add_argument("--entrant-id", default="")
    parser.add_argument("--entrant-version-hash", default="")
    parser.add_argument("--entrant-type", default="skill_package")
    args = parser.parse_args()

    skill_path = Path(args.skill_file).resolve()
    skill_text = _read_skill(skill_path)
    doctrine = compile_skill_doctrine(skill_text, fallback=args.strategy)

    agent = SkillRunnerAgent(
        skill_file=skill_path,
        skill_text=skill_text,
        doctrine=doctrine,
        name=args.name,
        startup_name=args.startup,
        sector=args.sector,
        motto=args.motto,
        strategy=str(doctrine["primary_style"]),
        server=args.server,
    )
    agent.entrant_id = args.entrant_id or None
    agent.entrant_version_hash = args.entrant_version_hash or None
    agent.entrant_type = args.entrant_type or "skill_package"
    agent.join_game(args.game_id, args.join_code)
    agent.play()


if __name__ == "__main__":
    main()
