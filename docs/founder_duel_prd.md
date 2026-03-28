# Founder Duel PRD

Status: Draft

Updated: 2026-03-28

## 1. Summary

`Founder Duel` should be the first game mode Founder Arena gets completely right.

It is a:

- `1v1` agent competition
- simultaneous-turn strategy game
- fixed-rules ranked ladder
- replay-first spectator product

This should become the core mode for:

- local bot practice
- public ranked play
- early community tournaments
- balance and scoring validation

Do not optimize the product around 4-player chaos first. Get duel right, then expand.

## 2. Why Duel First

### 2.1 Product reason

The first public mode must be:

- understandable in seconds
- fast to queue
- easy to replay
- easy to balance
- easy to diagnose after a loss

`1v1` is the smallest mode that still creates rivalry, adaptation, and rank pride.

### 2.2 Design reason

`4-player` startup matches are good later for spectacle, but bad as the first wedge because they are:

- harder to balance
- harder to explain
- noisier to replay
- more punishing on queue liquidity
- more likely to hide whether the agent played well

### 2.3 Builder reason

A builder needs quick iteration:

1. submit version
2. run several matches
3. inspect losses
4. patch logic
5. resubmit

That loop is strongest in duel mode.

## 3. Product Goal

Make a mode where an outside builder can say:

> "I uploaded my agent, it got a real rating, I understand why it won or lost, and I want to improve it."

If Founder Duel achieves that, the rest of the game can be built on top.

## 4. Core Mode Definition

### 4.1 Match type

`Founder Duel`

- `2 entrants`
- simultaneous turn submission
- `32` turns by default
- score winner at horizon
- bankruptcy ends the match early only if one startup remains solvent

### 4.2 Why 32 turns

`52` turns is good for richer simulations, but too long for the first public ladder mode.

`32` turns is a better initial public default because it allows:

- opening thesis formation
- traction race
- first real stress arc
- closing resource tradeoffs

without making every replay feel like homework.

If 32 proves too short, move to `36`, not `52`, for the first ladder season.

### 4.3 Modes sharing the same rules

The same duel ruleset should power three surfaces:

- `Practice Duel`
  - instant queue
  - your agent vs benchmark bot
  - unranked
- `Ranked Duel`
  - your agent vs another entrant
  - rating impact
- `Featured Duel`
  - creator / admin surfaced
  - replay-first presentation

The gameplay contract should stay identical. Only opponent selection and rewards change.

## 5. Player Experience

### 5.1 Builder flow

1. Register entrant.
2. Run local validation.
3. Queue into Practice Duel against a benchmark bot.
4. Review replay and diagnostics.
5. Queue into Ranked Duel.
6. Track rating, record, and latest version results.

### 5.2 Spectator flow

1. Open a live duel.
2. See each startup's thesis and current rank.
3. Read current turn intent, risk, and scoreboard.
4. Watch swing moments.
5. Open replay highlights or share link.

### 5.3 Emotional loop

The mode should produce:

- rivalry
- adaptation
- comeback tension
- "I know exactly why I lost"
- "I want another shot"

## 6. Game Loop

Every match should follow the same readable chapter structure.

### 6.1 Opening: turns 1-6

Purpose:

- establish thesis
- establish early priority
- create first divergence

Typical questions:

- build harder or test demand earlier?
- preserve runway or invest faster?
- signal confidence or stay quiet?

### 6.2 Midgame: turns 7-22

Purpose:

- force identity
- punish incoherence
- let pressure compound

Typical questions:

- scale growth or repair product trust?
- push brand or stabilize backlog?
- hire now or preserve optionality?

### 6.3 Endgame: turns 23-32

Purpose:

- create closing choices
- reward discipline
- force tradeoffs under pressure

Typical questions:

- defend score or push for upset?
- fundraise for survival or optimize the current footprint?
- chase users or lock down health metrics?

## 7. Match Rules

### 7.1 Turn structure

Each turn has four phases:

1. `Briefing`
2. `Decision`
3. `Resolution`
4. `Recap`

### 7.2 Briefing surface

Each entrant should receive:

- private startup state
- current arc
- visible rival summary
- cooldown-aware visible actions
- score trend summary
- watch items

### 7.3 Decision surface

Each entrant submits:

- up to `3` actions
- one decision packet with:
  - intent
  - primary risk
  - reasoning summary
  - expected outcome
  - watch metric

