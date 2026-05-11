import fs from "node:fs";
import path from "node:path";
import { loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";
import { defineConfig } from "vitest/config";

function normalizeSiteUrl(url: string): string {
  const trimmed = url.replace(/\/+$/, "");
  if (!trimmed) {
    return "";
  }
  if (!/^https?:\/\//i.test(trimmed)) {
    return `https://${trimmed}`;
  }
  return trimmed;
}

function writeSitemap(siteUrl: string) {
  const outDir = path.resolve(process.cwd(), "public");
  const loc = siteUrl ? `${siteUrl.replace(/\/$/, "")}/` : "";
  const body = loc
    ? `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${loc}</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`
    : `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>
`;
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "sitemap.xml"), body.trim() + "\n", "utf8");
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const viteSiteUrl = normalizeSiteUrl(env.VITE_SITE_URL?.trim() ?? "");
  const siteRoot = viteSiteUrl || "https://cloutsites.com";

  return {
    plugins: [
      react(),
      {
        name: "generate-sitemap",
        buildStart() {
          writeSitemap(viteSiteUrl);
        },
      },
      createHtmlPlugin({
        inject: {
          data: {
            VITE_SITE_URL: viteSiteUrl,
            organizationJsonLd: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Cloutsites",
              url: siteRoot,
              description:
                "Oklahoma City custom software, cloud consulting, legacy modernization, and high-performance web application development.",
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Oklahoma",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Oklahoma City",
                addressRegion: "OK",
                addressCountry: "US",
              },
              knowsAbout: [
                "OKC Custom Software",
                "Oklahoma Cloud Consulting",
                "Full-Stack Development Oklahoma City",
                "Legacy System Modernization",
                "React Application Development",
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
            }),
          },
        },
      }),
    ],
    test: {
      environment: "jsdom",
      setupFiles: "./src/test/setup.ts",
      globals: true,
    },
  };
});
