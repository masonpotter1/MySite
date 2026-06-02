"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { homeFadeUp } from "@/lib/motion";

export function HomePage() {
  return (
    <div className="page-home">
      <div className="industrial-grid" aria-hidden="true" />
      <div className="glow glow-teal" aria-hidden="true" />
      <div className="glow glow-orange" aria-hidden="true" />
      <main id="main-content" className="home-main section" tabIndex={-1}>
        <m.div className="home-hero" {...homeFadeUp}>
          <p className="eyebrow">CloutSites · Mason Potter</p>
          <h1>Hire the team. Meet the engineer.</h1>
          <p className="home-lead">
            Need a team for your business site or systems? CloutSites LLC is web and tech consulting—we deliver. Want
            Mason&apos;s résumé, enterprise ATS work, and projects? Start with the portfolio.
          </p>
          <Link className="button primary home-recruiter-cta" href="/mason">
            Recruiter path → portfolio
          </Link>
        </m.div>
        <div className="home-card-grid">
          <m.article
            className="home-card home-card--featured"
            {...homeFadeUp}
            transition={{ ...homeFadeUp.transition, delay: 0.06 }}
          >
            <p className="eyebrow">For hiring & recruiters</p>
            <h2>Mason · Portfolio</h2>
            <p>
              Résumé, experience (enterprise ATS, CloutSites, healthcare), skills, and projects—optimized for a fast
              technical screen.
            </p>
            <div className="home-card-actions">
              <Link className="button primary" href="/mason">
                Open portfolio
              </Link>
              <Link className="button secondary" href="/resume">
                Résumé (print/PDF)
              </Link>
            </div>
          </m.article>
          <m.article
            className="home-card"
            {...homeFadeUp}
            transition={{ ...homeFadeUp.transition, delay: 0.1 }}
          >
            <p className="eyebrow">For operators & leadership</p>
            <h2>CloutSites</h2>
            <p>
              Web and tech consulting for growing businesses—reliable sites, clearer operations, and a structured intake.
              We are the company; Mason is the founder.
            </p>
            <Link className="button primary" href="/cloutsites">
              Explore CloutSites
            </Link>
          </m.article>
        </div>
      </main>
      <footer className="footer">
        <span>CloutSites · Oklahoma City, OK · In person or remote</span>
        <span className="footer-meta">
          <a href="/privacy.html">Privacy</a>
        </span>
      </footer>
    </div>
  );
}
