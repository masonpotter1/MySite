"use client";

import { useLayoutEffect } from "react";

/**
 * Reserves document flow space matching the fixed .topbar height (varies by breakpoint / font scale).
 */
export function HeaderOffset() {
  useLayoutEffect(() => {
    const header = document.querySelector<HTMLElement>(".topbar");
    if (!header) return;

    const update = () => {
      const { bottom } = header.getBoundingClientRect();
      document.documentElement.style.setProperty("--site-header-offset", `${Math.ceil(bottom + 16)}px`);
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(header);
    window.addEventListener("resize", update);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return <div className="site-header-offset" aria-hidden="true" />;
}
