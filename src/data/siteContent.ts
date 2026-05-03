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

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  impact: string;
  tech: string[];
  status: string;
};

export type TravelDestination = {
  city: string;
  country: string;
  badge: string;
  story: string;
  tags: string[];
  accent: string;
};

export type Interest = {
  title: string;
  detail: string;
};

export const profile = {
  name: "Mason Potter",
  pronouns: "He/Him",
  title: "Software Developer III",
  company: "Paycom",
  specialty: "PHP | React | Full Stack Development | ATS",
  location: "Oklahoma City, Oklahoma",
  email: "masonpotter1@gmail.com",
  phone: "Available on resume",
  education:
    "Kansas State University - Computer Science, Minor in Entrepreneurship",
  graduation: "December 2022",
  headline:
    "Full-stack developer building practical software for complex workflows, with a personal edge shaped by travel, design, and entrepreneurship.",
  intro:
    "I build scalable business software, polished web experiences, and tools that make complicated workflows easier to use. My background spans enterprise recruiting systems, healthcare web platforms, financial services, and founder-led consulting work.",
  links: [
    {
      label: "Email",
      href: "mailto:masonpotter1@gmail.com",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/mason-potter-515a25152",
    },
    {
      label: "Resume highlights",
      href: "#experience",
    },
  ] satisfies Link[],
};

export const stats = [
  { value: "1.6M", label: "expected weekly document throughput" },
  { value: "100+", label: "page medical website rebuilt" },
  { value: "20", label: "employee office systems supported" },
  { value: "3", label: "signature travel stories to start" },
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
    company: "Paycom Payroll LLC",
    role: "Software Developer III - ATS Team",
    dates: "May 2025 - March 2026",
    summary:
      "Enterprise applicant tracking software focused on complex hiring workflows and high-throughput document systems.",
    bullets: [
      "Engineered and optimized talent acquisition infrastructure for enterprise-scale organizations.",
      "Co-developed a scalable web application with Data Science teams, targeting expected weekly throughput of 1.6M documents with verified accuracy.",
      "Optimized and expanded Selenium regression suites, reducing total testing time from hours to minutes.",
    ],
    tags: ["ATS", "PHP", "React", "Selenium", "Enterprise Software"],
  },
  {
    company: "Hays Medical Spa",
    role: "Web Developer & IT",
    dates: "January 2023 - January 2025",
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
    dates: "August 2019 - 2021",
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
    title: "SLIP",
    subtitle: "Contactless Contact Sharing",
    description:
      "An Android app for seamless contact exchange using phone-to-phone and phone-to-RFID chip communication.",
    impact:
      "Combined Kotlin, Firebase, Google Auth, RFID flows, and serverless persistence into a practical networking tool.",
    tech: ["Kotlin", "Firebase", "Google Auth", "RFID", "NoSQL"],
    status: "Academic / Product Prototype",
  },
  {
    title: "Airline DB",
    subtitle: "Simple UI for Complex Database Schema",
    description:
      "A collaborative database project with a MySQL backend, relational schema design, and a UI for complex queries.",
    impact:
      "Showcased schema creation, primary and foreign keys, relationship mapping, joins, and query optimization.",
    tech: ["MySQL", "SQL", "Database Design", "UI"],
    status: "Academic Project",
  },
  {
    title: "Medical Spa Overhaul",
    subtitle: "100-page Healthcare Website Modernization",
    description:
      "A full web modernization effort for a medical practice, pairing website UX with booking, analytics, and marketing systems.",
    impact:
      "Connected patient acquisition, digital ads, analytics, booking, and day-to-day operations in one improved web presence.",
    tech: ["Wix", "Google Ads", "Google Analytics", "SEO/SEM"],
    status: "Professional Work",
  },
  {
    title: "Personal Site",
    subtitle: "Digital Passport Meets Technical Portfolio",
    description:
      "This site: a modern, interactive portfolio designed to show software work, resume credibility, travel, and personality.",
    impact:
      "Built to be easy to update through content files and polished enough to send to recruiters or friends.",
    tech: ["React", "TypeScript", "Vite", "CSS"],
    status: "Living Project",
  },
];

export const travel: TravelDestination[] = [
  {
    city: "Amsterdam",
    country: "Netherlands",
    badge: "Favorite City",
    story:
      "Canals, bikes, neighborhoods, and a relaxed creative energy that made the city instantly memorable.",
    tags: ["favorite city", "canals", "walkable", "design"],
    accent: "#75c6d9",
  },
  {
    city: "Paris",
    country: "France",
    badge: "Friends Trip",
    story:
      "An iconic city made better by the people it was shared with: long walks, late meals, architecture, and memories that feel bigger with friends.",
    tags: ["friends", "architecture", "food", "city energy"],
    accent: "#d9a875",
  },
  {
    city: "Italy",
    country: "Italy",
    badge: "Fashion + Culture",
    story:
      "Travel through style, food, history, and everyday design. Italy connects fashion and culture in a way that feels practical and alive.",
    tags: ["fashion", "culture", "style", "food"],
    accent: "#9fd08f",
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
