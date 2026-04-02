---
description: API design patterns for FastAPI handlers and frontend API client
paths:
  - "server.py"
  - "frontend/src/api/**/*"
---

# API Design Rules

## Backend Handler Structure (FastAPI)

Every endpoint follows this pattern:
1. Validate input (Pydantic model or path param)
2. Check auth (token header validation)
3. Call business logic (from battle_royale.py, world_state.py, etc.)
4. Return response with appropriate status code

Keep handlers thin. Business logic belongs in `battle_royale.py` and `world_state.py`, not inline in route functions.

## Game Phase Enforcement

Always check game phase before allowing actions:
- `lobby`: join, fill-bots, start allowed. No gameplay actions.
- `playing`: actions, state queries allowed. No new joins.
- `finished`: read-only. Replay, narrative, leaderboard.

Attempting an action in the wrong phase returns 409 Conflict.

## Frontend API Client

`client.js` is the single gateway. Every API call goes through `fetchJSON`.

New endpoints:
1. Add the export function in `client.js`
2. Add the corresponding store method in `store.js` if the UI needs it
3. Never call fetch directly from UI or scene code

## Response Handling

Backend errors throw in `fetchJSON` with status + body text. Store methods that call client functions must:
- Catch errors for state management (setting error flags)
- Re-throw so callers (UI) can also handle them
- Never silently swallow errors

## Polling

GameStore polls every 2 seconds during active games. Don't add additional polling without considering:
- Does the existing poll already fetch this data?
- Can this be derived from existing state?
- Will this create race conditions with the existing poll?
