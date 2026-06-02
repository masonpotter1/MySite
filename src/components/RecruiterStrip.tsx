"use client";

import Link from "next/link";
import { profile, recruiter } from "@/data/siteContent";

const masonRoute = "/mason";

export function RecruiterStrip() {
  return (
    <section className="recruiter-strip section" aria-labelledby="recruiter-strip-title">
      <div className="recruiter-strip-inner">
        <div className="recruiter-strip-copy">
          <p className="eyebrow">{recruiter.eyebrow}</p>
          <h2 id="recruiter-strip-title">{recruiter.title}</h2>
          <p>{recruiter.summary}</p>
          <ul className="recruiter-highlight-list">
            {recruiter.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="recruiter-strip-actions">
          <Link className="button primary" href="/resume">
            View résumé
          </Link>
          <a className="button secondary" href={`${masonRoute}#experience`}>
            Experience
          </a>
          <a className="button secondary" href={`${masonRoute}#projects`}>
            Projects
          </a>
          <a
            className="button ghost"
            href={profile.links.find((l) => l.label === "LinkedIn")?.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
