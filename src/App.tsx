import { motion } from "framer-motion";
import {
  contactLinks,
  education,
  experience,
  interests,
  navigation,
  profile,
  projects,
  skills,
  travel,
} from "./data/siteContent";
import "./styles.css";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

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
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Mason Potter home">
        MP
      </a>
      <nav aria-label="Primary navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href={`mailto:${profile.email}`}>
        Contact
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section" id="top">
      <motion.div className="hero-copy" {...fadeUp}>
        <p className="eyebrow">Digital passport / technical portfolio</p>
        <h1>{profile.name}</h1>
        <p className="hero-title">
          {profile.role} @ {profile.company}
        </p>
        <p className="hero-summary">{profile.summary}</p>
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
        <div className="hero-meta" aria-label="Professional highlights">
          {profile.highlights.map((highlight) => (
            <span key={highlight}>{highlight}</span>
          ))}
        </div>
      </motion.div>

      <motion.aside className="hero-card" {...fadeUp} transition={{ delay: 0.1, duration: 0.6 }}>
        <div className="avatar" aria-hidden="true">
          <span>MP</span>
        </div>
        <div>
          <p className="card-label">Currently</p>
          <h2>Building enterprise recruiting software</h2>
          <p>
            Full-stack ATS work, scalable document workflows, regression test
            optimization, and polished web experiences.
          </p>
        </div>
        <div className="stat-grid">
          <div>
            <strong>1.6M</strong>
            <span>expected docs / week</span>
          </div>
          <div>
            <strong>100+</strong>
            <span>medical site pages rebuilt</span>
          </div>
          <div>
            <strong>3</strong>
            <span>core project stories</span>
          </div>
        </div>
      </motion.aside>
    </section>
  );
}

function About() {
  return (
    <motion.section className="section split" id="about" {...fadeUp}>
      <div>
        <p className="eyebrow">About</p>
        <h2>Professional enough for recruiters. Personal enough to remember.</h2>
      </div>
      <div className="copy-stack">
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
        <div className="education-card">
          <span>Education</span>
          <strong>{education.school}</strong>
          <p>
            {education.degree} - {education.graduation}
          </p>
          <p>{education.details}</p>
        </div>
      </div>
    </motion.section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills">
      <SectionIntro eyebrow="Technical skills" title="A practical full-stack toolbox." />
      <div className="card-grid skills-grid">
        {skills.map((group, index) => (
          <motion.article
            className="skill-card glass-card"
            key={group.category}
            {...fadeUp}
            transition={{ delay: index * 0.05, duration: 0.55 }}
          >
            <span className="card-label">{group.category}</span>
            <ul>
              {group.items.map((skill) => (
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
            className="project-card glass-card"
            key={project.title}
            {...fadeUp}
            transition={{ delay: index * 0.06, duration: 0.55 }}
          >
            <div className="project-icon">{project.icon}</div>
            <span className="pill">{project.type}</span>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <ul>
              {project.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <div className="tag-row">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
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
        {experience.map((role, index) => (
          <motion.article
            className="timeline-item"
            key={`${role.company}-${role.title}`}
            {...fadeUp}
            transition={{ delay: index * 0.05, duration: 0.55 }}
          >
            <div className="timeline-marker" />
            <div className="timeline-content glass-card">
              <span className="card-label">{role.dates}</span>
              <h3>{role.title}</h3>
              <p className="company">{role.company}</p>
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
      <div className="passport-shell">
        <div className="route-line" aria-hidden="true" />
        {travel.map((destination, index) => (
          <motion.article
            className="travel-card"
            key={destination.place}
            {...fadeUp}
            transition={{ delay: index * 0.08, duration: 0.55 }}
          >
            <span className="stamp">{destination.badge}</span>
            <h3>{destination.place}</h3>
            <p className="country">{destination.country}</p>
            <p>{destination.story}</p>
            <div className="tag-row">
              {destination.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Beyond() {
  return (
    <section className="section" id="beyond">
      <SectionIntro eyebrow="Beyond the code" title="Interests that shape the work." />
      <div className="interest-strip">
        {interests.map((interest, index) => (
          <motion.article
            className="interest-card"
            key={interest.title}
            {...fadeUp}
            transition={{ delay: index * 0.04, duration: 0.5 }}
          >
            <span>{interest.icon}</span>
            <h3>{interest.title}</h3>
            <p>{interest.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <motion.section className="section contact-panel" id="contact" {...fadeUp}>
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Reach out about software roles, projects, travel, or anything interesting.</h2>
      </div>
      <div className="contact-links">
        {contactLinks.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </motion.section>
  );
}

function SectionIntro({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div className="section-intro" {...fadeUp}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </motion.div>
  );
}

export default App;
