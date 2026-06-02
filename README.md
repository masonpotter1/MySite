# Mason Potter — Personal Website (multi-site)

This repo powers a **multi-route React app** with three sections:

| Route | Content |
|-------|---------|
| `/` | Home hub |
| `/cloutsites` | [CloutSites](https://cloutsites.com) business marketing |
| `/mason` | Personal portfolio (recruiter-ready + travel log) |

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

## Commands

```bash
npm install
npm run dev
npm test
npm run build
```

## License

Personal use. Respect original content and branding if you fork.
