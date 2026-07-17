# Self-Learning Lessons

## How agents should maintain this file

Add generalized lessons here as `symptom → cause → fix`. Do not append to the tail blindly; place lessons in the appropriate section. Keep facts tight.

## Index (jump)

- [Architecture & Next.js Routing](#architecture--nextjs-routing)
- [Workflow & Verification](#workflow--verification)
- [UX & Visual Design System](#ux--visual-design-system)

## Architecture & Next.js Routing

- **Symptom:** Next.js throws a 404 for the root page and a missing root layout error for a new test page, despite `src/app` existing.
  - **Cause:** Placing new pages in a root `app/` folder (e.g. `app/test/page.tsx`) overrides the existing `src/app/` folder in Next.js, causing all routes in `src/` to be ignored.
  - **Fix:** Always place new pages and layouts inside the existing `src/app/` directory (e.g. `src/app/test/page.tsx`) when the project uses the `src` directory convention.

- **Symptom:** Dynamic routes throw a runtime error in the browser: `A param property was accessed directly with params.id. params is a Promise and must be unwrapped`.
  - **Cause:** In Next.js 15+ (and Next.js 14 canary/15 beta), `params` and `searchParams` passed to pages/layouts are now Promises. Destructuring them directly (e.g. `const { id } = params`) is a synchronous violation.
  - **Fix:** Unwrap the `params` promise using `React.use()` before accessing its properties (e.g., `const { id } = use(params)`).

## Workflow & Verification

- **Symptom:** An implementation pass is marked as completed in the roadmap, but the feature actually crashes in the browser (e.g., "Scenario not found" due to a runtime error).
  - **Cause:** Assuming a successful build or linter pass implies functional correctness. `npm run verify` catches build/type errors, but not all runtime errors.
  - **Fix:** Always verify the actual functional behavior by reading the terminal output of the running development server (`npm run dev`), checking browser console logs, or using DevTools testing before checking off a pass.

## UX & Visual Design System

- **Symptom:** Proposing typical AI-style generic styling (like cyberpunk neon electric cyan/coral) clashes with the project's friendly brand identity.
  - **Cause:** Rushing to build new aesthetic variants instead of analyzing and extending the pre-established global tokens in `globals.css`.
  - **Fix:** Always audit existing styling tokens first. Extend the current design system variables (e.g., expanding the Pale/Crayon theme) to preserve consistent brand identity.

- **Symptom:** A tug-of-war style meter jumps violently (e.g., from 50/50 straight to 100/0 on the first choice).
  - **Cause:** Relying on simple ratios (`A / (A + B)`) when scores are low, leading to immediate extreme layouts.
  - **Fix:** Calculate the meter percentage based on the score difference scaled against the maximum total possible points (e.g., `50 + (Difference / MaxPossible) * 50`) for a smooth, progressive tug-of-war lean.

- **Symptom:** Interactive choice elements are confusing to users, and their heights look unbalanced.
  - **Cause:** Using standard flex wrap without explicit heights makes cards with long descriptions look uneven. Lack of text prompts leaves selectability ambiguous.
  - **Fix:** Enforce equal-height grids (`display: grid; grid-template-columns: 1fr 1fr; align-items: stretch`) and add explicit interactive cues (`MAKE A CHOICE ➔` which changes to `✓ SELECTED`).
