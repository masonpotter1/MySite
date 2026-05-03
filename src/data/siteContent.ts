export type Link = {
  label: string;
  href: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export type Experience = {
  company: string;
  role: string;
  location?: string;
  dates: string;
  summary: string;
  bullets: string[];
  tags: string[];
};

export type ProjectDetail = {
  label: string;
  body: string;
};

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  /** Short teaser shown in the collapsed card */
  teaser: string;
  details: ProjectDetail[];
  tech: string[];
  status: string;
};

export type TravelImagePlaceholder = {
  label: string;
  /** Alt text when you replace with a real photo */
  alt: string;
};

export type TravelChapter = {
  id: string;
  title: string;
  /** e.g. "Summer 2022" */
  when: string;
  where: string;
  badge: string;
  story: string;
  tags: string[];
  accent: string;
  /** Cities or sub-places mentioned in the chapter */
  highlights: string[];
  images: TravelImagePlaceholder[];
};

export type Interest = {
  title: string;
  detail: string;
};

export const profile = {
  name: "Mason Potter",
  pronouns: "He/Him",
  /** Short line under name in the top bar */
  title: "Software engineer · sabbatical",
  /** Credential line for recruiters */
  lastRoleTitle: "Software Developer III",
  lastRoleCompany: "Paycom",
  specialty: "PHP | React | Full Stack | ATS (past)",
  location: "Oklahoma City, Oklahoma",
  email: "masonpotter1@gmail.com",
  education:
    "Kansas State University - Computer Science, Minor in Entrepreneurship",
  graduation: "December 2022",
  statusLine: "Sabbatical · traveling · tinkering with side projects",
  headline:
    "A highly capable full-stack engineer taking intentional time away from the corporate grind: shipping small experiments, studying markets as a hobby, and collecting miles and stories.",
  intro:
    "I care about systems that scale, interfaces that feel intentional, and work that connects engineering to real business outcomes. Right now I am on sabbatical: not in a rush to jump back in, but still very much a builder.",
  tinkeringIntro:
    "Lightweight experiments and learning threads. Nothing here is a performance claim or trading advice—just architecture, data plumbing, and curiosity.",
  tinkeringChips: [
    "SEC filing parsing",
    "Quant finance (hobby)",
    "Options greeks (learning)",
    "Python data pipelines",
    "UI / UX craft",
    "Horology",
  ],
  aboutParagraphs: [
    {
      id: "about-okc",
      text: "I am based in Oklahoma City. My background blends enterprise software, independent consulting, healthcare web operations, and hands-on projects across mobile, databases, and the web.",
    },
    {
      id: "about-paycom",
      text: "Most recently, I spent time at Paycom on applicant tracking systems work at serious scale: co-developing web applications that handled on the order of 1.6M documents per week, and tightening automated regression coverage with Selenium until test runs dropped from hours to minutes.",
    },
    {
      id: "about-cloutsites",
      text: "Before that, I founded CloutSites LLC and led end-to-end client work—everything from UI and content systems to integrations, analytics, and the unglamorous IT glue that keeps a business running. Client work is paused while I focus on independent projects.",
    },
    {
      id: "about-personal",
      text: "Outside of work, I geek out on hardware, games, watches, and good design. I travel often—sometimes for nature, sometimes for cities—and I like bringing those aesthetics back into how I think about product and interface design.",
    },
  ],
  links: [
    {
      label: "Email",
      href: "mailto:masonpotter1@gmail.com",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/masonpotter-43/",
    },
    {
      label: "Resume highlights",
      href: "#experience",
    },
  ] satisfies Link[],
} as const;

