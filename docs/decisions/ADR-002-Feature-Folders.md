# ADR 002: Feature-Based Architecture (Simplified Feature Folders)

## Date

2026-07-17

## Status

Accepted

## Context

As the project grew beyond a single prototype scenario, the flat directory structure (`src/components/`, `src/types/`, `src/data/`) started to become cluttered. All components—whether they were domain-specific (like `ChoiceCard` or `ScenarioIcons`) or domain-agnostic (like `Button`)—were mixed together.

To maintain maintainability and scalability, we needed to adopt a globally accepted Clean Architecture convention, without introducing the heavy boilerplate of a strict 7-layer Feature-Sliced Design (FSD).

## Decision

We adopted a **Simplified Feature Folders** architecture.

- **`src/features/<domain>/`**: Contains its own `components/`, `data/`, `store/`, and `types/` specific to that domain (e.g., `src/features/game/`).
- **`src/shared/`**: Contains globally reusable, domain-agnostic code (`shared/ui/`, `shared/types/`).
- **`src/app/`**: Next.js App Router specific files (routing, layouts, global styles).

## Consequences

- **Positive:** Clear separation of concerns. Developers and agents know exactly where to put domain-specific logic versus global UI components. Scalable for adding future features (e.g., `features/user/`, `features/multiplayer/`).
- **Negative:** Slightly deeper import paths (e.g., `../../features/game/components/ChoiceCard`). Requires discipline to not mix domain logic into the `shared` folder.
