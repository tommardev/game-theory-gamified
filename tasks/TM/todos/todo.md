# Everyday Game Theory - Implementation Passes (Todos)

## Setup & Tracking

- [x] Establish `.agents/AGENTS.md` for cross-session context.
- [x] Create this `todo.md` file for task tracking.
- [x] Initialize `docs/decisions/` by creating `ADR-001-Tech-Stack.md`.

## Pass 1: Project Initialization & Foundation

_Goal: Have a running Next.js app with our design system tokens configured._

- [x] Initialize Next.js project (`npx create-next-app`).
- [x] Set up global CSS/CSS Modules with our vibrant color palette and typography ('Inter'/'Outfit').
- [x] Verify the development server runs and the base styles are applied.

## Pass 1.5: Project Polish & Fixes

- [x] Restore original project `README.md`.
- [x] Set up Prettier code formatter.
- [x] Bump project version in `package.json`.

## Pass 2: Data & Core Logic Prototype

_Goal: Define the schema and get the state management working without worrying about final polish._

- [ ] Create `data/scenarios.ts` and mock the JSON for "The Messy Kitchen Standoff".
- [ ] Set up Zustand store (`store/gameStore.ts`) to track score spectrum ("Rational vs Human") and completed scenarios.
- [ ] Verify state updates correctly via basic console logs or raw text output on a test page.

## Pass 3: Core UI Components

_Goal: Build the reusable visual blocks that make the app feel gamified and premium._

- [ ] Build `Button.tsx` (glowing, interactive).
- [ ] Build `ChoiceCard.tsx` (large clickable cards with 3D hover effects).
- [ ] Build `ScoreMeter.tsx` (the "Rational vs. Human" tug-of-war meter).
- [ ] Test components in isolation on a temporary route.

## Pass 4: Page Assembly & Flow

_Goal: Wire everything together into a playable flow._

- [ ] Implement `app/page.tsx` (Landing Page with "Play Now").
- [ ] Implement `app/map/page.tsx` (Scenario Selection Map).
- [ ] Implement `app/scenario/[id]/page.tsx` (The interactive setup, choices, and reveal breakdown).
- [ ] Verify the full user journey from Landing Page -> Scenario -> Reveal -> Score Update -> Map.

## Pass 5: Polish & Animations

_Goal: Add the "WOW" factor._

- [ ] Integrate Framer Motion for smooth page transitions.
- [ ] Animate the Choice Cards on hover.
- [ ] Animate the ScoreMeter tug-of-war effect.
- [ ] Final visual QA for accessibility and contrast.
