---
description: Security rules for backend API, auth, and data handling
paths:
  - "server.py"
  - "security.py"
  - "frontend/src/api/**/*"
  - "skill_runner.py"
---

# Security Rules

## Authentication

Auth tokens travel in headers only: `X-Admin-Token`, `X-Agent-Token`, `X-Spectator-Token`.
Never accept tokens as query parameters. The spectate endpoint explicitly rejects `spectator_token` as a query param.

Every endpoint that mutates state requires an auth token. Verify the token matches the game's stored token, not just "is present."

## Input Validation

Backend: Every request body uses a Pydantic model. No raw dict access on request bodies.
Frontend: Validate API response shape before using it. Don't trust that `data.startups` exists just because the endpoint returned 200.

For `fill-bots`: uses `Body(default_factory=FillBotsRequest)` — has defaults, but still validate.
For `join`: requires `join_code` in body matching game's join code. Reject mismatches explicitly.

## Skill Runner Sandboxing

`skill_runner.py` executes entrant code. Treat all entrant code as untrusted:
- Timeout enforcement on all entrant execution
- No filesystem access beyond the entrant's directory
- No network access from entrant code
- Capture and sanitize all entrant output before logging

## Secrets and Data

Never log auth tokens, even in error messages. Mask them to last 4 chars if needed for debugging.
API error responses: return error code and safe message. Never expose stack traces or internal paths to clients.

## Frontend Header Handling

The `fetchJSON` pattern in `client.js` MUST destructure headers before merging:
```js
const { headers: customHeaders, ...rest } = options;
// CORRECT: headers merged cleanly
```
Never use `{headers: merged, ...options}` — this overwrites merged headers with the original options.headers.
This bug broke all authenticated POST calls and cost hours to debug.
