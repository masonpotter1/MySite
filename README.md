# Cloutsites

Premium marketing site for **Cloutsites - Full-Lifecycle Digital Systems**, a business website positioned around enterprise modernization, cloud consulting, automated QA, and high-performance web application development for Oklahoma companies.

> Repository note: this project is scaffolded in the current Cursor workspace and named `cloutsites` in `package.json`. Creating a separate GitHub repository named `cloutsites` requires GitHub write access outside this agent's read-only `gh` permissions; the code is ready to move or push into that repo once it exists.

## What the site communicates

- **Hero:** "Engineering the Future of Oklahoma Business."
- **Dual-track services:**
  - Enterprise Modernization for legacy systems, Docker/Kubernetes migration, Datadog observability, and technical debt reduction.
  - Digital Growth & Product for React apps, PHP/Laravel builds, Vercel deployment, and conversion-focused product funnels.
- **Reliability:** Selenium-driven end-to-end testing, release checklists, performance budgets, and production observability.
- **Stack visualization:** lightweight, fast-loading grid for React, PHP/Laravel, C#, SQL, Docker, Kubernetes, Datadog, Selenium, and Vercel.
- **Case study framework:** before/after templates that can be replaced with approved client proof.
- **Client intake portal:** accessible front-end lead qualifier for "old system", "new product", or "unclear path" inquiries.

## Spec review

The supplied spec is strong and strategically coherent. The implementation keeps the industrial-tech direction and improves the technical scope by:

1. Treating sub-1s performance as a static-site target supported by bundle discipline, optimized assets, and minimal third-party scripts.
2. Keeping the lead form front-end only for launch while documenting the production requirements for CRM/email routing.
3. Avoiding unsupported hard metrics in case studies until there is client permission and measurement proof.
4. Adding explicit accessibility and reduced-motion support so animation does not weaken usability.
5. Expanding the documented stack to include the operational tools promised in the copy: Datadog, Selenium, Vercel, and Laravel.

See:

- [`docs/cloutsites-spec-review.md`](docs/cloutsites-spec-review.md)
- [`docs/technical-spec.md`](docs/technical-spec.md)

## Tech stack

| Layer | Choice |
| --- | --- |
| UI | React |
| Language | TypeScript |
| Build | Vite |
| Motion | Framer Motion with reduced-motion CSS fallback |
| Styling | Plain CSS design tokens |
| Testing | Vitest + Testing Library + jsdom |
| Deployment | Vercel-ready static build |

Runtime: Node `22.x`.

## Local development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run typecheck
npm run test
npm run build
```

`npm run build` runs TypeScript first and then produces the static Vite output.

## SEO and metadata

`index.html` and `vite.config.ts` include metadata and JSON-LD for:

- OKC Custom Software
- Oklahoma Cloud Consulting
- Full-Stack Development Oklahoma City
- Legacy system modernization
- React application development

Set `VITE_SITE_URL` in the deployment environment to generate canonical URLs, Open Graph image URLs, and a populated sitemap.

## Launch notes

- Replace placeholder contact email in `src/data/cloutsitesContent.ts` when the final inbox is known.
- Replace `/public/favicon.png` and `/public/og-image.png` with branded Cloutsites assets.
- Connect the intake flow to server-side validation, spam protection, CRM routing, and email automation before using it as a production form.
- Add approved real case studies only after validating metrics and anonymization requirements.
