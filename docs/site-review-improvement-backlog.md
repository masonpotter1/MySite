# Personal Site Review and Improvement Backlog

## Review summary

The current site direction is strong: it positions Mason as a full-stack developer with enterprise software experience, measurable resume wins, personal taste, and travel stories. The biggest opportunities are to make the site more discoverable, add proof around claims, enrich travel with real media, and introduce a few memorable interactive features that reinforce the "digital passport meets technical portfolio" concept.

## Audience lens: recruiters and hiring managers

### What works now
- The hero quickly communicates name, role, company, location, and full-stack focus.
- Resume-backed experience includes concrete metrics: 1.6M expected weekly document throughput, 100-page medical site rebuild, 20 employees supported, and testing time reduced from hours to minutes.
- Skills are grouped in a scannable way.
- Project cards show practical work across mobile, database, healthcare web, and the portfolio itself.

### Improvement opportunities
- Add a real downloadable resume PDF and make the Resume link point to it.
- Add exact GitHub link and any public project/demo links.
- Add dates and role clarity where needed, especially if the public LinkedIn timeline differs from the resume.
- Add a short "What I am looking for" section with target roles, locations, hybrid/remote preferences, and preferred stack.
- Add a "Selected impact" strip near the top with 3-4 metrics:
  - 1.6M weekly document throughput target.
  - Regression testing reduced from hours to minutes.
  - 100-page medical site rebuild.
  - Thousands of monthly visits / incremental revenue, once the revenue number can be stated accurately.
- Add case-study pages or expandable cards with:
  - Problem.
  - Constraints.
  - What Mason built.
  - Tech stack.
  - Business outcome.
  - What was learned.
- Add a privacy-safe note for professional work: "Some enterprise work is summarized at a high level due to confidentiality."

## Audience lens: people Googling Mason

### What works now
- The title and meta description identify Mason as a software developer.
- The page includes location, education, employer, skills, and projects, which helps search relevance.
- The content blends professional identity with personal uniqueness.

### Improvement opportunities
- Add stronger SEO metadata:
  - Canonical URL once the domain is chosen.
  - Open Graph image.
  - Twitter card metadata.
  - `theme-color`.
  - robots-friendly copy.
- Add structured data JSON-LD for `Person`, including:
  - name.
  - jobTitle.
  - email.
  - alumniOf.
  - sameAs links for LinkedIn and GitHub.
  - knowsAbout skills.
- Add a short plain-language intro near the top with important keywords:
  - Mason Potter.
  - Software Developer III.
  - Paycom.
  - Oklahoma City.
  - React.
  - PHP.
  - full-stack development.
  - applicant tracking systems.
- Create a public `/resume` or `/resume.pdf` path when the final PDF is added.
- Add sitemap and robots files before deployment.
- Add a polished social preview image so links look good in texts, LinkedIn, Slack, and Discord.

## Audience lens: friends and personal visitors

### What works now
- Travel is treated as a first-class section instead of an afterthought.
- The site has a memorable theme and does not feel like a generic resume.
- Beyond-the-code interests give the site more personality.

### Improvement opportunities
- Expand the travel section with real country/city list, photos, and favorite memories.
- Add "favorite city", "best food", "best fashion", "best nightlife", or "best story" awards.
- Add a "travel stats" panel:
  - countries visited.
  - favorite city.
  - next destination.
  - most surprising trip.
- Add photo gallery cards for Amsterdam, Paris, Italy, and future trips.
- Add a "Postcards" interaction: clicking a destination opens a mini story, photo, and tags.
- Add a "friends trip" visual treatment for Paris, a "fashion/culture" treatment for Italy, and a "favorite city" treatment for Amsterdam.
- Add a small "Ask me about..." row to make the site socially inviting.

## Audience lens: technical peers

### What works now
- React, TypeScript, Vite, Framer Motion, and data-driven content are a good modern foundation.
- Projects show a range of mobile, database, web, and production-adjacent work.
- README explains how to update content and deploy.

