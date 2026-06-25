import type { Metadata } from "next";
import { pageMeta, type SiteRoute } from "@/config/siteNav";
import { getSiteUrl } from "@/lib/site-url";

const resumeMeta = {
  title: "Mason Potter | Résumé",
  description:
    "Print-friendly résumé for Mason Potter: enterprise ATS engineering, Cloutsites, healthcare web modernization, and Kansas State CS.",
};

export function buildPageMetadata(
  key: SiteRoute | "notFound" | "resume",
  options?: { path?: string },
): Metadata {
  const meta =
    key === "resume"
      ? resumeMeta
      : pageMeta[key as SiteRoute | "notFound"];
  const siteUrl = getSiteUrl();
  const path =
    options?.path ??
    (key === "resume" ? "/resume" : key === "notFound" ? "/404" : key);
  const canonical = path === "/" ? siteUrl : `${siteUrl}${path}`;

  const isPreview = process.env.VERCEL_ENV === "preview";

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      siteName: "Cloutsites",
      type: "website",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: meta.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/og-image.png"],
    },
    robots: isPreview ? { index: false, follow: false } : { index: true, follow: true },
  };
}

export function organizationJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "CloutSites",
    url: siteUrl,
    founder: {
      "@type": "Person",
      name: "Mason Potter",
      url: `${siteUrl}/about/mason-potter`,
    },
    description:
      "Websites, marketing, business IT setup, and systems consulting for small businesses, family-owned companies, local operators, and early-stage founders.",
    areaServed: { "@type": "Country", name: "United States" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Oklahoma City",
      addressRegion: "OK",
      addressCountry: "US",
    },
    knowsAbout: [
      "Small business website design",
      "Website rebuilds",
      "Social media advertising",
      "Search engine optimization",
      "Microsoft 365 setup",
      "Business email setup",
      "Domain and DNS cleanup",
      "Workflow modernization",
      "Systems consulting",
    ],
    serviceType: [
      "Website design",
      "Website maintenance",
      "Social media and advertising support",
      "Business IT setup",
      "Microsoft account setup",
      "Systems consulting",
    ],
  };
}

export function personJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mason Potter",
    url: `${siteUrl}/about/mason-potter`,
    image: `${siteUrl}/avatar.png`,
    jobTitle: "Founder and Software Engineer",
    sameAs: ["https://www.linkedin.com/in/masonpotter-43/", "https://github.com/masonpotter1"],
  };
}
