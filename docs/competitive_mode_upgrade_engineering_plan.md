# Founder Arena Competitive Mode Upgrade Engineering Plan

Status: Draft

Updated: 2026-04-21

Related references:

- `tasks.md`
- `docs/competitive_mode_prd.md`
- `docs/endgame_plan.md`
- `server.py:697-719`
- `server.py:1875-1913`
- `server.py:2172-2265`
- `server.py:2905-2974`
- `frontend/src/api/store.js:43-47`
- `frontend/src/ui/RankingsPanel.js:24-26`
- `frontend/src/ui/GameControls.js:182-227`
- `frontend/src/ui/GameControls.js:327-365`
- `frontend/src/ui/GameControls.js:415-450`
- `frontend/src/ui/AgentDetailPanel.js:39-55`
- `frontend/src/api/client.js:89-102`

## 1. Goal

Ship the smallest upgrade that makes competitive mode tell the truth, uses the existing replay/narrative surfaces, fixes the obviously broken quick-play promise, and sets up the next layer of shareable match artifacts without rewriting the stack.

The target outcome is:

- live and postgame UI rank by the official competitive metric
- spectator UI consumes the narrative/replay data that already exists
- seven-dimension scorecards render correctly
- replay turning points highlight real swings instead of week-1 noise
- quick play either launches a real acting entrant or stops pretending it does

## 2. Step 0: Scope Challenge

### What already exists

The repo already has most of the hard backend pieces:

- Competitive ranking logic already exists in `Game._ranked_startups()` and uses score in `competitive_mode` (`server.py:697-719`).
- Spectator state already exposes rich state, action logs, arc feed, decision summaries, and per-startup scorecards (`server.py:1875-1913`).
- Replay, narrative, and leaderboard endpoints already exist (`server.py:3484-3529`).
- Registered entrant launch infrastructure already exists, including retained stdout/stderr, workspace validation, and `skill_runner.py` launch for `skill_package` entrants (`server.py:2688-2756`, `server.py:2905-2974`, `server.py:3262-3307`).

This means the upgrade should reuse existing state, replay, and entrant-launch flows instead of adding parallel client-side logic.

### Minimum change that achieves the goal

Do not treat this as a redesign. The minimum implementation is:

1. Make backend ranking/order a first-class payload contract.
2. Make frontend consume that contract instead of sorting on its own.
3. Normalize how the frontend reads scorecard and narrative data.
4. Fix turning-point selection in one backend function.
5. Rewire quick play onto the existing entrant runner path.

### Complexity check

This work naturally touches more than 8 files:

- `server.py`
- `frontend/src/api/client.js`
- `frontend/src/api/store.js`
- `frontend/src/ui/RankingsPanel.js`
- `frontend/src/ui/GameControls.js`
- `frontend/src/ui/AgentDetailPanel.js`
- likely one new frontend selector/helper
- multiple backend tests

That is a smell if shipped as one PR. Recommendation: split into four implementation slices with explicit dependencies.

### TODOS cross-reference

`TODOS.md` does not exist. No deferred TODO list is blocking this work.

### Completeness check

The only shortcut worth rejecting is "just patch the ranking UI." That would still leave the postgame modal, store ordering, detail-panel shape bug, replay heuristics, and fake quick play broken. The complete version is still a boilable lake because the backend already contains most of the machinery.

## 3. State Diagnosis

This codebase is in a debt-repayment state, not an innovation state.

The product direction is already written in `tasks.md`, `docs/competitive_mode_prd.md`, and `docs/endgame_plan.md`. The problem is contract drift:

- backend truth says score
- frontend presentation says valuation
- backend exposes replay/narrative data
- frontend mostly ignores it
- backend can launch acting entrants
- browser quick play only joins a startup

The correct intervention is not more features. It is to tighten contracts so the same truth flows through live match, replay, practice loop, and postgame.

## 4. Opinionated Recommendation

Use a backend-owned "competitive truth contract" and reuse the existing entrant launcher for quick play.

Concretely:

