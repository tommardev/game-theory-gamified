# Spec: Everyday Game Theory - V2 Premium Expansion

## Objective

Elevate the "Everyday Game Theory" MVP into a highly engaging, premium application. We want the user experience to feel polished, dynamic, and entertaining, bridging the gap between an educational web app and an immersive interactive game.
Success looks like a visually stunning interface with micro-interactions, shareable profile mechanics to drive virality, and clear, reusable design patterns.

## Tech Stack

- **Framework:** Next.js (App Router), React
- **State Management:** Zustand
- **Animations:** Framer Motion
- **Styling:** **Tailwind CSS**. We are migrating from CSS Modules to Tailwind CSS. Tailwind will improve code readability (by colocating styles with components) and performance (by purging unused CSS).
- **Database (Global Stats):** A lightweight, local file-based database (e.g., `better-sqlite3` or `lowdb` with local JSON) to ensure zero third-party dependencies while allowing us to persist stats locally.

## Commands

- Build: `npm run build`
- Test: `npm run test` (or `npm run verify` per `AGENTS.md`)
- Lint: `npm run lint`
- Dev: `npm run dev`

## Project Structure

We are introducing a cleaner structure with docs subfolders and logical naming to avoid clutter.

```text
src/
  features/        → Domain-specific logic (e.g., game, scenarios)
  shared/          → Globally reusable UI components and design tokens
docs/
  specs/           → Formal specifications (like this file)
  decisions/       → Architecture Decision Records (ADRs)
  plans/           → Structured implementation phase plans
```

## Code Style

- **Token-Driven Layout:** Derive visual design from the Tailwind configuration (`tailwind.config.ts`).
- **Smart/Dumb Components:** Keep presentation logic separate from orchestration logic.
- **Next.js Conventions:** Unwrap `params` as a promise using `React.use()` in dynamic routes.
- **Explicit UIs:** Ensure interactive elements have explicit cues (e.g., `MAKE A CHOICE ➔`).

## Testing Strategy

- Manual verification via local dev server for UI micro-interactions.
- Strict adherence to `lessons.md` heuristics to prevent regressions.

## Boundaries

- **Always do:** Rely on established tokens for colors/spacing. Maintain strict purity in Zustand stores. Check `lessons.md` before implementing complex UI state.
- **Ask first:** Before altering the core `Game Theory Breakdown` data schema.
- **Never do:** Use `todo.md` for permanent plans (use dedicated `docs/plans/` subfolders). Never silently fill in ambiguous requirements.

## Success Criteria

1. Global design system is fully implemented in Tailwind CSS and applied across all views.
2. Particle effects, dynamic backgrounds, and tactile animations are integrated.
3. Global Stats feature ("78% of players chose X") is implemented using a local, file-based database.
4. "Final Verdict" Shareable Profile is generated at the end of the 13 scenarios.
5. Codebase reflects cleaner docs structure and logical file naming.
