# Everyday Game Theory - Agent Instructions

## Cross-Session Context

Whenever you start a new session or are asked to resume work on this project, you MUST read the following files before taking any action:

1. `docs/app_spec.md` - The main specification and requirements.
2. `docs/implementation_passes.md` - The long-term project roadmap and passes specification.
3. `docs/decisions/` - Check this directory for Architecture Decision Records (ADRs) to understand past technical choices.

## Workflow Rules

- **Workflow & Self-Learning (`/workflow-planing-selflearn`):** Strictly follow the `/workflow-planing-selflearn` skill for task management, verification, and maintaining lessons.
- **Skill Discovery & Execution (`/using-agent-skills`):** Refer to `/using-agent-skills` to discover and execute appropriate domain and engineering skills throughout development.
- **Incremental Implementation:** We build in vertical slices. Complete one slice, test, and verify before moving to the next.
- **Decision Tracking:** Document major technical decisions as ADRs in `docs/decisions/`.
- **Pass Tracking:** When an implementation pass is completed, check it off in `docs/implementation_passes.md`.
- **Quality Assurance:** After completing any pass or major changes, run `npm run verify` to ensure clean formatting, linting, and build validation.
- **Clean Architecture Enforcement:** Adhere to the **Simplified Feature Folders** structure defined in `ADR-002`. Domain-specific logic belongs in `src/features/<feature-name>/`, and globally reusable, domain-agnostic code belongs in `src/shared/`. Never dump files into a flat root directory (e.g. avoid creating a root `src/components` or `src/types` folder).