- Do not let frontend components keep inventing their own ranking logic.
- Do not build a browser-resident fake agent loop.
- Do not add a new runtime path for quick play when the entrant registry/launcher already exists.

This matches the repo’s current architecture and keeps the diff explicit and testable.

## 5. Architecture Slices

### Slice A: Competitive Truth Contract

Problem:

- `RankingsPanel`, `GameControls.showPostGame`, and `GameStore.startupList` all sort by valuation (`frontend/src/ui/RankingsPanel.js:24-26`, `frontend/src/ui/GameControls.js:416-418`, `frontend/src/api/store.js:43-47`).
- The backend already knows the official order (`server.py:697-719`), but that order is not emitted as a stable payload.

Recommendation:

- Add one backend helper that emits ordered standings for all game surfaces.
- Make frontend render server-provided order and official metric instead of re-sorting locally.

Suggested backend additions:

- `rankings`: ordered list of startup summaries for the current game
- per startup:
  - `score`
  - `official_metric_kind`
  - `official_metric_value`
  - `rank`
- top-level:
  - `rank_basis`
  - `leader_startup_id`

Suggested helper shape:

```text
Game._rankings_payload()
  -> [
       {
         startup_id,
         rank,
         official_metric_kind,
         official_metric_value,
         score,
         valuation,
         alive
       }
     ]
```

Why backend-owned:

- removes three separate frontend sort implementations
- prevents public state, spectator state, replay, and postgame from drifting again
- lets backend tests catch future metric regressions without frontend test scaffolding

### Slice B: Spectator Narrative Consumption

Problem:

- Replay, narrative, and leaderboard APIs exist in `frontend/src/api/client.js:89-102`.
- The store never uses them and the live HUD barely uses the narrative data already present in spectator payloads.
- `AgentDetailPanel` misreads the `seven_dimension_scores` shape (`frontend/src/ui/AgentDetailPanel.js:39-55`).

Recommendation:

- Add one normalization layer in the frontend store for game payloads.
- Render per-startup narrative cards from existing backend fields before adding any new story system.

Normalization rules:

- Convert `seven_dimension_scores` from backend shape:
  - current shape: `{ dimensions: {...}, total_score }`
  - frontend view model: `{ totalScore, dimensions[] }`
- Merge spectator `decision_summaries` or per-startup `latest_decision` into one `latestDecision` field.
- Normalize `current_arc` and `rankings` into one store shape used by all panels.

UI additions:

- Rankings panel:
  - show rank by score in competitive mode
  - keep valuation as secondary text, not the primary ordering signal
- Detail panel:
  - show total score
  - show the seven dimensions from `dimensions`
  - show latest decision:
    - intent
    - primary risk
    - expected outcome
  - show current arc headline and severity
- Postgame modal:
  - use backend `rankings`
  - show winner score and final margin
  - show top replay summary headline

### Slice C: Replay Turning-Point Correction

Problem:

- The current turning-point scorer rewards early lead establishment too strongly because `gap_change` is compared against `previous_gap`, and then the results are sorted partly by absolute score gap (`server.py:2193-2246`).
- That biases toward early turns where the first lead is created instead of later inflection points.

Recommendation:

- Replace the single heuristic with a weighted event score that values lead changes, momentum reversals, and outcome relevance.

Suggested revised scoring inputs:

- `leader_changed`: high weight
- `closing_speed`: challenger cuts gap materially
- `swing_against_final_winner`: highlight comeback or near-collapse
- `decision_consequence`: bankruptcy, crisis resolution, or major action delta
- `late_game_multiplier`: mild, not dominant

Do not use:

- raw absolute gap as a primary sort key

Suggested flow:

```text
history by turn
  -> compute top-2 delta and delta derivative
  -> annotate lead changes / momentum reversals / elimination events
  -> assign event score
  -> choose top 3 distinct turns
```

Distinct-turn rule matters so three adjacent turns do not dominate the replay summary.

### Slice D: Quick Play Uses a Real Acting Entrant

Problem:

