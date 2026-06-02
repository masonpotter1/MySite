import type { TechStackIconId } from "../components/TechIcons";

export const company = {
  name: "Cloutsites",
  descriptor: "Full-Lifecycle Digital Systems",
  /** Shown in footer; HQ optional when you work nationally or remotely */
  location: "Remote-first · Oklahoma City, OK",
  email: "hello@cloutsites.com",
  phone: "",
  heroEyebrow: "Remote-first · enterprise software systems studio",
  tagline: "Engineering Systems Built for Real Operations.",
  valueProposition:
    "We don't just build sites; we build systems. We optimize your backend so your frontend can fly.",
  heroSubtitle:
    "From legacy modernization to high-velocity web applications, we build digital infrastructure that scales. Enterprise-grade software and cloud-native delivery—with collaborative workflows over Zoom, Slack, and shared repos so distance is not a constraint.",
  seoKeywords: [
    "Enterprise software modernization",
    "Cloud-native consulting",
    "Full-stack web application development",
    "Legacy system modernization",
    "React development services",
    "Remote software engineering team",
  ],
};

/** Shown under the intake form; swap mailto for an API when you go production-grade */
export const intakeProductionNotes =
  "Mailto works for early-stage intake: it opens the user's email client with your address pre-filled. For production, replace this with a serverless form (e.g. Vercel server action + Resend), Formspree, or HubSpot—plus honeypot/rate limits and CRM routing.";

/** Plain-language runway before technical sections—especially for non-technical buyers */
export const plainEnglishBridge = {
  eyebrow: "In plain English",
  title: "What we actually do for your business",
  lead:
    "You don't need to speak our stack to work with us. Most engagements boil down to protecting what already earns revenue while upgrading how it runs—or shipping a credible web product on a sane timeline.",
  bullets: [
    "If critical workflows depend on aging software or messy hosting—we stabilize first, then modernize in controlled steps so deadlines and compliance don't slip.",
    "If you need a new site, portal, or internal tool—we design and ship it to stay fast, accessible, and maintainable—remote collaboration included.",
    "If you're unsure where to start—we run a focused discovery so scope, risk, and sequencing match your reality—not a generic roadmap.",
  ],
  footer:
    "Below you'll see how we prove releases and which tools we use. Expand any \"technical detail\" section when you want depth—or skim the headlines.",
};

/** Truthful vendor signals for procurement-minded buyers—edit items as your practice evolves */
export const credibilityStrip = {
  eyebrow: "For leadership & procurement",
  title: "How we engage—without theatre",
  subtitle:
    "Remote-first delivery with clear checkpoints. Everything here is honest positioning you can align with questionnaires and security reviews.",
  items: [
    {
      title: "Discovery-led",
      body: "We clarify business outcomes, constraints, and risk before committing build scope—so estimates map to something measurable.",
    },
    {
      title: "Stakeholder-friendly communication",
      body: "Engineering detail when your technical team needs it; plain-language summaries when leadership needs the tradeoffs—not buzzwords.",
    },
    {
      title: "Security & privacy aware",
      body: "We treat access to your systems and data with least-privilege discipline. Review the privacy policy linked in the site footer; request vendor diligence artifacts when your procurement process requires them.",
    },
    {
      title: "Transparent next step",
      body: "Intake captures scope and opens a structured email to our team today. As volume grows, we can route to calendar booking, CRM, or formal SOW—without changing how you evaluate fit.",
    },
  ],
};

export const navigation = [
  { label: "How we work", href: "#how-we-work" },
  { label: "Services", href: "#services" },
  { label: "Reliability", href: "#reliability" },
  { label: "Stack", href: "#stack" },
  { label: "Case studies", href: "#case-studies" },
  { label: "Standards", href: "#standards" },
  { label: "Intake", href: "#intake" },
];

