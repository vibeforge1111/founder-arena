# Founder Arena Spectator-First PRD Direction

Status: Draft
Updated: 2026-04-21

## Thesis

Founder Arena should stop behaving like an evaluator with a game skin and become a spectator-first competitive product built on top of the simulator.

The wedge is not "startup simulator for everyone."

It is:

- watchable `Founder Duel` matches
- shareable replay artifacts
- public builder rivalries
- clear, honest competitive truth

If the product says "deploy agent," an agent must actually act. If it says "winner," score must decide it. If the backend already has decisions, arcs, and replay summaries, the UI must make those the main event.

## What Already Exists

- The repo already points toward `Founder Duel` as the production wedge: `1v1`, `32` turns, score winner, replay-first UX.
- The backend already exposes the raw ingredients for a spectator product: `latest_decision`, `current_arc`, replay summaries, narratives, and leaderboard data.
- The builder loop foundation exists in embryo: entrant registration, entrant versioning, balance harness, and replay endpoints.

This means the next move is not a new product surface. It is packaging the existing game truth into a trustworthy, legible, shareable experience.

## Verified Product Gaps

### 1. Trust gap

The UI tells users they can "Deploy Agent" or "Quick Play vs Bots," but the current flow only joins a startup and never launches an acting runtime.

Implication:

- the product currently overpromises autonomy
- first-time users can feel tricked
- builder trust is damaged before the core loop begins

### 2. Truth gap

Competitive mode is scored by competitive score, but key UI ranking and postgame surfaces still sort by valuation.

Implication:

- spectators can misread who is winning
- the product can crown the wrong "winner" visually
- the game teaches the wrong objective

### 3. Theater gap

The backend already has decision summaries, arcs, and replay summaries, but the frontend still emphasizes valuation and generic stats over intent, risk, consequence, and turning points.

Implication:

- the game feels like exposed telemetry
- dramatic moments exist in the data but not in the product
- replays are under-packaged for sharing

## Recommended Product Wedge

Build Founder Arena around one public promise:

> Watch AI founders battle in short, legible duels. See exactly what they tried, where the match swung, and why they won or lost.

The primary wedge should be:

- `Practice Duel` for builders
- `Featured Duel` for spectators and creators
- `Ranked Duel` only once truth, replay, and trust surfaces are solid

Do not lead with:

- `4-player` ranked chaos
- many queues
- marathon modes
- broad "startup game" positioning

Those expand surface area before the core viral unit works.

## Audience

### Primary

- AI builders who want public status, improvement loops, and visible match diagnostics

### Secondary

- startup/AI spectators who enjoy strategy, rivalry, and postgame breakdowns
- creators who want easy showmatches, clips, and recurring narratives

### Not the initial target

- mainstream tycoon/sim players looking for deep human control
- broad startup education buyers
- large-scale tournament operators

## Viral Unit

The viral unit is not the full ladder and not the whole match.

It is a shareable match artifact:

- "this founder blew a lead on turn 19"
- "lean survived the crisis and stole the duel"
- "GPT lost because it optimized valuation instead of score"
- "this exact decision packet cost the game"

Every finished duel should produce a shareable object that answers in under `10` seconds:

1. who played
2. who won
3. where it swung
4. why it swung

## Core Loops

### Builder loop

Build entrant -> run practice duel -> inspect replay -> patch strategy -> resubmit -> climb or challenge again

### Spectator loop

Open featured duel -> understand leader immediately -> jump to turning point -> share recap -> follow entrant or rivalry

### Creator loop

Create showmatch or challenge -> auto-generate recap assets -> post result -> audience debates decision quality -> new entrants join to counter the meta

## Creator Surfaces

The creator product should be built from replay artifacts, not from custom social features first.

Highest-value surfaces:

- shareable replay URL with winner, margin, turning points, and decision summaries
- auto-generated match recap card
- short "3 swing moments" export for social/video
- rivalry pages: entrant A vs entrant B, latest record, best replay
- weekly "meta report" summarizing top archetypes, upsets, and signature failures
- featured challenge templates such as "Beat Gold Bot" or "Claude vs GPT founder duel"

## Product Principles

- Competitive score is the truth. Valuation is theater.
- Replays are the product, not just a debug tool.
- Builder trust matters more than fake magic.
- Every live screen should answer "who is winning and why?"
- Every match should produce at least one clip-worthy or quote-worthy moment.

## Phase Plan

## Phase 1: Truth + Theater

Goal: make the current product honest, legible, and shareable enough that a spectator can follow a duel and a builder trusts the outcome.

In scope:

- fix all live ranking, leader, and postgame winner surfaces to sort by competitive score
- rename or repair fake "deploy agent" flows so the UI matches reality
- surface `intent`, `primary risk`, `expected outcome`, and `current arc` in the live HUD
- upgrade replay summary and turning-point presentation to highlight real swing turns
- add a replay page/state that can be shared without requiring raw API literacy
- make the duel outcome explanation explicit: why score beat valuation if they diverged

Out of scope:

- public ladder expansion
- `4-player` ranked focus
- tournament systems
- large infra migrations beyond what is required to keep replays stable locally

Exit signal:

- a new spectator understands the winner in under `30` seconds
- a builder can explain why they lost from the replay alone

## Phase 2: Builder Status Loop

Goal: turn a good local duel into a sticky builder product with repeat submissions and reputation.

In scope:

- practice duel as the default entry path
- benchmark tiers with clear progression
- entrant profile and version history surfaces
- version-scoped replay history and compare flow
- persistent leaderboard and match history centered on competitive score
- clear validation and failure diagnostics before ranked entry

Out of scope:

- cross-type ranked mixing
- many simultaneous ranked modes
- broad season complexity before the builder loop is working

Exit signal:

- strong second-version submission rate
- replay opens after losses become normal behavior

## Phase 3: Creator Flywheel

Goal: convert the duel product into a repeatable public content engine.

In scope:

- featured duel pages
- creator-friendly showmatch setup
- broadcast overlay / clean recap view
- one-click social cards or short recap exports
- weekly themed challenges or cups
- public rivalry and upset narratives

Out of scope:

- full tournament platform complexity
- broad consumer social network features
- many new gameplay modes before duel identity is entrenched

Exit signal:

- replays and recap assets are being shared without manual explanation
- creators can run events that generate rematches and new entrants

## North Star Metrics

- replay open rate after finished matches
- replay share rate per featured match
- second entrant version submission rate
- time-to-understand-winner for first-time spectators
- percent of matches with at least one high-confidence turning point worth surfacing
- featured duel watch-to-share conversion

## Explicit In / Out

### In

- duel-first packaging
- replay-first product thinking
- score-truth cleanup
- builder trust cleanup
- creator-ready recap artifacts

### Out for now

- `4-player` ranked as the lead mode
- broad simulator sandbox positioning
- more actions or more complexity before readability improves
- fake autonomy flows that create product magic at the cost of trust

## Recommendation

Do not try to make "the startup simulator" go viral.

Make `Founder Duel` into a product people can watch, understand, share, and argue about.

That is the shortest path to:

- builder obsession
- creator adoption
- public rivalry
- eventual ladder legitimacy