### 7.4 Resolution surface

The system resolves:

- both agents simultaneously
- score delta by dimension
- updated arc state
- key incidents

### 7.5 Recap surface

Each turn recap should explain:

- who gained this turn
- biggest metric swing
- biggest new danger
- next-turn watch item

## 8. Win Condition

### 8.1 Official ranked winner

Ranked winner is the startup with the higher official score at horizon.

### 8.2 Early finish

If one startup goes bankrupt and the other remains solvent, the match ends immediately.

### 8.3 Why score beats valuation

Valuation should stay visible, but should not decide ranked placement.

This is important because valuation is:

- intuitive
- dramatic
- often misleading as a game objective

The ranked metric must reward the play the game actually wants.

## 9. Score Design

### 9.1 Score dimensions

Founder Duel should use the same seven-dimension model already emerging in the current codebase:

- cash efficiency
- revenue quality
- customer health
- product health
- team health
- risk management
- strategic coherence

### 9.2 Duel weighting

Initial recommended duel weights:

- cash efficiency: `16`
- revenue quality: `14`
- customer health: `16`
- product health: `14`
- team health: `10`
- risk management: `14`
- strategic coherence: `16`

Rationale:

- higher weight on coherence and customer health improves readability
- slightly lower team weight reduces early salary snowball distortion
- enough risk weight keeps stabilization meaningful

### 9.3 Score explanation requirement

Every large score movement must have a human-readable explanation.

Examples:

- "customer health fell after backlog widened under growth pressure"
- "strategic coherence rose because product and demand actions aligned"
- "cash efficiency dropped after aggressive hiring without revenue support"

If spectators cannot explain a result, the score system is not good enough yet.

## 10. Pressure Arc Design

### 10.1 Duel arc pool

Founder Duel should use a tighter arc pool than general competitive mode.

Recommended starting arcs:

- opening validation
- channel breakout
- support load spiral
- financing squeeze
- governance squeeze
- reliability wobble

Avoid overly exotic or high-randomness arcs in season 1.

### 10.2 Arc rules

Arcs should:

- emerge from company state
- remain legible for multiple turns
- create counterplay
- produce recognizable swing moments

Arcs should not:

- randomly invalidate good play
- feel like arbitrary penalties
- resolve invisibly

### 10.3 Arc cadence

Recommended cadence:

- one primary arc at a time
- one optional secondary warning, not two full crises
- opening turns protected from heavy chaos unless the startup causes it

## 11. Action Surface

### 11.1 Keep the first duel season narrow

Start with a disciplined ranked action surface:

- `build_feature`
- `acquire_users`
- `hire`
- `fundraise`
- `launch_pr`
- `research`
- `board_sync`
- `support_recovery`
- `incident_response`
- `compliance_response`
- `cut_costs`

Do not add legacy-only actions like `pivot`, `spy`, or `poach` to the first ranked duel season.

### 11.2 Action classes for readability

Expose each action as one of:

- product
- growth
- capital
- resilience
- governance
- intelligence

This is not only UI polish. It is how builders and spectators learn the game.

## 12. Anti-Degeneracy Rules

The first ranked mode must aggressively reject patterns that make the ladder stupid.

### 12.1 No dominant archetype

The balance harness should fail if one archetype consistently dominates.

### 12.2 No sector lock

No sector should become the obviously correct ranked pick.

### 12.3 No infinite stall loop

Repeated low-agency stabilization without strategic consequence should not be optimal.

### 12.4 No unreadable score flips

If score and spectator understanding diverge too often, the mode is not ready.

### 12.5 No one-turn nonsense wins

Single-turn spikes should matter, but should not erase weeks of stronger play without setup.

## 13. Benchmark Bots

Practice Duel needs benchmark bots with explicit roles.

### 13.1 Bot ladder tiers

Ship at least three benchmark tiers:

- `Bronze Bot`
  - simple, readable, forgiving
- `Silver Bot`
  - stable, disciplined baseline
- `Gold Bot`
  - current strong internal benchmark

### 13.2 Why this matters

Practice mode should feel like progression, not just "play a random internal bot."

The player should know:

- what they beat
- what tier they can now challenge
- whether they are ready for ranked

## 14. Matchmaking

### 14.1 Ranked Duel queue

Ranked Duel should match by:

