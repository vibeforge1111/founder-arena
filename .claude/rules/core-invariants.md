---
description: Critical invariants that must survive context compression. These are the rules that caused production bugs when violated.
paths:
  - "**/*"
---

# Core Invariants (Never Forget)

These rules exist because violating them caused real bugs. They apply everywhere.

1. **fetchJSON header destructure.** `const { headers: customHeaders, ...rest } = options;` then merge. The `{headers: merged, ...options}` pattern silently drops auth headers. This broke all POST calls for hours.

2. **Re-throw after catch.** Any store method that catches an error and sets error state MUST also `throw e`. Silent swallowing means the UI thinks the operation succeeded.

3. **Auth in headers only.** `X-Admin-Token`, `X-Agent-Token`, `X-Spectator-Token` — never in URLs, never in query params. The spectate endpoint explicitly rejects query params.

4. **Dispose Three.js objects.** Every geometry, material, and texture removed from the scene must be `.dispose()`d. GPU memory leaks crash the tab.

5. **Check game phase.** lobby → playing → finished. Never allow actions outside their valid phase.