- Browser "deploy" and "quick play" only call `joinAsPlayer()` and then `fillBotsAndStart()` (`frontend/src/ui/GameControls.js:201`, `frontend/src/ui/GameControls.js:352`, `frontend/src/api/store.js:95-125`).
- That creates a startup but never launches an acting loop.
- The backend already has a real registered-entrant launch path (`server.py:2905-2974`, `server.py:3262-3307`).

Recommendation:

- Reuse the existing entrant path instead of building a new ad hoc loop.

Preferred implementation:

1. Browser quick play turns the textarea strategy into an inline `skill_package` manifest.
2. Frontend registers that skill entrant.
3. Frontend calls `POST /api/games/{id}/add-entrant` with `launch=true`.
4. Backend launches `skill_runner.py` and records launch diagnostics.
5. Browser watches the spectator game like any other match.

Why this is the right boring choice:

- same runtime path as real entrants
- same retained logs
- same doctrine compilation path
- same join/auth behavior
- no client-side fake gameplay loop

Tradeoff:

- this will create ephemeral entrant records

Recommendation on that tradeoff:

- accept ephemeral registry clutter in the first shipping slice if it keeps the runtime path unified
- add cleanup/transient-entrant handling later only if it becomes operationally noisy

Immediate guardrail if Slice D slips:

- rename the UI from "Deploy Agent" to "Join As Passive Startup" so the product stops lying

## 6. Proposed Data Flow

### Live spectator truth flow

```text
Game state in server.py
  -> _ranked_startups()
  -> _rankings_payload()
  -> get_public_state() / get_spectator_state() / get_replay()
  -> frontend store normalization
  -> RankingsPanel / AgentDetailPanel / Postgame modal
```

### Quick play acting-entrant flow

```text
Quick Play modal
  -> create game
  -> register inline skill_package entrant
  -> add entrant to game with launch=true
  -> backend launches skill_runner.py
  -> entrant joins and submits actions through normal agent API
  -> browser spectates
```

This is the key architectural choice: quick play becomes a thin client over the normal entrant path.

## 7. Recommended Sequencing

### Phase 1: Truth Contract and Ranking Fixes

Goal:

- make live and postgame UI impossible to rank incorrectly

Scope:

- backend `rankings` payload
- per-startup `score` and official metric fields
- frontend consumes `rankings`
- postgame modal uses `rankings`
- fix scorecard parsing in detail panel

Files likely touched:

- `server.py`
- `frontend/src/api/store.js`
- `frontend/src/ui/RankingsPanel.js`
- `frontend/src/ui/GameControls.js`
- `frontend/src/ui/AgentDetailPanel.js`
- backend tests

Dependency:

- none

Why first:

- this is the highest-value correctness fix with the smallest blast radius

### Phase 2: Spectator Narrative Surfaces

Goal:

- turn existing data into readable match context

Scope:

- store normalization for `latestDecision`, `currentArc`, `summary`
- live narrative blocks in detail panel or HUD
- postgame summary shows replay headline and turning points
- landing or postgame reads `/api/leaderboard`

Files likely touched:

- `frontend/src/api/client.js`
- `frontend/src/api/store.js`
- `frontend/src/ui/HUD.js`
- `frontend/src/ui/AgentDetailPanel.js`
- `frontend/src/ui/GameControls.js`

Dependency:

- Phase 1 contract should land first so these surfaces render one canonical shape

### Phase 3: Turning-Point Algorithm

Goal:

- make replay summaries diagnose the match instead of narrating week 1

Scope:

- revise `_build_replay_summary()`
- add deterministic replay-summary tests

Files likely touched:

- `server.py`
- replay summary tests

Dependency:

- none technically, but better after Phase 1 so ranking payload semantics are locked

### Phase 4: Quick Play Acting Runtime

Goal:

- make "quick play" launch a real agent loop

Scope:

- frontend register/add-entrant calls
- inline skill manifest builder
- quick play progress UI shows registration and launch states
- diagnostics path for launch failures

Files likely touched:

- `frontend/src/api/client.js`
- `frontend/src/api/store.js`
- `frontend/src/ui/GameControls.js`
- `server.py` only if a tiny wrapper/helper is needed
- backend tests around entrant launch path

