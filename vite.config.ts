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
  const base = siteUrl ? siteUrl.replace(/\/$/, "") : "";
  const paths = ["/", "/cloutsites", "/mason", "/resume"];
  const urls = base
    ? paths
        .map(
          (p) => `  <url>
    <loc>${base}${p === "/" ? "/" : p}</loc>
    <changefreq>monthly</changefreq>
    <priority>${p === "/" ? "1.0" : "0.85"}</priority>
  </url>`,
        )
        .join("\n")
    : "";
  const body =
    urls.length > 0
      ? `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
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
  const siteRoot = viteSiteUrl || "https://personal-site-tau-mocha.vercel.app";

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
                "Enterprise modernization, cloud consulting, legacy system modernization, and high-performance web application development. Remote-first delivery across the United States.",
              areaServed: {
                "@type": "Country",
                name: "United States",
              },
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
