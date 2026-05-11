export const company = {
  name: "Cloutsites",
  descriptor: "Full-Lifecycle Digital Systems",
  location: "Oklahoma City, Oklahoma",
  email: "hello@cloutsites.com",
  phone: "",
  tagline: "Engineering the Future of Oklahoma Business.",
  valueProposition:
    "We don't just build sites; we build systems. We optimize your backend so your frontend can fly.",
  heroSubtitle:
    "From legacy system modernization to high-velocity web applications, we build the digital infrastructure that drives growth. Specialized in enterprise-grade software and cloud-native solutions.",
  seoKeywords: [
    "OKC Custom Software",
    "Oklahoma Cloud Consulting",
    "Full-Stack Development Oklahoma City",
    "Oklahoma City web application development",
    "legacy system modernization Oklahoma",
  ],
};

export const navigation = [
  { label: "Services", href: "#services" },
  { label: "Reliability", href: "#reliability" },
  { label: "Stack", href: "#stack" },
  { label: "Case studies", href: "#case-studies" },
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

export const techStack = [
  {
    name: "React",
    category: "Frontend",
    description: "Interactive product UIs, dashboards, and high-conversion marketing surfaces.",
  },
  {
    name: "PHP / Laravel",
    category: "Backend",
    description: "Custom business workflows, CMS integrations, and durable server-side applications.",
  },
  {
    name: "C#",
    category: "Enterprise",
    description: "Modernization support for established internal platforms and service layers.",
  },
  {
    name: "SQL",
    category: "Data",
    description: "Schema cleanup, reporting paths, query tuning, and migration planning.",
  },
  {
    name: "Docker",
    category: "Infrastructure",
    description: "Repeatable builds, local parity, and cleaner deployment boundaries.",
  },
  {
    name: "Kubernetes",
    category: "Cloud",
    description: "Orchestration strategy for systems that have outgrown single-server deployments.",
  },
  {
    name: "Datadog",
    category: "Observability",
    description: "Metrics, traces, logs, dashboards, and incident-ready alerting.",
  },
  {
    name: "Selenium",
    category: "QA",
    description: "Browser-level regression coverage for the paths that must never silently fail.",
  },
  {
    name: "Vercel",
    category: "Delivery",
    description: "Fast previews, edge delivery, and production deploys for modern React sites.",
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

export const specReview = {
  verdict: "Strong direction with a few launch-scope clarifications.",
  strengths: [
    "The dual-track service model is clear and helps qualify two different buyer intents.",
    "The industrial-tech visual direction fits Oklahoma business modernization without feeling generic.",
    "Reliability, QA, and observability are stronger differentiators than generic agency claims.",
  ],
  improvementsMade: [
    "Converted the sub-1s requirement into static-site performance budgets and Core Web Vitals practices.",
    "Added an explicit intake path that routes old-system problems differently from new-product builds.",
    "Expanded the stack to include Datadog, Selenium, Vercel, and Laravel because they are core to the promised outcomes.",
    "Added accessibility and reduced-motion requirements so visual polish does not compromise usability.",
    "Reframed case studies as templates until real client metrics are approved for publication.",
  ],
  launchRisks: [
    "Real case studies need permission, proof, and anonymization before publishing hard numbers.",
    "A production client portal should eventually connect to a CRM, spam protection, and email automation.",
    "Claims around Kubernetes or cost reduction should be backed by discovery artifacts before sales conversations.",
  ],
};
