import type { TechStackIconId } from "../components/TechIcons";

export const company = {
  name: "CloutSites",
  descriptor: "Websites, Marketing & Practical IT Help",
  location: "Oklahoma City, OK · Local or remote support",
  email: "masonpotter1@gmail.com",
  phone: "",
  heroEyebrow: "Cloutsites · digital help for small businesses",
  tagline: "Websites, marketing, and practical IT help for small businesses.",
  valueProposition:
    "We help owners get online, look credible, run smoother, and clean up the digital systems they already depend on.",
  heroSubtitle:
    "Cloutsites works with family-owned businesses, local operators, student founders, and early-stage teams that need clear guidance, polished web work, and someone technical enough to fix the messy parts.",
  seoKeywords: [
    "Small business websites",
    "Social media and advertising help",
    "Microsoft account setup",
    "Business IT cleanup",
    "Website rebuilds Oklahoma",
    "Systems consulting for small business",
  ],
};

export const navigation = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const audienceGroups = [
  {
    title: "Family-owned businesses",
    body: "Shops, practices, and service companies that need practical help without agency theatre.",
  },
  {
    title: "Local service businesses",
    body: "Contractors, clinics, wellness teams, and operators who need leads, booking, and trust.",
  },
  {
    title: "Medical, spa, and wellness teams",
    body: "Teams that need credible pages, smoother scheduling, and analytics that explain what works.",
  },
  {
    title: "Student founders and early-stage projects",
    body: "New ideas that need a credible first site, landing page, or simple operating system.",
  },
  {
    title: "Teams with outdated or messy tech",
    body: "Businesses stuck with confusing domains, email issues, old sites, or workflows nobody owns.",
  },
] as const;

export const proofStats = [
  {
    value: "4",
    label: "service lanes",
    detail: "Websites, marketing, business IT, and systems consulting with one clear entry point.",
  },
  {
    value: "100+",
    label: "pages modernized",
    detail: "Healthcare web modernization experience with booking, analytics, ads, and operational support.",
  },
  {
    value: "1",
    label: "owner-led point of contact",
    detail: "Clients work close to the person responsible for architecture, implementation, and quality.",
  },
] as const;

export type ServiceId = "websites" | "marketing" | "business-it" | "systems-consulting";

export type ServiceCard = {
  id: ServiceId;
  eyebrow: string;
  title: string;
  shortTitle: string;
  path: `/services/${ServiceId}`;
  summary: string;
  outcomes: string[];
  diagnostics: string[];
};

export const serviceCards: ServiceCard[] = [
  {
    id: "websites",
    eyebrow: "Service 01",
    title: "Websites that make the business look real",
    shortTitle: "Websites",
    path: "/services/websites",
    summary:
      "Design, rebuild, or maintain the site customers judge first: fast pages, clear copy, mobile-friendly layouts, and contact or booking paths that actually work.",
    outcomes: [
      "New business websites, landing pages, and refreshes for outdated sites.",
      "Mobile-first layouts with clear calls to call, book, message, or request a quote.",
      "Contact forms, booking links, map/location details, and analytics basics.",
      "Maintenance plans for updates, page changes, and launch cleanup.",
    ],
    diagnostics: ["Website design", "Rebuilds", "Landing pages", "Forms", "Mobile UX"],
  },
  {
    id: "marketing",
    eyebrow: "Service 02",
    title: "Social media, ads, and content support",
    shortTitle: "Marketing",
    path: "/services/marketing",
    summary:
      "A practical marketing layer for owners who need help staying visible: social posts, campaign pages, basic ads, SEO cleanup, and analytics that make sense.",
    outcomes: [
      "Social media setup, content calendars, and post/campaign support.",
      "Google Ads or social ad landing pages connected to real contact paths.",
      "SEO basics: titles, descriptions, local search signals, and page structure.",
      "Analytics setup so owners can see which channels are creating interest.",
    ],
    diagnostics: ["Social media", "Ads", "SEO", "Analytics", "Content support"],
  },
  {
    id: "business-it",
    eyebrow: "Service 03",
    title: "Business IT setup without the confusion",
    shortTitle: "Business IT",
    path: "/services/business-it",
    summary:
      "Help with the everyday tech stack that keeps a small business running: Microsoft accounts, email, domains, access cleanup, and basic process documentation.",
    outcomes: [
      "Microsoft 365, email, user accounts, and shared mailbox setup.",
      "Domain, DNS, website hosting, and business email troubleshooting.",
      "Access cleanup for former employees, vendors, and shared passwords.",
      "Simple documentation so the business knows who owns what after handoff.",
    ],
    diagnostics: ["Microsoft 365", "Email", "Domains", "Access cleanup", "IT basics"],
  },
  {
    id: "systems-consulting",
    eyebrow: "Service 04",
    title: "Systems consulting for messy workflows",
    shortTitle: "Systems consulting",
    path: "/services/systems-consulting",
    summary:
      "For deeper problems: outdated tools, brittle workflows, integrations, data cleanup, automation, QA, and modernization work that needs real software judgment.",
    outcomes: [
      "Map old workflows and separate what needs replacing from what still works.",
      "Improve integrations, internal tools, reporting paths, and data handoffs.",
      "Modernize legacy PHP, C#, SQL, hosting, or deployment patterns in controlled steps.",
      "Add QA, monitoring, performance budgets, and release notes where risk is high.",
    ],
    diagnostics: ["Workflow cleanup", "Integrations", "Automation", "QA", "Modernization"],
  },
];

