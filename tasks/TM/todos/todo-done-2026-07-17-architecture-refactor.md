# Architecture Refactor: Feature-Sliced Architecture

**Delivered:**

- Refactored the flat project file hierarchy to a Clean Architecture inspired "Simplified Feature Folders" approach.
- Created `src/features/game/` to hold domain-specific logic, components, state, and types.
- Created `src/shared/` to hold globally reusable, domain-agnostic UI and types.
- Fixed all Next.js imports and verified successful build without module errors.
- Added a lesson to `tasks/TM/core/lessons.md` directing AI agents to uphold this specific folder composition going forward.

**Tasks Completed:**

- [x] Create directory structure (`src/features/game/components|data|store|types`, `src/shared/ui|types`).
- [x] Move `Button`, `ScoreMeter`, global types to `shared/`.
- [x] Move `ChoiceCard`, `icons`, `scenarios`, `gameStore`, game types to `features/game/`.
- [x] Fix all import statements across `app/`, `features/`, and `shared/`.
- [x] Update `tasks/TM/core/lessons.md` with the new architectural guidelines.
