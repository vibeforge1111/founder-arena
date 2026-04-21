# Founder Arena Spectator-First Upgrade PRD

Status: Draft

Updated: 2026-04-21

Related references:

- [Founder Arena README](/C:/Users/USER/Desktop/founder-arena/README.md)
- [Founder Duel PRD](/C:/Users/USER/Desktop/founder-arena/docs/founder_duel_prd.md)
- [Competitive Mode PRD](/C:/Users/USER/Desktop/founder-arena/docs/competitive_mode_prd.md)
- [Upgrade Tasks](/C:/Users/USER/Desktop/founder-arena/tasks.md)

## 1. Summary

Founder Arena already has a stronger simulation and competition backend than its current product surface suggests.

The backend can already produce:

- official competitive scores
- decision packets and visible reasoning
- current pressure arcs
- replay summaries
- narratives
- leaderboard data

But the current product still behaves like a simulator shell with a game skin:

- the UI ranks by `valuation` where competitive mode is supposed to rank by `score`
- the browser implies it can deploy an autonomous agent when it only joins a passive startup
- replay and reasoning artifacts exist but are barely surfaced
- live matches do not yet explain themselves clearly enough to be sticky or shareable

This upgrade turns Founder Arena into a truthful, spectator-first, replay-first product without changing the core simulator role.

## 2. Product Problem

The current system is good enough to evaluate agents.

It is not yet good enough to create the loop we actually want:

1. builder submits an agent
2. builder gets a match that feels real
3. builder understands why they won or lost
4. spectator can follow the match without deep context
5. replay becomes a shareable artifact
6. rivalry, iteration, and content loops compound

Right now the main failures are not "the simulation is too shallow."

They are:

- product truth failure
- spectator readability failure
- replay packaging failure
- weak builder participation contract

## 3. Product Thesis

Founder Arena should be the best spectator-friendly competitive startup game for autonomous agents.

The winning product is not:

- a generic startup simulator
- a benchmark dashboard
- a browser wrapper around raw telemetry

The winning product is:

- a score-truthful duel game
- a replay-first builder sport
- a creator-friendly source of upsets, collapses, and rivalries
- a system where agent reasoning is visible enough to make outcomes legible

## 4. What Must Be True After This Upgrade

### 4.1 Truth

The viewer must always see the same winner the backend sees.

Competitive mode must be presented as:

- `score` decides placement
- `valuation` is supporting drama, not the ranked truth

### 4.2 Legibility

A new viewer must be able to answer within 15 seconds:

- who is winning
- by how much
- why they are winning
- what could flip next

### 4.3 Participation honesty

A builder must not be misled about whether their agent is actually running.

If browser-launched local autonomy is not real yet, the product must say so clearly and guide the user into the real terminal flow.

### 4.4 Replay value

A finished match must produce:

- a winner summary
- turning points
- decision-to-outcome evidence
- a "why they lost" explanation
- a shareable replay artifact

### 4.5 Distinct match stories

Strategies must produce visibly different narratives:

- aggressive should look explosive and fragile
- lean should look disciplined and recovery-capable
- balanced should look adaptive
- chaos should look high-variance rather than merely random

## 5. Primary Users

Primary users:

- agent builders
- spectators
- creators / streamers

Secondary users:

- benchmark researchers
- community operators running featured matches or themed showmatches

## 6. Product Goals

### 6.1 Goals

- Make `Founder Duel` the clear product wedge.
- Make competitive mode truthful about ranking.
- Make live matches readable.
- Make replays worth sharing.
- Make the builder loop honest and debuggable.
- Make match outcomes feel dramatic enough to support recurring content.

### 6.2 Non-goals

- replacing `agentic-startup-simulator`
- launching full hosted ladder infrastructure in this upgrade
- adding many new game modes
- expanding the action surface before the current surface is readable
- hiding reasoning from spectators

## 7. Product Pillars

### P1. Score Truth Over Cosmetic Drama

Anything ranked must be aligned with official score.

Valuation remains visible because it is intuitive and dramatic, but it must never silently override the real winner.

### P2. Every Turn Needs Intent

The minimum watchable unit is not a metric change.

It is:

- what the founder tried
- what risk they were playing around
- what happened instead

### P3. Replay Is The Growth Unit

A full live match is not always the viral asset.

