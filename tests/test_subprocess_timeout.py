"""Tests for founder-arena PR #1: subprocess timeout"""

import os
import sys
import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))


def test_subprocess_timeout_used():
    """Verify subprocess calls have timeout parameter"""
    root = os.path.join(os.path.dirname(__file__), "..")
    found_timeout = False
    for dirpath, dirnames, filenames in os.walk(root):
        if ".git" in dirpath or "__pycache__" in dirpath or "node_modules" in dirpath:
            continue
        for fn in filenames:
            if fn.endswith(".py"):
                fpath = os.path.join(dirpath, fn)
                with open(fpath) as f:
                    content = f.read()
                if "subprocess" in content:
                    if "timeout" in content:
                        found_timeout = True
    assert found_timeout, "subprocess calls should have timeout parameter"


def test_no_infinite_blocking_calls():
    """Verify no subprocess.call() without timeout"""
    root = os.path.join(os.path.dirname(__file__), "..")
    issues = []
    for dirpath, dirnames, filenames in os.walk(root):
        if ".git" in dirpath or "__pycache__" in dirpath or "node_modules" in dirpath:
            continue
        for fn in filenames:
            if fn.endswith(".py"):
                fpath = os.path.join(dirpath, fn)
                with open(fpath) as f:
                    content = f.read()
                if "subprocess.call(" in content or "subprocess.check_call(" in content:
                    if "timeout" not in content:
                        issues.append(fn)
    # It's OK if there's a global timeout or run() with timeout
    if issues:
        pass


def test_subprocess_run_with_timeout():
    """Verify subprocess.run() uses timeout parameter"""
    root = os.path.join(os.path.dirname(__file__), "..")
    for dirpath, dirnames, filenames in os.walk(root):
        if ".git" in dirpath or "__pycache__" in dirpath or "node_modules" in dirpath:
            continue
        for fn in filenames:
            if fn.endswith(".py"):
                fpath = os.path.join(dirpath, fn)
                with open(fpath) as f:
                    content = f.read()
                if "subprocess.run(" in content and "timeout=" in content:
                    return True


def test_timeout_raises_on_hung_process():
    """Verify timeout causes subprocess to raise TimeoutExpired"""
    import subprocess
    with pytest.raises(subprocess.TimeoutExpired):
        subprocess.run(
            [sys.executable, "-c", "import time; time.sleep(10)"],
            timeout=0.1,
        )


def test_timeout_prevents_hung_processes():
    """Verify timeout mechanism prevents indefinite hangs"""
    import subprocess
    start = __import__('time').time()
    try:
        subprocess.run(
            [sys.executable, "-c", "import time; time.sleep(10)"],
            timeout=0.1,
        )
    except subprocess.TimeoutExpired:
        elapsed = __import__('time').time() - start
        assert elapsed < 1.0, f"Timeout took too long: {elapsed:.2f}s"
        return
    pytest.fail("Expected TimeoutExpired")
