# BONDZ EVENTS - DESIGN SYSTEM — Guidelines

## Components

The design system exports these components — import them from `@ws-07ab635e13917e4edcc8/23ab21ef-81e4-4a7b-8a9d-23d038e76967` and compose them before building anything from scratch:

`AppShell`, `Badge`, `BrandLockup`, `Button`, `Card`, `SiteFooter`, `SiteNav`, `ThemeSoundToggle`

Per-component details (import stanzas, props, variants, examples) live in `.lovable/rules/libraries/{slug}/components.md` — on disk, not auto-loaded. Read that file or the component source when the name alone isn't enough.

## Theme Files

The design system's theme is delivered through the following files. The author's original source files carry the full wiring the design system needs — variable declarations, framework-specific directives, provider objects, etc. — and are the canonical import target.

- `@ws-07ab635e13917e4edcc8/23ab21ef-81e4-4a7b-8a9d-23d038e76967/design-system/styles/theme.css` (source — preferred import)
- `@ws-07ab635e13917e4edcc8/23ab21ef-81e4-4a7b-8a9d-23d038e76967/dist/tokens.css` (auto-generated flat list of CSS custom properties — a raw-values fallback only; does NOT carry framework-specific wiring that the source files above provide)