Dependency:

- none on ranking, but it is a larger failure surface than Phases 1-3

Recommendation:

- land this after truth and replay fixes

## 8. API and Contract Changes

### Additions to game state payloads

Apply to:

- `GET /api/games/{id}`
- `GET /api/games/{id}/spectate`
- `GET /api/games/{id}/replay`

Add:

- `rank_basis`
- `leader_startup_id`
- `rankings[]`
- per-startup `score`
- per-startup `official_metric_kind`
- per-startup `official_metric_value`

Optional but recommended:

- per-startup `latest_decision` in spectator state, not just top-level `decision_summaries`

This keeps the frontend from stitching together several partial shapes.

### Frontend API surface changes

Add client/store methods for:

- `registerEntrant(manifest, inlineFiles)`
- `addEntrantToGame(gameId, adminToken, payload)`
- `fetchReplay(gameId)`
- `fetchNarrative(gameId)`
- `fetchLeaderboard()`

The last three already exist in `client.js`; the missing piece is store integration and UI consumers.

## 9. UI Changes

### Rankings panel

- Sort by backend `rankings`
- Show primary metric:
  - score in `competitive_mode`
  - valuation otherwise
- Keep valuation visible as a secondary chip in competitive matches

### Postgame modal

- Use `rankings`
- Show:
  - winner by score
  - final margin
  - winner summary
  - top turning points

### Detail panel

- Parse `seven_dimension_scores.dimensions`
- Render `total_score`
- Render latest decision summary and current arc

### Quick play modal

- Replace current "deploy" step with:
  - register strategy
  - launch entrant
  - confirm entrant joined
  - then fill bots/start
- If launch fails, show retained launch diagnosis instead of generic API text

## 10. Test Diagram

```text
NEW / CHANGED CODEPATHS

1. Competitive state payload
   server state -> rankings payload -> frontend render
   New because current frontend infers ordering from valuation.

2. Scorecard normalization
   server seven_dimension_scores -> frontend dimensions list
   New because current frontend treats nested object as flat values.

3. Replay summary selection
   history -> turning point heuristic -> summary payload
   New because the selection heuristic changes materially.

4. Quick play acting entrant
   browser quick play -> register entrant -> add entrant -> launch runner
   New because current flow only joins a startup.

5. Leaderboard/narrative/replay consumption
   existing endpoints -> frontend store -> postgame / landing / spectator panels
   New because endpoints exist but are mostly unused.
```

### Required tests by codepath

1. Competitive state payload

- backend test: competitive game state includes `rankings`, `rank_basis=score`, and score-ordered ranks
- backend test: legacy mode still emits valuation basis
- backend test: dead startups rank below surviving startups in competitive mode

2. Scorecard normalization

- backend test: per-startup payload includes `score`
- frontend unit or thin integration test: nested `seven_dimension_scores` maps to seven rendered rows plus `total_score`

3. Replay summary selection

- deterministic unit tests around `_build_replay_summary()`:
  - lead change beats early lead establishment
  - late comeback beats static early gap
  - adjacent turns do not monopolize top 3
  - elimination/crisis turn can surface as turning point

4. Quick play acting entrant

- backend test: inline skill entrant can register and launch
- backend test: failed launch returns diagnosable error
- backend test: add-entrant respects queue/entrant-type constraints
- end-to-end manual test: quick play human entrant submits actions within first turns

5. Leaderboard/narrative/replay consumption

- backend test: leaderboard entries sort by official metric and expose metric metadata
- manual UI verification: postgame modal shows winner matching replay summary and leaderboard logic

## 11. Failure Modes

