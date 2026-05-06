import { useRef, type MutableRefObject } from "react";
import { LazyMotion, domAnimation, m, type Variants } from "framer-motion";
import {
  education,
  experiences,
  interests,
  passportSidebarCopy,
  profile,
  projects,
  skillGroups,
  stats,
  travelRegions,
  travelSectionIntro,
} from "./data/siteContent";
import "./styles.css";

const fadeUp: Variants = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
};

const viewport = { once: true, amount: 0.2 };
const baseTransition = { duration: 0.6, ease: "easeOut" as const };
const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Travel log", href: "#travel" },
  { label: "Curiosities", href: "#tinkering" },
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
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Travel />
          <Beyond />
          <Tinkering />
          <Contact />
        </main>
        <footer className="footer">
          <span>Built with React, TypeScript, and Vite · Source for masonpotter.dev</span>
          <span className="footer-meta">
            <a href="/privacy.html">Privacy</a>
            <span aria-hidden="true">·</span>
            <span>Vercel Web Analytics (when deployed on Vercel)</span>
          </span>
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
        <p className="eyebrow">Portfolio · engineer · traveler</p>
        <div className="hero-edu-badges" aria-label="Education">
          <span className="chip chip-edu-major">{profile.educationMajor}</span>
          <span className="chip chip-edu-minor">{profile.educationMinor}</span>
        </div>
        <h1>{profile.name}</h1>
        <p className="hero-subtitle">{profile.statusLine}</p>
        <p className="hero-credential">
          Previously {profile.lastRoleTitle} @ {profile.lastRoleCompany} · {profile.specialty}
        </p>
        <p>{profile.headline}</p>
        <div className="hero-cta-stack">
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              View projects
            </a>
            <a className="button secondary" href="#travel">
              Travel log
            </a>
            <a className="button ghost" href={`mailto:${profile.email}`}>
              Email me
            </a>
          </div>
          <div className="chip-row" aria-label="Professional highlights">
            {[profile.location, profile.educationSchool, profile.graduation, "Email preferred"].map(
              (highlight) => (
                <span className="chip" key={highlight}>
                  {highlight}
                </span>
              ),
            )}
          </div>
          <div className="social-links" aria-label="Contact and profile links">
            {profile.links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
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
            <p className="eyebrow">At a glance</p>
            <h2>Enterprise-scale delivery, independent streak</h2>
            <p>
              Recent applicant-tracking systems work at serious throughput, years of
              end-to-end consulting through CloutSites, and projects spanning mobile,
              data, the web, and this portfolio.
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
        <p className="eyebrow">Curiosities</p>
        <h2 className="tinkering-title">Side experiments & ongoing learning</h2>
        <p className="tinkering-lede">
          Informal R&D—not a product roadmap or role requirement. Nothing here is trading advice or a
          performance claim.
        </p>
        <div className="tinkering-grid">
          {profile.tinkeringItems.map((item) => (
            <article className="tinkering-card" key={item.id}>
              <h3>{item.label}</h3>
              <p className="tinkering-what">
                <span className="tinkering-kicker">What</span>
                {item.what}
              </p>
              <p className="tinkering-why">
                <span className="tinkering-kicker">Why</span>
                {item.why}
              </p>
            </article>
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
        title="Background recruiters care about—plus the human context."
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
              {education.degree} · {education.graduation}
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
      <SectionIntro
        eyebrow="Technical skills"
        title="Languages, stacks, and practices from shipped work."
      />
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
  const openProjectRef = useRef<string | null>(null);

  return (
    <section className="section" id="projects">
      <SectionIntro
        eyebrow="Featured projects"
        title="Selected work—pipelines, products, and production sites."
      />
      <div className="card-grid project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            openProjectRef={openProjectRef}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  openProjectRef,
}: {
  project: (typeof projects)[number];
  index: number;
  openProjectRef: MutableRefObject<string | null>;
}) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  return (
    <m.article
      className="project-card"
      {...fadeUp}
      viewport={viewport}
      transition={{ delay: index * 0.06, duration: 0.55 }}
    >
      <details
        ref={detailsRef}
        className="project-details-root"
        onToggle={(event) => {
          const el = event.currentTarget;
          if (!el.open) {
            if (openProjectRef.current === project.title) {
              openProjectRef.current = null;
            }
            return;
          }
          if (openProjectRef.current && openProjectRef.current !== project.title) {
            document
              .querySelectorAll<HTMLDetailsElement>("details.project-details-root[open]")
              .forEach((other) => {
                if (other !== el) {
                  other.open = false;
                }
              });
          }
          openProjectRef.current = project.title;
        }}
      >
        <summary aria-label={`Toggle details for ${project.title}`}>
          <div className="project-meta">
            <span className="tag">{project.status}</span>
            <span>{project.title.slice(0, 2)}</span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.subtitle}</p>
          <p>{project.description}</p>
          <p className="project-teaser">{project.teaser}</p>
          <span className="details-hint" data-open-label="View less" data-closed-label="View details" />
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
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
      <SectionIntro
        eyebrow="Experience"
        title="Roles and outcomes—most recent first."
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
  const regionCount = travelRegions.length;
  const countryCount = travelRegions.reduce((sum, r) => sum + r.countries.length, 0);
  const spotCount = travelRegions.reduce(
    (sum, r) => sum + r.countries.reduce((s, c) => s + c.spots.length, 0),
    0,
  );

  return (
    <section className="section travel-section" id="travel">
      <SectionIntro
        eyebrow={travelSectionIntro.eyebrow}
        title={travelSectionIntro.title}
        body={travelSectionIntro.body}
      />
      <div className="travel-layout">
        <aside className="passport-panel" aria-label="Travel overview">
          <div className="passport-panel-inner">
            <span className="stamp">{passportSidebarCopy.stampLabel}</span>
            <h3 className="passport-title">{passportSidebarCopy.sidebarTitle}</h3>
            <p className="passport-lede">{passportSidebarCopy.sidebarLede}</p>

            <div className="passport-stats" aria-label="Travel section stats">
              <div>
                <strong>{regionCount}</strong>
                <span>regions</span>
              </div>
              <div>
                <strong>{countryCount}</strong>
                <span>countries</span>
              </div>
              <div>
                <strong>{spotCount}</strong>
                <span>stops</span>
              </div>
            </div>

            <div className="passport-divider" aria-hidden="true" />

            <p className="passport-kicker">{passportSidebarCopy.jumpLabel}</p>
            <nav className="passport-nav" aria-label="Jump to travel regions">
              {travelRegions.map((region) => (
                <a key={region.id} className="passport-nav-link" href={`#travel-region-${region.id}`}>
                  <span className="passport-nav-dot" style={{ background: region.accent }} aria-hidden="true" />
                  {region.title}
                </a>
              ))}
            </nav>

            <div className="passport-divider" aria-hidden="true" />

            <div className="passport-foot">
              <p className="passport-kicker">{passportSidebarCopy.homeBaseLabel}</p>
              <p className="passport-footline">{profile.location}</p>
              <p className="passport-note">{passportSidebarCopy.photoNote}</p>
            </div>

            <div className="route-line" aria-hidden="true" />
          </div>
        </aside>
        <div className="travel-region-stack">
          {travelRegions.map((region) => (
            <section
              className="travel-region"
              id={`travel-region-${region.id}`}
              key={region.id}
              style={{ borderTop: `3px solid ${region.accent}` }}
            >
              <header className="travel-region-head">
                <span className="tag">{region.label}</span>
                <h3>{region.title}</h3>
                <p>{region.intro}</p>
              </header>
              <div className="travel-country-stack">
                {region.countries.map((country) => (
                  <div className="travel-country" key={country.id}>
                    <h4 className="travel-country-title">
                      {country.flag ? <span aria-hidden="true">{country.flag} </span> : null}
                      {country.name}
                      {country.when ? <span className="travel-when"> · {country.when}</span> : null}
                    </h4>
                    {country.intro ? <p className="travel-country-intro">{country.intro}</p> : null}
                    <div className="travel-spot-grid">
                      {country.spots.map((spot) => (
                        <article className="travel-spot-card" key={spot.id}>
                          <div className="travel-spot-head">
                            <h5>{spot.name}</h5>
                            {spot.when ? <span className="travel-when">{spot.when}</span> : null}
                          </div>
                          <p>{spot.story}</p>
                          {spot.highlights?.length ? (
                            <>
                              <p className="travel-highlights-label">Highlights</p>
                              <ul className="travel-highlight-list">
                                {spot.highlights.map((h) => (
                                  <li key={h}>{h}</li>
                                ))}
                              </ul>
                            </>
                          ) : null}
                          <div className="chip-row">
                            {spot.tags.map((tag) => (
                              <span className="chip" key={tag}>
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="photo-masonry" aria-label="Travel photo placeholders">
                            {spot.images.map((img) => (
                              <figure className="photo-placeholder" key={img.label}>
                                <figcaption>{img.label}</figcaption>
                                <span aria-hidden="true">Photo soon</span>
                                <span className="sr-only">{img.alt}</span>
                              </figure>
                            ))}
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

function Beyond() {
  return (
    <section className="section" id="beyond">
      <SectionIntro eyebrow="Beyond the code" title="What rounds out the engineer behind the résumé." />
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
      <div className="contact-copy">
        <p className="eyebrow">Contact</p>
        <h2>Open to conversation about roles, collaborations, or ideas worth a reply.</h2>
        <p>
          I am most interested in conversations with people building useful products,
          sharp tools, weird experiments, or teams where curiosity is part of the work.
          If there is a role, project, collaboration, or idea worth kicking around,
          send it my way.
        </p>
      </div>
      <div className="contact-action-card">
        <p className="contact-action-label">Best starting points</p>
        <div className="hero-actions">
          <a className="button primary" href={`mailto:${profile.email}?subject=Interesting%20opportunity`}>
            Email me
          </a>
          <a className="button secondary" href={profile.links.find((link) => link.label === "LinkedIn")?.href}>
            LinkedIn
          </a>
          <a className="button ghost" href="#projects">
            See projects
          </a>
        </div>
        <div className="chip-row" aria-label="Opportunity interests">
          <span className="chip">Product-minded engineering</span>
          <span className="chip">Full-stack work</span>
          <span className="chip">Data-heavy ideas</span>
          <span className="chip">Unusual problems</span>
        </div>
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
