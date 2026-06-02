import { Outlet, useLocation } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";
import { SiteHeader } from "./SiteHeader";
import { ScrollToTop } from "./ScrollToTop";
import { pageMeta } from "../config/siteNav";
import { usePageMeta } from "../hooks/usePageMeta";

function resolveMeta(pathname: string) {
  if (pathname === "/") return pageMeta["/"];
  if (pathname.startsWith("/cloutsites")) return pageMeta["/cloutsites"];
  if (pathname.startsWith("/mason")) return pageMeta["/mason"];
  return pageMeta.notFound;
}

export function SiteLayout() {
  const { pathname } = useLocation();
  const meta = resolveMeta(pathname);
  usePageMeta(meta.title, meta.description);

  return (
    <LazyMotion features={domAnimation} strict>
      <div className="app">
        <ScrollToTop />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <Outlet />
      </div>
    </LazyMotion>
  );
}
