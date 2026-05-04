# Mason Potter — Personal Website

This repository powers **masonpotter.dev** (and the Vercel deployment behind it): a personal website that works as both a **recruiter-ready portfolio** and a **more human “digital passport”**—projects, experience, skills, travel, and interests in one place.

If you are a **recruiter or hiring manager**, start with the live site (linked from the GitHub repo description or your deployment URL). This README explains what you are looking at in the codebase and how the content is maintained.

---

## What this site is

A single-page **React** experience that presents:

- **Professional identity** — role history, skills, and resume-backed highlights  
- **Projects** — expandable case-study style cards (problem, approach, outcomes where appropriate)  
- **Experience** — timeline of roles with concrete bullets  
- **Travel** — region → country → place cards (stories, tags, photo placeholders)  
- **Curiosities** — short “what / why” cards for topics Mason is exploring outside day-to-day work  
- **Contact** — email and LinkedIn; resume PDF download  

The tone is intentionally **credible for hiring** while still feeling **personal** enough to share with friends.

---

## Why it is built this way (for technical readers)

- **Content-driven:** most copy and structure live in one module so updates do not require hunting through UI files.  
- **Fast to ship:** static output, modern tooling, minimal backend surface area.  
- **Deploy-friendly:** Vercel + Vite, with sensible defaults for SPA routing and static assets.

---

## Tech stack

| Layer | Choice |
| --- | --- |
| UI | React 18 |
| Language | TypeScript |
| Build | Vite |
| Motion | Framer Motion |
| Styling | Plain CSS (design tokens + responsive layout) |
| Hosting | Vercel (recommended) |
| Analytics | Vercel Web Analytics (`@vercel/analytics`) when enabled in the Vercel project |

**Runtime:** Node **22.x** (see `package.json` `engines`).

---

## Repository layout (where to look)

| Path | Purpose |
| --- | --- |
| `src/App.tsx` | Page sections, layout, interactions |
| `src/data/siteContent.ts` | **Primary content source** — profile, experience, projects, travel, interests |
| `src/styles.css` | Global styles and responsive rules |
| `public/resume.pdf` | Downloadable resume (replace this file to update) |
| `public/privacy.html` | Short privacy note (linked from footer) |
| `public/og-image.png`, `public/favicon.png` | Social preview + favicon (replace with branded assets when ready) |
| `vercel.json` | SPA fallback rewrite + security headers |
| `vite.config.ts` | Build-time HTML injection for SEO when `VITE_SITE_URL` is set; generates `public/sitemap.xml` at build |

---

## License

This project is intended for personal use. If you fork or reuse portions, respect the original author’s content and branding.
