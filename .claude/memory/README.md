# Memory System

This directory is Claude's learning infrastructure. It captures observations, corrections, and graduated rules across sessions.

## How It Works

```
Session activity
    |
    v
observations.jsonl   <-- Things discovered during work
corrections.jsonl    <-- Times the user corrected Claude
    |
    v
/project:evolve      <-- Periodic review (run manually)
    |
    v
learned-rules.md     <-- Graduated patterns (loaded every session)
    |
    v
CLAUDE.md / rules/   <-- Promoted to permanent config (rare, high-confidence)
```

## File Purposes

### observations.jsonl
Append-only log. One JSON object per line. Claude writes here when it discovers something non-obvious.

Example entries:
```json
{"timestamp": "2026-03-29T14:30:00Z", "type": "convention", "observation": "All store methods use this.set() for state updates, never direct property mutation", "file_context": "frontend/src/api/store.js", "confidence": "high"}
{"timestamp": "2026-03-29T15:10:00Z", "type": "gotcha", "observation": "StartupPod must dispose CharacterMesh geometry separately from group dispose", "file_context": "frontend/src/scene/StartupPod.js", "confidence": "confirmed"}
```

Types: convention, gotcha, dependency, architecture, performance, pattern, three-js, game-engine
Confidence: low (inferred), medium (observed once), high (observed multiple times), confirmed (user validated)

### corrections.jsonl
Append-only log. Claude writes here when the user corrects its behavior.

Example:
```json
{"timestamp": "2026-03-29T16:00:00Z", "correction": "Always destructure headers before merging in fetchJSON", "context": "Was using {headers: merged, ...options} pattern", "category": "architecture", "times_corrected": 2}
```

Categories: style, architecture, security, testing, naming, process, behavior, three-js, fastapi

The times_corrected field tracks repeat corrections. When this reaches 2 for the same pattern, it auto-promotes to learned-rules.md without waiting for /project:evolve.

### learned-rules.md
Curated rules that graduated from observations and corrections. Claude reads this file at the start of complex tasks. Rules here have been validated by repetition (corrected 2+ times) or explicit approval during /project:evolve.

### evolution-log.md
Audit trail of every /project:evolve run. Records what was proposed, approved, rejected, and why. Prevents the system from re-proposing rejected rules.

## Rules for Writing to Memory

1. Observations are cheap. Log liberally. Low-confidence observations are fine.
2. Corrections are gold. Every correction gets logged. No exceptions.
3. Learned rules are expensive. They load into context every session. Each must be actionable, testable, and non-redundant.
4. Never delete correction logs. They're provenance.
5. Learned rules max at 50 lines. Forces graduation or pruning.

## Promotion Ladder

| Signal | Destination |
|--------|------------|
| Corrected once | corrections.jsonl (logged) |
| Corrected twice, same pattern | learned-rules.md (auto-promoted) |
| Observed 3+ times, same pattern | learned-rules.md (via /project:evolve) |
| In learned-rules 10+ sessions, always followed | Candidate for CLAUDE.md or rules/ |
| Rejected during evolve | evolution-log.md (never re-proposed) |
