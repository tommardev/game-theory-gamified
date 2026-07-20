# Software Engineering & UI/UX Self-Learning Lessons

This file contains generalized, language-agnostic software engineering heuristics to prevent recurring architectural, visual, and workflow mistakes. These rules are structured as `Symptom → Cause → Fix`.

## How agents should maintain this file

- **One lesson** ≈ one recurring mistake: **Symptom → Cause → Fix** (optional: "Verify: ...").
- **Generalize** specific details into a rule. Keep a domain capsule only if project-specific names must stay.
- **Prefer short, reusable rules.** Merge, rewrite, or delete when something better supersedes an entry. Deduplicate across sections.
- **Stable links only** (concepts/docs). Avoid transient context like tickets. In "Verify:" lines, refer to static config/guide files rather than dynamic task files that get archived.
- **Maintain Index:** Keep the Index anchors aligned with all `##` topic sections.

## Index (jump)

- [State Management & Reactive Flows](#state-management--reactive-flows)
- [Forms & User Input](#forms--user-input)
- [Component Composition & Orchestration](#component-composition--orchestration)
- [API Design & Backend Edge](#api-design--backend-edge)
- [Testing & Verification](#testing--verification)
- [Workflow & Code Conventions](#workflow--code-conventions)
- [React & Next.js (Project Specific)](#react--nextjs-project-specific)

---

## State Management & Reactive Flows

- **Symptom:** UI state updates trigger infinite loops or race conditions where data gets out of sync.
  - **Cause:** Triggering side effects (like updating another piece of state or firing an API request) synchronously inside a derived-state listener or selector.
  - **Fix:** Keep derived-state selectors (e.g., computed properties) strictly pure and free of side effects. Handle downstream updates via one-way command dispatching or asynchronous hooks.

- **Symptom:** State logic is scattered across multiple components, causing rendering inconsistency.
  - **Cause:** Duplicating local state for data that has a single source of truth.
  - **Fix:** Consolidate shared state into a unified store (e.g., global state or context) and subscribe components to read-only views of this single source of truth.

- **Symptom:** A status bar or progress meter jumps violently (e.g., from 50/50 straight to 100/0 on the first choice).
  - **Cause:** Relying on simple ratios (`A / (A + B)`) when scores are low, leading to immediate extreme layouts.
  - **Fix:** Calculate the meter percentage based on the score difference scaled against the maximum total possible points (e.g., `50 + (Difference / MaxPossible) * 50`) for a smooth, progressive tug-of-war lean.

- **Symptom:** Empty search or filter inputs trigger duplicate API requests or cause the page state to clear unexpectedly.
  - **Cause:** Treating empty filter objects (e.g., `{}`) as active filter overrides, which triggers re-fetch listeners.
  - **Fix:** Explicitly guard search operations by checking key counts (e.g. `Object.keys(filters).length === 0`) to preserve initial or default form values.

---

## Forms & User Input

- **Symptom:** Form submission sends incomplete payloads or causes validation errors on the backend.
  - **Cause:** Pulling form values via standard serializers that omit disabled inputs, causing key fields to be dropped.
  - **Fix:** Use serialization APIs that retrieve raw values (including disabled fields) when mapping form state to DTO payloads, and manage disabled states programmatically from the controller rather than via direct template logic.

- **Symptom:** Form validations are fragile, difficult to read, or conflict with each other.
  - **Cause:** Orchestrating complex conditional validations inside templates or spread across isolated file blocks.
  - **Fix:** Declare form schemas, validation rules, and initial state in unified builders/schemas. Handle runtime conditional validation overrides in the parent controller/presenter where value changes are explicitly tracked.

- **Symptom:** Adding, removing, or re-ordering dynamic list or form items causes the UI elements to render values or validation states belonging to other items.
  - **Cause:** Relying on the array index (`$index`) as the tracking key in template loops, causing the UI framework to reuse incorrect DOM element instances when the array shifts.
  - **Fix:** Assign a stable, unique client-side identifier (e.g. UUID) to each list item upon creation or retrieval, and use it as the tracking key in template loops instead of the index.

---

## Component Composition & Orchestration

- **Symptom:** A single component is massive, containing API queries, modal lifecycles, and layout markup ("God Component").
  - **Cause:** Merging presentation logic with workflow and orchestration logic.
  - **Fix:** Separate components into Smart (Containers) and Dumb (Presentational) layers. Dumb components only receive parameters/props and emit events. Smart components (or parent presenters) handle HTTP requests, routing, and dialog states.

- **Symptom:** UI markup contains long conditional logic branches, ternary statements, or complex calculations.
  - **Cause:** Business logic and layout configuration are embedded directly in templates.
  - **Fix:** Move business calculations and copy presets into pure helper functions or strategy factories. Pass pre-resolved strings or clean configurations to the template.

- **Symptom:** Creating generic components leads to massive code files filled with toggle switches (`mode = 'edit' | 'create' | 'dialog'`).
  - **Cause:** Prematurely unifying different UI structures into a single component (over-DRYing).
  - **Fix:** Use shared frame elements (e.g. layout shells) to reuse visual container elements, and build separate, thin components for the distinct workflows.

- **Symptom:** UI models contain API-specific variables, or API contracts (DTOs) contain UX-only flags or state.
  - **Cause:** Confusing data transport contracts (DTOs) with screen state models.
  - **Fix:** Maintain strict separation between DTO structures and UI models. Mirror the API wire formats exactly in the DTO layer, and use dedicated mapper classes/utilities at the edge to convert to and from UI state models.

- **Symptom:** Sibling components trigger duplicate API requests for the same lookup lists/catalogs.
  - **Cause:** Failing to define a single orchestrator or owner for data fetching in a screen region.
  - **Fix:** Designate one parent page or shared service as the owner of the data lifecycle. Pass retrieved data downward via read-only props/signals, and communicate actions back up using callbacks/outputs.

- **Symptom:** Modal overlays collapse, flicker, or render double backdrops.
  - **Cause:** Nesting dynamic modal hosts inside other modal containers.
  - **Fix:** Keep modal/dialog markup clean by using dynamic portals or standard slots, ensuring dialog content does not declare secondary host wrappers.

---

## API Design & Backend Edge

- **Symptom:** Partial update requests (PUT/PATCH) inadvertently overwrite database records with default values or nulls.
  - **Cause:** De-serializing a partial payload into a DTO where omitted keys default to `null` or `0`, and saving it directly to the model.
  - **Fix:** Validate the existence of keys in the incoming payload and perform partial field mapping (or use nullable wrapper types) instead of bulk-updating the model.

- **Symptom:** Date and time queries fail, or dates drift by hours when loaded on different clients.
  - **Cause:** Mixing timezone-aware columns with unspecified local date-times during DTO mapping.
  - **Fix:** Enforce UTC (Universal Time Coordinated) as the standard timezone at the API edge, or serialize dates using pure date-only formats (`YYYY-MM-DD`) for business logic that does not depend on hours.

- **Symptom:** Unbounded API queries degrade database performance or crash in production.
  - **Cause:** Fetching lists without paging parameters and including deep relational graphs on search requests.
  - **Fix:** Enforce pagination on list endpoints. Use lightweight list-specific DTOs with minimal inclusions, reserving complete relational graphs for single-entity fetch endpoints.

---

## Testing & Verification

- **Symptom:** Tests fail intermittently or flake during specific times of day.
  - **Cause:** Asserting against dynamic, non-deterministic system values (like the current system time or real timeouts).
  - **Fix:** Use fake timers and mock clock systems to freeze the time during tests, and restore real-system time in spec teardown blocks.

- **Symptom:** Tests are difficult to compile or throw errors because of missing mock properties.
  - **Cause:** Hand-crafting mock structures inline instead of maintaining centralized mock utilities.
  - **Fix:** Place mock files alongside the interfaces they represent, and keep mocks updated with the production contracts.

- **Symptom:** Features pass build checks and tests but crash when run in the browser.
  - **Cause:** Relying solely on compile-time static analysis and unit tests to verify dynamic runtime operations.
  - **Fix:** Always verify functional behavior by running the application locally (`npm run dev`), checking runtime console outputs, and testing interactive UI paths before completing a task.

---

## Workflow & Code Conventions

- **Symptom:** Newly created directories, files, or types clash with the existing codebase structure.
  - **Cause:** Designing code structures based entirely on specs or planning documents without reviewing the codebase's existing layers first.
  - **Fix:** Always search the codebase first to identify dominant structural patterns (e.g. folder layout, file names, casing). Follow codebase house style over planning document vocabulary.

---

## React & Next.js (Project Specific)

- **Symptom:** Next.js throws a 404 for the root page and a missing root layout error for a new test page, despite `src/app` existing.
  - **Cause:** Placing new pages in a root `app/` folder (e.g. `app/test/page.tsx`) overrides the existing `src/app/` folder in Next.js, causing all routes in `src/` to be ignored.
  - **Fix:** Always place new pages and layouts inside the existing `src/app/` directory (e.g. `src/app/test/page.tsx`) when the project uses the `src` directory convention.

- **Symptom:** Dynamic routes throw a runtime error in the browser: `A param property was accessed directly with params.id. params is a Promise and must be unwrapped`.
  - **Cause:** In Next.js 15+ (and Next.js 14 canary/15 beta), `params` and `searchParams` passed to pages/layouts are now Promises. Destructuring them directly (e.g. `const { id } = params`) is a synchronous violation.
  - **Fix:** Unwrap the `params` promise using `React.use()` before accessing its properties (e.g., `const { id } = use(params)`).

- **Symptom:** Interactive choice elements are confusing to users, and their heights look unbalanced.
  - **Cause:** Using standard flex wrap without explicit heights makes cards with long descriptions look uneven. Lack of text prompts leaves selectability ambiguous.
  - **Fix:** Enforce equal-height grids (`display: grid; grid-template-columns: 1fr 1fr; align-items: stretch`) and add explicit interactive cues (`MAKE A CHOICE ➔` which changes to `✓ SELECTED`).
