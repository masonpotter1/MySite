# Mason Potter Personal Site

A modern React + Vite personal website that blends a recruiter-friendly technical portfolio with a fun "digital passport" travel experience.

## Tech stack

- React
- TypeScript
- Vite
- Framer Motion
- CSS custom properties

## Local development

Use Node 22 or newer.

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Updating site content

Most editable content lives in:

```text
src/data/siteContent.ts
```

Update this file to change:

- Profile headline, email, and links
- Resume-backed experience
- Skills
- Projects
- Travel destinations
- Beyond-the-code interests
- Education details

The UI components read from this file, so routine updates should not require editing the layout.

## Deploying to Vercel

Recommended Vercel settings:

- Framework preset: Vite
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 22.x
