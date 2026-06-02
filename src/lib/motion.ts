/** SSR-safe: visible in HTML before hydration */
export const fadeUp = {
  initial: false as const,
  whileInView: { opacity: 1, y: 0 },
};

export const viewport = { once: true, amount: 0.2 };
export const baseTransition = { duration: 0.6, ease: "easeOut" as const };

export const homeFadeUp = {
  initial: false as const,
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};
