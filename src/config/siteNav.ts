import { navigation as cloutSectionNav } from "../data/cloutsitesContent";

export const siteNav = [
  { label: "Home", to: "/" },
  { label: "Mason", to: "/mason" },
  { label: "CloutSites", to: "/cloutsites" },
] as const;

export const masonSectionNav = [
  { label: "Résumé", href: "/resume" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Travel log", href: "#travel" },
  { label: "Curiosities", href: "#tinkering" },
  { label: "Contact", href: "#contact" },
] as const;

export type SiteRoute = "/" | "/cloutsites" | "/mason";

export function routeHash(route: SiteRoute, hash: string): string {
  const fragment = hash.startsWith("#") ? hash : `#${hash}`;
  return `${route}${fragment}`;
}

export function prefixSectionNav(
  items: readonly { label: string; href: string }[],
  route: SiteRoute,
): { label: string; href: string }[] {
  return items.map((item) => ({
    label: item.label,
    href: item.href.startsWith("#") ? routeHash(route, item.href) : item.href,
  }));
}

export const cloutsitesSectionNav = prefixSectionNav(cloutSectionNav, "/cloutsites");
export const masonSectionNavPrefixed = prefixSectionNav(masonSectionNav, "/mason");

export const pageMeta: Record<
  SiteRoute | "notFound",
  { title: string; description: string }
> = {
  "/": {
    title: "Cloutsites | Home",
    description:
      "CloutSites web and tech consulting for growing businesses—and Mason Potter's engineering portfolio. Two doors in: hire the company or meet the founder.",
  },
  "/cloutsites": {
    title: "CloutSites | Web & Tech Consulting for Growing Businesses",
    description:
      "CloutSites LLC helps apparel brands, local businesses, and startups fix unreliable sites, ship credible web products, and modernize operations—remote-first, plain-language discovery.",
  },
  "/mason": {
    title: "Mason Potter | Software Engineer · Résumé & Portfolio",
    description:
      "Full-stack engineer (PHP, React, Selenium). Enterprise ATS scale at ~1.6M documents/week, founder of CloutSites LLC, healthcare web modernization. Résumé, projects, and experience.",
  },
  notFound: {
    title: "Page not found | Cloutsites",
    description: "The page you requested is not available.",
  },
};
