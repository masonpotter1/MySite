# Cloutsites Technical Specification

## Architecture

Cloutsites is implemented as a static React application using Vite and TypeScript. This is the right launch architecture because the current scope is a high-performance marketing and intake site, not a logged-in SaaS application.

```text
React components -> Vite build -> static assets -> Vercel or equivalent edge/static hosting
```

## Source layout

| Path | Purpose |
| --- | --- |
| `src/App.tsx` | Page sections, intake interactions, and layout composition |
| `src/data/cloutsitesContent.ts` | Centralized business copy, stack data, case study templates, and spec review data |
| `src/styles.css` | Industrial-tech design system, responsive layout, motion, and accessibility states |
| `src/test/setup.ts` | Testing Library setup |
| `src/App.test.tsx` | Rendering and intake behavior tests |
| `src/data/cloutsitesContent.test.ts` | Content contract tests |
| `vite.config.ts` | React, Vitest, HTML injection, JSON-LD, and sitemap generation |
| `index.html` | SEO, Open Graph, Twitter, and JSON-LD shell |
| `public/privacy.html` | Privacy note for analytics and contact handling |

## Performance requirements

The supplied "sub-1s" requirement is treated as a launch target for a static marketing site. In production, define the exact measurement environment before treating it as a guarantee.

Recommended measurable targets:

- Largest Contentful Paint under 1.8s on a mid-range mobile device and good 4G profile.
- First Contentful Paint under 1s on desktop broadband.
- Cumulative Layout Shift below 0.1.
- Interaction to Next Paint below 200ms.
- Keep third-party scripts minimal.
- Use optimized images for final brand assets and case-study media.
- Prefer CSS/SVG treatments over heavy icon libraries for the stack visualization.

## SEO requirements

The site includes metadata for:

- OKC Custom Software
- Oklahoma Cloud Consulting
- Full-Stack Development Oklahoma City
- Legacy system modernization Oklahoma
- React development Oklahoma City

`VITE_SITE_URL` should be set in production so the build can generate canonical URLs, Open Graph image URLs, and `public/sitemap.xml`.

## Accessibility requirements

- Every page has a skip link.
- Navigation uses semantic landmarks.
- Intake options are buttons with `aria-pressed` state.
- Inputs and textarea controls have visible labels.
- Focus states are high contrast.
- Motion respects `prefers-reduced-motion`.
- Color is not the only indicator for selected intake options.

## Intake portal scope

Current launch behavior:

- User chooses one of three paths:
  - "I need to fix an old system"
  - "I need to build a new product"
  - "I know the outcome, not the technical path"
- The selected path updates the recommended track.
- The call-to-action opens a prefilled email to `hello@cloutsites.com`.

Production backend requirements before collecting leads directly:

- Server-side validation.
- Bot protection.
- Rate limiting.
- CRM or ticket routing.
- Email notifications.
- Error logging.
- Privacy policy updates for collected fields.
- Consent and retention rules.

## Testing strategy

The test suite covers:

- Core positioning and service messaging render on the homepage.
- Required technical competencies remain present in the stack data.
- Intake categories remain unique and include modernization, product build, and discovery.
- Intake UI updates when a different buyer path is selected.

Run:

```bash
npm run test
npm run typecheck
npm run build
```

## Future enhancements

- Add real SVG icons for stack technologies after selecting a final brand asset style.
- Add approved case study detail pages.
- Add a serverless intake endpoint and CRM integration.
- Add event analytics for selected intake path and CTA clicks.
- Add a lightweight CMS if non-developers need to update case studies frequently.
