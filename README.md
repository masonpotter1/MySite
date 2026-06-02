# Mason Potter — Personal Website (multi-site)

This repo powers a **multi-route React app** with three sections:

| Route | Content |
|-------|---------|
| `/` | Home hub |
| `/cloutsites` | [CloutSites](https://cloutsites.com) business marketing |
| `/mason` | Personal portfolio (recruiter-first layout) |
| `/resume` | Print-friendly résumé (browser → Save as PDF) |

**Live deploy:** [personal-site-tau-mocha.vercel.app](https://personal-site-tau-mocha.vercel.app) (set `VITE_SITE_URL` in Vercel for canonical URLs and sitemap).

## Tech stack

React · TypeScript · Vite · React Router · Framer Motion · Vitest · Vercel

## Where to edit

| Path | Purpose |
|------|---------|
| `src/data/siteContent.ts` | Portfolio copy, projects, travel |
| `src/data/cloutsitesContent.ts` | Business copy, intake, services |
| `src/pages/MasonPage.tsx` | Portfolio layout |
| `src/pages/CloutSitesPage.tsx` | Business layout |
| `src/config/siteNav.ts` | Global nav + page meta titles |
| `src/styles/` | `tokens`, `global`, `cloutsites`, `mason` CSS |

## Recruiter checklist

- [ ] Replace travel photo placeholders when ready (optional—not required for hiring review).
- [ ] Add `public/og-image.png` (1200×630) for richer link previews on LinkedIn.
- [ ] Optional: export a static `public/resume.pdf` and add a second link alongside `/resume`.
- [ ] Set `VITE_SITE_URL` in Vercel to your production domain.

## Commands

```bash
npm install
npm run dev
npm test
npm run build
```

## License

Personal use. Respect original content and branding if you fork.
