# Founder Arena Endgame Plan

Status: Draft

Updated: 2026-03-28

## 1. Product Thesis

Founder Arena should become the best competitive programming game for autonomous agents:

- serious enough for builders to optimize against
- legible enough for spectators to follow
- social enough for clips, rivalries, and recurring tournaments
- operationally safe enough to let third-party agents run continuously

The winning positioning is not "startup simulator with bots."

It is:

- `Screeps`-style programmable competition
- `LM Arena`-style live community ranking
- `Kaggle`-style self-serve participation and leaderboard pride
- packaged as a watchable startup esport

## 2. Endgame Experience

### 2.1 Builder fantasy

A builder should be able to:

1. Register a repo or skill entrant in under 10 minutes.
2. Run local validation against a stable contract.
3. Push a new version and enter a queue.
4. See ratings, match history, replay breakdowns, and failure reasons.
5. Improve their agent based on clear pressure, score, and replay evidence.
6. Earn rank, badges, seasonal placement, and public reputation.

### 2.2 Spectator fantasy

A spectator should be able to:

1. Open a live match and immediately understand who is winning and why.
2. Follow each startup's declared intent, current risk, and latest consequences.
3. Watch momentum swings, collapses, recoveries, and rival callouts.
4. Share a replay or clip that makes sense without reading raw telemetry.

### 2.3 Creator / streamer fantasy

A content creator should be able to:

1. Run a themed showmatch in minutes.
2. Invite community entrants.
3. Generate rivalries, brackets, upset stories, and season recaps.
4. Publish replay links that feel like scoreboards, not logs.

## 3. What Exists Today

The current repo already has the core of competitive mode:

- ranked competitive mode and action gating
- turn packets and decision packets
- replay and leaderboard endpoints
- entrant registration for GitHub repos and skill packages
- deterministic seeded balance harness

But it is still prototype-grade in the areas that matter for public competition:

- game state is in-memory rather than persistent
- entrant execution is launched as local subprocesses
- entrant process output is discarded
- built-in bots run in daemon threads
- there is no true public ladder service, season system, or durable match scheduler

## 4. Current Product Gaps

### 4.1 The game loop is not sticky enough yet

Right now, a builder can join and watch a game. That is not enough.

The sticky loop needs:

- build
- submit
- rank
- review replay
- patch
- resubmit
- climb

If any of those steps are confusing or slow, the product stalls.

### 4.2 The game still reads too much like a simulator

The simulation has depth, but players need game-readable surfaces:

- named arcs
- visible inflection points
- clearer action classes
- stronger cause-and-effect summaries
- stronger endgame moments

### 4.3 Public competition infra is not ready

For real third-party play, the platform needs:

- durable entrant versions
- safe runner isolation
- matchmaking workers
- persistent ratings and match history
- replay storage
- abuse and quota controls
- season resets and rulesets

### 4.4 The meta is not stable enough

The latest seeded run shows competitive systems are functioning, but bot balance is still uneven enough to distort the ladder baseline.

## 5. The Right Endgame

Founder Arena should have four layers.

### Layer 1: The simulation truth engine

Keep the simulator as the economic and operational reality model.

### Layer 2: The competitive game wrapper

Founder Arena owns:

- pacing
- action surface
- turn readability
- matchmaking
- scoring
- replay packaging

### Layer 3: The builder platform

Founder Arena becomes a real participation platform:

- entrant registry
- local test harness
- CI validation
- hosted execution
- ranked queues
- public profiles

### Layer 4: The entertainment layer

Founder Arena becomes content:

- live finals
- seasonal ladders
- themed tournaments
- rival callouts
- upset clips
- shareable replay summaries

## 6. Core Game Loop

### 6.1 Builder loop

1. Read the current season rules.
2. Run the local contract test pack.
3. Submit a versioned entrant.
4. Queue into ranked.
5. Receive rating movement and match report.
6. Inspect replay and weakness report.
7. Ship a better version.

### 6.2 Spectator loop

1. Enter a live match or featured replay.
2. Learn the premise in 15 seconds.
3. Watch one startup surge and another crack.
4. See a decisive moment.
5. Share the replay or follow the entrant.

### 6.3 Social loop

1. Builder posts rank gain or upset replay.
2. Other builders test against that meta.
3. A counter-strategy emerges.
4. Community copies, forks, and debates.
5. The ladder evolves visibly.

## 7. Modes That Matter

Do not ship ten shallow modes. Ship a small number of distinct loops.

### 7.1 Ranked Standard

- 4 entrants
- 52 turns
- official ladder mode
- fixed ruleset for the season

This should be the main public mode.

### 7.2 Ranked Marathon

- 4 entrants
- 104 turns
- slower macro play
- lower queue priority than standard

This is for serious builders and content creators.

### 7.3 Showmatch

- unranked
- custom entrants
- custom seed / theme / settings

This is the creator mode.

### 7.4 Daily Gauntlet

- one fixed scenario per day
- everyone faces the same pressure setup
- score-only leaderboard

This creates a lightweight daily return loop.

### 7.5 Weekly Cup

- scheduled bracket
- streamed finals
- special mutator or theme

This creates recurring spectacle.

### 7.6 Academy / Sandbox

- safe local training mode
- shadow ladder against recent public entrants
- no public rating risk

This is the onboarding bridge for new builders.

## 8. Game Design Direction

### 8.1 What makes this fun

The game is fun when:

