# ADR-001: Tech Stack Selection

## Status

Accepted

## Date

2026-07-15

## Context

We are building "Everyday Game Theory", a highly interactive, gamified educational web app.
The requirements are:

- Fast, component-based UI
- Rich, dynamic styling with vibrant colors and glassmorphism
- Modern typography
- Micro-animations and smooth transitions
- State management for tracking scenarios and a "Rational vs. Human" score.

## Decision

- **Framework**: Next.js (App Router) / React
- **Styling**: CSS Modules / Vanilla CSS (with CSS variables for design tokens)
- **State Management**: Zustand
- **Animations**: Framer Motion

## Alternatives Considered

- **Tailwind CSS**: Rejected. The specification explicitly prefers Vanilla CSS / CSS Modules for maximum control over the rich aesthetics unless specified otherwise. We will use CSS variables for our design system tokens.
- **React Context**: Rejected for complex state. Zustand provides a simpler API for the global game state (scores, unlocked scenarios) without unnecessary re-renders.

## Consequences

- We must establish a strong foundation of CSS variables (design tokens) early to ensure consistency.
- Team must be familiar with App Router patterns in Next.js.
