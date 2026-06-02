"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { HeaderOffset } from "@/layout/HeaderOffset";
import { SiteHeader } from "@/layout/SiteHeader";
import { ScrollToTop } from "@/layout/ScrollToTop";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <div className="app">
        <div className="site-backdrop" aria-hidden="true">
          <div className="site-backdrop__mesh" />
          <div className="site-backdrop__grid" />
          <div className="site-backdrop__glow site-backdrop__glow--tl" />
          <div className="site-backdrop__glow site-backdrop__glow--tr" />
          <div className="site-backdrop__glow site-backdrop__glow--mid" />
          <div className="site-backdrop__glow site-backdrop__glow--bl" />
          <div className="site-backdrop__noise" />
        </div>
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
