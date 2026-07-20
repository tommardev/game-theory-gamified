# V2 Premium Expansion Implementation Plan

This document outlines the technical implementation plan and task breakdown for the V2 Premium Expansion, based on the [v2_premium_expansion.md](../specs/v2_premium_expansion.md) spec.

## 1. Migration to Tailwind CSS & Global Design System

**Goal:** Replace CSS Modules with Tailwind CSS to improve code readability and performance. Establish tokens for colors, typography, and spacing.

- `[ ]` Task: Install and configure Tailwind CSS in Next.js.
  - Acceptance: `tailwind.config.ts` and `postcss.config.js` exist. `globals.css` imports Tailwind directives.
  - Verify: Next.js dev server runs without errors.
  - Files: `package.json`, `tailwind.config.ts`, `src/app/globals.css`
- `[ ]` Task: Define design system tokens in `tailwind.config.ts`.
  - Acceptance: Custom colors (coral red, teal blue), typography ('Inter', 'Outfit'), and animations are configured.
  - Verify: Build succeeds.
  - Files: `tailwind.config.ts`
- `[ ]` Task: Migrate `Button.tsx`, `ChoiceCard.tsx`, and `ScoreMeter.tsx` to Tailwind classes.
  - Acceptance: CSS Modules files are deleted. Components use `className` strings with Tailwind utility classes.
  - Verify: Components render identically to the V1 MVP.
  - Files: `src/features/game/components/*`, `.module.css` (deleted)

## 2. Local Stats Database (File-based)

**Goal:** Track "You vs The World" global stats using a lightweight, zero-third-party local database (`lowdb` or `better-sqlite3`).

- `[ ]` Task: Setup local file-based database for Next.js API Routes/Server Actions.
  - Acceptance: DB adapter is configured (e.g. `src/shared/lib/db.ts`). A local JSON or SQLite file is created in the repo (and added to `.gitignore` if dynamic).
  - Verify: Database connects and can read/write data locally.
  - Files: `package.json`, `src/shared/lib/db.ts`
- `[ ]` Task: Implement Server Action to submit and fetch scenario stats.
  - Acceptance: A server action takes a scenario ID and choice ID, increments the count in the local DB, and returns the percentage breakdown.
  - Verify: Calling the action from a test component returns correct percentages.
  - Files: `src/features/game/actions/stats.ts`

## 3. Premium Animations & Interactions

**Goal:** Make the app feel alive with particle effects and dynamic backgrounds.

- `[ ]` Task: Add dynamic mesh background to the application layout.
  - Acceptance: A subtle, animated background (CSS or WebGL) renders behind the main content container and shifts color based on the current score.
  - Verify: Visual inspection on local dev server.
  - Files: `src/app/layout.tsx`, `src/features/game/store/gameStore.ts`
- `[ ]` Task: Implement choice tactile feedback (Particle Effects & Sound).
  - Acceptance: Selecting a choice triggers a particle burst (`canvas-confetti`) and a subtle UI sound.
  - Verify: Clicking a choice produces visual and auditory feedback.
  - Files: `src/features/game/components/ChoiceCard.tsx`

## 4. The "Final Verdict" Shareable Profile

**Goal:** Generate a highly shareable profile after all 13 scenarios are completed.

- `[ ]` Task: Implement the Profile Generation screen.
  - Acceptance: A new view displays when all scenarios are completed, showing a "Gamer Profile" title (e.g., "The Cold Calculator") and a dynamic spider chart.
  - Verify: Navigating to the end state displays the profile accurately based on the Zustand store's spectrum score.
  - Files: `src/app/results/page.tsx`, `src/features/game/components/ProfileCard.tsx`

---

_Execution is deferred to a future session per user request._
