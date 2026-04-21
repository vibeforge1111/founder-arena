# Founder Arena Upgrade Tasks

Updated: 2026-04-22

This file is the execution plan for the spectator-first Founder Arena upgrade.

The goal is not to add more surface area. The goal is to make the current product truthful, legible, replayable, and shareable enough to become sticky for builders and watchable for spectators.

## Current Status

Completed implementation through `Phase 5N`.

Completed slices:

- `Phase 0C`: honest local-player attach flow with attach command and non-fake browser story
- `Phase 1A-1C`: live match strip, narrative feed, and founder diagnosis panel
- `Phase 2A-2C`: replay recap, stronger turning points, replay links, and creator-ready share package
- `Phase 3A-3C`: runner heartbeat, runner diagnostics, and live runner alerts
- `Phase 4A-4C`: spectator-first shared replay entry, immediate recap modal, and persistent replay recap rail
- `Phase 5A-5N`: featured replay storytelling, featured feed backend, replay/page/card/social slot surfaces, promoted artifact selection, slot memory, editorial slot framing, replay carry-through, and landing spotlight emphasis

Latest completed commits:

- `a398d98` `Phase 5N: spotlight strongest slot on landing`
- `7e90a1f` `Phase 5M: carry slot framing into replay pages`
- `1980b5b` `Phase 5L: explain featured slot picks editorially`
- `5d4ca8e` `Phase 5K: add slot memory for promoted artifacts`
- `8e74cde` `Phase 5J: promote default replay artifacts per slot`

Pause checkpoint:

- branch: `master`
- remote: `origin https://github.com/vibeforge1111/founder-arena`
- worktree is clean except for the same unrelated untracked assets and historical bundles already being left alone

## Phase 0: Truth And Trust

Goal: fix product-trust breaks before adding more hype.

- Make `competitive_mode` UI rank startups by official competitive `score`, not `valuation`.
- Make postgame winner, podium, and summary use the same ranked result as the backend replay contract.
- Fix the browser `Deploy Agent` and `Quick Play vs Bots` story:
  - either launch a real acting agent runtime from the browser flow
  - or relabel the flow so it is explicitly "join as passive entrant / terminal required"
- Fix the right-panel performance rendering so it reads the real `seven_dimension_scores.dimensions` payload.
- Add one visible "how to play" split:
  - `Watch a match`
  - `Run a local agent from terminal`
  - `Practice against bots`
- Update README and in-product copy so they match what actually works today.

Exit criteria:

- A spectator sees the same leader and winner as the backend replay.
- A user is not misled into thinking the browser already launched an autonomous agent.
- The detail panel shows real score dimensions instead of broken percentages.

## Phase 1: Live Spectator Readability

Goal: make a live match understandable in under 15 seconds.

- Redesign the left rankings panel around:
  - current `score`
  - score delta this turn
  - status tags for pressure, recovery, and elimination risk
- Upgrade the right detail panel to show:
  - latest intent
  - primary risk
  - expected outcome
  - watch metric
  - current arc headline
  - seven-dimension score breakdown
- Turn the bottom feed into an actual live match feed:
  - important action resolutions
  - arc escalations
  - score swing moments
  - trust / runway / backlog warnings
- Add a compact top-of-screen match framing strip:
  - who is winning
  - by how much
  - why they are ahead
  - what could flip next
- Make duel mode the visual default instead of treating 4-player chaos as the main spectacle.

Exit criteria:

- A new viewer can answer "who is winning and why?" without opening raw JSON.
- A match has visible tension instead of looking like an animated dashboard.

## Phase 2: Replay And Shareability

Goal: make finished matches worth opening, sharing, and discussing.

- Build a proper replay summary surface from `/api/games/{id}/replay`.
- Replace weak "turning points" logic with highlights that prefer:
  - leader changes
  - large score swings
  - bankruptcy threats
  - clear cause/effect decisions
- Expose replay sections:
  - final result
  - 3 turning points
  - per-startup strengths and failures
  - decision-vs-outcome snapshots
- Add share-ready recap assets:
  - replay permalink
  - summary card copy
  - scoreboard screenshot mode
  - narrative recap block
- Add a "Why they lost" section for practice games.

Exit criteria:

- A finished match can be consumed as a recap, not just as a blob of telemetry.
- Replays create standalone social artifacts.

## Phase 3: Real Player Participation

Goal: make the builder loop real instead of implied.

- Decide the official local-participation contract:
  - browser-assisted terminal launch
  - or true browser-launched local runner
- If keeping terminal-run agents first:
  - generate a reliable one-command launch snippet in the lobby
  - make the lobby explicitly wait for agent connection
  - show connection and action heartbeat status
- If adding real runner launch:
  - isolate it behind an explicit local runtime boundary
  - make failures diagnosable in the UI
- Add practice outcomes that compare the player to the benchmark bot on score dimensions.
- Add retained logs / diagnostics for locally launched entrants.

Exit criteria:

- A builder can join, run, act, lose, and debug without guessing what the product is doing.

## Phase 4: Match Drama And Balance

Goal: make the game produce stronger stories, not just cleaner instrumentation.

- Tune duel pacing for:
  - more meaningful midgame pressure
  - more comeback windows
  - less autopilot convergence into similar turns
- Increase penalties for incoherent action sequences.
- Make high-growth lines feel stronger but more fragile.
- Make lean lines feel slower but more resilient and comeback-capable.
- Ensure trust collapse, support overload, and capital mistakes create visible turning points.
- Track per-archetype win rates and survival patterns in local harnesses.

Exit criteria:

- Match archetypes feel distinct.
- The winner is not usually obvious from the opening.
- At least some matches produce memorable collapses, recoveries, or upsets.

## Phase 5: Distribution And Viral Loop

Goal: turn good matches into growth.

- Add a public featured replay page format.
- Add creator-friendly showmatch templates:
  - doctrine vs doctrine
  - model vs model
  - benchmark gauntlet
  - underdog challenge
- Add a lightweight public leaderboard / featured matches surface that rewards watching, not just entering.
- Package every featured match with:
  - headline
  - winner summary
  - turning points
  - replay link
  - one-share caption
- Define the first repeatable content loop:
  - daily featured duel
  - weekly upset recap
  - "can you beat this benchmark?" challenge

Exit criteria:

- The product can generate recurring content without hand-authoring every story.

## Next Queue

1. `Phase 5O`: add freshness / rotation controls so slot spotlighting does not get stuck on one slot or one replay.
2. Feed recency and repeat-exposure penalties into slot artifact selection as a small editorial tiebreaker, not a full replacement for current scoring.
3. Surface a visible "why this slot is spotlighted today" summary in the landing hero, not just inside the card body.
4. Add a simple cooldown for replay reuse so the same game is not promoted in multiple slot surfaces too aggressively.
5. Decide whether featured-slot memory should persist across process restarts or stay ephemeral for now.
6. Add README / docs sync for the spectator-first replay / slot / card / social URL system.
7. Run QA on shared-link flows:
   - slot page
   - replay page
   - card layout
   - social layout
   - replay page with slot context carried through
8. Add a small visual regression pass on the landing spotlight layout for mobile widths.
9. Revisit bundle growth warnings once the content-loop product surface stabilizes.
10. Start the next product loop after freshness:
    - either `Phase 5P` slot rotation analytics
    - or a `Phase 6` balance/drama pass focused on actual viral-worthy match swings

## Do Not Do Yet

- Do not expand into more public queues before duel is legible.
- Do not optimize for hosted ranked infrastructure before the local builder loop is honest.
- Do not add more actions before current actions create clear stories.
- Do not chase a tournament system before replay quality is genuinely good.
