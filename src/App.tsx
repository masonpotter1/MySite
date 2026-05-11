import { useMemo, useState } from "react";
import { LazyMotion, domAnimation, m, type Variants } from "framer-motion";
import {
  caseStudies,
  company,
  intakeOptions,
  navigation,
  processSteps,
  proofStats,
  reliabilityChecks,
  serviceTracks,
  specReview,
  techStack,
  type IntakeOptionId,
} from "./data/cloutsitesContent";
import "./styles.css";

const fadeUp: Variants = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
};

const viewport = { once: true, amount: 0.2 };
const baseTransition = { duration: 0.58, ease: "easeOut" as const };

function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <div className="app">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="industrial-grid" aria-hidden="true" />
        <div className="glow glow-teal" aria-hidden="true" />
        <div className="glow glow-orange" aria-hidden="true" />
        <Header />
        <main id="main-content" tabIndex={-1}>
          <Hero />
          <Services />
          <Reliability />
          <TechStack />
          <CaseStudies />
          <Process />
          <SpecReview />
          <IntakePortal />
        </main>
        <Footer />
      </div>
    </LazyMotion>
  );
}

function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label="Cloutsites home">
        <span className="brand-mark">CS</span>
        <span>
          <span className="brand-name">{company.name}</span>
          <span className="brand-role">{company.descriptor}</span>
        </span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="#intake">
        Start intake
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section" id="top">
      <m.div className="hero-copy" {...fadeUp} viewport={viewport} transition={baseTransition}>
        <p className="eyebrow">Oklahoma software systems studio</p>
        <h1>{company.tagline}</h1>
        <p className="hero-subtitle">{company.heroSubtitle}</p>
        <p className="value-prop">{company.valueProposition}</p>
        <div className="hero-actions">
          <a className="button primary" href="#intake">
            Scope a project
          </a>
          <a className="button secondary" href="#services">
            Compare services
          </a>
        </div>
        <div className="chip-row" aria-label="Search positioning">
          {company.seoKeywords.slice(0, 3).map((keyword) => (
            <span className="chip" key={keyword}>
              {keyword}
            </span>
          ))}
        </div>
      </m.div>

      <m.aside
        className="hero-terminal"
        aria-label="Cloutsites delivery telemetry"
        {...fadeUp}
        viewport={viewport}
        transition={{ ...baseTransition, delay: 0.12 }}
      >
        <div className="terminal-bar">
          <span />
          <span />
          <span />
          <strong>delivery.pipeline</strong>
        </div>
        <div className="code-stream" aria-hidden="true">
          <code>scan legacy-debt --map business-risk</code>
          <code>containerize services --target repeatable</code>
          <code>deploy preview --stack react vercel</code>
          <code>observe production --datadog dashboards</code>
          <code>qa regression --selenium critical-paths</code>
        </div>
        <div className="signal-grid">
          {proofStats.map((stat) => (
            <div className="signal-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
              <p>{stat.detail}</p>
            </div>
          ))}
        </div>
      </m.aside>
    </section>
  );
}

