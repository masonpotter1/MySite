import { buildPageMetadata } from "@/lib/metadata";
import { ServiceDetailPage } from "@/views/CloutSitesPage";

export const metadata = buildPageMetadata("/services/marketing");
export const dynamic = "force-static";

export default function Page() {
  return <ServiceDetailPage serviceId="marketing" />;
}