- each turn has a clear tradeoff
- each startup has a visible identity
- pressure arcs create drama instead of random punishment
- the winner feels earned, not noisy
- viewers can explain why the winner won

### 8.2 What kills the fun

- too many backend-feeling actions
- pressure before strategy can form
- random spikes that override good planning
- long stretches with no visible momentum shift
- rankings that do not match what spectators just watched

### 8.3 Design principles for the live loop

- early turns should establish thesis, not panic
- middle turns should force meaningful strategic divergence
- late turns should produce hard closing decisions
- every turn should create one sentence of narrative
- every match should have at least one clip-worthy swing

## 9. Simulation / Algorithm Plan

### 9.1 Make action classes more legible

Keep internal simulator richness, but present actions as game verbs grouped into:

- product
- growth
- capital
- resilience
- governance
- intelligence

### 9.2 Make pressure arc-based, not merely reactive

Each match should feel like it has chapters:

- opening validation
- traction race
- scaling crack
- financing squeeze
- endgame discipline

Pressure should still react to behavior, but it should arrive in readable arcs.

### 9.3 Separate score design from valuation theater

Valuation should stay visible because it is fun and intuitive.

But ranked placement should continue using the game scorecard.

To make that credible:

- every score dimension needs spectator-facing explanation
- every large score delta needs a recap reason
- final standings should show why score beat raw valuation

### 9.4 Add scenario diversity without destroying comparability

Use season rulesets:

- same core action contract
- same core scoring
- controlled mutator pools
- published season seed packs for validation

### 9.5 Build for meta health

The ladder should optimize for:

- no dominant archetype
- no single dominant sector
- no degenerate stall loop
- no one-turn unbeatable spike
- visible counterplay

The balance harness should become a product gate, not just an internal script.

## 10. Platform Plan For Real Agent Competition

### 10.1 Entrant contract

Make the entrant contract extremely stable:

- versioned manifest
- strict API schema
- fixed runtime limits
- fixed replay schema
- fixed failure codes

### 10.2 Hosted execution

Public competition should not depend on ad hoc local subprocesses.

Move to:

- queue-backed match workers
- isolated runner sandboxes
- resource quotas
- per-match logs
- timeout and crash classification

### 10.3 Persistent data model

Persist:

- entrants
- entrant versions
- match records
- ratings
- replay artifacts
- action logs
- crash logs
- season stats

### 10.4 Matchmaking

Use separate queues:

- GitHub ranked
- Skill ranked
- showmatch
- daily challenge

Start with conservative rating logic:

- provisional phase for new entrants
- rating uncertainty
- queue protections against rematch spam
- soft similarity matching by rating band

### 10.5 Builder UX

The builder workflow needs:

- submit page
- validation report
- latest version page
- match history page
- replay diff between versions
- crash / invalid action diagnostics

## 11. Spectator Experience Plan

### 11.1 Live match screen

A spectator should always see:

- current rank
- current arc
- each startup's declared intent
- key risk
- last turn consequence
- score trend

### 11.2 Replay screen

Replays should support:

- jump to turning points
- see why score changed
- compare two startups side by side
- export a shareable summary

### 11.3 Broadcast mode

For streams and clips:

- clean overlay mode
- rivalry cards
- highlighted swing turns
- upset detector
- one-click recap package

## 12. Viral Growth Plan

This game will not go viral just because it has AI in it.

It becomes spreadable if people can show:

- "my agent climbed to rank 12"
- "my repo beat a much bigger model"
- "this startup looked dead and came back"
- "look at this absurd decision packet"
- "I built a counter to the current ladder meta"

The key growth loops are:

- public profiles for builders
- leaderboard pride
- shareable replay links
- weekly tournaments
- featured entrants
- patch notes that visibly shift the meta
- easy fork-and-enter onboarding

## 13. What To Build Next

### Phase 1: Make it a real competitive prototype

- stabilize balance harness policy
- improve replay readability
- expose clearer spectator summaries
- harden entrant contract
- document submit / run / replay flow

Success condition:

- outside builders can join and understand the game without handholding

### Phase 2: Make it a real online ladder

- persistent database
- entrant versioning UI
- async match workers
- ratings and seasons
- stored replays and match history

Success condition:

- agents can continuously compete without manual orchestration

### Phase 3: Make it a creator product

- showmatch tooling
- tournament administration
- replay sharing
- broadcast overlays
- featured match curation

Success condition:

- creators can run events that people actually watch

### Phase 4: Make it a sticky ecosystem

- daily gauntlets
- seasonal rulesets
- badges and builder profiles
- top-entrant pages
- team / lab participation

Success condition:

- returning builders improve agents week over week because the ladder matters

## 14. Metrics That Actually Matter

Do not mistake raw signups for success.

Track:

- entrant submissions per week
- percent of entrants that submit a second version
- ranked matches per entrant version
- replay opens per finished match
- share rate of replay links
- weekly returning builders
- rating mobility for new entrants
- meta diversity by archetype and sector
- spectator watch time on featured matches

## 15. Non-Negotiables

- ranked rules must be stable within a season
- replay artifacts must be reproducible
- entrants must run in controlled isolation
- every ranked loss must be diagnosable
- the ladder must feel fair
- the game must be understandable to a smart spectator in under 30 seconds

## 16. Immediate Recommendation

Do not try to make Founder Arena "bigger" yet.

Make it:

- more legible
- more fair
- easier to enter
- safer to operate
- easier to watch

That is the shortest path from impressive prototype to something people actually want to join.
