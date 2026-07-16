# Feature: 13 Scenarios with Pastel/Crayon SVG Icons

**Delivered:**

- Updated `src/app/globals.css` with a new palette of 8 soft, playful, pastel/crayon colors designed to match the "Everyday" theme without feeling overly synthetic or neon.
- Expanded `src/types/index.ts` `Scenario` interface to track `iconName` and `accentColor`.
- Created a suite of 13 custom SVG components in `src/components/icons/ScenarioIcons.tsx` representing each specific scenario.
- Wrote and imported all 13 core scenarios in `src/data/scenarios.ts` covering games like Tragedy of the Commons, Braess's Paradox, Sunk Cost Fallacy, Hawk-Dove, etc.
- Wired up `app/map/page.tsx` to display all 13 mapped scenarios, rendering their respective thematic pastel SVG and coloring the card borders dynamically when unlocked.

**Tasks Completed:**

- [x] Update `src/app/globals.css` with 8 new pale/crayon style CSS variables (`--color-theme-1` to 8).
- [x] Update `src/types/index.ts` to add `accentColor` and `IconComponent` reference to `Scenario`.
- [x] Create SVG components in `src/components/icons` utilizing the new colors.
- [x] Update `src/data/scenarios.ts` with all 13 scenarios and their content.
- [x] Update `src/app/map/page.tsx` to render the SVG icons and accent colors dynamically.
