import Script from "next/script";
import { buildPageMetadata, personJsonLd } from "@/lib/metadata";
import { FounderPage } from "@/views/CloutSitesPage";

export const metadata = buildPageMetadata("/about/mason-potter");
export const dynamic = "force-static";

export default function Page() {
  return (
    <>
      <Script
        id="mason-person-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
      />
      <FounderPage />
    </>
  );
}
