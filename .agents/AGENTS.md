# Everyday Game Theory - Agent Instructions

## Cross-Session Context

Whenever you start a new session or are asked to resume work on this project, you MUST read the following files before taking any action:

1. `docs/app_spec.md` - The main specification and requirements.
2. `docs/implementation_passes.md` - The long-term project roadmap and passes specification.
3. `tasks/TM/todos/todo.md` - The short-term active checklist managed by the workflow skill.
4. `docs/decisions/` - Check this directory for Architecture Decision Records (ADRs) to understand past technical choices.

## Workflow Rules

- **Incremental Implementation:** We build in vertical slices. Do not attempt to build the entire app at once. Complete one slice (e.g., initial setup, then one scenario), test it, and verify it works before moving to the next.
- **Decision Tracking:** Any time a major technical decision is made (e.g., state management library, styling approach), document it as an ADR in `docs/decisions/`.
- **Task Management:** The workflow skill will manage short-term tasks in `tasks/TM/todos/todo.md`. When a pass is completed, check it off in the long-term `docs/implementation_passes.md` file.
- **Quality Assurance:** After completing any implementation pass or making significant code changes, run `npm run verify` (which runs formatting, linting, and build checks) to ensure the codebase remains clean and error-free.
- **Clean Architecture Enforcement:** You MUST adhere to the **Simplified Feature Folders** structure defined in `ADR-002`. Domain-specific logic belongs in `src/features/<feature-name>/`, and only globally reusable, domain-agnostic code belongs in `src/shared/`. Never dump files into a flat root directory (e.g. avoid creating a root `src/components` or `src/types` folder).
