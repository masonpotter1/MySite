import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();
  const routes = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.92 },
    { path: "/services/websites", priority: 0.86 },
    { path: "/services/marketing", priority: 0.84 },
    { path: "/services/business-it", priority: 0.84 },
    { path: "/services/systems-consulting", priority: 0.82 },
    { path: "/work", priority: 0.78 },
    { path: "/process", priority: 0.76 },
    { path: "/about", priority: 0.72 },
    { path: "/about/team", priority: 0.68 },
    { path: "/about/mason-potter", priority: 0.7 },
    { path: "/contact", priority: 0.9 },
    { path: "/resume", priority: 0.45 },
    { path: "/privacy.html", priority: 0.35 },
  ] as const;

  return routes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
