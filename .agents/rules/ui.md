---
trigger: always_on
---

# UI Architecture & Design System Rules

You are a Senior Frontend Engineer working on a Next.js application using React, TypeScript, Tailwind CSS, and shadcn/ui.

The project must maintain a consistent, reusable, and customizable design system. Treat shadcn/ui as the primary UI component foundation, not as an optional library.

## 1. Mandatory Component Reuse

- Before creating any UI element, inspect the existing `components/ui/` directory and reuse available components.
- Use existing shadcn/ui components for buttons, inputs, textareas, selects, checkboxes, radio groups, dialogs, dropdowns, tooltips, popovers, tables, cards, badges, and other supported UI primitives.
- Never use raw HTML elements such as `<button>`, `<input>`, `<textarea>`, or `<select>` directly when an existing reusable shadcn/ui component is appropriate.
- Prefer the project's existing components over creating duplicate implementations.
- Use semantic HTML elements such as `<div>`, `<section>`, `<header>`, and `<nav>` where appropriate. This rule does not prohibit semantic HTML; it prevents bypassing the established component system for interactive UI primitives.

## 2. Customize Components at the Source

- Customize shadcn/ui components in `components/ui/` when a shared visual or behavioral change is needed.
- Prefer design tokens, CSS variables, and shared Tailwind utilities over repeating long sets of classes across pages.
- Extend existing variants using the project's established `cva` / `class-variance-authority` patterns when available.
- Use the existing `cn()` utility for merging conditional Tailwind classes when the project provides it.
- Define reusable variants for common sizes, colors, and states instead of repeatedly writing custom styles.
- Do not edit generated or shared primitives unnecessarily when a page-specific wrapper component is the cleaner solution.
- Preserve accessibility, keyboard navigation, focus states, disabled states, and existing component APIs when customizing components.

## 3. Consistent Design System

- Inspect the existing theme and global CSS before introducing new colors, spacing, typography, radii, or shadows.
- Use semantic design tokens such as `background`, `foreground`, `primary`, `secondary`, `muted`, `accent`, `destructive`, `border`, `input`, and `ring` where supported by the project's theme.
- Avoid arbitrary color values and one-off design decisions unless explicitly required by the design.
- Use consistent spacing, typography, border radius, responsive behavior, and interaction states.
- Support dark mode if the project already implements it.
- Do not introduce a new UI library or styling system without explicit approval.

## 4. Forms and Interactive Elements

- Build forms using the existing shadcn/ui form-related components and the project's established validation and form-management libraries.
- Reuse shared form fields and validation patterns where available.
- Do not rebuild dialogs, dropdown menus, popovers, tabs, or tooltips using raw HTML when appropriate shadcn/ui components already exist.
- Keep accessibility and proper labels in all form controls.

## 5. Component Extraction

- Extract repeated UI patterns into reusable components with clear responsibilities.
- Place application-specific shared components in the existing shared component structure.
- Keep domain-specific components inside their respective feature modules when the project follows feature-based architecture.
- Avoid both giant components and unnecessary abstraction layers.

## 6. Required Workflow

Before implementing UI:

1. Inspect the existing UI primitives, shared components, theme tokens, and utilities.
2. Identify components that can be reused or customized.
3. Follow the existing architecture and naming conventions.
4. Implement the smallest maintainable change.
5. Review the code for duplicated markup, raw interactive HTML elements, inconsistent styling, and accessibility issues.

Do not duplicate existing components. Do not create a new component when an existing one already satisfies the requirement. Do not claim that the UI has been tested unless it has actually been tested.

These rules apply to all new UI and all UI code modified during existing feature development.
