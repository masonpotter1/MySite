import { buildPageMetadata } from "@/lib/metadata";
import { ProcessPage } from "@/views/CloutSitesPage";

export const metadata = buildPageMetadata("/process");
export const dynamic = "force-static";

export default function Page() {
  return <ProcessPage />;
}
