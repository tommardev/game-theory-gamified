# Self-Learning Lessons

## How agents should maintain this file

Add generalized lessons here as `symptom → cause → fix`. Do not append to the tail blindly; place lessons in the appropriate section. Keep facts tight.

## Index (jump)

- [Architecture & Next.js Routing](#architecture--nextjs-routing)

## Architecture & Next.js Routing

- **Symptom:** Next.js throws a 404 for the root page and a missing root layout error for a new test page, despite `src/app` existing.
  - **Cause:** Placing new pages in a root `app/` folder (e.g. `app/test/page.tsx`) overrides the existing `src/app/` folder in Next.js, causing all routes in `src/` to be ignored.
  - **Fix:** Always place new pages and layouts inside the existing `src/app/` directory (e.g. `src/app/test/page.tsx`) when the project uses the `src` directory convention.
