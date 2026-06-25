import { buildPageMetadata } from "@/lib/metadata";
import { ServiceDetailPage } from "@/views/CloutSitesPage";

export const metadata = buildPageMetadata("/services/business-it");
export const dynamic = "force-static";

export default function Page() {
  return <ServiceDetailPage serviceId="business-it" />;
}
