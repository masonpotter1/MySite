"use client";

import { type ReactNode, useEffect, useState } from "react";
import { useDesktopDisclosureOpen } from "../hooks/useDesktopDisclosureOpen";

type DisclosureProps = {
  summary: string;
  children: ReactNode;
  className?: string;
};

/**
 * Expandable panel: starts open on wide viewports, closed on narrow (less overwhelm on phones).
 */
export function Disclosure({ summary, children, className = "" }: DisclosureProps) {
  const wideDefault = useDesktopDisclosureOpen();
  const [open, setOpen] = useState(wideDefault);

  useEffect(() => {
    setOpen(wideDefault);
  }, [wideDefault]);

  return (
    <details
      className={`disclosure ${className}`.trim()}
      open={open}
      onToggle={(event) => setOpen(event.currentTarget.open)}
    >
      <summary className="disclosure-summary">{summary}</summary>
      <div className="disclosure-body">{children}</div>
    </details>
  );
}
