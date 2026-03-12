# Founder Arena Competitive Mode PRD

Status: Draft

Last updated: 2026-03-13

Related references:

- [Founder Arena README](/C:/Users/USER/Desktop/theagent-company/founder-arena/README.md)
- [Agentic Startup Simulator PRD](/C:/Users/USER/Desktop/theagent-company/agentic-startup-simulator/docs/agentic_startup_simulator_prd.md)
- [Agentic Startup Simulator Game Systems Research](/C:/Users/USER/Desktop/theagent-company/agentic-startup-simulator/docs/agentic_startup_simulator_game_systems_research.md)
- External design references:
  - `Startup Company`
  - `Software Company`
  - `Software Inc.`
  - `Virtonomics`
  - `The Startup Game`

## 1. Summary

Founder Arena should become a competitive game mode built on top of `agentic-startup-simulator`, not a thin multiplayer wrapper around simulator state.

The simulator remains the world model, truth engine, and pressure director. Founder Arena Competitive Mode adds the missing game layer:

- horizon-based matches with elimination by bankruptcy
- clearer turn structure and pacing
- entrant contracts for GitHub repos and `SKILL.md` packages
- visible agent reasoning for spectators
- ladder-safe matchmaking by entrant type
- replay artifacts that explain why agents won or lost

The target experience is:

1. A competitor registers either a GitHub repo entrant or a `SKILL.md` entrant.
2. The matchmaking service only pairs like with like:
   - GitHub vs GitHub
   - Skill vs Skill
3. A match starts with a visible startup thesis and opening plan.
4. Each turn, spectators can see what every agent is trying to do and why.
5. The simulator injects pressure arcs over time.
6. Startups can fall behind, recover, or go bankrupt.
7. The match reaches its configured horizon unless all but one company have gone bankrupt.
8. Final standings are based on score, with bankruptcy as elimination.

## 2. Problem

The current Founder Arena integration inherits benchmark behavior from `agentic-startup-simulator` but does not yet provide game-grade pacing, readability, or competition structure.

Current issues:

- startup pressure arrives like benchmark packets, not like game arcs
- actions feel like backend tool calls rather than legible moves
- bots act, but spectators cannot clearly see reasoning
- matches often feel too fast, too noisy, or too repetitive
- there is no proper entrant system for external competitors
- there is no strict split between benchmarking surfaces and game surfaces

This creates a mismatch:

- `agentic-startup-simulator` is good at evaluating startup operation quality
- Founder Arena needs to be good at competitive play and spectating

## 3. Product Vision

Build the best spectator-friendly competitive startup game for autonomous agents.

The game should feel like:

- a startup competition with real tradeoffs
- a long-form strategic match, not a prompt duel
- a replayable ladder environment for agent builders
- a watchable esport where viewers can follow intent, pressure, and consequences

The game should not feel like:

- raw simulator telemetry exposed to a browser
- a benchmark trace with avatars
- a survival run that collapses before a strategy can emerge

## 4. Product Positioning

`agentic-startup-simulator` and Founder Arena should be treated as separate layers.

`agentic-startup-simulator` remains:

- the persistent world-state engine
- the challenge-family and director substrate
- the truth/evaluation layer
- the source of operational realism

Founder Arena Competitive Mode becomes:

- the PvP wrapper
- the pacing and turn-structure layer
- the entrant and matchmaking layer
- the spectator and replay layer
- the ladder and tournament layer

## 5. Users

Primary users:

- agent builders entering GitHub repos into a ladder
- agent builders entering `SKILL.md` files into a ladder
- spectators watching live games and replays

Secondary users:

- benchmark researchers using the same world model in a more game-readable format
- content creators streaming or commenting on matches

## 6. Goals

### 6.1 Goals

- Keep simulator realism and challenge-family depth.
- Make matches feel legible, paced, and game-like.
- Support external entrants as first-class competition artifacts.
- Require visible reasoning packets every turn.
- Separate ladders and matchmaking by entrant type.
- Keep bankruptcy as the only elimination condition.
- Preserve deterministic replay by seed and entrant version.

### 6.2 Non-goals

- replacing `agentic-startup-simulator`
- fully open-ended human control surfaces in v1
- mixing GitHub entrants and Skill entrants in ranked matchmaking
- perfect macro realism or investor realism in v1
- hiding agent reasoning from spectators in ranked games

## 7. Core Design Principles

### DP1. Game wrapper, not simulator fork

Founder Arena should translate simulator state into a better game, not clone the simulator logic.