| Codepath | Realistic failure | Test coverage needed | Error handling needed | User impact if missed |
|---|---|---|---|---|
| Competitive truth payload | public state omits `score` or emits inconsistent `rankings` | contract test per endpoint | fail fast in frontend if `rankings` missing in competitive mode | silent wrong winner |
| Scorecard rendering | frontend assumes flat object again | render/unit test | fallback "scorecard unavailable" state | silent bad analytics panel |
| Replay turning points | heuristic overfits late noise or ties | seeded summary tests | fallback to winner summary if no strong events | misleading recap |
| Quick play entrant launch | runtime command missing or launch fails before join | launch-path tests | surface retained log diagnosis in UI | silent idle startup |
| Leaderboard consumption | frontend fetches leaderboard only after finished games and gets empty state | manual happy-path + empty-state test | empty-state copy | confusing, not silent |

Critical gap to avoid:

- any quick-play failure mode where the UI says "deployed" but no acting process exists

That is the highest-risk silent failure in the current product.

## 12. Verification Strategy

### Automated

- run backend pytest for ranking, replay summary, and entrant launch paths
- add a deterministic fixture match that reproduces score-vs-valuation divergence
- add a deterministic replay-summary fixture that reproduces the early-turn bias

### Manual

1. Start server locally.
2. Create a competitive duel.
3. Verify live rankings panel leader matches backend `rankings[0]`.
4. Finish the match and verify postgame winner matches replay summary winner.
5. Open detail panel and confirm seven dimensions render with non-zero values.
6. Run quick play with inline strategy and confirm the human entrant submits actions by turn 1-2.
7. Force a broken quick-play launch and confirm UI shows a real diagnosis, not fake success.

### Regression checks

- run the existing balance harness after replay-summary/ranking changes to confirm winner semantics still line up with competitive score expectations
- build the Vite frontend to catch import or bundle regressions

## 13. Spark Skill Graph Routing

If this work is split across specialist agents, the right skill bundles from `C:\Users\USER\Desktop\spark-skill-graphs` are:

- `strategy/system-designer`
  - owner for the backend truth contract and slice sequencing
- `backend/python-backend` + `backend/api-design`
  - owner for `server.py` payload changes, entrant-launch reuse, and API contract discipline
- `frontend/frontend-engineer` + `design/game-ui-design`
  - owner for rankings, postgame, detail panel, and quick-play UX states
- `testing/test-architect` + `testing/qa-engineering`
  - owner for contract tests, replay-summary fixtures, and end-to-end verification matrix
- `ai-agents/multi-agent-orchestration`
  - only for the quick-play acting loop decision; not for the whole feature
- `game-dev/gamification-loops` + `marketing/viral-marketing`
  - follow-on phase for share cards, recap artifacts, and viral loops after core truth is fixed
- `product/product-management`
  - owner for acceptance criteria and "not in scope" discipline

Recommended swarm order:

1. `system-designer`
2. `python-backend` + `api-design`
3. `frontend-engineer` + `game-ui-design`
4. `test-architect` + `qa-engineering`
5. later: `gamification-loops` + `viral-marketing`

## 14. Not In Scope

- Durable match storage and hosted ladder infra
  - important, but this upgrade is about correctness and legibility inside the current local-process architecture.
- Matchmaking/rating redesign
  - not required to fix score truth, replay quality, or quick play.
- New simulator mechanics or rebalance passes
  - replay packaging and UI truth should land before another balance cycle.
- Creator-mode broadcast overlays
  - useful for virality later, but not needed to stop current spectator drift.
- A brand-new browser-native agent runtime
  - would duplicate the existing entrant launch system and spend the wrong innovation token.

## 15. What Already Exists and Should Be Reused

- `Game._ranked_startups()` for official competitive ordering
- `_score_value_for()` and `_official_metric_kind()` for metric selection
- `get_spectator_state()` for rich spectator payloads
- `_build_replay_summary()` as the place to fix turning-point logic
- entrant registry, validation, retained logs, and `_launch_registered_entrant()`

The plan should reuse all of the above. If a proposed implementation bypasses them, it is probably rebuilding a solved sub-problem.

## 16. Delivery Recommendation

Ship this as four PRs:

1. competitive truth contract + frontend ranking fix
2. scorecard/narrative UI consumption
3. replay turning-point heuristic
4. quick-play real entrant launch

That gives one reversible slice per major risk area and keeps structural changes separate from behavioral changes.
