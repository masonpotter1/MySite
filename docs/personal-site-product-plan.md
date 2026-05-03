# Mason Potter Personal Site Product Plan

## Purpose

Build a polished, interactive personal website that Mason can confidently share with recruiters, friends, and professional contacts. The site should feel like a high-end software portfolio with enough personality to make it memorable beyond a standard resume.

The current direction is a "digital passport meets technical portfolio" experience: professional, dark, modern, animated, and credible, with a travel/storytelling layer that makes the site feel personal.

## Primary audiences

### Recruiters and hiring managers
- Quickly understand Mason's current role, technical strengths, and professional experience.
- See proof of full-stack development ability through projects and work summaries.
- Access LinkedIn, GitHub, contact details, and resume.
- Leave with a clear impression: enterprise software engineer, full-stack builder, and credible problem solver.

### Friends and personal visitors
- Learn more about Mason beyond work.
- Explore travel stories, favorite places, interests, and creative projects.
- Experience a fun, visually engaging site worth revisiting.

### Technical peers
- Review projects, implementation details, tech stack, and engineering taste.
- Find links to source code, demos, and deeper writeups.

## Known profile content

Source: user-provided LinkedIn screenshot and publicly indexed profile result.

- Name: Mason Potter
- Current role: Software Developer III at Paycom
- Focus: PHP, React, full-stack development, Applicant Tracking System software
- Location: Oklahoma City, Oklahoma
- Education: Kansas State University
- Current work theme: enterprise recruiting workflows, business logic, and full-stack delivery
- Additional experience:
  - Web development / IT consulting for Potter Plastic Surgery & Med Spa
  - Founder / lead consultant work through CloutSites LLC
  - Prior work touching healthcare, business operations, financial logic, and consulting contexts

Resume note: the user referenced a resume, but the file content is not visible in the workspace/session yet. The first implementation should keep profile content in structured data files so resume details can be added later without redesigning the app.

## Brand position

Mason should come across as:

- Technical but approachable
- Professional but not generic
- Curious, well-traveled, and socially interesting
- Able to build business-facing software and communicate with non-technical stakeholders
- A developer with taste: design, systems, travel, fashion, and polished user experiences

## Experience principles

1. First impression should be immediate.
   - The hero section should state who Mason is and why the viewer should care in under 5 seconds.

2. Recruiter value should be easy to find.
   - Skills, experience, resume, LinkedIn, GitHub, and contact should be obvious.

3. Personality should be integrated, not hidden.
   - Travel, design interests, and "beyond the code" content should feel like part of the identity.

4. Interactivity should support the story.
   - Animations, filters, maps, and cards should make content easier and more delightful to explore.

5. Content should be easy to update.
   - Profile, projects, travel locations, skills, and experience should live in structured data files.

## Recommended site architecture

Use a single-page application for the first version, with anchor navigation:

1. Hero
2. About
3. Skills
4. Projects
5. Experience
6. Travel
7. Beyond the Code
8. Contact

This gives the site a cinematic scroll experience while still keeping it simple to share and maintain.

## Hero section

Goal: present Mason clearly and memorably.

Recommended content:

- "Mason Potter"
- "Software Developer III @ Paycom"
- "PHP | React | Full Stack Development | ATS"
- Short intro:
  - "I build scalable business software, polished web experiences, and tools that turn complex workflows into something usable."
- Primary calls to action:
  - View Projects
  - Explore Travel
  - Download Resume
  - Contact
- Secondary links:
  - LinkedIn
  - GitHub
  - Personal domain

Visual ideas:
- Dark navy/charcoal background
- Gold accent typography
- Profile/avatar card
- Animated status chips
- Subtle route-line or constellation background tying projects and travel together

## About section

Goal: make Mason human and recruiter-friendly.

Content blocks:
- Short personal summary
- "What I build"
- "How I work"
- "What I am exploring"

Draft copy:

> I am a full-stack software developer based in Oklahoma City, currently working on Applicant Tracking System software at Paycom. I enjoy building reliable business tools, clean user experiences, and systems that make complicated workflows easier to manage. Outside of work, I am interested in travel, design, fashion, hardware, and creative technical projects.

## Skills section

Goal: show technical range without looking like a keyword dump.

