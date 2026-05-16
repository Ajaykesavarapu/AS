# ASKreativ Global Solutions

AI-powered digital marketing and automation agency website for ASKreativ Global Solutions, Hyderabad, India.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm --filter @workspace/askreativ run dev` — run the web frontend (port 18499)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string, `SESSION_SECRET`

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS v4, framer-motion, wouter, react-hook-form
- API: Express 5
- DB: PostgreSQL + Drizzle ORM (contacts table)
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)
- Icons: react-icons/fa (NOT react-icons/si — SiLinkedin was removed in v5)

## Where things live

- `artifacts/askreativ/` — React + Vite frontend, preview path `/`
- `artifacts/api-server/` — Express API server, path prefix `/api`
- `lib/db/` — Drizzle ORM schema and DB connection
- `lib/api-spec/` — OpenAPI spec (`openapi.yaml`)
- `lib/api-client-react/` — Generated React Query hooks
- `lib/api-zod/` — Generated Zod schemas

## Pages

- `/` — Home (hero, storytelling, about, services, clients marquee, stats, process, blog preview, FAQ, WhatsApp float)
- `/about` — About page
- `/services` — Services grid (8 services)
- `/services/:slug` — Service detail pages
- `/portfolio` — Portfolio with category filter
- `/blog` — Blog with search + category filter
- `/blog/:slug` — Individual blog post
- `/contact` — Contact page
- `/faq` — Full FAQ page
- `/careers` — Careers/job listings

## Brand Colors

- `#0A0B1A` — Dark background
- `#0F1035` — Mid background
- `#141630` — Card surface
- `#1A1F6E` — Primary navy
- `#E87722` — Vibrant orange (primary CTA)
- `#F5A623` — Amber gold (accent)
- `#A0A8C0` — Text muted

## Architecture decisions

- All routes use wouter with `BASE_URL` base path for proxy compatibility
- Global `ModalContext` in App.tsx exposes `openModal()` to all pages/components
- Custom cursor disabled on mobile (`max-width: 768px`)
- Contact form has honeypot field for bot protection + IP-based rate limiting (5/hour)
- react-icons/fa used for social icons (react-icons/si dropped LinkedIn in v5)

## Product

ASKreativ Global Solutions marketing website featuring: AI automation, digital marketing, SEO, website development, social media marketing, ERP systems, mobile app development, and branding services. Includes consultation booking modal, cookie banner, exit-intent popup, WhatsApp float button.

## User preferences

- Dark premium aesthetic with glassmorphic cards
- Brand colors: navy, orange, gold on very dark background
- Syne font for display/headings, DM Sans for body, Space Mono for labels
- Always use react-icons/fa for social icons, not react-icons/si

## Gotchas

- Never import from `react-icons/si` — SiLinkedin and other brand icons were removed in v5. Use `react-icons/fa` instead.
- Always clear Vite cache (`rm -rf artifacts/askreativ/node_modules/.vite`) after fixing icon imports
- API server must be restarted after adding new routes (`restart_workflow`)
- Run `pnpm --filter @workspace/api-spec run codegen` after any changes to `lib/api-spec/openapi.yaml`

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
