# Pass 4.2: Scenario Selection Map

**Delivered:**

- Implemented `app/map/page.tsx` displaying the scenarios list mapped dynamically.
- Integrated `ScoreMeter` using the state from `useGameStore`.
- Implemented UI locking states: only unlocked scenarios can be clicked.
- Mapped scenarios are clickable and route to their respective pages.

**Tasks Completed:**

- [x] Implement `app/map/page.tsx` (Scenario Selection Map) using `ScoreMeter` and `useGameStore`.
- [x] Render available scenarios from `data/scenarios.ts` as clickable cards navigating to `/scenario/[id]`.
- [x] Implement locked/unlocked visual states based on `completedScenarios`.
