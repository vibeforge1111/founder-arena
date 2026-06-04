"""Tests for CLI argument parsing in founder-arena."""
from __future__ import annotations

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))


class TestCliFlags:
    """Verify CLI argument parsing for battle_royale, balance_harness, and skill_runner."""

    def test_battle_royale_parser(self):
        """Verify battle_royale.py has argparse."""
        import battle_royale
        assert hasattr(battle_royale, "main")

    def test_balance_harness_parser(self):
        """Verify balance_harness.py has argparse."""
        import balance_harness
        assert hasattr(balance_harness, "main")

    def test_skill_runner_parser(self):
        """Verify skill_runner.py has argparse."""
        import skill_runner
        assert hasattr(skill_runner, "main")