Recommended groups:

- Languages
  - PHP
  - C#
  - Java
  - SQL

- Front-end and web
  - React
  - MVC architecture
  - Responsive design
  - Component-driven UI

- Automation and infrastructure
  - Selenium
  - CI/CD pipelines
  - AWS
  - Kubernetes
  - Datadog

- Product and business
  - Applicant tracking systems
  - Healthcare websites
  - Consulting
  - Workflow automation
  - Stakeholder communication

## Projects section

Goal: demonstrate ability, taste, and business impact.

Initial featured projects:

1. ATS Scale
   - Enterprise applicant tracking features and workflow improvements.
   - Focus: recruitment workflows, backend logic, production software, team collaboration.

2. Fintech Logic Engine
   - Placeholder until details are confirmed.
   - Focus: financial logic, data flow, business rules.

3. Medical Spa Overhaul
   - Website and digital operations improvements for a medical spa / plastic surgery business.
   - Focus: healthcare web presence, UX, SEO/marketing, IT support.

4. CloutSites Client Work
   - Consulting and web development for small to mid-sized businesses.
   - Focus: client discovery, delivery, business-facing websites.

5. Personal Site
   - This website as a living portfolio project.
   - Focus: React, animation, content systems, design polish.

Feature ideas:
- Filter by type: Enterprise, Web, Consulting, Personal, Experiments.
- Hover cards with animated tech badges.
- Modal or expandable detail views.
- "What I learned" field for each project.
- Links to GitHub/live demos when available.

## Experience section

Goal: summarize professional progression in an easy timeline.

Initial timeline:

1. Software Developer III - Paycom
   - Applicant Tracking System software
   - Full-stack development with PHP and React
   - Business logic, code reviews, feature delivery, defects, agile collaboration

2. Web Development / IT Consultant - Potter Plastic Surgery & Med Spa
   - Website redesign and digital operations
   - IT infrastructure support
   - Digital marketing and web presence improvements

3. Founder / Lead Consultant - CloutSites LLC
   - Web development consulting for businesses
   - Client-facing discovery, implementation, and support
   - Small-business digital strategy

Resume insertion point:
- Replace draft bullets with exact resume bullets when the resume is available.

## Travel section

Goal: make the site fun, personal, and memorable.

Concept: "Digital Passport"

Known travel notes:
- Paris: trip with friends
- Italy: fashion, culture, style
- Amsterdam: favorite city
- Numerous countries: more entries to be added

Recommended card fields:
- City/country
- Short story
- Trip type
- Favorite memory
- Vibe tags
- Photo placeholder
- "Passport stamp" visual

Initial cards:

### Paris
- Theme: friends, architecture, food, city energy
- Draft:
  - "Paris was about sharing the city with friends - long walks, late meals, iconic streets, and the kind of moments that are better because of who you are with."

### Italy
- Theme: fashion, design, culture, food
- Draft:
  - "Italy connected travel with style - fashion, architecture, food, and the kind of everyday beauty that makes design feel practical and alive."

### Amsterdam
- Theme: favorite city, canals, bikes, relaxed energy
- Draft:
  - "Amsterdam is the favorite so far: canals, bikes, great neighborhoods, and an atmosphere that felt instantly memorable."

Future travel ideas:
- Interactive map or route line
- Country counter
- Favorite city badge
- "Next destination" card
- Photo journal
- Short travel essays or posts

## Beyond the Code section

Goal: show multidimensional personality.

Initial interest cards:
- Custom high-performance hardware
- Mid-century industrial design
- Quantitative research
- Travel
- Fashion and personal style
- Business/consulting

Each card should answer:
- What is it?
- Why is Mason interested?
- How does it connect to his way of thinking?

## Contact section

Goal: make reaching out easy.

Content:
- Email link
- LinkedIn link
- GitHub link
- Resume download
- Friendly note:
  - "Reach out about software roles, projects, travel, or anything interesting."

## Success criteria

The first production-ready version should:

- Look excellent on desktop and mobile.
- Load quickly.
- Clearly explain Mason's professional identity.
- Include travel and personal-interest content, not just career data.
- Have editable content files.
- Include links to LinkedIn, GitHub, resume, and contact.
- Be easy to deploy to a static hosting provider.
