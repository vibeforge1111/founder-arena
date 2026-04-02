---
description: Performance patterns for Three.js rendering and game state
paths:
  - "frontend/src/**/*"
  - "server.py"
  - "battle_royale.py"
  - "world_state.py"
---

# Performance Rules

## Three.js Scene (Frontend)

### Memory Management
Every Three.js object that is removed from the scene MUST be disposed:
- `geometry.dispose()`
- `material.dispose()`
- `texture.dispose()` if loaded

StartupPod cleanup must dispose all child geometries and materials. Leaking GPU memory causes browser tab crashes after multiple games.

### Render Loop
- Never create new objects (geometries, materials, vectors) inside the render loop or update functions.
- Pre-allocate reusable Vector3/Quaternion objects at class level.
- Use `object.visible = false` instead of removing/re-adding to scene for toggling.

### DOM Overlays (HUD)
- Minimize DOM mutations per frame. Batch updates.
- Use `textContent` not `innerHTML` when setting text (prevents reflow + XSS).
- Cache DOM element references. Don't query the DOM every frame.

## Backend Game Engine

### Turn Processing
Turn processing in `battle_royale.py` runs synchronously for all players. Keep per-turn computation bounded:
- No unbounded loops over game history
- No external API calls during turn resolution
- Pre-compute expensive values at game start, not per-turn

### State Serialization
`world_state.py` serializes game state for API responses. Only include fields the client actually uses.
Don't serialize the full internal state when the client only needs a summary.

### Polling Load
Frontend polls every 2s. Backend must handle concurrent spectator polls efficiently:
- Game state should be computed once per turn change, not per request
- Spectator endpoint should return cached state, not recompute
