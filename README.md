# Cloutsites · Mason Potter

Multi-route site on **[cloutsites.com](https://cloutsites.com)** — business marketing, portfolio, and print-friendly résumé.

| Route | Content |
|-------|---------|
| `/` | Home hub |
| `/cloutsites` | CloutSites business marketing |
| `/mason` | Personal portfolio (recruiter-first) |
| `/resume` | Print-friendly résumé (browser → Save as PDF) |

**Source of truth:** [masonpotter1/MySite](https://github.com/masonpotter1/MySite) — deploy via Vercel from `main`.

## Tech stack

Next.js 15 (App Router) · React · TypeScript · Framer Motion · Vitest · Vercel

## Environment

Set in Vercel Production (and Preview if you want correct OG URLs on previews):

```bash
SITE_URL=https://cloutsites.com
```

See [`.env.example`](.env.example).

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm test
npm run build    # emits /sitemap.xml and /robots.txt via App Router
```

## Where to edit (steady state)

| Path | Purpose |
|------|---------|
| [`src/data/siteContent.ts`](src/data/siteContent.ts) | Portfolio copy, projects, travel |
| [`src/data/cloutsitesContent.ts`](src/data/cloutsitesContent.ts) | Business copy, intake, services |
| [`src/views/MasonPage.tsx`](src/views/MasonPage.tsx) | Portfolio layout |
| [`src/views/CloutSitesPage.tsx`](src/views/CloutSitesPage.tsx) | Business layout |
| [`src/config/siteNav.ts`](src/config/siteNav.ts) | Global nav + page meta titles |
| [`src/styles/`](src/styles/) | Design tokens and page CSS |

## Recruiter checklist

- [ ] Add `public/og-image.png` (1200×630) for richer LinkedIn previews
- [ ] Optional: `public/resume.pdf` alongside `/resume`
- [ ] Submit `https://cloutsites.com/sitemap.xml` in Google Search Console

## License

Personal use. Respect original content and branding if you fork.
