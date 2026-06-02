"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { HeaderOffset } from "@/layout/HeaderOffset";
import { SiteHeader } from "@/layout/SiteHeader";
import { ScrollToTop } from "@/layout/ScrollToTop";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <div className="app">
        <ScrollToTop />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <HeaderOffset />
        {children}
      </div>
    </LazyMotion>
  );
}
