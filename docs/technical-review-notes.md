# Technical Review Notes

## Review focus

This review looked at the site from an engineering standpoint: runtime performance, scalability of the component/content model, accessibility support, SEO/deployment support, and maintainability as the portfolio grows.

## What is already in good shape

- React + Vite + TypeScript is a strong fit for a fast static portfolio.
- Content is centralized in `src/data/siteContent.ts`, so routine edits do not require layout changes.
- The app builds to static assets in `dist/`, which works well on Vercel.
- CSS uses design tokens and responsive breakpoints rather than hard-coded one-off page styles.
- Reduced-motion support is already present.
- The current bundle size is reasonable for a portfolio with Framer Motion.

## Improvements made in this pass

### Accessibility and navigation

- Added a skip link so keyboard and screen-reader users can jump directly to the main content.
- Added an `id` to `<main>` for that skip target.
- Added clearer project expand/collapse affordance text.
- Improved focus-visible styles across buttons, links, cards, and project summaries.
- Added an accessible footer with build/deployment context.

### Performance and scaling

- Switched to `LazyMotion` with `domAnimation` from Framer Motion, which keeps animation support lighter and makes the animation layer easier to scale.
- Added CSS `content-visibility: auto` and `contain-intrinsic-size` for lower sections so browsers can defer offscreen rendering work.
- Added `will-change` only on interactive card/button hover targets where it is useful.

### SEO and deployment support

- Added `robots.txt`.
- Added `sitemap.xml`.
- Added additional metadata in `index.html`, including canonical URL, theme color, Open Graph URL/image placeholders, Twitter metadata, and richer JSON-LD `knowsAbout` data.

## Current technical risks / follow-ups

1. The canonical URL and sitemap currently assume `https://masonpotter.com`. Update these if the final domain differs.
2. The Open Graph image path is set to `/og-image.png`, but that asset still needs to be created.
3. The resume link currently routes to resume highlights instead of a real PDF. Add `public/resume.pdf` when ready.
4. Framer Motion is useful for polish, but if bundle size becomes a concern later, animations can be replaced with CSS-only reveal effects.
5. Once deployed, run Lighthouse and axe/browser accessibility checks against the production URL.
6. Test real devices:
   - iPhone Safari.
   - Android Chrome.
   - Desktop Chrome/Safari/Firefox.

## Suggested future technical upgrades

- Add ESLint and Prettier for consistent contributions.
- Add Vitest for basic data/component validation if the site grows more complex.
- Split content by domain if `siteContent.ts` gets too large:
  - `profile.ts`
  - `experience.ts`
  - `projects.ts`
  - `travel.ts`
  - `interests.ts`
- Generate `sitemap.xml` dynamically if multiple pages/routes are added.
- Add image optimization rules when travel/headshot/project images are introduced.
- Add a small content validation script to ensure required fields exist before deploy.