export const servicePages: Record<
  ServiceId,
  {
    hero: string;
    lead: string;
    commonProblems: string[];
    deliverables: string[];
    bestFit: string[];
    nextStep: string;
  }
> = {
  websites: {
    hero: "Business websites that feel current, credible, and easy to use.",
    lead:
      "Most small-business sites do not need complexity first. They need clear messaging, polished mobile pages, fast loading, and a simple path for a customer to take action.",
    commonProblems: [
      "The current site looks outdated or unfinished on phones.",
      "Customers cannot quickly find pricing, services, location, booking, or contact details.",
      "The business has grown, but the website still feels like a placeholder.",
      "Updates are stressful because nobody knows where the content lives.",
    ],
    deliverables: [
      "New site or rebuild plan with page structure, copy direction, and launch checklist.",
      "Mobile-friendly service pages, landing pages, contact flows, and booking links.",
      "Basic SEO metadata, analytics setup, and performance-minded implementation.",
      "Post-launch maintenance plan for updates, page changes, and simple support.",
    ],
    bestFit: [
      "Local service companies and family businesses.",
      "Medical, spa, wellness, and appointment-based teams.",
      "Student founders or early-stage operators who need a serious first impression.",
    ],
    nextStep: "Tell us what the site needs to do and what feels broken today.",
  },
  marketing: {
    hero: "Marketing support that connects attention to real business actions.",
    lead:
      "Cloutsites can help connect your website, social content, ads, SEO basics, and analytics so marketing is easier to manage and easier to understand.",
    commonProblems: [
      "Posts, ads, and the website do not point people toward the same offer.",
      "Campaigns send visitors to generic pages with weak calls to action.",
      "The business is paying for visibility but cannot tell what is working.",
      "SEO and local search basics have been ignored for too long.",
    ],
    deliverables: [
      "Social media and campaign support with clear offers and landing pages.",
      "Google Ads or social ad setup support for practical small-business campaigns.",
      "SEO cleanup for page titles, descriptions, headings, and local search basics.",
      "Analytics events and simple reporting notes owners can actually read.",
    ],
    bestFit: [
      "Businesses trying to turn local awareness into calls, bookings, or leads.",
      "Owners who need help organizing content and campaigns.",
      "Teams that want marketing basics handled without a bloated retainer.",
    ],
    nextStep: "Bring the audience, offer, and channels you are using now.",
  },
  "business-it": {
    hero: "Microsoft, email, domains, and small-business IT cleanup.",
    lead:
      "A surprising amount of business friction comes from basic technology nobody owns. We help clean up accounts, domains, access, and the simple systems your team relies on every day.",
    commonProblems: [
      "The business email or domain setup is confusing or fragile.",
      "Old vendors, employees, or shared logins still have access.",
      "Microsoft accounts, mailboxes, files, and admin ownership are unclear.",
      "Nobody has a clean handoff document for where important accounts live.",
    ],
    deliverables: [
      "Microsoft 365 and email setup or cleanup.",
      "Domain, DNS, hosting, and website account organization.",
      "User access review with safer ownership and cleaner admin roles.",
      "Plain-language documentation for the business owner or office manager.",
    ],
    bestFit: [
      "Small offices without a dedicated IT person.",
      "Businesses changing vendors, staff, domains, or websites.",
      "Owners who want the tech cleaned up before it becomes an emergency.",
    ],
    nextStep: "List the accounts, domains, email tools, and pain points you know about.",
  },
  "systems-consulting": {
    hero: "Consulting for outdated systems, workflows, and deeper technical messes.",
    lead:
      "When a business has outgrown the simple website problem, Cloutsites can step into the current system, map the risk, and modernize the workflow without pretending every project needs enterprise complexity.",
    commonProblems: [
      "A critical workflow depends on old code, spreadsheets, or tools nobody wants to touch.",
      "Data moves manually between systems and mistakes are easy to miss.",
      "Deployments, updates, or integrations feel risky because there is no safety net.",
      "The business needs a technical translator between ownership, vendors, and implementation.",
    ],
    deliverables: [
      "Workflow map and prioritized cleanup plan.",
      "Integration, automation, reporting, or internal-tool improvements.",
      "Legacy PHP, C#, SQL, hosting, or cloud modernization support where needed.",
      "QA, performance, observability, and release checklists for higher-risk changes.",
    ],
    bestFit: [
      "Businesses with old tools that still matter.",
      "Operators who know the outcome but not the technical path.",
      "Teams that need deeper software judgment after the simple fixes are done.",
    ],
    nextStep: "Start with the workflow that creates the most confusion, delay, or risk.",
  },
};

