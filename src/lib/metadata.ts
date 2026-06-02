import type { Metadata } from "next";
import { pageMeta, type SiteRoute } from "@/config/siteNav";
import { getSiteUrl } from "@/lib/site-url";

const resumeMeta = {
  title: "Mason Potter | Résumé",
  description:
    "Print-friendly résumé: Paycom ATS engineering, CloutSites, healthcare web modernization, Kansas State CS.",
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
    url: `${siteUrl}/cloutsites`,
    founder: {
      "@type": "Person",
      name: "Mason Potter",
      url: `${siteUrl}/mason`,
    },
    description:
      "Web and tech consulting for growing businesses: reliable sites, modernized operations, and credible web products. In-person or remote delivery across the United States.",
    areaServed: { "@type": "Country", name: "United States" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Oklahoma City",
      addressRegion: "OK",
      addressCountry: "US",
    },
    knowsAbout: [
      "Enterprise software modernization",
      "Cloud-native consulting",
      "Full-stack web application development",
      "Legacy system modernization",
      "React application development",
      "Docker",
      "Kubernetes",
      "Datadog",
      "Selenium",
    ],
    serviceType: [
      "Enterprise modernization",
      "Cloud-native software development",
      "React web application development",
      "Automated quality assurance",
    ],
  };
}

export function personJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mason Potter",
    url: `${siteUrl}/mason`,
    image: `${siteUrl}/avatar.png`,
    jobTitle: "Software Engineer",
    sameAs: ["https://www.linkedin.com/in/masonpotter-43/", "https://github.com/masonpotter1"],
  };
}