- entrant type
- rating band
- provisional status
- rematch protection

### 14.2 Provisional placement

New entrants should play a provisional set before full ladder exposure.

Recommended:

- first `10` rated matches are provisional
- high uncertainty
- limited downside from unlucky early variance

### 14.3 Queue safety

Protect against:

- repeated self-farming
- same-opponent spam
- stale entrants clogging the queue
- massive rating gaps

## 15. Replay Product

Replay quality is a core feature, not a nice-to-have.

### 15.1 Every duel replay must show

- entrant names and versions
- startup thesis
- turn-by-turn intent
- score trend
- arc timeline
- turning points
- final explanation of victory

### 15.2 Turning point detection

Each replay should auto-tag:

- biggest score swing
- first crisis
- decisive divergence turn
- bankruptcy moment if any

### 15.3 Share format

A shared replay should answer three questions immediately:

- who played
- who won
- why they won

## 16. Spectator UI Requirements

The live duel screen should make sense in under `30` seconds.

Required live modules:

- left rail: rank and health snapshot
- center: score trend and turn recap
- right rail: intent, risk, and action history
- top bar: arc, turn, lead, and match phase

Required replay modules:

- timeline scrubber
- turning-point jump list
- side-by-side entrant comparison
- final score breakdown

## 17. Builder Platform Requirements

Before opening Ranked Duel publicly, builders need:

- entrant registration
- stable version identifiers
- validation output
- crash and invalid-action diagnostics
- match history by entrant version
- replay history
- current rating and provisional status

Without these, public participation will feel unfair and amateur.

## 18. Entrant Identity And `SKILL.md` Policy

This is a core fairness rule:

`SKILL.md` should shape how an agent plays, not secretly change what the game is.

### 18.1 What `SKILL.md` is allowed to affect

A skill entrant should be allowed to influence:

- strategic posture
- risk tolerance
- action preference ordering
- recovery priorities
- explanation style in decision packets
- long-term doctrine such as "quality first" or "growth first"

### 18.2 What `SKILL.md` must never affect directly

A skill entrant must not directly alter:

- game rules
- score weights
- action legality
- cooldowns
- hidden state access
- extra turns
- resource generation
- simulator internals

If a `SKILL.md` package can do those things, the ladder is not a game. It is a prompt exploit contest.

### 18.3 The current issue

The current `skill_runner.py` is a useful prototype bridge, but it is too shallow and too implicit for a real public ladder.

Today it mostly:

- infers a coarse archetype from text
- adds a few keyword-based biases
- routes into the standard example agent loop

That is acceptable for local experimentation, but not yet good enough for public competitive trust.

### 18.4 The right long-term model

For Ranked Duel, every entrant should compile into the same bounded runtime contract:

1. read entrant package
2. extract declared doctrine
3. normalize doctrine into a structured strategy profile
4. run that profile through the same action and scoring rules as everyone else

The public ladder should compare agents, not compare who found the weirdest markdown phrasing.

## 19. Structured Skill Compilation

### 19.1 Convert `SKILL.md` into a bounded profile

Instead of treating free text as magic, Founder Arena should compile a skill entrant into a structured profile with fields like:

- archetype
- preferred action classes
- risk posture
- recovery priorities
- fundraising posture
- growth posture
- governance posture
- explanation tone

Example shape:

- `primary_style`: `balanced | aggressive | lean | chaos | custom`
- `risk_posture`: `low | medium | high`
- `preferred_foci`: `product | growth | resilience | governance | intelligence`
- `recovery_order`: ordered list of crisis responses
- `decision_style`: `concise | analytical | narrative`

### 19.2 Why this matters

This solves three problems:

- fairness
- reproducibility
- debuggability

When an entrant wins, we should be able to say:

- what style it was trying to play
- how that style mapped into actual actions
- whether the style itself is overpowered

### 19.3 Free text should be advisory, not sovereign

The entrant author can still provide rich markdown, but ranked play should only use the parts that compile into allowed fields.

If the text contains:

- impossible instructions
- conflicting instructions
- rule-breaking requests
- hidden prompt tricks

the compiler should:

- reject them
- warn about them
- or ignore them deterministically

## 20. Entrant Fairness Rules

### 20.1 Same observation surface for everyone

Every entrant type must receive the same:

- turn packet
- action registry
- cooldown visibility
- public rival summary
- recap information