export const stats = [
  { value: "1.6M", label: "weekly doc throughput (ATS web apps, past)" },
  { value: "Hours → min", label: "Selenium regression runtime (past)" },
  { value: "100+", label: "page healthcare site rebuild (past)" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    description: "Core programming and data tools.",
    skills: ["JavaScript", "JSX", "C#", "PHP", "Python", "Kotlin", "SQL"],
  },
  {
    title: "Front-End & Web",
    description: "Interactive interfaces and modern web delivery.",
    skills: ["React", "Bootstrap", "CSS", "HTML", "Responsive Design", "Wix"],
  },
  {
    title: "Backend & Data",
    description: "Business logic, persistence, and integrations.",
    skills: ["NodeJS", "Firebase", "MySQL", "NoSQL", "Google Auth"],
  },
  {
    title: "Engineering Practice",
    description: "Maintainable software and workflow quality.",
    skills: [
      "Git",
      "Object Oriented Design",
      "Selenium",
      "Database Design",
      "SEO/SEM",
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "Independent",
    role: "Sabbatical · passion projects",
    dates: "March 2026 – Present",
    summary:
      "Intentional time away from full-time corporate work. Building small projects, studying finance as a hobby, traveling, and resetting.",
    bullets: [
      "Exploring data pipelines and parsing workflows as a learning exercise (FinSignal Engine).",
      "Iterating on this portfolio site as a living playground for UI craft and structured content.",
    ],
    tags: ["Sabbatical", "Travel", "Side projects"],
  },
  {
    company: "Paycom Payroll LLC",
    role: "Software Developer III - ATS Team",
    dates: "May 2025 – March 2026",
    summary:
      "Past role: enterprise applicant tracking software focused on complex hiring workflows and high-throughput document systems.",
    bullets: [
      "Co-developed web applications supporting weekly throughput on the order of 1.6M documents.",
      "Optimized and expanded Selenium regression suites, reducing total testing time from hours to minutes.",
      "Delivered full-stack improvements across PHP, React, and related application layers for ATS workflows.",
    ],
    tags: ["ATS", "PHP", "React", "Selenium", "Enterprise Software"],
  },
  {
    company: "CloutSites LLC",
    role: "Founder",
    dates: "July 2021 – May 2025",
    summary:
      "Independent consulting and end-to-end web work for businesses. Client work is paused and not accepting new clients while I focus on independent projects.",
    bullets: [
      "Owned delivery from discovery to deployment: UI, content, integrations, hosting, and support.",
      "Built practical systems for marketing, operations, and day-to-day business workflows.",
    ],
    tags: ["Consulting", "Founder", "Paused"],
  },
  {
    company: "Hays Medical Spa",
    role: "Web Developer & IT",
    dates: "January 2023 – January 2025",
    summary:
      "Modernized a healthcare web presence and supported the technology operations behind a growing medical practice.",
    bullets: [
      "Rebuilt and modernized a 100-page medical practice website using Wix.",
      "Implemented advanced booking functionality plus Google Ads and Google Analytics integrations.",
      "Supported SEO/SEM campaigns that drove thousands of monthly visits and meaningful incremental revenue.",
      "Maintained office information systems for 20 employees, including email, payroll, and EHR tooling.",
    ],
    tags: ["Healthcare", "Wix", "Google Analytics", "SEO/SEM", "IT"],
  },
  {
    company: "Financial Partners Group",
    role: "Associate / Associate Intern",
    dates: "August 2019 – 2021",
    summary:
      "Blended web maintenance, digital marketing, financial research, and systems modernization in a financial services setting.",
    bullets: [
      "Updated and maintained the firm's website using HTML, JavaScript, CSS, and the Wix platform.",
      "Created and distributed marketing materials through social media, newsletters, and digital ad campaigns.",
      "Maintained data systems, migrated CRMs, and modernized passwordless authentication.",
      "Researched and presented funds, ETFs, and assets using Morningstar, WealthScape, and Orion platforms.",
    ],
    tags: ["Finance", "JavaScript", "CRM", "Marketing", "Research"],
  },
];

export const projects: Project[] = [
  {
    title: "FinSignal Engine",
    subtitle: "Personal exploration project",
    description:
      "A fun personal project exploring how to parse complex SEC filings for real-time financial signal processing—focused on data plumbing, not trading advice.",
    teaser: "Python-first pipelines, structured parsing, and careful scope boundaries for public sharing.",
    details: [
      {
        label: "What it is",
        body: "A small, personal repository focused on ingestion and parsing workflows for SEC-style disclosures, treated as an engineering exercise in messy real-world documents.",
      },
      {
        label: "What is intentionally private",
        body: "Trading strategies, proprietary datasets, and any performance or yield claims stay off the public internet. The public story is architecture and data handling, not returns.",
      },
      {
        label: "Technical shape",
        body: "Emphasis on Python modules for extraction, normalization, and testable parsing steps, with clear boundaries between 'raw document', 'parsed fields', and downstream experiments.",
      },
      {
        label: "Why it exists",
        body: "It is a playground for quantitative finance curiosity: learning how institutional-grade data hygiene feels in code, without turning a portfolio site into a finance blog.",
      },
    ],
    tech: ["Python", "Data pipelines", "Document parsing", "SEC text (research)"],
    status: "Personal exploration",
  },
  {
    title: "SLIP",
    subtitle: "Contactless Contact Sharing",
    description:
      "An Android app for seamless contact exchange using phone-to-phone and phone-to-RFID chip communication.",
    teaser: "Kotlin client + Firebase backend + RFID flows, packaged as a practical networking prototype.",
    details: [
      {
        label: "Problem",
        body: "Sharing contact details quickly in person should not require a fragile chain of QR screenshots, AirDrop roulette, or manual typing.",
      },
      {
        label: "Approach",
        body: "Built an Android-first experience with Google Auth for accounts, Firebase for persistence, and RFID-oriented flows for tap-style exchanges.",
      },
      {
        label: "What shipped",
        body: "A working prototype path for authenticated profiles, secure sign-in, and serverless persistence suitable for demos and iteration.",
      },
      {
        label: "What I would improve next",
        body: "Threat modeling for contact exchange, tighter pairing UX, and clearer abuse-resistance constraints for public deployments.",
      },
    ],
    tech: ["Kotlin", "Firebase", "Google Auth", "RFID", "NoSQL"],
    status: "Academic / Product Prototype",
  },
  {
    title: "Airline DB",
    subtitle: "Simple UI for Complex Database Schema",
    description:
      "A collaborative database project with a MySQL backend, relational schema design, and a UI for complex queries.",
    teaser: "Schema design, relationships, joins, and a UI that makes the SQL legible to humans.",
    details: [
      {
        label: "Goal",
        body: "Demonstrate database design discipline and query thinking with a UI that exposes non-trivial joins without hiding the underlying model.",
      },
      {
        label: "Backend work",
        body: "MySQL schema creation with primary and foreign keys, relationship mapping, and careful normalization choices for reporting-style queries.",
      },
      {
        label: "Frontend work",
        body: "A simple UI layer focused on clarity: showing how complex SQL maps to user-visible results and edge cases.",
      },
      {
        label: "Outcome",
        body: "A credible academic artifact for schema + query competence, with a clean narrative for technical interviews.",
      },
    ],
    tech: ["MySQL", "SQL", "Database Design", "UI"],
    status: "Academic Project",
  },
  {
    title: "Medical Spa Overhaul",
    subtitle: "100-page Healthcare Website Modernization",
    description:
      "A full web modernization effort for a medical practice, pairing website UX with booking, analytics, and marketing systems.",
    teaser: "A business-facing rebuild: booking, analytics, ads measurement, and day-to-day operational realities.",
    details: [
      {
        label: "Business context",
        body: "Medical practices live at the intersection of patient trust, scheduling friction, and marketing measurement. The site has to be credible, fast, and easy to operate.",
      },
      {
        label: "What changed",
        body: "Rebuilt and modernized a large Wix site (100+ pages), improved booking flows, and wired up Google Ads and Google Analytics for meaningful performance visibility.",
      },
      {
        label: "What I owned",
        body: "Hands-on web work plus practical IT support across email, payroll, and EHR-adjacent tooling for a growing team.",
      },
      {
        label: "Results framing",
        body: "Drove thousands of monthly visits and incremental revenue through SEO/SEM execution—exact figures stay in resume conversations when needed.",
      },
    ],
    tech: ["Wix", "Google Ads", "Google Analytics", "SEO/SEM"],
    status: "Professional Work",
  },
  {
    title: "Personal Site",
    subtitle: "Digital Passport Meets Technical Portfolio",
    description:
      "This site: a modern, interactive portfolio designed to show software work, resume credibility, travel, and personality.",
    teaser: "Structured content + React + motion, optimized for quick updates and clean deploys.",
    details: [
      {
        label: "Why it exists",
        body: "A single URL that works for recruiters and friends: credible engineering signal without sanding away personality.",
      },
      {
        label: "Engineering choices",
        body: "React + TypeScript + Vite, content centralized in one module, production build checks, and responsive layout tuned for real phones.",
      },
      {
        label: "What it optimizes for",
        body: "Fast iteration: travel chapters, project case studies, and career updates should be editable without rewiring the layout.",
      },
    ],
    tech: ["React", "TypeScript", "Vite", "CSS"],
    status: "Living Project",
  },
];

export const travelChapters: TravelChapter[] = [
  {
    id: "florence-2022",
    title: "The Florence chapter",
    when: "June 2022 – August 2022",
    where: "Florence, Italy",
    badge: "Study abroad",
    story:
      "Two months at Florence University of the Arts (FUA), with hands-on time at FLY (Fashion Loves You), FUA's creative retail space and lab. It was a structured look at textiles, garment construction, and the architecture of clothing—studied in the middle of a city that treats design like infrastructure.",
    tags: ["FUA", "FLY lab", "fashion", "design", "Italy"],
    accent: "#9fd08f",
    highlights: [
      "Monterosso (coast)",
      "Amalfi Coast",
      "Venice",
      "Florence",
      "Pisa",
    ],
    images: [
      { label: "FLY lab moment", alt: "Placeholder for a photo from the FLY lab" },
      { label: "Florence street texture", alt: "Placeholder for a Florence street photo" },
      { label: "Coastal Italy", alt: "Placeholder for a Mediterranean coastline photo" },
    ],
  },
  {
    id: "us-west-2026",
    title: "American west & sandstone scale",
    when: "Spring 2026",
    where: "Utah · Colorado",
    badge: "Outdoors",
    story:
      "A stretch of trips built around massive natural scale: long hikes, big walls of stone, and the kind of scenery that resets your sense of size.",
    tags: ["hiking", "national parks", "landscape"],
    accent: "#d9a875",
    highlights: ["Zion National Park, UT", "Garden of the Gods, CO"],
    images: [
      { label: "Zion red rock", alt: "Placeholder for a Zion National Park photo" },
      { label: "Garden of the Gods", alt: "Placeholder for a Garden of the Gods photo" },
    ],
  },
  {
    id: "korea-2025",
    title: "The South Korea loop",
    when: "Early 2025",
    where: "South Korea",
    badge: "City energy",
    story:
      "A trip built on contrast: neon density and fast urban rhythm in Seoul, then slower coastal sprawl and markets in Busan. Great food, great trains, and a lot of walking.",
    tags: ["Seoul", "Busan", "food", "transit"],
    accent: "#75c6d9",
    highlights: ["Seoul", "Busan"],
    images: [
      { label: "Seoul night scene", alt: "Placeholder for a Seoul city photo" },
      { label: "Busan coastline", alt: "Placeholder for a Busan photo" },
    ],
  },
  {
    id: "europe-2024",
    title: "European autumn",
    when: "Fall 2024",
    where: "Netherlands · France",
    badge: "Cities",
    story:
      "A classic autumn circuit: Amsterdam's canals and bike-forward street life, then Paris for architecture, cafés, and wandering with friends.",
    tags: ["Amsterdam", "Paris", "architecture", "cafés"],
    accent: "#c7b8e8",
    highlights: ["Amsterdam, Netherlands", "Paris, France"],
    images: [
      { label: "Amsterdam canals", alt: "Placeholder for an Amsterdam canals photo" },
      { label: "Paris streets", alt: "Placeholder for a Paris photo" },
    ],
  },
];

export const interests: Interest[] = [
  {
    title: "Custom High-Performance Hardware",
    detail:
      "Systems thinking outside of software: performance, constraints, and clean builds.",
  },
  {
    title: "Mid-Century Industrial Design",
    detail:
      "A design language that balances function, materials, and timeless visual taste.",
  },
  {
    title: "Quantitative Research",
    detail:
      "A natural overlap between finance, data, probability, and better decisions.",
  },
  {
    title: "Fashion & Personal Style",
    detail:
      "The same attention to detail that makes interfaces feel intentional.",
  },
];

export const education = {
  school: "Kansas State University",
  location: "Manhattan, KS",
  degree: "Computer Science, Minor in Entrepreneurship",
  graduation: "Graduation December 2022",
  gpa: "3.0 GPA, 3.0 Major GPA",
  highlights: [
    "STAR Economics, competitively selected based on academic performance",
    "Student Finance Association",
    "Entrepreneurship Study Abroad",
    "Hack K-State participant",
  ],
  courses: [
    "Artificial Intelligence",
    "Social Media Analytics and Web Mining",
    "Database Systems",
    "Programming Language Theory",
    "Algorithms and Data Structures",
  ],
};
