import { buildPageMetadata } from "@/lib/metadata";
import { HomePage } from "@/views/HomePage";

export const metadata = buildPageMetadata("/");
export const dynamic = "force-static";

export default function Page() {
  return <HomePage />;
}
