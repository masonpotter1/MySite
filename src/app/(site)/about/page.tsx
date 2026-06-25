import { buildPageMetadata } from "@/lib/metadata";
import { AboutPage } from "@/views/CloutSitesPage";

export const metadata = buildPageMetadata("/about");
export const dynamic = "force-static";

export default function Page() {
  return <AboutPage />;
}
