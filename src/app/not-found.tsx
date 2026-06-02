import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import { SiteShell } from "@/app/site-shell";

export const metadata = buildPageMetadata("notFound", { path: "/404" });

export default function NotFound() {
  return (
    <SiteShell>
      <main id="main-content" className="section home-main" tabIndex={-1}>
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The route you requested is not part of this site.</p>
        <Link className="button primary" href="/">
          Back to home
        </Link>
      </main>
    </SiteShell>
  );
}