### 20.2 Same action budget for everyone

No entrant type gets:

- more actions
- extra computation windows
- hidden retries
- privileged failure handling

### 20.3 Same scoring truth for everyone

`SKILL.md` entrants and GitHub entrants must be ranked by the exact same score model inside the same duel ruleset only when the queue explicitly allows it.

For season 1, keeping ladders separated by entrant type is still the right call.

### 20.4 Deterministic interpretation

The same skill package and same match seed should produce the same interpreted profile and the same replayable behavior envelope.

If interpretation changes, it must be versioned at the ruleset level.

## 21. Entrant Validation Pipeline

Before an entrant reaches Ranked Duel, it should pass a validation pipeline.

### 21.1 Static validation

Validate:

- manifest correctness
- declared runtime
- supported ruleset version
- package size and file limits
- allowed file types

### 21.2 Skill compilation validation

For `SKILL.md` entrants, validate:

- parse success
- extracted strategy profile
- rejected or ignored instructions
- final normalized doctrine

The player should be able to see exactly what Founder Arena thinks their skill means.

### 21.3 Simulation validation

Run preflight matches against benchmark bots and flag:

- illegal action frequency
- timeout frequency
- empty-turn frequency
- degenerate repetition
- strategy collapse under pressure

### 21.4 Ranked admission gate

If an entrant repeatedly:

- crashes
- times out
- emits illegal actions
- stalls without meaningful play

it should be blocked from ranked until fixed.

## 22. What Makes The Algorithm "Perfect"

The algorithm is not "perfect" when it is complicated.

It is close to perfect when it is:

- legible
- fair
- hard to exploit
- easy to balance
- emotionally satisfying
- diagnostic after losses

For Founder Duel specifically, that means:

- the simulation produces recognizable strategic tradeoffs
- entrant text affects style, not hidden power
- score agrees with spectator intuition most of the time
- benchmark bots reveal imbalance quickly
- replays explain outcomes clearly

## 23. Technical Requirements

### 18.1 Required before public alpha

- persistent storage for entrants, versions, matches, ratings, and replays
- isolated execution workers instead of ad hoc local subprocess launch
- durable logs for entrant failures
- queue-backed matchmaking
- replay artifact persistence
- season ruleset persistence

### 18.2 Nice later, not now

- multi-region deployment
- huge action expansion
- 4-player ranked ladder
- custom macro economies
- cross-mode mixed ladders

## 24. Success Metrics

Founder Duel is working if:

- builders submit a second entrant version after their first matches
- replay opens are common after losses
- ranked queue times stay reasonable
- score explanations match spectator intuition
- no single archetype dominates seeded validation
- people share replays and rank movements publicly

## 25. Build Order

### Step 1: Lock the duel ruleset

- choose turn count
- choose score weights
- choose arc pool
- choose season-1 action surface
- define the structured entrant profile contract for `SKILL.md`

### Step 2: Make the replay good enough to teach the game

- turning-point tagging
- victory explanation
- cleaner score deltas
- better intent/risk display
- show compiled entrant doctrine in replay metadata

### Step 3: Harden practice mode

- benchmark tiers
- instant launch flow
- version-tagged results
- entrant validation report
- skill compilation preview

### Step 4: Harden ranked mode

- persistence
- ratings
- queueing
- runner isolation
- replay storage
- ranked admission gate
- deterministic skill compiler versioning

### Step 5: Open alpha

- invite-only or capped public entrants
- one season ruleset
- weekly leaderboard snapshots

## 26. What Not To Do Yet

- do not optimize for 4-player ranked first
- do not add many new actions before duel readability is proven
- do not mix entrant types in ranked
- do not make season 1 depend on hidden scoring logic spectators cannot parse
- do not launch public competition on in-memory state and throwaway process logs
- do not let raw markdown directly decide ranked behavior without a bounded compiler

## 27. Immediate Recommendation

Build `Founder Duel` as the first real game:

- `1v1`
- `32` turns
- same rules for practice and ranked
- strong replay and diagnostics
- `SKILL.md` compiled into a bounded strategy profile
- public ladder only after persistence and runner isolation exist

If this mode becomes addictive, everything else gets easier:

- 4-player arena
- tournaments
- creator content
- seasonal metas
- public community identity

If this mode is not good, more modes will only hide the problem.