export const proofStats = [
  {
    value: "2",
    label: "delivery tracks",
    detail: "Modernize existing systems or launch new products without confusing the buying path.",
  },
  {
    value: "7",
    label: "release gates",
    detail: "Scope, architecture, security, observability, E2E testing, performance, and handoff.",
  },
  {
    value: "<1s",
    label: "static target",
    detail: "Lean frontends, pre-renderable pages, optimized assets, and Core Web Vitals discipline.",
  },
];

export const serviceTracks = [
  {
    id: "modernization",
    eyebrow: "Track A",
    title: "Enterprise Modernization",
    summary:
      "For teams that have valuable software trapped in brittle deployments, slow release cycles, or aging architecture.",
    outcomes: [
      "Refactor monoliths into clearer service boundaries without breaking revenue-critical workflows.",
      "Move on-prem or pet-server workloads toward Docker, Kubernetes, and repeatable CI/CD.",
      "Instrument systems with Datadog dashboards, alerts, logs, and traces that operators can trust.",
      "Reduce technical debt while preserving the business logic that already works.",
    ],
    diagnostics: ["Legacy PHP/C#", "SQL performance", "Containerization", "Observability", "Release safety"],
  },
  {
    id: "growth",
    eyebrow: "Track B",
    title: "Digital Growth & Product",
    summary:
      "For founders and operators who need a fast, credible web application that can evolve past launch day.",
    outcomes: [
      "Build high-performance React interfaces with content and component systems that are easy to extend.",
      "Ship custom PHP/Laravel backends where business workflows require more than a landing page.",
      "Deploy on Vercel or cloud-native infrastructure with caching, preview builds, and rollback paths.",
      "Create launch-ready funnels that connect marketing pages, product flows, and lead capture.",
    ],
    diagnostics: ["React", "Laravel", "Vercel", "API design", "Conversion paths"],
  },
];

export const reliabilityChecks = [
  "End-to-end Selenium coverage for critical revenue and lead flows.",
  "Smoke tests for contact forms, routing, analytics, and deployment health.",
  "Structured QA checklists that map every release back to user-visible risk.",
  "Performance budgets for JavaScript, images, fonts, and third-party scripts.",
  "Observability handoff with owners, dashboards, alert thresholds, and rollback notes.",
];

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
    description: "Interactive product UIs, dashboards, and high-conversion marketing surfaces.",
    focus: ["Design systems", "Performance budgets", "Accessible components"],
  },
  {
    id: "php",
    name: "PHP / Laravel",
    category: "Backend",
    description: "Custom business workflows, CMS integrations, and durable server-side applications.",
    focus: ["Domain modeling", "Queues & jobs", "Secure APIs"],
  },
  {
    id: "csharp",
    name: "C#",
    category: "Enterprise",
    description: "Modernization support for established internal platforms and service layers.",
    focus: ["Service extraction", "Interop paths", "Operational hardening"],
  },
  {
    id: "sql",
    name: "SQL",
    category: "Data",
    description: "Schema cleanup, reporting paths, query tuning, and migration planning.",
    focus: ["Indexing strategy", "Migration safety", "Reporting performance"],
  },
  {
    id: "docker",
    name: "Docker",
    category: "Infrastructure",
    description: "Repeatable builds, local parity, and cleaner deployment boundaries.",
    focus: ["Immutable artifacts", "Secrets hygiene", "CI parity"],
  },
  {
    id: "k8s",
    name: "Kubernetes",
    category: "Cloud",
    description: "Orchestration strategy for systems that have outgrown single-server deployments.",
    focus: ["Rollouts & rollbacks", "Resource limits", "Ingress & TLS"],
  },
  {
    id: "datadog",
    name: "Datadog",
    category: "Observability",
    description: "Metrics, traces, logs, dashboards, and incident-ready alerting.",
    focus: ["SLOs", "Golden signals", "On-call runbooks"],
  },
  {
    id: "selenium",
    name: "Selenium",
    category: "QA",
    description: "Browser-level regression coverage for the paths that must never silently fail.",
    focus: ["Critical paths", "Smoke suites", "Release gates"],
  },
  {
    id: "vercel",
    name: "Vercel",
    category: "Delivery",
    description: "Fast previews, edge delivery, and production deploys for modern React sites.",
    focus: ["Preview URLs", "Edge caching", "Rollback-friendly deploys"],
  },
];

