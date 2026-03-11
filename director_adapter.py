"""Founder Arena wrapper around the simulator startup director."""

from __future__ import annotations

import sys
from pathlib import Path


SIM_SRC = Path(__file__).resolve().parent.parent / "agentic-startup-simulator" / "src"
if str(SIM_SRC) not in sys.path:
    sys.path.insert(0, str(SIM_SRC))

from agentic_startup_simulator.director import director_decision
from thestartupbench.primitive_engine import apply_operations
from thestartupbench.runner import recalculate_derived_metrics


DOMAIN_EMOJI = {
    "finance": "💸",
    "customers": "🤝",
    "product": "🧪",
    "operations": "🛠",
    "market": "📈",
    "sales": "🎯",
    "governance": "🏛",
    "legal": "⚖",
    "people": "👥",
    "growth": "🚀",
}


class ArenaDirector:
    def __init__(self):
        self._states: dict[str, dict] = {}

    def _state_for(self, startup_id: str) -> dict:
        return self._states.setdefault(
            startup_id,
            {
                "director_state": {"current_state": "pressure_build"},
                "injected_counts": {},
                "recent_packets": [],
            },
        )

    def decide_and_apply(self, startup, turn_index: int) -> dict | None:
        state = self._state_for(startup.id)
        decision = director_decision(
            world_state=startup.world_state,
            turn_index=turn_index,
            injected_counts=state["injected_counts"],
            director_state=state["director_state"],
            recent_packets=state["recent_packets"],
        )
        state["director_state"]["current_state"] = decision["director_state"]
        startup.director_state = decision["director_state"]
        startup.stress_index = float(decision["stress_index"])

        challenge = decision.get("challenge")
        if decision.get("event") is None or challenge is None:
            startup.challenge_info = {
                "phase": decision.get("phase"),
                "packet_kind": decision.get("packet_kind"),
                "rationale": decision.get("rationale"),
                "base_family_id": decision.get("chosen_base_family_id"),
                "director_state": decision.get("director_state"),
                "stress_index": round(float(decision.get("stress_index", 0.0)), 4),
            }
            return None

        event = decision["event"]
        apply_operations(startup.world_state, event["operations"])
        recalculate_derived_metrics(startup.world_state)
        startup.recalculate()

        base_family_id = decision.get("chosen_base_family_id") or challenge["family_id"]
        state["injected_counts"][base_family_id] = state["injected_counts"].get(base_family_id, 0) + 1
        if challenge["family_id"] != base_family_id:
            state["injected_counts"][challenge["family_id"]] = state["injected_counts"].get(challenge["family_id"], 0) + 1

        packet_record = {
            "event_id": event["event_id"],
            "family_id": challenge["family_id"],
            "base_family_id": base_family_id,
            "variant_id": challenge["variant_id"],
            "packet_kind": challenge["packet_kind"],
            "domain": challenge["domain"],
            "transfer_pack_id": challenge.get("transfer_pack_id"),
            "transfer_pack_step": challenge.get("transfer_pack_step"),
            "transfer_pack_length": challenge.get("transfer_pack_length"),
            "visible_message": event["visible_message"],
        }
        state["recent_packets"].append(packet_record)
        state["recent_packets"] = state["recent_packets"][-6:]

        startup.challenge_info = {
            "event_id": event["event_id"],
            "director_state": decision["director_state"],
            "phase": decision["phase"],
            "packet_kind": challenge["packet_kind"],
            "family_id": challenge["family_id"],
            "base_family_id": base_family_id,
            "variant_id": challenge["variant_id"],
            "reasoning_dimensions": challenge.get("reasoning_dimensions", []),
            "response_routes": challenge.get("response_routes", []),
            "transfer_pack_id": challenge.get("transfer_pack_id"),
            "transfer_pack_step": challenge.get("transfer_pack_step"),
            "transfer_pack_length": challenge.get("transfer_pack_length"),
            "stress_index": round(float(decision["stress_index"]), 4),
            "rationale": decision["rationale"],
            "visible_message": event["visible_message"],
            "operations": event["operations"],
        }

        return {
            "id": event["event_id"],
            "emoji": DOMAIN_EMOJI.get(challenge["domain"], "⚠"),
            "name": challenge.get("variant_label", challenge["family_id"].replace("_", " ").title()),
            "description": event["visible_message"],
            "director_state": decision["director_state"],
            "stress_index": round(float(decision["stress_index"]), 4),
            "family_id": challenge["family_id"],
            "base_family_id": base_family_id,
            "variant_id": challenge["variant_id"],
            "packet_kind": challenge["packet_kind"],
            "phase": decision["phase"],
            "transfer_pack_id": challenge.get("transfer_pack_id"),
            "transfer_pack_step": challenge.get("transfer_pack_step"),
            "transfer_pack_length": challenge.get("transfer_pack_length"),
            "operations": event["operations"],
        }