function Services() {
  return (
    <section className="section" id="services">
      <SectionIntro
        eyebrow="Dual-track services"
        title="One partner for old systems that need discipline and new products that need speed."
        body="The original spec was right to split the offer. Buyers with technical debt and buyers with a new product idea need different discovery questions, risk controls, and proof."
      />
      <div className="track-grid">
        {serviceTracks.map((track, index) => (
          <m.article
            className="track-card"
            key={track.id}
            {...fadeUp}
            viewport={viewport}
            transition={{ ...baseTransition, delay: index * 0.08 }}
          >
            <p className="track-eyebrow">{track.eyebrow}</p>
            <h3>{track.title}</h3>
            <p>{track.summary}</p>
            <ul className="outcome-list">
              {track.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
            <div className="chip-row">
              {track.diagnostics.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </m.article>
        ))}
      </div>
    </section>
  );
}

function Reliability() {
  return (
    <section className="section reliability-panel" id="reliability">
      <m.div className="reliability-copy" {...fadeUp} viewport={viewport} transition={baseTransition}>
        <p className="eyebrow">Automated quality assurance</p>
        <h2>Production-ready is a release system, not a slogan.</h2>
        <p>
          Cloutsites treats QA, monitoring, and rollback planning as part of the build. Selenium
          tests cover critical paths, performance budgets keep pages fast, and Datadog visibility
          gives operators a real signal after launch.
        </p>
      </m.div>
      <m.div
        className="release-checklist"
        {...fadeUp}
        viewport={viewport}
        transition={{ ...baseTransition, delay: 0.1 }}
      >
        {reliabilityChecks.map((check, index) => (
          <div className="check-row" key={check}>
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <p>{check}</p>
          </div>
        ))}
      </m.div>
    </section>
  );
}

function TechStack() {
  return (
    <section className="section" id="stack">
      <SectionIntro
        eyebrow="Interactive stack map"
        title="A practical stack for modernization, web products, and operating discipline."
        body="The launch version uses a lightweight grid instead of heavy icon libraries. That keeps the page fast and leaves room to add brand-approved SVGs later."
      />
      <div className="stack-grid">
        {techStack.map((tech, index) => (
          <m.article
            className="stack-card"
            key={tech.name}
            {...fadeUp}
            viewport={viewport}
            transition={{ duration: 0.45, delay: index * 0.035 }}
          >
            <span>{tech.category}</span>
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
          </m.article>
        ))}
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section className="section" id="case-studies">
      <SectionIntro
        eyebrow="Case study framework"
        title="Before-and-after stories built for proof, not vague portfolio theater."
        body="These are publish-ready templates. Replace targets with verified outcomes once client permission and measurement are in place."
      />
      <div className="case-grid">
        {caseStudies.map((study, index) => (
          <m.article
            className="case-card"
            key={study.title}
            {...fadeUp}
            viewport={viewport}
            transition={{ ...baseTransition, delay: index * 0.06 }}
          >
            <span className="metric">{study.metric}</span>
            <h3>{study.title}</h3>
            <div className="before-after">
              <div>
                <p className="mini-label">Before</p>
                <p>{study.before}</p>
              </div>
              <div>
                <p className="mini-label">After</p>
                <p>{study.after}</p>
              </div>
            </div>
          </m.article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section process-section">
      <SectionIntro
        eyebrow="Operating model"
        title="Full lifecycle means discovery, build, deployment, and handoff stay connected."
      />
      <div className="process-rail">
        {processSteps.map((step, index) => (
          <m.article
            className="process-card"
            key={step.title}
            {...fadeUp}
            viewport={viewport}
            transition={{ duration: 0.45, delay: index * 0.05 }}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </m.article>
        ))}
      </div>
    </section>
  );
}

function SpecReview() {
  return (
    <section className="section spec-review" aria-labelledby="spec-review-title">
      <m.div {...fadeUp} viewport={viewport} transition={baseTransition}>
        <p className="eyebrow">Spec validation</p>
        <h2 id="spec-review-title">The supplied brief is good. Here is how it was tightened.</h2>
      </m.div>
      <div className="review-grid">
        <ReviewColumn title="What works" items={specReview.strengths} />
        <ReviewColumn title="Improvements made" items={specReview.improvementsMade} />
        <ReviewColumn title="Launch risks to manage" items={specReview.launchRisks} />
      </div>
    </section>
  );
}

function ReviewColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <m.article className="review-card" {...fadeUp} viewport={viewport} transition={baseTransition}>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </m.article>
  );
}

function IntakePortal() {
  const [selectedId, setSelectedId] = useState<IntakeOptionId>("modernize");
  const selected = useMemo(
    () => intakeOptions.find((option) => option.id === selectedId) ?? intakeOptions[0],
    [selectedId],
  );

  const mailSubject = encodeURIComponent(`Cloutsites intake: ${selected.recommendedTrack}`);
  const mailBody = encodeURIComponent(
    `Selected path: ${selected.label}\nRecommended track: ${selected.recommendedTrack}\n\nProject context:\n`,
  );

  return (
    <section className="section intake-section" id="intake" aria-labelledby="intake-title">
      <SectionIntro
        eyebrow="Client intake portal"
        titleId="intake-title"
        title="Tell us whether the job is modernization, product build, or outcome discovery."
        body="This front-end portal qualifies leads now and is ready to connect to a CRM, email automation, or authenticated client area later."
      />
      <div className="intake-layout">
        <m.div className="intake-options" {...fadeUp} viewport={viewport} transition={baseTransition}>
          {intakeOptions.map((option) => (
            <button
              className="intake-option"
              key={option.id}
              type="button"
              aria-pressed={selectedId === option.id}
              onClick={() => setSelectedId(option.id)}
            >
              <span>{option.label}</span>
              <small>{option.description}</small>
            </button>
          ))}
        </m.div>
        <m.form
          className="intake-form"
          {...fadeUp}
          viewport={viewport}
          transition={{ ...baseTransition, delay: 0.1 }}
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="selected-track">
            <span>Recommended path</span>
            <strong>{selected.recommendedTrack}</strong>
            <p>{selected.description}</p>
          </div>
          <label>
            Name
            <input name="name" placeholder="Your name" autoComplete="name" />
          </label>
          <label>
            Work email
            <input name="email" type="email" placeholder="you@company.com" autoComplete="email" />
          </label>
          <label>
            What needs to change?
            <textarea
              name="context"
              rows={5}
              placeholder="Describe the system, product, deadline pressure, risk, or opportunity."
            />
          </label>
          <div className="form-actions">
            <a className="button primary" href={`mailto:${company.email}?subject=${mailSubject}&body=${mailBody}`}>
              Email Cloutsites
            </a>
            <p>
              Front-end only for launch. Add server-side validation, spam protection, and CRM routing
              before collecting production leads.
            </p>
          </div>
        </m.form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>
        {company.name} - {company.descriptor} - {company.location}
      </span>
      <span className="footer-meta">
        <a href="/privacy.html">Privacy</a>
        <span aria-hidden="true">/</span>
        <a href="#intake">Start a project</a>
      </span>
    </footer>
  );
}

function SectionIntro({
  eyebrow,
  titleId,
  title,
  body,
}: {
  eyebrow: string;
  titleId?: string;
  title: string;
  body?: string;
}) {
  return (
    <m.div className="section-heading" {...fadeUp} viewport={viewport} transition={baseTransition}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={titleId}>{title}</h2>
      </div>
      {body ? <p>{body}</p> : null}
    </m.div>
  );
}

export default App;
