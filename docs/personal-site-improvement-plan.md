# Personal Site Improvement Plan

## Purpose

This plan turns the review backlog into executable work. The goal is to keep improving the site from several audience lenses without letting the project sprawl: recruiters need proof and contact paths, search visitors need clear identity signals, friends need memorable personality, and technical peers need enough implementation detail to trust the work.

## Planning principles

- Prioritize changes that improve trust, discoverability, and shareability first.
- Keep personal content editable in `src/data/siteContent.ts` unless a feature truly needs a new data file.
- Prefer interactive features that reinforce the "digital passport meets technical portfolio" theme.
- Avoid publishing private or confidential work details. Use high-level summaries for enterprise projects.
- Add real assets only when they are final or easy to replace.

## Release 1.1: Launch hardening and recruiter trust

### Audience focus

- Recruiters
- People Googling Mason
- Hiring managers opening the site from LinkedIn, email, or a resume

### Goals

- Make the site feel launch-ready.
- Remove dead placeholders.
- Improve search/social sharing.
- Make professional value obvious in the first screen.

### Work items

1. Add final resume support.
   - Add `public/resume.pdf`.
   - Point the Resume link to `/resume.pdf`.
   - Add `target="_blank"` and `rel="noreferrer"` where appropriate.

2. Finalize profile links.
   - Add GitHub URL.
   - Confirm final LinkedIn URL.
   - Confirm whether `potterplasticsurgery.com` should appear as a portfolio/work link.

3. Add a "Selected Impact" section or stronger hero metric strip.
   - 1.6M expected weekly document throughput.
   - Regression testing reduced from hours to minutes.
   - 100-page website modernization.
   - Thousands of monthly visits / incremental revenue once the exact revenue number can be public.

4. Add "What I am looking for" content.
   - Target roles.
   - Preferred stack.
   - Location/remote/hybrid preferences.
   - Keep this easy to update as job search status changes.

5. Improve SEO basics.
   - Add canonical URL when domain is known.
   - Add JSON-LD `Person` schema.
   - Add `robots.txt`.
   - Add `sitemap.xml`.
   - Add final Open Graph image once a preview asset exists.

6. Accessibility polish.
   - Add a skip link.
   - Strengthen focus states.
   - Add clearer expand/collapse affordance to project cards.
   - Keep all interactive elements keyboard-friendly.

### Inputs needed from Mason

- Resume PDF.
- GitHub URL.
- Final domain.
- Confirmation of LinkedIn URL.
- Whether the Paycom end date should remain public as written.
- Exact availability/open-to-work wording.

### Acceptance criteria

- `npm run build` passes.
- Resume link works.
- No missing anchors or placeholder links remain in primary CTAs.
- Page has canonical, sitemap, robots, and JSON-LD once domain is known.
- Lighthouse accessibility/SEO issues are documented or fixed.

## Release 1.2: Recruiter proof and project depth

### Audience focus

- Recruiters
- Technical peers
- Hiring managers who want evidence beyond a resume

### Goals

- Turn project cards into proof of ability.
- Make professional outcomes more concrete.
- Make private/enterprise work credible without oversharing.

### Work items

1. Expand project data model.
   - Add fields for `problem`, `constraints`, `approach`, `outcome`, `lessons`, `links`, and `confidentialityNote`.

2. Add project filtering.
   - Categories: Enterprise, Web, Mobile, Database, Consulting, Personal.
   - Preserve keyboard accessibility.

3. Create richer project detail panels.
   - SLIP: Kotlin, Firebase, Google Auth, RFID flow.
   - Airline DB: MySQL schema, joins, relationship mapping, query UI.
   - Medical Spa Overhaul: 100-page rebuild, booking, analytics, ads, SEO/SEM.
   - Personal Site: React, TypeScript, Vite, Framer Motion, data-driven content.
   - Paycom/ATS: high-level enterprise workflow summary with confidentiality note.

4. Add public links where possible.
   - GitHub repos.
   - Live demos.
   - Screenshots.
   - Private-project notes when links are unavailable.

5. Add a "How I work" or "Engineering style" section.
   - Business-first requirements.
   - Clean UI.
   - Testing and regression speed.
   - Data and workflow thinking.

### Inputs needed from Mason

- Public GitHub repos or confirmation that a project is private.
- Any screenshots for SLIP, Airline DB, medical spa work, or old projects.
- Confirm which work can be described publicly.
- Exact measurable outcomes where shareable.

### Acceptance criteria

- Project cards have useful expanded detail.
- Filters work on desktop and mobile.
- Private work is clearly but safely summarized.
- Recruiters can identify at least three concrete proof points without reading the resume PDF.

