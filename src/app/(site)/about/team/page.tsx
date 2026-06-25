import { buildPageMetadata } from "@/lib/metadata";
import { TeamPage } from "@/views/CloutSitesPage";

export const metadata = buildPageMetadata("/about/team");
export const dynamic = "force-static";

export default function Page() {
  return <TeamPage />;
}
