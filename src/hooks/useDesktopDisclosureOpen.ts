import { useEffect, useState } from "react";

const WIDE_QUERY = "(min-width: 961px)";

/** Default disclosure panels open on desktop, closed on smaller viewports (reflow on resize). */
export function useDesktopDisclosureOpen(): boolean {
  const [open, setOpen] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(WIDE_QUERY).matches : false,
  );

  useEffect(() => {
    const mq = window.matchMedia(WIDE_QUERY);
    const sync = () => setOpen(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return open;
}
