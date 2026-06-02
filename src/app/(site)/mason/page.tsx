import Script from "next/script";
import { buildPageMetadata, personJsonLd } from "@/lib/metadata";
import { MasonPage } from "@/views/MasonPage";

export const metadata = buildPageMetadata("/mason", { path: "/mason" });
export const dynamic = "force-static";

export default function Page() {
  return (
    <>
      <Script
        id="mason-person-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
      />
      <MasonPage />
    </>
  );
}