export const whyCloutsites = [
  {
    title: "Practical first",
    body: "We start with what customers, staff, and owners actually need to do. The technology follows the business problem.",
  },
  {
    title: "Small-business friendly",
    body: "Clear language, scoped next steps, and enough structure to feel professional without making every project feel corporate.",
  },
  {
    title: "Technical enough for the deeper issues",
    body: "Websites, accounts, ads, and workflows often connect. Cloutsites can handle the front door and the systems behind it.",
  },
  {
    title: "More than pretty websites",
    body: "Design matters, but the goal is a digital setup that earns trust, captures interest, and is easier to operate after launch.",
  },
] as const;

export const workExamples = [
  {
    title: "Website rebuild for a medical or wellness practice",
    metric: "Proof style: before and after",
    before: "Outdated pages, unclear service paths, weak booking flow, and limited visibility into campaign performance.",
    after:
      "Cleaner pages, improved service structure, booking/contact paths, Google Ads and Analytics support, and easier site updates.",
  },
  {
    title: "Local business digital cleanup",
    metric: "Proof style: operational clarity",
    before: "Domain, email, website, vendor, and account ownership were scattered across people and old tools.",
    after:
      "Documented ownership, cleaner Microsoft/email setup, safer access, and a simple path for future changes.",
  },
  {
    title: "Campaign landing page and lead path",
    metric: "Proof style: launch readiness",
    before: "Ads and social posts sent traffic to generic pages with unclear calls to action.",
    after:
      "Focused landing page, clear offer, contact/booking CTA, analytics events, and follow-up notes for the owner.",
  },
  {
    title: "Existing-system consulting",
    metric: "Proof style: risk reduction",
    before: "Manual workflow, unclear integrations, fragile updates, and no shared understanding of the current system.",
    after:
      "Workflow map, prioritized modernization plan, targeted fixes, QA checklist, and vendor-ready technical notes.",
  },
] as const;

export const processSteps = [
  {
    title: "Listen",
    body: "Understand the business, the customer path, what feels messy today, and what a good outcome would change.",
  },
  {
    title: "Organize",
    body: "Turn the problem into clear service paths, page structure, account cleanup, or a technical plan depending on the job.",
  },
  {
    title: "Build",
    body: "Ship the website, marketing asset, account setup, integration, or workflow improvement in reviewable steps.",
  },
  {
    title: "Test",
    body: "Check mobile layouts, forms, booking links, email flows, analytics, performance, access, and launch risks.",
  },
  {
    title: "Handoff",
    body: "Document what changed, who owns what, how to request updates, and what the next practical improvement should be.",
  },
] as const;

