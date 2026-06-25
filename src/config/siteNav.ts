import { navigation as businessNavigation } from "../data/cloutsitesContent";

export const siteNav = businessNavigation.map((item) => ({
  label: item.label,
  to: item.href,
})) as [
  { label: "Services"; to: "/services" },
  { label: "Work"; to: "/work" },
  { label: "Process"; to: "/process" },
  { label: "About"; to: "/about" },
  { label: "Contact"; to: "/contact" },
];

export type SiteRoute =
  | "/"
  | "/services"
  | "/services/websites"
  | "/services/marketing"
  | "/services/business-it"
  | "/services/systems-consulting"
  | "/work"
  | "/process"
  | "/about"
  | "/about/team"
  | "/about/mason-potter"
  | "/contact";

export type ActiveNavRoute = (typeof siteNav)[number]["to"];

export const pageMeta: Record<SiteRoute | "notFound", { title: string; description: string }> = {
  "/": {
    title: "Cloutsites | Websites, Marketing & Practical IT Help",
    description:
      "Cloutsites helps small businesses get online, look credible, run smoother, and clean up websites, marketing, Microsoft/email, domains, and messy systems.",
  },
  "/services": {
    title: "Services | Cloutsites",
    description:
      "Website design, social media and ads, business IT setup, and systems consulting for small businesses, family-owned companies, and early-stage operators.",
  },
  "/services/websites": {
    title: "Website Design & Rebuilds | Cloutsites",
    description:
      "Business websites, rebuilds, landing pages, mobile-friendly design, contact forms, booking flows, maintenance, and launch support.",
  },
  "/services/marketing": {
    title: "Social Media, Ads & SEO Support | Cloutsites",
    description:
      "Practical social media, advertising, SEO, analytics, content support, and campaign landing pages for small businesses.",
  },
  "/services/business-it": {
    title: "Microsoft, Email, Domains & Business IT | Cloutsites",
    description:
      "Microsoft account setup, business email, domains, DNS, user access cleanup, and practical IT organization for small businesses.",
  },
  "/services/systems-consulting": {
    title: "Systems Consulting & Modernization | Cloutsites",
    description:
      "Workflow cleanup, integrations, automation, outdated systems, QA, reliability, cloud, and software consulting for businesses with deeper technical needs.",
  },
  "/work": {
    title: "Work Examples | Cloutsites",
    description:
      "Honest before-and-after examples for website rebuilds, local business IT cleanup, campaign pages, and systems consulting.",
  },
  "/process": {
    title: "Process | Cloutsites",
    description:
      "How Cloutsites moves from discovery to build, testing, launch, and handoff for websites, marketing, IT cleanup, and systems consulting.",
  },
  "/about": {
    title: "About Cloutsites",
    description:
      "Cloutsites is a practical digital partner for small businesses that need credible websites, clearer marketing, cleaner accounts, and technical guidance.",
  },
  "/about/team": {
    title: "About the Team | Cloutsites",
    description:
      "Cloutsites is an owner-led studio with direct founder involvement, practical delivery, and specialist support when a project needs it.",
  },
  "/about/mason-potter": {
    title: "Mason Potter, Founder | Cloutsites",
    description:
      "Founder profile for Mason Potter: full-stack engineer, Cloutsites owner, and practical digital systems partner for small businesses.",
  },
  "/contact": {
    title: "Contact | Cloutsites",
    description:
      "Start a Cloutsites project for a website, marketing help, business IT setup, Microsoft/email cleanup, domains, or systems consulting.",
  },
  notFound: {
    title: "Page not found | Cloutsites",
    description: "The page you requested is not available.",
  },
};
