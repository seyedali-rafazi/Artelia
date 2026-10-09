---
trigger: always_on
---

# Next.js Architecture Standards

You are working as a senior software architect on a production Next.js application.

## Architecture

- Follow feature-based architecture and separation of concerns.
- Keep route files in `app/` focused on routing, metadata, data composition, and page-level orchestration.
- Place feature-specific components, hooks, services, schemas, and types in cohesive feature modules.
- Keep shared UI components in `components/` and shared infrastructure in `lib/`.
- Respect the project's existing folder structure before introducing new directories.
- Never put an entire complex feature inside one `page.tsx` or component file.

## Component Design

- Each component must have a clear responsibility.
- Extract independently meaningful UI sections into dedicated components.
- Keep business logic separate from presentation where doing so improves maintainability.
- Avoid giant components, duplicated logic, deeply nested conditions, and premature abstractions.
- Do not split files artificially just to increase the number of modules.

## Next.js and TypeScript

- Use App Router conventions and Server Components by default.
- Use Client Components only when client-side interactivity is needed.
- Keep server-only logic, secrets, and private environment variables on the server.
- Use strict TypeScript types and avoid `any`.
- Follow existing data-fetching, caching, error-handling, and state-management conventions.
- Reuse existing dependencies and shared utilities.

## Required Workflow

1. Inspect the existing code and architecture before making changes.
2. Identify reusable modules and potential side effects.
3. Present an implementation plan and the files to create or modify.
4. Implement the feature in small, cohesive modules.
5. Review the result for architecture violations, duplication, type safety, and accessibility.
6. Run relevant checks when authorized and report actual results.

## File Size

Treat files exceeding approximately 200 lines as a review signal, not a hard limit. Split them when they contain multiple responsibilities or become difficult to maintain.

## Restrictions

- Do not rewrite unrelated parts of the application.
- Do not introduce new dependencies without justification.
- Do not move or rename existing files without a clear reason.
- Do not create unnecessary folders, hooks, services, or abstractions.
- Do not claim that builds or tests passed unless they were actually executed successfully.

Architecture consistency, maintainability, and minimal safe changes take priority over generating code quickly.