export const intakeOptions = [
  {
    id: "website",
    label: "I need a website or rebuild",
    description: "New site, refresh, landing page, maintenance, forms, booking, or mobile cleanup.",
    recommendedTrack: "Websites",
  },
  {
    id: "marketing",
    label: "I need marketing help",
    description: "Social media, ads, SEO, campaign pages, analytics, or content support.",
    recommendedTrack: "Marketing",
  },
  {
    id: "it",
    label: "I need business IT cleaned up",
    description: "Microsoft accounts, email, domains, access, vendors, or basic tech organization.",
    recommendedTrack: "Business IT",
  },
  {
    id: "systems",
    label: "I need help with an existing system",
    description: "Workflows, integrations, old software, automation, reporting, QA, or modernization.",
    recommendedTrack: "Systems consulting",
  },
] as const;

export type IntakeOptionId = (typeof intakeOptions)[number]["id"];

export const intakeProductionNotes =
  "This early intake opens a structured email. As volume grows, connect it to a server-side form, CRM, spam protection, and calendar routing.";

export const reliabilityChecks = [
  "Mobile checks across small phones, large phones, tablets, and desktop breakpoints.",
  "Contact, booking, email, and lead paths tested before launch.",
  "Basic SEO metadata, analytics, and performance checks for public pages.",
  "Account ownership, access, and handoff notes documented for IT cleanup work.",
  "QA and rollback notes added for deeper systems or workflow changes.",
];

export const engineeringStandards = {
  eyebrow: "For deeper consulting",
  title: "Software judgment when the problem goes past the website.",
  intro:
    "Advanced technical work stays available, but it belongs where clients need it: systems consulting, workflow cleanup, integrations, QA, and modernization.",
  columns: [
    {
      title: "Modernization",
      items: [
        "Legacy PHP, C#, SQL, hosting, and deployment cleanup when current systems still matter.",
        "Controlled changes that preserve business workflows while reducing fragility.",
      ],
    },
    {
      title: "Reliability",
      items: [
        "Selenium, smoke tests, performance budgets, and release checklists for higher-risk launches.",
        "Monitoring and handoff notes where the business needs operational visibility.",
      ],
    },
    {
      title: "Communication",
      items: [
        "Plain-language summaries for owners and technical details for vendors or internal teams.",
        "Honest proof framing: public case studies use verified outcomes, not inflated placeholder metrics.",
      ],
    },
  ],
};

export const techStack: {
  id: TechStackIconId;
  name: string;
  category: string;
  description: string;
  focus: string[];
}[] = [
  {
    id: "react",
    name: "React",
    category: "Frontend",
    description: "Interactive websites, landing pages, dashboards, and polished customer-facing flows.",
    focus: ["Responsive UI", "Accessible components", "Performance-minded pages"],
  },
  {
    id: "php",
    name: "PHP / Laravel",
    category: "Backend",
    description: "Custom business workflows and durable server-side applications when a simple site is not enough.",
    focus: ["Workflow logic", "CMS integrations", "Maintainable APIs"],
  },
  {
    id: "csharp",
    name: "C#",
    category: "Enterprise",
    description: "Modernization support for established internal platforms and service layers.",
    focus: ["Service cleanup", "Interop paths", "Operational hardening"],
  },
  {
    id: "sql",
    name: "SQL",
    category: "Data",
    description: "Reporting paths, schema cleanup, query tuning, and migration planning.",
    focus: ["Data hygiene", "Migration safety", "Reporting performance"],
  },
  {
    id: "docker",
    name: "Docker",
    category: "Infrastructure",
    description: "Repeatable builds and cleaner deployment boundaries for systems work.",
    focus: ["Local parity", "Release artifacts", "Deployment clarity"],
  },
  {
    id: "k8s",
    name: "Kubernetes",
    category: "Cloud",
    description: "Orchestration strategy for systems that truly need it, not as default homepage jargon.",
    focus: ["Rollouts", "Resource limits", "Rollback paths"],
  },
  {
    id: "datadog",
    name: "Datadog",
    category: "Observability",
    description: "Metrics, logs, dashboards, and alerting for systems that need production visibility.",
    focus: ["Dashboards", "Alerts", "Operational handoff"],
  },
  {
    id: "selenium",
    name: "Selenium",
    category: "QA",
    description: "Browser-level regression coverage for contact, booking, checkout, and critical workflows.",
    focus: ["Critical paths", "Smoke tests", "Release confidence"],
  },
  {
    id: "vercel",
    name: "Vercel",
    category: "Delivery",
    description: "Fast previews, static delivery, and rollback-friendly deployments for modern web projects.",
    focus: ["Preview URLs", "Edge delivery", "Launch workflow"],
  },
];

export const caseStudies = workExamples;
