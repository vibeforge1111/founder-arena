# Spectator + Replay UX Memo

Updated: 2026-04-21

## Summary

Founder Arena already generates the ingredients of a great spectator product: live decisions, current arcs, replay turning points, winner summaries, and startup outcome explanations. The current viewer experience does not package those ingredients into a clear match story.

Today the product feels more like a simulator dashboard than a spectator sport. It shows that a company exists. It does not yet make the viewer instantly understand who is winning, why they are winning, what could swing next, and what artifact is worth sharing after the match ends.

## What a viewer should understand live

A live viewer should be able to answer four questions in under five seconds:

- Who is ahead right now, using the real game objective.
- What each startup is trying to do this turn.
- What pressure arc or danger state defines the moment.
- What the most likely swing or comeback path is.

The live hierarchy should therefore center on:

- score and score delta first
- current intent, risk, and expected outcome second
- active arc and danger level third
- business stats as supporting evidence, not the headline

The feeling should be less "startup dashboard" and more "strategic duel in progress."

## What should exist after the match

The postgame product should create a recap artifact, not just an ending screen.

Minimum postgame artifacts:

- a winner card with final margin and one-sentence win explanation
- three turning points with the decision and consequence that created each swing
- a startup outcome card for each side: why it won, why it lost, what mattered most
- a replay timeline with chapter markers for opening, midgame swing, and finish
- a shareable permalink that works as a clean public recap page

Minimum share artifacts:

- social card: winner, score margin, matchup, and key turning point
- short recap block: "X beat Y after Z decision in Week N"
- replay page that is understandable without tokens, setup, or prior context

The viral unit is not the full replay. The viral unit is the distilled moment of strategic collapse, comeback, or overreach.

## Why the current UI under-delivers

### Hierarchy

The current live surface emphasizes valuation, generic company stats, and ambient dashboard elements. That weakens the real competitive story because the viewer's eye is not being pushed toward score, intent, swing, and danger.

### Clarity

The product already knows each founder's latest decision and current arc, but the viewer is not seeing a strong plan-to-consequence loop. Raw action logs and company metrics are weaker storytelling units than "what they tried, what they feared, what happened."

### Tension

There is too little visible match tension. The viewer is not clearly told when someone is in trouble, when a comeback window opens, or when a turn meaningfully changed the match. Without that, the game reads as steady simulation drift instead of contested momentum.

### Shareability

The current ending does not produce an artifact worth posting. A winner modal is not a replay recap, not a diagnostic object, and not a social object. The product is leaving its best stories trapped inside raw state and replay payloads.

## Product implication

The next spectator/replay pass should treat the match as a narrative product with three layers:

- live layer: who is ahead, what each side is attempting, what danger is active now
- recap layer: what changed the match and why the result happened
- share layer: one clean artifact that compresses the match into a postable story

## Recommended PRD / tasks priorities

1. Reframe the live spectator surface around score, score delta, intent, risk, expected outcome, and active arc.
2. Add explicit tension framing: leader, chaser, danger state, comeback window, and biggest swing this turn.
3. Replace the generic postgame ending with a replay-first recap built around winner summary, turning points, and startup outcomes.
4. Create a public share artifact for every finished match: permalink, social card, and one-sentence narrative hook.
5. Demote secondary business telemetry so it supports the story instead of competing with it.

## Bottom line

Founder Arena already has the backend truth needed for a compelling spectator product. The main gap is not data generation. The main gap is product packaging.

The game should feel like watching strategic intent collide under pressure. Right now it mostly feels like watching startup metrics update in real time.
