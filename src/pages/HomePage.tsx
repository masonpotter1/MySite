import { Link } from "react-router-dom";
import { m } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

export function HomePage() {
  return (
    <div className="page-home">
      <div className="industrial-grid" aria-hidden="true" />
      <div className="glow glow-teal" aria-hidden="true" />
      <div className="glow glow-orange" aria-hidden="true" />
      <main id="main-content" className="home-main section" tabIndex={-1}>
        <m.div className="home-hero" {...fadeUp}>
          <p className="eyebrow">Cloutsites · Mason Potter</p>
          <h1>One site. Business systems and personal craft.</h1>
          <p className="home-lead">
            Hiring manager? Start with the portfolio—résumé, Paycom ATS experience, and projects. Exploring business
            systems? CloutSites covers modernization and intake.
          </p>
          <Link className="button primary home-recruiter-cta" to="/mason">
            Recruiter path → portfolio
          </Link>
        </m.div>
        <div className="home-card-grid">
          <m.article className="home-card home-card--featured" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.06 }}>
            <p className="eyebrow">For hiring & recruiters</p>
            <h2>Mason · Portfolio</h2>
            <p>
              Résumé, experience (Paycom ATS, CloutSites, healthcare), skills, and projects—optimized for a fast
              technical screen.
            </p>
            <div className="home-card-actions">
              <Link className="button primary" to="/mason">
                Open portfolio
              </Link>
              <Link className="button secondary" to="/resume">
                Résumé (print/PDF)
              </Link>
            </div>
          </m.article>
          <m.article className="home-card" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            <p className="eyebrow">For operators & leadership</p>
            <h2>CloutSites</h2>
            <p>
              Enterprise modernization, cloud-native delivery, reliability practices, and a structured client intake—built
              for teams that need systems, not slide decks.
            </p>
            <Link className="button primary" to="/cloutsites">
              Explore CloutSites
            </Link>
          </m.article>
        </div>
      </main>
      <footer className="footer">
        <span>Cloutsites · Remote-first · Oklahoma City, OK</span>
        <span className="footer-meta">
          <a href="/privacy.html">Privacy</a>
        </span>
      </footer>
    </div>
  );
}
