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
            Choose the door that matches why you are here—enterprise modernization and product delivery, or an
            engineer portfolio with projects, experience, and a travel log.
          </p>
        </m.div>
        <div className="home-card-grid">
          <m.article className="home-card" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }}>
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
          <m.article className="home-card" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.14 }}>
            <p className="eyebrow">For hiring & curiosity</p>
            <h2>Mason</h2>
            <p>
              Software engineering portfolio: projects, skills, experience, curiosities, and a travel log—credible for
              recruiters, human enough to share with friends.
            </p>
            <Link className="button secondary" to="/mason">
              View portfolio
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