## Release 1.3: Travel and personality expansion

### Audience focus

- Friends
- Social visitors
- Recruiters who want culture/personality signal
- People who arrive from search or shared links

### Goals

- Make travel a signature feature.
- Make the site more memorable and fun.
- Avoid travel feeling like filler.

### Work items

1. Expand travel data model.
   - City/country.
   - Date or season.
   - Category.
   - Favorite memory.
   - Photo URLs.
   - Vibe tags.
   - Coordinates for future map.

2. Add travel stats.
   - Countries visited.
   - Favorite city.
   - Next destination.
   - Best food/fashion/nightlife/architecture tags.

3. Add "postcard" interaction.
   - Clicking a destination opens an expanded story panel or modal.
   - Use destination-specific visual treatment:
     - Amsterdam: Favorite City.
     - Paris: Friends Trip.
     - Italy: Fashion + Culture.

4. Add photo-ready layout.
   - Use placeholders now.
   - Allow real images to drop in without redesign.
   - Optimize images before deployment.

5. Add an "Ask me about..." row.
   - Amsterdam.
   - Fashion in Italy.
   - Paris with friends.
   - Building web apps.
   - Custom hardware.

### Inputs needed from Mason

- Full country/city list.
- Favorite memories per destination.
- Travel photos.
- Next destination.
- Any destinations that should not be public.

### Acceptance criteria

- Travel section has at least 5-8 destinations or a clear "more coming soon" system.
- Existing Amsterdam/Paris/Italy cards feel distinct.
- Travel works well on mobile.
- Real photos can be added by editing content data, not layout code.

## Release 1.4: Brand, visuals, and shareability

### Audience focus

- Everyone
- Especially people seeing the link in LinkedIn, Slack, texts, Discord, or search results

### Goals

- Make the site feel custom and polished.
- Make shared links look premium.
- Improve visual consistency.

### Work items

1. Add visual assets.
   - Real headshot or stylized avatar.
   - Open Graph preview image.
   - Favicon.
   - Optional travel/project thumbnails.

2. Add better iconography.
   - Skills.
   - Projects.
   - Travel stamps.
   - Interests.

3. Refine visual theme.
   - Passport stamp details.
   - Boarding-pass-inspired cards.
   - Map route SVG instead of only CSS route shapes.
   - Consistent image treatment.

4. Add footer credibility details.
   - Built with React, TypeScript, Vite, Framer Motion.
   - GitHub link.
   - Last updated date if desired.

### Inputs needed from Mason

- Headshot or avatar preference.
- Any brand preferences: more dark/gold, more travel, more clean corporate, more playful.
- Preferred social preview style.

### Acceptance criteria

- Shared link preview has title, description, and image.
- Site has favicon and polished browser/tab appearance.
- Visual style is consistent across all sections.

## Release 2.0: Advanced interactive features

### Audience focus

- Technical peers
- Friends
- Repeat visitors
- Anyone who appreciates a memorable product-like site

### Goals

- Turn the portfolio into a small interactive product.
- Add features that are cool but still purposeful.

### Feature candidates

1. Interactive travel map.
   - SVG or lightweight map first.
   - Destination pins.
   - Route lines.
   - Click to open postcard details.

2. Command palette.
   - Keyboard shortcut.
   - Jump to sections.
   - Search projects, skills, travel destinations.

3. Theme toggle.
   - Dark professional mode.
   - Passport/postcard mode or lighter travel mode.

4. Timeline toggle.
   - Professional milestones.
   - Travel milestones.
   - Education/project milestones.

5. GitHub API integration.
   - Pull public repos.
   - Show pinned projects.
   - Keep curated project content primary so the site still feels intentional.

6. Blog or notes section.
   - Software writeups.
   - Travel notes.
   - Design/hardware thoughts.

7. Contact form.
   - Use a serverless form provider or Vercel-compatible function.
   - Add spam protection.
   - Keep email link as fallback.

### Acceptance criteria

- Advanced features do not slow the initial page noticeably.
- All interactions are keyboard accessible.
- Features support the core brand rather than feeling like gimmicks.

## Recommended execution order

1. Release 1.1: launch hardening and recruiter trust.
2. Release 1.2: project depth and recruiter proof.
3. Release 1.3: travel expansion.
4. Release 1.4: visuals and shareability.
5. Release 2.0: advanced interactive features.

## Immediate next-task recommendation

Start with Release 1.1 because it removes launch blockers and improves the value of every shared link. The highest-value first implementation batch is:

1. Add final resume PDF support.
2. Add GitHub/final LinkedIn links.
3. Add JSON-LD, robots, and sitemap.
4. Add skip link and stronger focus states.
5. Add a "What I am looking for" section.

