# Personal Site Technical Spec

## Recommended stack

- React
- Vite
- TypeScript
- Modern CSS with CSS custom properties
- Framer Motion for section transitions and micro-interactions
- Static JSON/TypeScript content files for profile, skills, projects, experience, travel, and interests

This stack supports a beautiful app-like experience while keeping deployment simple and fast.

## Application shape

Version 1 should be a single-page app with anchored navigation:

- `#about`
- `#skills`
- `#projects`
- `#experience`
- `#travel`
- `#beyond`
- `#contact`

The single-page format gives the site a cinematic scroll experience and makes it easy to share one URL with recruiters or friends.

## Proposed file structure

```text
src/
  App.tsx
  main.tsx
  styles/
    globals.css
    tokens.css
  components/
    AppShell.tsx
    Navigation.tsx
    Section.tsx
    Hero.tsx
    SkillCard.tsx
    ProjectCard.tsx
    ExperienceTimeline.tsx
    TravelPassport.tsx
    TravelCard.tsx
    InterestCard.tsx
    ContactPanel.tsx
  data/
    profile.ts
    skills.ts
    projects.ts
    experience.ts
    travel.ts
    interests.ts
  assets/
    resume/
    images/
```

## Data-first content model

Keep the site easy to update by storing content outside the components.

### Profile

```ts
export const profile = {
  name: "Mason Potter",
  title: "Software Developer III",
  company: "Paycom",
  location: "Oklahoma City, Oklahoma",
  tagline:
    "Full-stack developer building practical software, polished web experiences, and tools for complex business workflows.",
  links: {
    linkedin: "https://linkedin.com/in/mason-potter-515a25152",
    github: "",
    email: "",
    website: "https://www.potterplasticsurgery.com",
    resume: "",
  },
};
```

### Travel

```ts
export const travel = [
  {
    place: "Amsterdam",
    country: "Netherlands",
    label: "Favorite city",
    story:
      "Canals, bikes, neighborhoods, and a city energy that immediately felt memorable.",
    tags: ["favorite", "canals", "city design", "creative energy"],
  },
];
```

### Projects

```ts
export const projects = [
  {
    title: "ATS Scale",
    category: "Enterprise",
    summary: "Applicant tracking software and full-stack recruitment workflows.",
    tech: ["PHP", "React", "SQL"],
    status: "Professional work",
    links: [],
  },
];
```

## Core components

### Navigation

Requirements:
- Sticky or floating top navigation.
- Desktop links and mobile menu.
- Active section state.
- Resume/contact call to action.

### Hero

Requirements:
- Name, title, role, and intro.
- Profile image or stylized avatar.
- Animated specialty chips.
- Primary CTAs: Projects, Travel, Resume.
- Secondary social/contact links.

### Skills

Requirements:
- Grouped cards with icons or compact symbols.
- Skill categories:
  - Languages
  - Front-end and web
  - Automation and infrastructure
  - Product and business

### Projects

Requirements:
- Featured project cards.
- Filters by category.
- Expandable detail panels or modal-like cards.
- Private-work friendly language for professional projects.

### Experience

Requirements:
- Vertical timeline.
- Role, company, dates once confirmed, concise bullets.
- Resume content insertion point.

### TravelPassport

Requirements:
- Destination cards for Paris, Italy, and Amsterdam.
- Route-line or map-inspired visual.
- Passport stamp badges.
- Travel tags.
- Future support for photos and richer travel entries.

### BeyondTheCode

Requirements:
- Interest cards for hardware, design, quantitative research, travel, fashion, and consulting.
- Short copy that connects each interest to Mason's personality.

## Design tokens

Suggested CSS variables:

```css
:root {
  --color-bg: #101820;
  --color-surface: #17232d;
  --color-surface-elevated: #1f3140;
  --color-text: #f5f1e8;
  --color-muted: #9fb0bc;
  --color-accent: #d3b36a;
  --color-accent-strong: #f0cf7a;
  --color-blue-band: #496178;
  --radius-card: 18px;
  --shadow-card: 0 24px 60px rgba(0, 0, 0, 0.28);
}
```

## Interaction guidelines

- Use animation to clarify hierarchy, not distract.
- Cards can lift and glow on hover.
- Travel cards can flip or expand.
- Project cards can reveal deeper detail.
- Navigation should feel immediate and smooth.
- Respect reduced-motion preferences.

## Accessibility requirements

- Semantic sections and headings.
- Keyboard navigable links, filters, and expandable cards.
- Visible focus states.
- Sufficient contrast for dark theme.
- `prefers-reduced-motion` support.
- Alt text for all real images when added.

## Performance requirements

- Keep the first version statically deployable.
- Avoid heavy map libraries in version 1; use CSS/SVG route visuals first.
- Optimize images when real travel photos are added.
- Keep animations lightweight.

## Testing and validation

Expected checks after implementation:

- `npm install`
- `npm run build`
- TypeScript check if separate from build
- Manual responsive review at mobile, tablet, and desktop widths
- Verify all navigation anchors and links
- Verify reduced-motion behavior

## Future enhancements

- Real travel photo gallery.
- Country counter and map.
- Resume PDF download.
- Blog or short travel journal.
- GitHub API integration for public repos.
- Theme toggle.
- Command palette.
- Contact form with backend service.
