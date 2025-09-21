# Repository Guidelines

## Project Structure & Module Organization
- App: `src/app/*` (Next.js App Router pages, layout, styles).
- UI: `src/components/*` (PascalCase React components, `.tsx`).
- State & Hooks: `src/hooks/*`, contexts in `src/contexts/*`.
- Domain: `src/data/gameData.ts`, types in `src/types/*`.
- Utils: `src/lib/utils.ts` (use `cn(...)` for Tailwind classes).
- i18n: `src/i18n/config.ts`, `src/i18n/locales/*.ts`.
- Public assets: `public/*` (robots, sitemap, images). Path aliases: `@/*` per `tsconfig.json`.

## Build, Test, and Development Commands
- `npm run dev` — start local dev server.
- `npm run build` — production build (type-checks, ESLint run in CI builds).
- `npm start` — run built app.
- `npm run lint` — ESLint with `eslint-config-next`.
- `npm run type-check` — strict TypeScript check.

## Coding Style & Naming Conventions
- TypeScript + React. Components in `PascalCase` (e.g., `src/components/GameHero.tsx`). Hooks start with `use` (e.g., `src/hooks/useGameState.ts`).
- Imports use aliases: `import { GameHero } from '@/components/GameHero'` (avoid `../../`).
- Formatting: Prettier + `prettier-plugin-tailwindcss` (class order). Run `npm run lint` before committing.
- Strings: don’t hardcode user-facing text. Use `useLanguage().t('home.hero.title')` and add keys to all locale files.

## Testing Guidelines
- No formal test runner yet. Required: pass `npm run lint` and `npm run type-check`.
- For UI changes, include reproduction steps and screenshots in PRs.
- If adding tests, prefer Vitest + React Testing Library; place in `src/__tests__` with `*.test.ts(x)` names.

## Commit & Pull Request Guidelines
- Use Conventional Commits: `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`, `test:`. Example: `feat(i18n): add fr-FR locale`.
- PRs: clear description, linked issues, screenshots for UI, and steps to verify. Ensure lint and type-check pass.

## i18n & Content
- Add a locale: create `src/i18n/locales/xx-YY.ts` exporting `xxYY`, register in `src/i18n/config.ts` `locales`, `localeNames`, and `localeFlags`.
- Keep key structure consistent (e.g., `home.features.title`).

## Security & Configuration Tips
- Secrets in `.env.local` (e.g., `CUSTOM_KEY`), never commit `.env*`.
- Adding external images? Update `images.domains` in `next.config.js`.
- Deployment uses Next.js `output: 'standalone'`.
