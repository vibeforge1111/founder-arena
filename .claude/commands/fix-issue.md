---
description: End-to-end bug fix from a GitHub issue number
argument-hint: [issue-number]
---

!`gh issue view $ARGUMENTS 2>/dev/null || echo "Could not fetch issue #$ARGUMENTS. Describe the bug manually."`

## Workflow

1. **Root cause.** Read the issue. Grep the codebase. Trace the code path. State the root cause in one sentence before writing any fix.

2. **Fix.** Minimal change. Don't refactor. Don't "improve" adjacent code. Solve the bug.

3. **Test.** Write a test that fails without your fix and passes with it. For backend bugs, add to `tests/`. For frontend bugs, describe a manual verification step.

4. **Verify.** Run `pytest tests/` for backend changes. Run `cd frontend && npm run build` for frontend changes. All must pass.

5. **Commit.** `fix(scope): description (fixes #$ARGUMENTS)`

6. **Report.** One paragraph: root cause, what you changed, what test you added.
