import { buildPageMetadata } from "@/lib/metadata";
import { WorkPage } from "@/views/CloutSitesPage";

export const metadata = buildPageMetadata("/work");
export const dynamic = "force-static";

export default function Page() {
  return <WorkPage />;
}
