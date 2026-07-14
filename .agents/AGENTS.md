# Everyday Game Theory - Agent Instructions

## Cross-Session Context

Whenever you start a new session or are asked to resume work on this project, you MUST read the following files before taking any action:

1. `docs/app_spec.md` - The main specification and requirements.
2. `tasks/TM/todos/todo.md` - The active checklist of implementation passes.
3. `docs/decisions/` - Check this directory for Architecture Decision Records (ADRs) to understand past technical choices.

## Workflow Rules

- **Incremental Implementation:** We build in vertical slices. Do not attempt to build the entire app at once. Complete one slice (e.g., initial setup, then one scenario), test it, and verify it works before moving to the next.
- **Decision Tracking:** Any time a major technical decision is made (e.g., state management library, styling approach), document it as an ADR in `docs/decisions/`.
- **Task Management:** Always update `tasks/TM/todos/todo.md` as work progresses. Use `[/]` for in-progress and `[x]` for completed tasks.
