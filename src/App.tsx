import { LazyMotion, domAnimation, m, type Variants } from "framer-motion";
import {
  education,
  experiences,
  interests,
  profile,
  projects,
  skillGroups,
  stats,
  travelChapters,
} from "./data/siteContent";
import "./styles.css";

const fadeUp: Variants = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
};

const viewport = { once: true, amount: 0.2 };
const baseTransition = { duration: 0.6, ease: "easeOut" as const };
const navigation = [
  { label: "Tinkering", href: "#tinkering" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Travel", href: "#travel" },
  { label: "Contact", href: "#contact" },
];

function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <div className="app">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />
        <Header />
        <main id="main-content" tabIndex={-1}>
          <Hero />
          <Tinkering />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Travel />
          <Beyond />
          <Contact />
        </main>
        <footer className="footer">
          Built with React, TypeScript, and Vite. Content is structured for quick updates.
        </footer>
      </div>
    </LazyMotion>
  );
}

function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label="Mason Potter home">
        <span className="brand-mark">MP</span>
        <span>
          <span className="brand-name">{profile.name}</span>
          <span className="brand-role">{profile.title}</span>
        </span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section" id="top">
      <m.div className="hero-copy" {...fadeUp} viewport={viewport} transition={baseTransition}>
        <p className="eyebrow">Digital passport / technical portfolio</p>
        <h1>{profile.name}</h1>
        <p className="hero-subtitle">{profile.statusLine}</p>
        <p className="hero-credential">
          Previously {profile.lastRoleTitle} @ {profile.lastRoleCompany} · {profile.specialty}
        </p>
        <p>{profile.headline}</p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">
            View projects
          </a>
          <a className="button secondary" href="#travel">
            Explore travel
          </a>
          <a className="button ghost" href={`mailto:${profile.email}`}>
            Email me
          </a>
        </div>
        <div className="chip-row" aria-label="Professional highlights">
          {[profile.location, profile.education, "Email-first contact"].map((highlight) => (
            <span className="chip" key={highlight}>
              {highlight}
            </span>
          ))}
        </div>
        <div className="social-links" aria-label="Contact and profile links">
          {profile.links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </m.div>

      <m.aside
        className="hero-visual"
        {...fadeUp}
        viewport={viewport}
        transition={{ ...baseTransition, delay: 0.1 }}
      >
        <div className="profile-card">
          <div className="profile-banner" />
          <div className="avatar" aria-hidden="true">
            MP
          </div>
          <div className="profile-card-content">
            <p className="eyebrow">Snapshot</p>
            <h2>Engineering credibility, slower pace</h2>
            <p>
              Recent enterprise ATS work at scale, a long consulting arc through
              CloutSites, and a portfolio of projects that span mobile, data, web,
              and this site itself.
            </p>
          </div>
        </div>
        <div className="metric-grid">
          {stats.slice(0, 3).map((stat) => (
            <div className="metric-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </m.aside>
    </section>
  );
}

function Tinkering() {
  return (
    <section className="section tinkering-section" id="tinkering">
      <m.div {...fadeUp} viewport={viewport} transition={baseTransition}>
        <p className="eyebrow">What I am tinkering with</p>
        <h2 className="tinkering-title">Small experiments, sharp curiosity.</h2>
        <p className="tinkering-copy">{profile.tinkeringIntro}</p>
        <div className="chip-row" aria-label="Current tinkering topics">
          {profile.tinkeringChips.map((chip) => (
            <span className="chip tinkering-chip" key={chip}>
              {chip}
            </span>
          ))}
        </div>
      </m.div>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <SectionIntro
        eyebrow="About"
        title="A capable engineer, intentionally unhurried."
        body={profile.intro}
      />
      <m.div
        className="about-grid"
        {...fadeUp}
        viewport={viewport}
        transition={baseTransition}
      >
        <div className="panel">
          {profile.aboutParagraphs.map((paragraph) => (
            <p key={paragraph.id}>{paragraph.text}</p>
          ))}
        </div>
        <div className="panel highlight-list">
          <div className="highlight">
            <strong>{education.school}</strong>
            <span>
              {education.degree} - {education.graduation}
            </span>
          </div>
          <div className="highlight">
            <strong>{education.gpa}</strong>
            <span>{education.highlights.join(" / ")}</span>
          </div>
          <div className="highlight">
            <strong>Advanced coursework</strong>
            <span>{education.courses.join(" / ")}</span>
          </div>
        </div>
      </m.div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills">
      <SectionIntro eyebrow="Technical skills" title="A practical full-stack toolbox." />
      <div className="card-grid skills-grid">
        {skillGroups.map((group, index) => (
          <m.article
            className="skill-card glass-card"
            key={group.title}
            {...fadeUp}
            viewport={viewport}
            transition={{ delay: index * 0.05, duration: 0.55 }}
          >
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </m.article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">
      <SectionIntro
        eyebrow="Featured projects"
        title="Work that connects code, business, and usability."
      />
      <div className="card-grid project-grid">
        {projects.map((project, index) => (
          <m.article
            className="project-card"
            key={project.title}
            {...fadeUp}
            viewport={viewport}
            transition={{ delay: index * 0.06, duration: 0.55 }}
          >
            <details>
              <summary aria-label={`Toggle details for ${project.title}`}>
                <div className="project-meta">
                  <span className="tag">{project.status}</span>
                  <span>{project.title.slice(0, 2)}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
                <p>{project.description}</p>
                <p className="project-teaser">{project.teaser}</p>
                <span className="details-hint">View details</span>
              </summary>
              <div className="project-details">
                <dl className="detail-grid">
                  {project.details.map((block) => (
                    <div className="detail-block" key={block.label}>
                      <dt>{block.label}</dt>
                      <dd>{block.body}</dd>
                    </div>
                  ))}
                </dl>
                <div className="chip-row">
                  {project.tech.map((tech) => (
                    <span className="chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </details>
          </m.article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
      <SectionIntro
        eyebrow="Experience"
        title="From enterprise scale to independent work—and a sabbatical reset."
      />
      <div className="timeline">
        {experiences.map((role, index) => (
          <m.article
            className="timeline-item"
            key={`${role.company}-${role.role}`}
            {...fadeUp}
            viewport={viewport}
            transition={{ delay: index * 0.05, duration: 0.55 }}
          >
            <div className="timeline-top">
              <div>
                <h3>{role.role}</h3>
                <span>{role.company}</span>
              </div>
              <time>{role.dates}</time>
            </div>
            <p>{role.summary}</p>
            <div className="chip-row">
              {role.tags.map((tag) => (
                <span className="chip" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-details">
              <ul>
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </m.article>
        ))}
      </div>
    </section>
  );
}

function Travel() {
  return (
    <section className="section travel-section" id="travel">
      <SectionIntro
        eyebrow="Digital passport"
        title="Travel chapters: cities, coastlines, and design-shaped memories."
      />
      <div className="travel-layout">
        <m.div
          className="passport-map"
          {...fadeUp}
          viewport={viewport}
          transition={baseTransition}
        >
          <span className="stamp">Chapters, not checklists</span>
          <div className="route-line" aria-hidden="true" />
          <h3>Digital Passport</h3>
        </m.div>
        <div className="travel-chapters">
          {travelChapters.map((chapter, index) => (
            <m.article
              className="travel-chapter"
              key={chapter.id}
              style={{ borderTop: `3px solid ${chapter.accent}` }}
              {...fadeUp}
              viewport={viewport}
              transition={{ delay: index * 0.06, duration: 0.55 }}
            >
              <div className="travel-chapter-head">
                <span className="tag">{chapter.badge}</span>
                <span className="travel-when">{chapter.when}</span>
              </div>
              <h3>{chapter.title}</h3>
              <p className="travel-where">{chapter.where}</p>
              <p>{chapter.story}</p>
              <p className="travel-highlights-label">Highlights</p>
              <ul className="travel-highlight-list">
                {chapter.highlights.map((spot) => (
                  <li key={spot}>{spot}</li>
                ))}
              </ul>
              <div className="chip-row">
                {chapter.tags.map((tag) => (
                  <span className="chip" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="photo-masonry" aria-label="Travel photo placeholders">
                {chapter.images.map((img) => (
                  <figure className="photo-placeholder" key={img.label}>
                    <figcaption>{img.label}</figcaption>
                    <span aria-hidden="true">Photo soon</span>
                    <span className="sr-only">{img.alt}</span>
                  </figure>
                ))}
              </div>
            </m.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Beyond() {
  return (
    <section className="section" id="beyond">
      <SectionIntro eyebrow="Beyond the code" title="Interests that shape the work." />
      <div className="interest-grid">
        {interests.map((interest, index) => (
          <m.article
            className="interest-card"
            key={interest.title}
            {...fadeUp}
            viewport={viewport}
            transition={{ delay: index * 0.04, duration: 0.5 }}
          >
            <h3>{interest.title}</h3>
            <p>{interest.detail}</p>
          </m.article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <m.section
      className="section contact-panel"
      id="contact"
      {...fadeUp}
      viewport={viewport}
      transition={baseTransition}
    >
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Reach out about software roles, projects, travel, or anything interesting.</h2>
      </div>
      <div className="hero-actions">
        {profile.links.map((link) => (
          <a className="button secondary" key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </m.section>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <m.div
      className="section-heading"
      {...fadeUp}
      viewport={viewport}
      transition={baseTransition}
    >
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {body ? <p>{body}</p> : null}
    </m.div>
  );
}

export default App;
