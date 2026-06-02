import { Link } from "react-router-dom";
import {
  education,
  experiences,
  profile,
  skillGroups,
} from "../data/siteContent";

export function ResumePage() {
  return (
    <div className="page-mason page-resume">
      <main id="main-content" className="resume-document section" tabIndex={-1}>
        <header className="resume-header">
          <p className="resume-print-hint">Print or save as PDF from your browser (Ctrl+P / ⌘P).</p>
          <h1>{profile.name}</h1>
          <p className="resume-tagline">{profile.headline}</p>
          <p className="resume-meta">
            {profile.location} · {profile.email} ·{" "}
            <a href={profile.github}>GitHub</a> ·{" "}
            <a href="https://www.linkedin.com/in/masonpotter-43/">LinkedIn</a>
          </p>
          <p className="resume-meta">
            {profile.educationMajor}, {profile.educationMinor} — {profile.educationSchool},{" "}
            {profile.graduation}
          </p>
          <div className="resume-screen-actions">
            <button type="button" className="button primary" onClick={() => window.print()}>
              Print / Save PDF
            </button>
            <Link className="button secondary" to="/mason">
              Full portfolio
            </Link>
          </div>
        </header>

        <section aria-labelledby="resume-experience">
          <h2 id="resume-experience">Experience</h2>
          {experiences.map((job) => (
            <article className="resume-entry" key={`${job.company}-${job.dates}`}>
              <div className="resume-entry-head">
                <h3>
                  {job.role} · {job.company}
                </h3>
                <span className="resume-dates">{job.dates}</span>
              </div>
              <p>{job.summary}</p>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section aria-labelledby="resume-skills">
          <h2 id="resume-skills">Skills</h2>
          <div className="resume-skills-grid">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.skills.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="resume-education">
          <h2 id="resume-education">Education</h2>
          <p>
            <strong>{education.school}</strong> — {education.degree}
            <br />
            {education.graduation} · {education.gpa}
          </p>
          <ul>
            {education.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
