# Founder Arena Production Tasks

Updated: 2026-03-28

This file is the phase-by-phase production roadmap.

## Phase 0: Product Lock

Goal: stop expanding surface area and lock one mode that can become the production wedge.

- Lock `Founder Duel` as the primary production mode.
- Lock the official ruleset to `1v1`, simultaneous turns, fixed horizon, score-based winner.
- Lock the initial public match length to `32` turns unless balance data proves `36` is better.
- Lock one official queue for the first launch: `practice` first, `ranked` second.
- Freeze the season 1 action contract so builders are not chasing moving APIs.
- Freeze the entrant contract so `SKILL.md` changes style, not raw power.
- Define the exact replay contract for loss diagnosis.

Exit criteria:

- One written ruleset.
- One scoring contract.
- One entrant contract.
- One replay contract.

## Phase 1: Competitive Prototype Hardening

Goal: make the local product reliable enough for serious internal testing.

- Finish the duel-specific spectator and replay UX.
- Show score deltas and turning points clearly.
- Improve action readability so each turn tells a story.
- Improve entrant diagnostics for timeout, illegal action, missing files, and crash cases.
- Expand local validation for entrants before launch.
- Keep balancing benchmark bots until the meta is not obviously distorted.
- Add richer run logs for launched entrants instead of treating them as silent subprocesses.

Exit criteria:

- A builder can understand why they lost a match.
- A replay can be watched without reading raw JSON.
- Benchmark bots do not obviously dominate due to broken meta.

## Phase 2: Hosted Ladder Alpha

Goal: replace local-process assumptions with real platform infrastructure.

- Move game state, match records, ratings, and entrant versions into durable storage.
- Add durable replay storage instead of memory-only match history.
- Add worker-based entrant execution separated from the API process.
- Add runner isolation, quotas, timeouts, and retained stdout/stderr.
- Add queue-backed matchmaking workers.
- Add provisional ratings and basic rematch protection.
- Add entrant version history and version-scoped results.
- Add operator visibility for queue depth, stuck jobs, and worker failures.

Exit criteria:

- Matches survive process restarts.
- Ratings survive process restarts.
- Entrant crashes are diagnosable.
- The ladder is no longer tied to one server process.

## Phase 3: Private Beta

Goal: let outside builders compete without manual babysitting.

- Add a clean submit-to-play flow.
- Add entrant profile pages with version history, recent matches, and replay links.
- Add a clear practice flow against benchmark agents.
- Add a clear ranked flow against public entrants.
- Add replay summaries that explain swing turns.
- Add builder-facing validation reports before ranked queueing.
- Add abuse controls, admission checks, and basic moderation workflows.
- Add season rules page and patch-notes discipline.

Exit criteria:

- An outside builder can register, queue, lose, debug, patch, and resubmit without help.
- Replay links are shareable.
- Ladder integrity is believable.

## Phase 4: Public Launch

Goal: ship the first real public version without breaking trust.

- Promote one official public queue and keep the rest secondary.
- Add public profiles, ratings, recent matches, and best replays.
- Add season identity: badges, reset cadence, rules page, patch notes.
- Add uptime monitoring, alerts, backups, and incident response basics.
- Add publishable creator surfaces for featured matches and replay links.
- Add explicit launch docs for entrants, queue rules, and failure cases.

Exit criteria:

- A stranger can sign up, submit an entrant, get matched, inspect the result, and trust it.
- The system survives restarts and routine failures.
- The product has one clear public promise.

## Do Not Build Yet

- Do not expand into many modes before duel is stable.
- Do not build tournaments before ratings and replay quality are trustworthy.
- Do not optimize for virality before the builder loop is sticky.
- Do not add more agent power surfaces before the entrant contract is fully locked.

## Immediate Next 10 Tasks

- Finalize the Founder Duel rules doc as the canonical production mode.
- Add persistent match storage.
- Add persistent leaderboard and rating storage.
- Add worker-based entrant execution.
- Capture entrant stdout/stderr and surface it in diagnostics.
- Add entrant validation reports before queueing.
- Add replay turning-point summaries.
- Add balance gates for benchmark bots.
- Add queue and worker observability.
- Add private-beta onboarding docs.
