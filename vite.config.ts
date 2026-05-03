import fs from "node:fs";
import path from "node:path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";

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
            personJsonLd: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mason Potter",
              jobTitle: "Software Engineer",
              email: "masonpotter1@gmail.com",
              ...(viteSiteUrl
                ? {
                    url: `${viteSiteUrl.replace(/\/$/, "")}/`,
                    image: `${viteSiteUrl.replace(/\/$/, "")}/og-image.png`,
                  }
                : { image: "/og-image.png" }),
              address: {
                "@type": "PostalAddress",
                addressLocality: "Oklahoma City",
                addressRegion: "OK",
                addressCountry: "US",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Kansas State University",
              },
              sameAs: ["https://www.linkedin.com/in/masonpotter-43/"],
            }),
          },
        },
      }),
    ],
  };
});
