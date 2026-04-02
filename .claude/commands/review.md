---
description: Pre-commit review pipeline. Runs tests, build check, then reviews the diff.
---

## Pre-flight

!`cd C:/Users/USER/Desktop/founder-arena && git diff --name-only main...HEAD 2>/dev/null || git diff --name-only HEAD~1 2>/dev/null || echo "No diff available"`

!`cd C:/Users/USER/Desktop/founder-arena && pytest tests/ --tb=short 2>&1 | tail -20`

!`cd C:/Users/USER/Desktop/founder-arena/frontend && npm run build 2>&1 | tail -15`

## Diff

!`cd C:/Users/USER/Desktop/founder-arena && git diff main...HEAD 2>/dev/null || git diff HEAD~1 2>/dev/null || git diff --cached`

## Instructions

1. If any pre-flight check failed, list failures first with exact fixes.

2. Review the diff using the reviewer agent's checklist:
   - **Bugs**: Logic errors, null risks, race conditions, silent error swallowing, fetchJSON header pattern
   - **Security**: Unvalidated input, missing auth, token leakage, IDOR
   - **Performance**: Three.js object allocation in loops, DOM thrashing, unbounded state serialization
   - **Test gaps**: Untested critical paths

3. For each issue: file, line, what's wrong, how to fix it. Be specific.

4. Verdict: SHIP IT / NEEDS WORK / BLOCKED.

5. If SHIP IT: suggest the commit message in conventional commits format.
