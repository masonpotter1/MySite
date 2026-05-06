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

export type TravelSpot = {
  id: string;
  name: string;
  when?: string;
  story: string;
  tags: string[];
  highlights?: string[];
  images: TravelImagePlaceholder[];
};

export type TravelCountry = {
  id: string;
  name: string;
  flag?: string;
  when?: string;
  intro?: string;
  spots: TravelSpot[];
};

export type TravelRegion = {
  id: string;
  label: string;
  title: string;
  intro: string;
  accent: string;
  countries: TravelCountry[];
};

export type Interest = {
  title: string;
  detail: string;
};

export type TinkeringItem = {
  id: string;
  label: string;
  what: string;
  why: string;
};

export const profile = {
  name: "Mason Potter",
  pronouns: "He/Him",
  /** Short line under name in the top bar */
  title: "Software engineer",
  /** Credential line for recruiters */
  lastRoleTitle: "Software Developer III",
  lastRoleCompany: "Paycom",
  specialty: "PHP | React | Full Stack | ATS (past)",
  location: "Oklahoma City, Oklahoma",
  email: "masonpotter1@gmail.com",
  educationSchool: "Kansas State University",
  educationMajor: "B.S. Computer Science",
  educationMinor: "Minor in Entrepreneurship",
  graduation: "December 2022",
  statusLine: "Building, learning, traveling—at an intentional pace",
  headline:
    "Full-stack engineer with enterprise-scale delivery experience; currently focused on personal projects, lightweight quantitative finance exploration, and travel.",
  intro:
    "I care about systems that scale, interfaces that feel intentional, and engineering tied to real business outcomes. I am taking time away from a traditional schedule—still coding, still curious, and open to the right conversation when it aligns.",
  tinkeringItems: [
    {
      id: "sec-parse",
      label: "SEC filing parsing",
      what: "Structured text extraction from long, messy regulatory documents.",
      why: "Good practice in real-world data hygiene, normalization, and testable parsing pipelines.",
    },
    {
      id: "quant-hobby",
      label: "Quant finance (hobby)",
      what: "Lightweight research workflows around market structure and disclosure signals.",
      why: "A playground for probability, careful assumptions, and separating signal from story.",
    },
    {
      id: "greeks",
      label: "Options greeks (learning)",
      what: "Studying how derivatives sensitivities behave as inputs move.",
      why: "Builds intuition for risk, convexity, and how models behave under stress.",
    },
    {
      id: "python-pipes",
      label: "Python data pipelines",
      what: "Small batch jobs: ingest, clean, validate, and version outputs.",
      why: "The boring middle of data work is where reliability is won or lost.",
    },
    {
      id: "uiux",
      label: "UI / UX craft",
      what: "Typography, spacing, motion, and interaction details on this site.",
      why: "Polish is a forcing function for clarity—if the UI is fuzzy, the thinking probably is too.",
    },
    {
      id: "horology",
      label: "Horology",
      what: "Mechanical watches as tiny engineered systems.",
      why: "A reminder that constraints, tolerances, and finishing details compound into something you can feel.",
    },
  ] satisfies TinkeringItem[],
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
      label: "Resume (PDF)",
      href: "/resume.pdf",
    },
    {
      label: "Experience (on-page)",
      href: "#experience",
    },
  ] satisfies Link[],
} as const;

export const stats = [
  { value: "1.6M", label: "weekly documents processed (ATS apps, past role)" },
  { value: "Hours → min", label: "Selenium regression runs shortened (past)" },
  { value: "100+", label: "healthcare site pages modernized (past)" },
];

/** Travel section headings + sidebar—edit here to match README tone */
export const travelSectionIntro = {
  eyebrow: "Travel log",
  title: "Places that shaped perspective—study abroad, cities, and trails.",
  body:
    "For recruiters: quick proof of adaptability, curiosity, and follow-through outside the office. For everyone else: stories behind the stamps.",
} as const;

export const passportSidebarCopy = {
  stampLabel: "Travel log",
  sidebarTitle: "How this section is organized",
  sidebarLede:
    "Broad regions first, then countries and stops. Each card blends notes with photo placeholders you can replace anytime.",
  jumpLabel: "Jump to a region",
  homeBaseLabel: "Home base",
  photoNote: "Photos are placeholders—swap them in when you curate the set.",
} as const;

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
    role: "Independent projects",
    dates: "March 2026 – Present",
    summary:
      "Dedicated stretch for independent builds, travel, and structured learning—not a second full-time job.",
    bullets: [
      "Exploring document parsing and data pipelines as an engineering exercise (FinSignal Engine—personal).",
      "Shipping and refining this portfolio as a living codebase for UI craft and maintainable content.",
    ],
    tags: ["Side projects", "Travel", "Learning"],
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
    subtitle: "Portfolio & travel log (this site)",
    description:
      "A modern single-page portfolio: engineering highlights, résumé-adjacent credibility, travel context, and personality—easy to update from structured content.",
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

