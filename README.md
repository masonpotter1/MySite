# Cloutsites

Multi-route site on **[cloutsites.com](https://cloutsites.com)** for Cloutsites: websites, marketing, practical business IT, and systems consulting for small businesses.

| Route | Content |
|-------|---------|
| `/` | Cloutsites business homepage |
| `/services` | Services overview |
| `/services/websites` | Website design, rebuilds, maintenance, forms, and booking flows |
| `/services/marketing` | Social media, ads, SEO, analytics, and content support |
| `/services/business-it` | Microsoft accounts, email, domains, access, and IT cleanup |
| `/services/systems-consulting` | Workflow cleanup, integrations, QA, and modernization |
| `/work` | Honest project examples and proof framework |
| `/process` | Discovery through handoff |
| `/about` | Company story and values |
| `/about/team` | Owner-led team model |
| `/about/mason-potter` | Founder profile |
| `/contact` | Client intake |
| `/resume` | Print-friendly founder résumé (browser to Save as PDF) |

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
| [`src/data/cloutsitesContent.ts`](src/data/cloutsitesContent.ts) | Business copy, services, intake, proof, process |
| [`src/data/siteContent.ts`](src/data/siteContent.ts) | Founder résumé/background source data |
| [`src/views/CloutSitesPage.tsx`](src/views/CloutSitesPage.tsx) | Business homepage and all Cloutsites page layouts |
| [`src/views/ResumePage.tsx`](src/views/ResumePage.tsx) | Print-friendly founder résumé |
| [`src/config/siteNav.ts`](src/config/siteNav.ts) | Global nav + page meta titles |
| [`src/styles/`](src/styles/) | Design tokens and page CSS |

## Launch checklist

- [ ] Add `public/og-image.png` (1200×630) for richer LinkedIn previews
- [ ] Optional: `public/resume.pdf` alongside `/resume`
- [ ] Submit `https://cloutsites.com/sitemap.xml` in Google Search Console

## License

Personal use. Respect original content and branding if you fork.