### Improvement opportunities
- Add a visible "Built with React + TypeScript + Vite" note in the footer or Personal Site project card.
- Add GitHub repo link.
- Add architecture notes or a small "How this site is built" section.
- Add richer project detail:
  - SLIP architecture diagram: Kotlin app, Firebase, Google Auth, RFID flow.
  - Airline DB schema/query examples.
  - Medical Spa modernization before/after scope.
  - Paycom/ATS high-level system summary, keeping confidential details out.
- Add project filters by category:
  - Enterprise.
  - Web.
  - Mobile.
  - Database.
  - Consulting.
  - Personal.
- Add keyboard-accessible expandable project cards with clearer open/close affordances.

## Audience lens: founders, business owners, and clients

### What works now
- The healthcare web and Financial Partners experience show practical business value.
- Consulting and small-business context is present.

### Improvement opportunities
- Add a "Business impact" section separate from technical skills.
- Add client-friendly language:
  - websites.
  - booking flows.
  - analytics.
  - ad campaign measurement.
  - CRM migrations.
  - authentication modernization.
- Add proof points from Hays Medical Spa and Financial Partners Group.
- Add a "Ways I can help" section if Mason wants freelance or consulting inquiries.
- Add testimonials later if appropriate.

## Audience lens: design/taste

### What works now
- The dark/gold/slate direction feels premium and recruiter-friendly.
- Travel and beyond-the-code content help make the brand feel less generic.

### Improvement opportunities
- Add a real headshot or stylized illustrated avatar.
- Add travel photography with consistent color grading.
- Create a custom Open Graph image matching the site aesthetic.
- Add subtle map/route SVG details instead of only CSS circles.
- Add better iconography for skills, projects, and interests.
- Add a theme detail inspired by passport stamps, boarding passes, or project cards.

## Audience lens: accessibility and mobile users

### What works now
- Semantic sections are present.
- Reduced motion support exists.
- Responsive breakpoints are in place.
- Cards and grids collapse for mobile.

### Improvement opportunities
- Add a visible skip link.
- Add stronger focus styles for every interactive element.
- Ensure project `<details>` summaries clearly indicate they expand.
- Add `aria-label` where link text is ambiguous.
- Run Lighthouse and axe checks after deployment.
- Test on real mobile devices, especially iPhone Safari and Android Chrome.
- Consider a mobile menu or horizontal nav chips instead of hiding navigation entirely on small screens.

## Cool feature ideas

### High-impact version 1.1 ideas
- Downloadable resume PDF.
- GitHub and LinkedIn links finalized.
- Project filters.
- Better project card expand/collapse affordance.
- JSON-LD structured data.
- Open Graph image.
- Travel cards with expandable stories.

### Version 2 ideas
- Interactive travel map with route lines.
- Photo journal / postcard modal.
- Travel stats dashboard.
- "Now" section: currently building, learning, reading, traveling.
- Blog or short notes section for travel and software writeups.
- GitHub API integration for public repos.
- Contact form using a serverless provider.
- Dark/light or "passport mode" theme toggle.
- Command palette for fast navigation.
- Timeline toggle between professional and travel milestones.

## Content expansion checklist

### Professional
- [ ] Final resume PDF.
- [ ] GitHub URL.
- [ ] Final LinkedIn URL.
- [ ] Public project links.
- [ ] Confirm whether Paycom end date should be public.
- [ ] Add exact outcomes and metrics where shareable.
- [ ] Add certifications, awards, or honors if relevant.

### Travel
- [ ] Full country list.
- [ ] City list.
- [ ] Favorite memory per destination.
- [ ] Photos for Amsterdam, Paris, Italy, and other countries.
- [ ] Next destination.
- [ ] Favorite travel categories: food, fashion, nightlife, architecture, nature, friends.

### Personal interests
- [ ] Hardware build photos/specs if shareable.
- [ ] Design inspiration examples.
- [ ] Quantitative research interests or reading list.
- [ ] Fashion/personal style notes if Mason wants that public.

## Immediate fixes already made during this review

- Changed the Resume link from a missing `#resume` anchor to a planned `/resume.pdf` path.
- Added canonical, robots, keywords, theme-color, and Twitter/Open Graph metadata placeholders.
- Fixed header brand CSS so the brand text is not styled like a circular icon.