export const travelRegions: TravelRegion[] = [
  {
    id: "north-america",
    label: "Focus",
    title: "United States & nearby",
    intro:
      "Trips close to home: Kansas roots, national parks, domestic city stops, and occasional warm-water escapes.",
    accent: "#d9a875",
    countries: [
      {
        id: "usa",
        name: "United States",
        flag: "🇺🇸",
        intro: "Highlights across the Lower 48—outdoors first, cities when the schedule allows.",
        spots: [
          {
            id: "usa-mhk",
            name: "Manhattan, KS (MHK)",
            story: "Skydiving out of MHK: a ridiculous amount of fun, a clean horizon, and a good reminder that adrenaline pairs well with small-town runways.",
            tags: ["skydiving", "K-State country", "friends"],
            images: [{ label: "Drop zone", alt: "Placeholder for skydiving / MHK photo" }],
          },
          {
            id: "usa-parks",
            name: "National parks & sandstone",
            when: "Spring 2026",
            story:
              "Utah and Colorado at full scale: Zion for towering red walls, Garden of the Gods for surreal rock geometry, and the kind of hiking days that feel like resetting the OS.",
            tags: ["Zion", "Garden of the Gods", "hiking", "landscape"],
            highlights: ["Zion National Park, UT", "Garden of the Gods, CO"],
            images: [
              { label: "Zion", alt: "Placeholder for Zion National Park photo" },
              { label: "Garden of the Gods", alt: "Placeholder for Garden of the Gods photo" },
            ],
          },
          {
            id: "usa-cities",
            name: "City hops",
            story: "Quick domestic runs when you want energy without a passport: Miami heat and humidity, Dallas sprawl and steakhouse logistics, both good for people-watching.",
            tags: ["Miami", "Dallas", "city energy"],
            images: [
              { label: "Miami", alt: "Placeholder for Miami photo" },
              { label: "Dallas", alt: "Placeholder for Dallas photo" },
            ],
          },
        ],
      },
      {
        id: "mexico-caribbean",
        name: "Mexico & the Caribbean",
        flag: "🇲🇽",
        intro: "Warm water, slower clocks, and coastlines that look edited even in real life.",
        spots: [
          {
            id: "mx-mahahual",
            name: "Mahahual, Mexico",
            story: "Tropical coastlines and relaxed beach-town energy—good tacos, easy snorkeling, and the kind of blue water that makes you stop checking your phone.",
            tags: ["beach", "Mexico", "slow travel"],
            images: [{ label: "Mahahual coast", alt: "Placeholder for Mahahual beach photo" }],
          },
          {
            id: "sxm",
            name: "St. Martin / Sint Maarten",
            story: "Island hopping energy: vivid blue water, coastal roads, and the small delight of two cultures sharing one rock.",
            tags: ["Caribbean", "island", "coast"],
            images: [{ label: "Caribbean water", alt: "Placeholder for St. Martin / Sint Maarten photo" }],
          },
        ],
      },
    ],
  },
  {
    id: "europe",
    label: "Focus",
    title: "Europe",
    intro:
      "Study abroad in Italy, then return trips for autumn cities and canal skylines—architecture, food, and how different cultures approach craft.",
    accent: "#c7b8e8",
    countries: [
      {
        id: "italy",
        name: "Italy",
        flag: "🇮🇹",
        when: "Summer 2022",
        intro:
          "Florence as a home base while studying at FUA and working in the FLY lab—then weekends that turned into a greatest-hits loop across Italy.",
        spots: [
          {
            id: "it-florence",
            name: "Florence",
            story:
              "Renaissance streets as daily context: studying fashion at Florence University of the Arts (FUA) and spending real time in FLY (Fashion Loves You), FUA's creative retail space and lab.",
            tags: ["FUA", "FLY lab", "Renaissance", "fashion"],
            images: [
              { label: "FLY lab", alt: "Placeholder for FLY lab photo" },
              { label: "Florence streets", alt: "Placeholder for Florence street photo" },
            ],
          },
          {
            id: "it-rome",
            name: "Rome",
            story: "Classic historic weight: big monuments, busy piazzas, and the kind of scale that makes you feel small in the best way.",
            tags: ["Colosseum", "history", "architecture"],
            images: [{ label: "Rome", alt: "Placeholder for Rome photo" }],
          },
          {
            id: "it-pisa",
            name: "Pisa",
            story: "The quintessential leaning tower shot—and the silly joy of watching everyone do the same pose from slightly different angles.",
            tags: ["Pisa", "icons", "travel comedy"],
            images: [{ label: "Leaning Tower", alt: "Placeholder for Pisa photo" }],
          },
          {
            id: "it-coast",
            name: "Coastlines: Amalfi & Cinque Terre",
            story:
              "Amalfi for sweeping drops and drama, Cinque Terre (Monterosso) for cliffside color and tight coastal trails—Italy doing what Italy does best.",
            tags: ["Amalfi Coast", "Cinque Terre", "Monterosso", "coast"],
            images: [
              { label: "Amalfi", alt: "Placeholder for Amalfi Coast photo" },
              { label: "Cinque Terre", alt: "Placeholder for Cinque Terre photo" },
            ],
          },
          {
            id: "it-venice",
            name: "Venice",
            story: "Canals as infrastructure: tight alleys, vaporetto logistics, and golden light bouncing off brick and water.",
            tags: ["Venice", "canals", "light"],
            images: [{ label: "Venice canals", alt: "Placeholder for Venice canal photo" }],
          },
        ],
      },
      {
        id: "france",
        name: "France",
        flag: "🇫🇷",
        when: "Fall 2024",
        spots: [
          {
            id: "fr-paris",
            name: "Paris",
            story:
              "Classic Parisian architecture and heavy-hitters like the Eiffel Tower and Arc de Triomphe—plus the smaller moments: cafés, late walks, and the rhythm of a city built for flaneuring.",
            tags: ["Paris", "architecture", "cafés"],
            images: [
              { label: "Eiffel Tower", alt: "Placeholder for Eiffel Tower photo" },
              { label: "Paris streets", alt: "Placeholder for Paris street photo" },
            ],
          },
        ],
      },
      {
        id: "netherlands",
        name: "The Netherlands",
        flag: "🇳🇱",
        when: "Fall 2024",
        spots: [
          {
            id: "nl-amsterdam",
            name: "Amsterdam",
            story:
              "Biking culture, historic brick buildings, and golden sunsets reflecting off canal skylines—movement and texture everywhere you look.",
            tags: ["Amsterdam", "canals", "bikes", "golden hour"],
            images: [{ label: "Amsterdam canals", alt: "Placeholder for Amsterdam canals photo" }],
          },
          {
            id: "nl-rotterdam",
            name: "Rotterdam",
            story:
              "A sharp architectural shift from Amsterdam: modern rebuilt skyline, maritime energy, and a city that feels intentionally future-forward.",
            tags: ["Rotterdam", "architecture", "harbor"],
            images: [{ label: "Rotterdam skyline", alt: "Placeholder for Rotterdam photo" }],
          },
        ],
      },
    ],
  },
  {
    id: "asia",
    label: "Focus",
    title: "Asia",
    intro:
      "High-energy cities, deep tradition, and meals worth building an itinerary around.",
    accent: "#75c6d9",
    countries: [
      {
        id: "korea",
        name: "South Korea",
        flag: "🇰🇷",
        when: "Early 2025",
        intro: "A loop built on contrast: neon density and temples, then slower coastal sprawl.",
        spots: [
          {
            id: "kr-seoul",
            name: "Seoul",
            story:
              "High-energy cityscapes, vibrant streets, and striking historic temples set against a modern skyline—tradition and tech culture in the same frame.",
            tags: ["Seoul", "temples", "night city"],
            images: [{ label: "Seoul", alt: "Placeholder for Seoul photo" }],
          },
          {
            id: "kr-busan",
            name: "Busan",
            story: "Sprawling coastal views and relaxed seaside energy—markets, ocean air, and a slower gear after Seoul.",
            tags: ["Busan", "coast", "markets"],
            images: [{ label: "Busan", alt: "Placeholder for Busan coastline photo" }],
          },
        ],
      },
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
    title: "Hiking & National Parks",
    detail:
      "Long days on sandstone and ridgelines—Zion, Angels Landing, Garden of the Gods, and the kind of trails where exposure and payoff show up in the same mile.",
  },
  {
    title: "Quantitative Research",
    detail:
      "A natural overlap between finance, data, probability, and better decisions.",
  },
  {
    title: "PC Gaming & Hardware Modding",
    detail:
      "Competitive matches, survival games, and the endless side quest of tuning a rig—thermal headroom, clean cable runs, and small upgrades that make everything feel snappier.",
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
