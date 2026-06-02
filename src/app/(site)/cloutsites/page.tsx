import Script from "next/script";
import { buildPageMetadata, organizationJsonLd } from "@/lib/metadata";
import { CloutSitesPage } from "@/views/CloutSitesPage";

export const metadata = buildPageMetadata("/cloutsites", { path: "/cloutsites" });
export const dynamic = "force-static";

export default function Page() {
  return (
    <>
      <Script
        id="cloutsites-org-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
      />
      <CloutSitesPage />
    </>
  );
}
