import { buildPageMetadata } from "@/lib/metadata";
import { ContactPage } from "@/views/CloutSitesPage";

export const metadata = buildPageMetadata("/contact");
export const dynamic = "force-static";

export default function Page() {
  return <ContactPage />;
}