export const caseStudies = [
  {
    title: "Containerize a legacy operations platform",
    metric: "Target: 40% lower server cost",
    before: "Hand-managed servers, undocumented deploys, limited monitoring, and fragile release windows.",
    after:
      "Dockerized services, Kubernetes-ready deployment plan, Datadog visibility, and rollback documentation.",
  },
  {
    title: "Rebuild a lead funnel as a web application",
    metric: "Target: sub-1s first load",
    before: "Static pages with unclear CTAs, duplicated content, and no path from interest to qualified intake.",
    after:
      "React/Vercel funnel, structured service pages, intake routing, analytics events, and conversion copy.",
  },
  {
    title: "Stabilize a release process before growth",
    metric: "Target: production-ready day one",
    before: "Manual regression checks, inconsistent QA notes, and no confidence around high-risk changes.",
    after:
      "Selenium test suite, smoke checks, deployment checklist, and risk-based release signoff.",
  },
];

export const processSteps = [
  {
    title: "Diagnose",
    body: "Clarify the business problem, existing architecture, buyer path, and risk surface before writing code.",
  },
  {
    title: "Architect",
    body: "Define the smallest durable system: data model, hosting, observability, QA, and rollout plan.",
  },
  {
    title: "Build",
    body: "Ship in reviewable increments with preview links, performance budgets, and clear acceptance criteria.",
  },
  {
    title: "Harden",
    body: "Add Selenium coverage, Datadog handoff, deployment notes, and operational ownership.",
  },
];

export const intakeOptions = [
  {
    id: "modernize",
    label: "I need to fix an old system",
    description:
      "Legacy code, unreliable deploys, infrastructure drift, slow databases, or missing observability.",
    recommendedTrack: "Enterprise Modernization",
  },
  {
    id: "build",
    label: "I need to build a new product",
    description:
      "A new website, app, portal, internal tool, MVP, customer workflow, or scalable marketing funnel.",
    recommendedTrack: "Digital Growth & Product",
  },
  {
    id: "unsure",
    label: "I know the outcome, not the technical path",
    description:
      "Bring the business goal and constraints. Cloutsites can translate it into a practical build plan.",
    recommendedTrack: "Discovery Sprint",
  },
] as const;

export type IntakeOptionId = (typeof intakeOptions)[number]["id"];

export const engineeringStandards = {
  eyebrow: "How we think",
  title:
    "Technical debt reduction, architectural integrity, and scalable infrastructure—without the agency fluff.",
  intro:
    "Cloutsites is built for operators who need proof: measurable releases, honest tradeoffs, and systems that stay understandable after handoff.",
  columns: [
    {
      title: "Outcomes we engineer for",
      items: [
        "Technical debt reduction that preserves revenue workflows while lowering operational drag.",
        "Architectural integrity: clear boundaries, explicit contracts, and migration paths you can defend.",
        "Scalable infrastructure that matches real traffic, team size, and compliance reality—not buzzwords.",
      ],
    },
    {
      title: "Delivery discipline",
      items: [
        "Performance budgets, lean bundles, and Core Web Vitals discipline to keep pages fast on real devices.",
        "Dual-track discovery so modernization buyers and new-product buyers get the right questions early.",
        "Case studies published as verified before/after narratives—not placeholder metrics without proof.",
      ],
    },
    {
      title: "What we disclose up front",
      items: [
        "Hard numbers in public case studies require client permission, measurement, and anonymization where needed.",
        "Production intake should add spam protection, CRM routing, and server-side validation when you scale volume.",
        "Kubernetes, cost, and uptime claims stay tied to discovery artifacts—not slide-deck promises.",
      ],
    },
  ],
};
