# Learned Rules

Rules that graduated from observations and corrections. Loaded at session start.
Max 50 lines. Rules beyond that should be promoted to CLAUDE.md or rules/ files.
Each rule includes a source annotation AND a machine-checkable verify line.

---

- Always destructure `{ headers: customHeaders, ...rest }` from options before merging in fetchJSON. Never `{headers: merged, ...options}`.
  verify: Grep("\.\.\.options", path="frontend/src/api/client.js") → 0 matches
  [source: corrected 2x, 2026-03-28]

- Store methods called from UI flows must re-throw errors after catch, so callers can show feedback.
  verify: Grep("catch.*\{[^}]*set\(.*error[^}]*\}", path="frontend/src/api/store.js", multiline=true) → every match also contains "throw"
  [source: corrected 2x, 2026-03-28]

- Spectate endpoint uses X-Spectator-Token header only. Never query param.
  verify: Grep("spectator_token", path="frontend/src/api/client.js") → 0 matches
  [source: confirmed in server.py:3472, 2026-03-28]
