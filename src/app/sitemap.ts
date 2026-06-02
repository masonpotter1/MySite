import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  return [
    { url: base, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/cloutsites`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/mason`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/resume`, lastModified, changeFrequency: "monthly", priority: 0.9 },
  ];
}
