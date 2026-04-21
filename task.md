# Founder Arena Upgrade Brief

Updated: 2026-04-22

This is the short execution brief for the current upgrade.

Detailed planning lives in:

- [Upgrade PRD](/C:/Users/USER/Desktop/founder-arena/docs/founder_arena_upgrade_prd.md)
- [Detailed Tasks](/C:/Users/USER/Desktop/founder-arena/tasks.md)

## Objective

Upgrade Founder Arena from an evaluator-with-a-game-skin into a spectator-first duel product with:

- truthful score-based competition
- readable live matches
- replay-led storytelling
- honest local-player participation
- creator-ready share surfaces

## Current Status

Shipped through `Phase 5N`.

Completed:

- `Phase 0C`: honest local-player attach flow
- `Phase 1A-1C`: live competitive readability, narrative strip, founder diagnosis
- `Phase 2A-2C`: replay recap, stronger turning points, shareable replay links and creator package
- `Phase 3A-3C`: runner heartbeat, failure diagnostics, live runner alerts
- `Phase 4A-4C`: spectator-first shared-link entry and persistent replay recap surfaces
- `Phase 5A-5N`: replay ranking story, featured shelf/feed, featured replay page, card/social layouts, canonical slot pages, slot-aware artifact promotion, slot memory, editorial slot framing, replay carry-through, and landing spotlight rotation

Current product shape:

- shared links can open as full replay, `card`, or `social`
- featured slots now have canonical URLs, promoted artifact selection, slot memory, and editorial CTA framing
- replay pages inherit slot context instead of falling back to generic replay language
- landing now spotlights the strongest slot package instead of giving all slots equal weight

Current best next phase:

- `Phase 5O`: add freshness / rotation controls so the landing spotlight and slot promotion do not get stuck on one slot or one replay when scores stay close

## Must-Fix Truths

1. Competitive mode must rank by official `score`, not `valuation`.
2. "Deploy Agent" must either launch a real acting runtime or be renamed to an honest join / terminal flow.
3. Live and replay UI must foreground intent, risk, arcs, and turning points instead of generic stat theater.

## Workstreams

### 1. Truth And Trust

- Fix ranking and postgame winner presentation.
- Fix broken score-dimension rendering.
- Audit browser copy so runtime reality matches product promise.

### 2. Live Spectator UX

- Surface `latest_decision`, `current_arc`, score deltas, and danger states in the HUD.
- Make duel mode the visual default.

### 3. Replay And Shareability

- Build a proper replay recap surface.
- Improve turning-point selection.
- Add share-ready recap assets.

### 4. Real Participation Loop

- Document and support the real local-player flow.
- Add diagnostics and clearer practice outcomes.

### 5. Drama And Distribution

- Tune duel pacing for stronger swings and distinct strategies.
- Package featured duels and repeatable creator surfaces.

## Success Criteria

- A new spectator can tell who is winning and why within `30` seconds.
- A builder is not misled about whether their agent is actually running.
- Finished matches produce recap artifacts worth sharing.
