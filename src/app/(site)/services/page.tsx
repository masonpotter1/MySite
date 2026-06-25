import { buildPageMetadata } from "@/lib/metadata";
import { ServicesPage } from "@/views/CloutSitesPage";

export const metadata = buildPageMetadata("/services");
export const dynamic = "force-static";

export default function Page() {
  return <ServicesPage />;
}
