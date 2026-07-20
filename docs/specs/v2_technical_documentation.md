# Everyday Game Theory: Technical Documentation (V2 Premium Expansion)

## Project Overview

The Everyday Game Theory V2 Premium Expansion elevates the educational MVP into a highly polished, interactive web experience. The goal is to teach game theory concepts through relatable scenarios using a premium aesthetic characterized by fluid animations, a unified token-driven design system, and scroll-driven storytelling. The architecture is built on a modern React stack leveraging Next.js Server Components, pure client-side state orchestration, and a zero-dependency local database for global statistics.

## Tech Stack & Project Setup

The project utilizes the following core dependencies:

- **Core Framework:** Next.js 15+ (App Router), React
- **Design System & Styling:** Tailwind CSS (replacing CSS Modules for improved performance, readability, and colocated utility classes)
- **Animations & Micro-interactions:** Framer Motion (for layout transitions, choice feedback, and dynamic backgrounds)
- **State Management:** Zustand (for pure, scalable client-side state)
- **Data Layer:** `better-sqlite3` or `lowdb` (for lightweight, local file-based database operations without third-party services)

## Component Breakdown

The UI architecture is divided into "Smart" orchestrators and "Dumb" presentational components, emphasizing a scroll-driven narrative.

### 1. `ScrollerLayout`

- **Purpose:** The foundational wrapper for the main interactive flow. Manages the scroll-spy logic and contextual background shifts.
- **Props:** `children: React.ReactNode`
- **Behavior:** Listens to scroll position to trigger dynamic mesh background color transitions based on the user's progress and current "Rational vs Human" score.

### 2. `HeroSection`

- **Purpose:** The entry point/landing view that establishes the premium aesthetic.
- **Props:** `onStart: () => void`
- **Behavior:** Contains the primary call-to-action. Implements Framer Motion entrance animations and introduces the core value proposition before the user scrolls down to the first dilemma.

### 3. `GameScroller`

- **Purpose:** The "Smart" container that orchestrates the sequential flow of scenarios.
- **Props:** `scenarios: Scenario[]`
- **Behavior:** Connects to the `useGameStore`. Maps over the scenario data and renders `InteractiveSection` components, ensuring only unlocked scenarios are fully visible or interactive.

### 4. `InteractiveSection`

- **Purpose:** Represents a single dilemma (e.g., "The Messy Kitchen").
- **Props:** `scenario: Scenario`, `onChoiceSelect: (choiceId: string) => void`
- **Behavior:** A "Dumb" component that receives data and emits actions. Renders the setup text and the `ChoiceCard`s. Triggers tactile feedback (particle bursts/sound) upon selection.

### 5. `StatsModal`

- **Purpose:** The reveal overlay that appears after a choice is made.
- **Props:** `isOpen: boolean`, `scenario: Scenario`, `userChoiceId: string`, `globalStats: StatsData`
- **Behavior:** Uses a Framer Motion `AnimatePresence` for a smooth entry. Displays the Game Theory breakdown ("The Curtain Pull") and the global "You vs The World" percentage stats fetched from the Data Layer.

## State Management

The application relies on a strictly pure Zustand store to manage the game session state.

### Architecture for `useGameStore`

```typescript
interface GameState {
  // State
  scoreSpectrum: number; // e.g., 0 (Pure Human) to 100 (Pure Rational)
  completedScenarios: string[];
  currentScenarioId: string | null;

  // Actions (Pure mutations, no side-effects/API calls inside)
  recordChoice: (scenarioId: string, shiftValue: number) => void;
  unlockNextScenario: (nextId: string) => void;
  resetGame: () => void;
}
```

_Note: Side-effects such as submitting choices to the global stats DB are handled at the component or Server Action level, not inside the Zustand store._

## Data Layer

To satisfy the requirement for a lightweight, zero-third-party architecture, the global stats ("78% of players chose X") are managed via a local file-based database.

### Implementation Details

- **Engine:** `better-sqlite3` (or `lowdb` for a purely JSON-based approach).
- **Schema:** A simple table/collection storing `scenario_id` (string), `choice_id` (string), and `count` (integer).
- **Integration:** Accessed securely via **Next.js Server Actions**. When a user selects a choice, a Server Action is invoked to increment the `count` for that specific choice and return the aggregated percentages for all choices in that scenario to power the `StatsModal`.

## Commands

_Note: Do not run these until implementation begins._

- **Install Dependencies:** `npm install` (Will be required after adding Tailwind, Framer Motion, etc.)
- **Run Development Server:** `npm run dev`
- **Build for Production:** `npm run build`
- **Verify Codebase (Lint/Format):** `npm run verify` (or `npm run lint` & `npm run format`)
