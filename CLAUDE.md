# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at localhost:4321
npm run build      # Build production site to ./dist/
npm run preview    # Preview build locally (astro build + wrangler dev)
npm run deploy     # Deploy to Cloudflare Workers (wrangler deploy)
npm run cf-typegen # Regenerate Cloudflare types (wrangler types)
npm run check      # Type-check: astro build + tsc + wrangler dry-run
```

## Architecture

**Astro SSR site** (`output: "server"`) deployed on **Cloudflare Workers** via `@astrojs/cloudflare`. Styling via **TailwindCSS v4** (Vite plugin). Interactive components in **React 19** (`@astrojs/react`).

### Key directories

- **`src/pages/`** — File-based routing. Polish URLs: `/oferta/`, `/uslugi/`, `/baza-wiedzy/`, `/kontakt/`, `/o-nas/`.
- **`src/data/`** — Static data files (`products.ts`, `services.ts`, `navigation.ts`, `company.ts`). Single source of truth for site content.
- **`src/content/baza-wiedzy/`** — Markdown articles for the knowledge base. Schema defined in `src/content.config.ts`.
- **`src/components/layout/`** — `Header.astro`, `Footer.astro`, `DesktopDropdown.tsx` (React), `MobileMenu.tsx` (React).
- **`src/components/sections/`** — Page-level section templates (`GraphiteProductPage.astro`, `ServicePage.astro`, `ConsumablePage.astro`).
- **`src/components/ui/`** — Reusable UI components (`Card`, `Button`, `Breadcrumbs`, `FeatureGrid`, etc.).
- **`src/components/seo/`** — SEO/meta components (uses `astro-seo`).
- **`src/layouts/`** — `BaseLayout.astro` (shell), `PageLayout.astro` (standard pages), `ArticleLayout.astro` (knowledge base articles).
- **`src/utils/`** — `jsonLd.ts` (structured data helpers), `categories.ts` (knowledge base taxonomy).
- **`public/images/`** — Static image assets.

### TypeScript path aliases

`@components/*`, `@layouts/*`, `@data/*`, `@utils/*`, `@styles/*` all map to `src/<dir>/*`.

### Cloudflare config

`wrangler.json` — Worker name `ak-technic`, compatibility date `2025-10-08`, nodejs_compat, observability + source map uploads enabled. Build output: `./dist/_worker.js/index.js`.
