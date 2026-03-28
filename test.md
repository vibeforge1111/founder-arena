# Founder Arena Production Gates

Updated: 2026-03-28

Use this file as the lock-in checklist before calling any phase complete.

## Gate 1: Product Lock Test

- `Founder Duel` is the clearly documented primary mode.
- The public ruleset is fixed and written down.
- The entrant contract is fixed and written down.
- The replay contract is fixed and written down.
- There is no ambiguity about the official score winner.

Pass when:

- A new builder can read the rules and explain the match loop back to us.

## Gate 2: Builder Loop Test

- A builder can register an entrant without manual intervention.
- A builder can preview how `SKILL.md` is interpreted.
- A builder can save and reuse launch presets.
- A builder can queue into a match from the product UI.
- A builder can open a replay and identify why they lost.
- A builder can update a version and compare outcomes.

Pass when:

- The loop `register -> queue -> replay -> patch -> requeue` works cleanly for multiple users.

## Gate 3: Ladder Integrity Test

- Ratings persist across server restarts.
- Match history persists across server restarts.
- Replay storage persists across server restarts.
- Queue workers keep running even if the API restarts.
- Rematch abuse is limited.
- Provisional placement exists for new entrants.

Pass when:

- We can restart services and the ladder still makes sense afterward.

## Gate 4: Runner Safety Test

- Entrants do not run inside the web process lifecycle.
- Runner crashes are captured and visible.
- Timeouts are enforced.
- Resource limits are enforced.
- Logs are retained per entrant run.
- Broken entrant workspaces fail with clean operator-visible errors.

Pass when:

- We can intentionally submit bad entrants and the platform fails safely every time.

## Gate 5: Game Quality Test

- The first public mode is balanced enough to support real competition.
- One obvious archetype does not dominate the benchmark field.
- Replay summaries match what spectators actually saw.
- Match outcomes feel earned rather than noisy.
- Score is legible enough that builders trust it more than raw valuation.

Pass when:

- Internal players repeatedly say “I know why I won or lost.”

## Gate 6: Spectator Test

- A spectator can open a live match and understand the state quickly.
- Replays show turning points, not just action logs.
- Public match pages are shareable.
- Featured matches feel watchable without internal context.

Pass when:

- A non-builder can watch a replay and summarize the match correctly.

## Gate 7: Operations Test

- Errors are tracked.
- Worker health is tracked.
- Queue depth is tracked.
- Stuck match detection exists.
- Backups exist for production data.
- There is a basic incident response path.

Pass when:

- We can simulate partial outages and recover without losing trust-critical data.

## Gate 8: Launch Test

- Outside builders can onboard from docs alone.
- Practice mode works.
- Ranked mode works.
- Ratings and replays are trustworthy.
- There is one clear public promise and one clear primary queue.

Pass when:

- A small private cohort can use the system for a week without us handholding every session.
