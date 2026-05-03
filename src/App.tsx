import { motion, type Variants } from "framer-motion";
import {
  education,
  experiences,
  interests,
  profile,
  projects,
  skillGroups,
  stats,
  travel,
} from "./data/siteContent";
import "./styles.css";

const fadeUp: Variants = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
};

const viewport = { once: true, amount: 0.2 };
const baseTransition = { duration: 0.6, ease: "easeOut" as const };

function App() {
  return (
    <div className="app">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Travel />
        <Beyond />
        <Contact />
      </main>
    </div>
  );
}

function Header() {
  const navigation = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Travel", href: "#travel" },
    { label: "Contact", href: "#contact" },
  ];

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
      <motion.div className="hero-copy" {...fadeUp} viewport={viewport} transition={baseTransition}>
        <p className="eyebrow">Digital passport / technical portfolio</p>
        <h1>{profile.name}</h1>
        <p className="hero-subtitle">
          {profile.title} @ {profile.company}
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
          {[profile.specialty, profile.location, profile.education].map((highlight) => (
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
      </motion.div>

      <motion.aside
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
            <p className="eyebrow">Currently</p>
            <h2>Building enterprise recruiting software</h2>
            <p>
              Full-stack ATS work, scalable document workflows, regression test
              optimization, and polished web experiences.
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
      </motion.aside>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <SectionIntro
        eyebrow="About"
        title="Professional enough for recruiters. Personal enough to remember."
        body={profile.intro}
      />
      <motion.div
        className="about-grid"
        {...fadeUp}
        viewport={viewport}
        transition={baseTransition}
      >
        <div className="panel">
          <p>
            I am a full-stack software developer based in Oklahoma City, currently
            working on Applicant Tracking System software at Paycom. I enjoy
            building reliable business tools, clean user experiences, and systems
            that make complicated workflows easier to manage.
          </p>
          <p>
            My background spans enterprise recruiting software, healthcare web
            operations, financial services, small-business consulting, and hands-on
            projects across mobile, database, and web development.
          </p>
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
      </motion.div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills">
      <SectionIntro eyebrow="Technical skills" title="A practical full-stack toolbox." />
      <div className="card-grid skills-grid">
        {skillGroups.map((group, index) => (
          <motion.article
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
          </motion.article>
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
          <motion.article
            className="project-card"
            key={project.title}
            {...fadeUp}
            viewport={viewport}
            transition={{ delay: index * 0.06, duration: 0.55 }}
          >
            <details>
              <summary>
                <div className="project-meta">
                  <span className="tag">{project.status}</span>
                  <span>{project.title.slice(0, 2)}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
                <p>{project.description}</p>
              </summary>
              <div className="project-details">
                <ul className="project-detail-list">
                  <li>{project.impact}</li>
                </ul>
                <div className="chip-row">
                  {project.tech.map((tech) => (
                    <span className="chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </details>
          </motion.article>
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
        title="A timeline of enterprise software, consulting, and business context."
      />
      <div className="timeline">
        {experiences.map((role, index) => (
          <motion.article
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
          </motion.article>
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
        title="Travel stories that make the site feel human."
      />
      <div className="travel-layout">
        <motion.div
          className="passport-map"
          {...fadeUp}
          viewport={viewport}
          transition={baseTransition}
        >
          <span className="stamp">Numerous countries</span>
          <div className="route-line" aria-hidden="true" />
          <h3>Digital Passport</h3>
        </motion.div>
        <div className="travel-grid">
          {travel.map((destination, index) => (
            <motion.article
              className="travel-card"
              key={destination.city}
              {...fadeUp}
              viewport={viewport}
              transition={{ delay: index * 0.08, duration: 0.55 }}
            >
              <span className="tag">{destination.badge}</span>
              <h3>{destination.city}</h3>
              <p>{destination.country}</p>
              <p>{destination.story}</p>
              <div className="chip-row">
                {destination.tags.map((tag) => (
                  <span className="chip" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
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
          <motion.article
            className="interest-card"
            key={interest.title}
            {...fadeUp}
            viewport={viewport}
            transition={{ delay: index * 0.04, duration: 0.5 }}
          >
            <h3>{interest.title}</h3>
            <p>{interest.detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <motion.section
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
    </motion.section>
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
    <motion.div
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
    </motion.div>
  );
}

export default App;