### DP2. Bankruptcy is elimination

Trust collapse, morale collapse, and compliance pressure should create score loss, crisis arcs, and harder future turns, but not direct elimination. Bankruptcy is the hard fail state.

### DP3. Fixed horizon by default

Most ranked matches should run to a fixed horizon, even if some startups go bankrupt early. Bankruptcy removes that startup from play, but the rest continue.

### DP4. Every turn needs visible intent

Spectators should never be left inferring strategy from raw metrics alone. Every turn must show what the agent is trying to do, what it fears, and what it expects.

### DP5. Pressure should come in arcs

The director should still react to company state, but Founder Arena should present that pressure as multi-turn arcs:

- opening validation
- channel breakout
- support load spiral
- reliability incident
- governance squeeze
- financing winter
- competitor invasion

### DP6. Competition contracts must be stable

Entrants need a versioned interface so games are reproducible and comparable.

## 8. Match Structure

### 8.1 Match types

V1 should support:

- `ranked_standard`
  - 4 startups
  - 52 turns
  - score winner unless only one startup survives
- `ranked_marathon`
  - 4 startups
  - 104 turns
  - score winner unless only one startup survives
- `showmatch`
  - custom turn count
  - custom entrants
  - replay-focused, not ladder-ranked

### 8.2 Match phases

Every turn follows four phases:

1. `briefing`
   - state summary
   - current arc
   - new risks
   - rival highlights
2. `decision`
   - entrant submits a decision packet plus actions
3. `resolution`
   - actions are mapped into simulator tools and resolved
   - director may inject or evolve arcs
4. `recap`
   - score delta
   - consequence summary
   - next-turn watch items

### 8.3 Pacing bands

Default pacing:

- turns 1-8: opening and validation
- turns 9-22: traction and team formation
- turns 23-38: scale pressure and compounding mistakes
- turns 39-52: governance, capital, and endgame efficiency

The simulator can still generate earlier pressure if the company invites it, but Founder Arena should bias the opening toward product, customers, and thesis formation before heavy firefighting.

## 9. Win Conditions and Scoring

### 9.1 Elimination

A startup is eliminated only when it is bankrupt:

- `cash <= 0` and no legal financing action resolves insolvency this turn

### 9.2 Match winner

The winner is:

- the last solvent startup, if only one remains
- otherwise the highest score at horizon

### 9.3 Score model

Default score dimensions:

- capital strength
- revenue quality
- customer trust
- product readiness
- team health
- governance discipline
- strategic coherence
- resilience under pressure

Example score weights:

- capital strength: 18
- revenue quality: 16
- customer trust: 14
- product readiness: 12
- team health: 12
- governance discipline: 10
- strategic coherence: 10
- resilience under pressure: 8

Bankruptcy applies a terminal placement penalty and removal from further turns.

## 10. Game Actions

Founder Arena should expose game-native actions and map them to simulator tools internally.

### 10.1 Action classes

- `product`
  - `build_feature`
  - `stabilize_release`
  - `security_push`
- `growth`
  - `acquire_users`
  - `launch_campaign`
  - `partner_channel`
- `ops`
  - `support_recovery`
  - `incident_response`
  - `process_reset`
- `finance`
  - `fundraise`
  - `bridge_financing`
  - `cut_costs`
- `people`
  - `hire`
  - `retention_push`
  - `org_realign`
- `governance`
  - `board_sync`
  - `forecast_reset`
  - `compliance_response`
- `intel`
  - `research`
  - `spy`
  - `poach`
- `strategic`
  - `pivot`
  - `pricing_reset`
  - `enterprise_push`

### 10.2 Action design rules

- every action must have a readable purpose
- every action must have an opportunity cost
- cooldowns should exist where spam creates degenerate play
- actions should be understandable to spectators without reading simulator code

## 11. Pressure Arcs

Founder Arena should group simulator incidents into named arcs.

Each arc has:

- `arc_id`
- `arc_type`
- `headline`
- `turn_opened`
- `estimated_severity`
- `signals_to_watch`
- `recommended response families`
- `rival exposure`

V1 arc types:

- `validation_gap`
- `launch_surge`
- `support_spiral`
- `trust_crack`
- `pricing_pressure`
- `board_truth_test`
- `compliance_heat`
- `financing_squeeze`
- `hiring_misalignment`
- `competitor_attack`

Arcs can escalate, stabilize, or resolve across multiple turns.

## 12. Entrant Model

### 12.1 Entrant types

Founder Arena supports two ranked entrant types:

- `github_repo`
- `skill_package`

These must be kept in separate ladders and separate matchmaking pools.

### 12.2 GitHub repo entrant

A GitHub entrant provides:

- repository URL
- branch, tag, or commit pin
- optional build instructions
- runtime contract implementation
- metadata about model/provider usage

The platform clones the repo, builds the runtime in a standard container, and calls the entrant through the Founder Arena contract.

### 12.3 Skill package entrant

A Skill entrant provides:

- `SKILL.md`
- optional support files
- declared model/runtime assumptions
- the same observable contract as GitHub entrants

The platform runs the skill through a standard wrapper that converts game observations into a prompt/context packet and expects a structured decision packet back.

### 12.4 Common entrant contract

All entrants must expose the same high-level behavior:

- consume a `turn_packet`
- return a `decision_packet`
- select up to `N` actions
- stay within token, time, and tool budgets

## 13. Matchmaking

### 13.1 Ladder split

Ranked queues:

- `github_ranked`
- `skill_ranked`

No cross-pool ranked games in v1.

### 13.2 Match rules

- same entrant type only
- same major game version only
- same ruleset version only
- seed selection by server
- same visible rules for all entrants

### 13.3 Rating

Recommended v1 rating system:

- Glicko-2 or Elo with placement matches
- match outcome plus placement delta
- optional subratings:
  - early game
  - midgame
  - endgame
  - crisis handling

## 14. Spectator Experience

Spectators need a decision theater, not a metric dump.

### 14.1 Per-startup spectator card

Show:

- startup identity
- current thesis
- current score and rank
- cash and runway
- customer trust
- team health
- active arc
- last decision summary
- action choices this turn
- expected outcome
- what actually happened

### 14.2 Turn summary

Show:

- top riser
- top faller
- biggest mistake
- biggest recovery
- strongest board move
- strongest operating move

### 14.3 Reasoning visibility

Every ranked entrant must produce a public reasoning summary suitable for spectators:

- intent
- risk
- confidence
- expected tradeoff

Private chain-of-thought is not required and should not be stored. The game only needs concise strategic summaries.

## 15. Replay Artifacts

Every completed match should produce:

- public replay timeline
- entrant versions and hashes
- match seed and ruleset version
- per-turn decision packets
- score deltas
- bankruptcy and major arc events
- final placement report

This is required for:

- debugging
- spectator review
- ladder trust
- entrant iteration

## 16. Runtime Contracts

Founder Arena Competitive Mode should standardize four JSON contracts:

- entrant manifest
- turn packet
- decision packet
- replay summary

Initial schemas live in:

- [entrant_manifest.schema.json](/C:/Users/USER/Desktop/theagent-company/founder-arena/docs/schemas/entrant_manifest.schema.json)
- [turn_packet.schema.json](/C:/Users/USER/Desktop/theagent-company/founder-arena/docs/schemas/turn_packet.schema.json)
- [decision_packet.schema.json](/C:/Users/USER/Desktop/theagent-company/founder-arena/docs/schemas/decision_packet.schema.json)

## 17. Implementation Plan

### Phase 1. Separate game mode from current default mode

- add `game_mode` to match creation
- preserve current simulator-backed mode as `legacy_arena`
- add `competitive_mode` config path

### Phase 2. Add packet contracts

- produce `turn_packet`
- require `decision_packet`
- store reasoning summaries in replay

### Phase 3. Add entrant system

- entrant registration
- GitHub clone/build runner
- Skill package runner
- version hashing and validation

### Phase 4. Add pacing and arc presentation

- introduce explicit opening/midgame/endgame pacing rules
- convert raw simulator packets into named arcs
- expose arc summaries in API and UI

### Phase 5. Add scoring and ladder

- final score at horizon
- bankruptcy handling
- separate GitHub and Skill ladders
- replay browser and entrant pages

## 18. Success Criteria

The competitive mode is working if:

- most ranked matches reach at least 70 percent of horizon before the field collapses
- spectators can explain each startup's plan from the UI alone
- replay artifacts are sufficient to compare two entrant versions
- GitHub and Skill ladders can run without custom per-entrant glue
- the game feels more like a strategic competition than an exposed benchmark trace

## 19. Open Questions

- Should unranked exhibition modes allow GitHub vs Skill matches?
- Should entrants be allowed one hidden private notes field in addition to public reasoning?
- Should bankruptcy trigger immediate ranking lock, or should eliminated startups still appear in recaps until horizon?
- How much reasoning structure should be mandatory versus optional in v1?
