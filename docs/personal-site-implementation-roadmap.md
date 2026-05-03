# Personal Site Implementation Roadmap

## Phase 1: Foundation

- Convert the repository from standalone HTML pages to a React + Vite + TypeScript app.
- Preserve any useful existing content, but treat the current HTML as replaceable scaffolding.
- Add project scripts for local development, build, preview, linting if chosen, and formatting if chosen.
- Establish app structure, global styles, design tokens, and content data files.

Acceptance criteria:
- `npm run build` succeeds.
- App loads locally.
- Navigation anchors work.
- Layout is responsive at mobile, tablet, and desktop sizes.

## Phase 2: Core portfolio experience

Build the first complete one-page experience:

- Hero
- About
- Skills
- Projects
- Experience
- Digital Passport
- Beyond the Code
- Contact

Acceptance criteria:
- Recruiter can identify Mason's role, skills, experience, and contact paths in under 10 seconds.
- Travel appears as a first-class site feature.
- Placeholder content is polished enough to publish while still easy to replace.

## Phase 3: Interaction and polish

Add tasteful interactive behavior:

- Smooth scroll navigation.
- Section reveal animations.
- Project filtering.
- Expandable project details.
- Travel card expansion or flip interaction.
- Mobile navigation.
- Active section indicator.

Acceptance criteria:
- Interactions make content easier to explore.
- Motion respects reduced-motion preferences.
- Site remains fast and readable.

## Phase 4: Resume and real content pass

When Mason's resume is available:

- Replace draft experience bullets with exact resume-supported content.
- Add dates, education details, honors, certifications, and achievements.
- Update project case studies with real links, metrics, and screenshots.
- Add confirmed email, GitHub, LinkedIn, and resume download file.

Acceptance criteria:
- No placeholder professional content remains except intentionally private project details.
- Resume download works.
- LinkedIn/GitHub/contact links are correct.

## Phase 5: Travel expansion

Add richer travel material:

- Full country list.
- Photos.
- Favorite memories.
- Trip categories.
- Map or route visualization.
- Optional travel journal posts.

Acceptance criteria:
- Travel section feels personal, not generic.
- Destinations are skimmable but expandable.
- Photos are optimized for web delivery.

## Phase 6: Deployment readiness

- Add metadata, Open Graph tags, favicon, and preview image.
- Audit accessibility.
- Audit performance.
- Deploy to chosen host.
- Connect domain.

Acceptance criteria:
- Lighthouse scores are strong across performance, accessibility, best practices, and SEO.
- Shared links have a polished social preview.
- Site works well on phone and desktop.

## Recommended first build checklist

- [ ] Create Vite React TypeScript app structure.
- [ ] Add `src/data/profile.ts`.
- [ ] Add `src/data/skills.ts`.
- [ ] Add `src/data/projects.ts`.
- [ ] Add `src/data/experience.ts`.
- [ ] Add `src/data/travel.ts`.
- [ ] Add layout and section components.
- [ ] Add dark/gold/slate design system.
- [ ] Build Hero, About, Skills, Projects, Experience, Travel, Beyond the Code, Contact.
- [ ] Add responsive navigation.
- [ ] Add animations.
- [ ] Add project and travel interactions.
- [ ] Test production build.
- [ ] Commit, push, and open PR.
