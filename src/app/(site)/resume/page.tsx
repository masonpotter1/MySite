import { buildPageMetadata } from "@/lib/metadata";
import { ResumePage } from "@/views/ResumePage";

export const metadata = buildPageMetadata("resume", { path: "/resume" });
export const dynamic = "force-static";

export default function Page() {
  return <ResumePage />;
}