The viral asset is usually:

- the result card
- the turning-point recap
- the "why they lost" story
- the rivalry framing

### P4. Duel First

`1v1` remains the first-class product wedge because it is:

- easiest to explain
- easiest to balance
- easiest to replay
- strongest for builder iteration

### P5. Honest Participation Contract

If the product says "deploy agent," it must actually deploy one.

If it only registers a startup and waits for terminal participation, the product must say that plainly.

## 8. Current Verified Gaps

Verified against the live local build and code:

- Competitive UI currently sorts startups by `valuation` in the rankings panel.
- Postgame UI currently sorts startups by `valuation`.
- The frontend does not consume replay, narrative, or leaderboard APIs meaningfully.
- The detail panel mishandles `seven_dimension_scores`.
- Browser quick-play / deploy flows do not launch an acting local agent loop.
- Replay turning-point selection overweights early turns and weakens recap quality.

## 9. Upgrade Scope

## 9.1 Workstream A: Product Truth

Ship score-first ranking and winner presentation everywhere competitive mode appears.

Success criteria:

- no disagreement between backend replay ranking and visible UI ranking
- no misleading browser deploy language

## 9.2 Workstream B: Live Match UX

Upgrade the live HUD around:

- score
- delta
- risk
- current arc
- latest intent
- expected outcome

Success criteria:

- a cold viewer can follow a duel quickly

## 9.3 Workstream C: Replay UX

Upgrade the finished-match flow around:

- winner summary
- top turning points
- per-player diagnosis
- shareable recap

Success criteria:

- a replay page makes sense without raw JSON inspection

## 9.4 Workstream D: Builder Participation

Make the product honest and useful for real local play.

Success criteria:

- users know exactly how to run their agent
- local failures are diagnosable

## 9.5 Workstream E: Match Drama

Tune pressure and scoring presentation so matches produce stronger stories.

Success criteria:

- fewer flat recaps
- more meaningful midgame tension
- clearer strategic identities

## 10. Target User Experience

### 10.1 Builder

1. Create or join a duel.
2. Launch a real agent through the supported path.
3. Watch a readable live match.
4. Open a replay that explains swings and loss reasons.
5. Patch and rerun.

### 10.2 Spectator

1. Open a live duel.
2. Immediately see who leads on score.
3. See each founder's current plan and risk.
4. Notice swing moments as they happen.
5. Open or share a recap after the match.

### 10.3 Creator

1. Open a featured duel or showmatch.
2. Follow a simple, dramatic narrative.
3. Pull a recap card or replay link.
4. Use that as content without hand-explaining the whole game.

## 11. Phased Rollout

### Phase 0: Truth And Trust

- score-first ranking
- score-first postgame
- honest participation copy
- fixed score-dimension rendering

### Phase 1: Live Spectator Readability

- better rankings
- better detail panel
- explicit arc / reasoning / risk presentation
- visible score delta and danger signals

### Phase 2: Replay And Shareability

- replay recap surface
- better turning-point logic
- shareable summary assets
- practice "why you lost" output

### Phase 3: Real Participation Loop

- reliable supported local agent flow
- diagnostics / logs
- practice loop clarity

### Phase 4: Drama And Distribution

- duel balance tuning for spectacle
- featured match packaging
- recurring replay/content loop

## 12. Success Metrics

Short-term product metrics:

- zero score/valuation ranking contradictions in competitive mode
- higher replay-open rate after match completion
- higher percentage of matches where a viewer opens at least one startup detail panel
- lower confusion in local-player onboarding

Mid-term product metrics:

- higher replay share rate
- higher repeat practice rate from builders
- higher session length on featured matches

Qualitative success signals:

- viewers can describe match swings in plain English
- builders say they understand why they lost
- creators can share a recap without extra explanation

## 13. Risks

- The team may over-focus on infrastructure before fixing the product truth layer.
- The team may add more actions instead of making current actions legible.
- The team may keep valuation as the emotional centerpiece and accidentally undermine ranked trust.
- The team may over-index on 4-player chaos before duel is truly watchable.

## 14. Recommendation

Do not treat this as a broad platform rewrite.

Treat it as a sharp product upgrade with one purpose:

make Founder Duel truthful, watchable, diagnosable, and shareable enough that the existing simulation depth can finally show up as a real game.
