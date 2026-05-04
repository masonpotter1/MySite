# Mason Potter Personal Site

A modern React + Vite personal website that blends a recruiter-friendly technical portfolio with a fun "digital passport" travel experience.

## Tech stack

- React
- TypeScript
- Vite
- Framer Motion
- CSS custom properties
- Vercel Web Analytics (`@vercel/analytics`)

## Local development

Use Node 22 or newer.

Copy env template (optional for local dev):

```bash
cp .env.example .env.local
```

Set `VITE_SITE_URL` when you pick a domain (see **Environment** below). Without it, canonical/OG absolute URLs and the sitemap are omitted until the first production build with the variable set.

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Environment

Set in Vercel **Project → Settings → Environment Variables** (and in `.env.local` for local testing):

| Name | Example | Purpose |
| --- | --- | --- |
| `VITE_SITE_URL` | `https://yourdomain.com` | Canonical URL, Open Graph/Twitter image URLs, JSON-LD `url`/`image`, generated `public/sitemap.xml` at build time |

No trailing slash.

## Updating site content

Most editable content lives in:

```text
src/data/siteContent.ts
```

Update this file to change:

- Profile headline, email, and links
- Curiosities / tinkering items (what + why for each)
- Resume-backed experience
- Skills
- Projects
- Travel destinations
- Beyond-the-code interests
- Education details

The UI components read from this file, so routine updates should not require editing the layout.

## Resume PDF

The site links to:

```text
public/resume.pdf
```

Replace that file to update the downloadable resume. A copy may also exist under `docs/` for source tracking.

## Analytics

The app includes **Vercel Web Analytics** (`<Analytics />` in `src/main.tsx`). It is a no-op locally and activates automatically when the site runs on Vercel with Analytics enabled for the project.

## Social preview image

Default files:

```text
public/og-image.png
public/favicon.png
```

Replace `og-image.png` with a 1200×630 (or similar) branded image when you want a custom link preview.

## Privacy

Static page:

```text
public/privacy.html
```

Linked from the site footer.

## Deploying to Vercel

Recommended Vercel settings:

- Framework preset: Vite
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 22.x
- Environment variable: `VITE_SITE_URL` = your final origin (set when domain is chosen)
- Enable **Vercel Web Analytics** in the Vercel dashboard for the project

The repo includes `vercel.json` with SPA routing that **serves real static files first** (for example `/privacy.html` and `/resume.pdf`), then falls back to `index.html` for client-side routes—plus a few conservative security headers.
