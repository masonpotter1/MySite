import { useMemo, useState } from "react";
import { m, type Variants } from "framer-motion";
import { TechStackGlyph, type TechStackIconId } from "../components/TechIcons";
import { Disclosure } from "../components/Disclosure";
import {
  caseStudies,
  company,
  credibilityStrip,
  engineeringStandards,
  intakeProductionNotes,
  intakeOptions,
  plainEnglishBridge,
  processSteps,
  proofStats,
  reliabilityChecks,
  serviceTracks,
  techStack,
  type IntakeOptionId,
} from "../data/cloutsitesContent";

const fadeUp: Variants = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
};

const viewport = { once: true, amount: 0.2 };
const baseTransition = { duration: 0.58, ease: "easeOut" as const };

export function CloutSitesPage() {
  return (
    <div className="page-cloutsites">
      <div className="industrial-grid" aria-hidden="true" />
      <div className="glow glow-teal" aria-hidden="true" />
      <div className="glow glow-orange" aria-hidden="true" />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <HowWeWork />
        <Services />
        <Reliability />
        <TechStack />
        <CaseStudies />
        <Process />
        <EngineeringStandards />
        <IntakePortal />
        <p className="founder-link-wrap section">
          <a className="button ghost" href="/mason">
            Meet Mason Potter — founder & engineer
          </a>
        </p>
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section" id="top">
      <m.div className="hero-copy" {...fadeUp} viewport={viewport} transition={baseTransition}>
        <p className="eyebrow">{company.heroEyebrow}</p>
        <h1>{company.tagline}</h1>
        <p className="hero-subtitle">{company.heroSubtitle}</p>
        <p className="value-prop">{company.valueProposition}</p>
        <div className="hero-actions">
          <a className="button primary" href="/cloutsites#intake">
            Scope a project
          </a>
          <a className="button secondary" href="/cloutsites#services">
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

function HowWeWork() {
  return (
    <section className="section how-we-work" id="how-we-work" aria-labelledby="how-we-work-title">
      <m.div className="plain-english" {...fadeUp} viewport={viewport} transition={baseTransition}>
        <p className="eyebrow">{plainEnglishBridge.eyebrow}</p>
        <h2 id="how-we-work-title">{plainEnglishBridge.title}</h2>
        <p className="plain-lead">{plainEnglishBridge.lead}</p>
        <ul className="plain-list">
          {plainEnglishBridge.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="plain-footer">{plainEnglishBridge.footer}</p>
      </m.div>
      <m.div className="credibility-strip" {...fadeUp} viewport={viewport} transition={baseTransition}>
        <p className="eyebrow">{credibilityStrip.eyebrow}</p>
        <h3 className="credibility-heading">{credibilityStrip.title}</h3>
        <p className="credibility-sub">{credibilityStrip.subtitle}</p>
        <div className="credibility-grid">
          {credibilityStrip.items.map((item) => (
            <article className="cred-card" key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </m.div>
    </section>
  );
}

function Services() {
  return (
    <section className="section" id="services">
      <SectionIntro
        eyebrow="Dual-track services"
        title="One partner for old systems that need discipline and new products that need speed."
        body="Whether you're fixing something fragile or shipping something new, we separate discovery, risk, and proof—you don't need every buzzword on day one. Scroll on for the technical depth when you're ready."
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
          gives operators a real signal after launch—so every deployment is{" "}
          <strong>Production Ready</strong> on day one.
        </p>
      </m.div>
      <m.div
        className="release-checklist-wrap"
        {...fadeUp}
        viewport={viewport}
        transition={{ ...baseTransition, delay: 0.1 }}
      >
        <Disclosure summary='Technical detail: what goes into a "production-ready" release checklist'>
          <div className="release-checklist">
            {reliabilityChecks.map((check, index) => (
              <div className="check-row" key={check}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <p>{check}</p>
              </div>
            ))}
          </div>
        </Disclosure>
      </m.div>
    </section>
  );
}

function TechStack() {
  const [activeId, setActiveId] = useState<TechStackIconId>(techStack[0].id);
  const active = useMemo(() => techStack.find((tech) => tech.id === activeId) ?? techStack[0], [activeId]);

  return (
    <section className="section" id="stack" aria-labelledby="stack-title">
      <SectionIntro
        eyebrow="Interactive stack map"
        titleId="stack-title"
        title="Core competencies—pick a tile for depth, or skim the grid."
        body="Lightweight icons keep the page fast. Expand the focus panel below on mobile, or leave it open on larger screens."
      />
      <div className="stack-grid">
        {techStack.map((tech, index) => {
          const selected = tech.id === activeId;
          return (
            <m.button
              type="button"
              className={`stack-card${selected ? " stack-card--active" : ""}`}
              key={tech.id}
              aria-pressed={selected}
              aria-label={`${tech.name}: ${tech.category}`}
              onClick={() => setActiveId(tech.id)}
              {...fadeUp}
              viewport={viewport}
              transition={{ duration: 0.45, delay: index * 0.035 }}
            >
              <TechStackGlyph id={tech.id} className="stack-icon" />
              <span>{tech.category}</span>
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </m.button>
          );
        })}
      </div>
      <div className="stack-detail-wrap">
        <Disclosure summary="Technical detail: focus areas for the selected technology">
          <m.div
            className="stack-detail"
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <p className="eyebrow">Focus areas</p>
            <h3 className="stack-detail-title">{active.name}</h3>
            <ul className="stack-focus">
              {active.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </m.div>
        </Disclosure>
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

function EngineeringStandards() {
  return (
    <section className="section spec-review" id="standards" aria-labelledby="standards-title">
      <m.div className="section-heading section-heading--solo" {...fadeUp} viewport={viewport} transition={baseTransition}>
        <div>
          <p className="eyebrow">{engineeringStandards.eyebrow}</p>
          <h2 id="standards-title">{engineeringStandards.title}</h2>
          <p className="standards-intro">{engineeringStandards.intro}</p>
        </div>
      </m.div>
      <Disclosure summary="Technical detail: how we talk about outcomes, discipline, and risk">
        <div className="review-grid">
          {engineeringStandards.columns.map((column) => (
            <ReviewColumn key={column.title} title={column.title} items={column.items} />
          ))}
        </div>
      </Disclosure>
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

const intakeSteps = ["Path", "Scope", "Contact"] as const;

function IntakePortal() {
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedId, setSelectedId] = useState<IntakeOptionId>("modernize");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [context, setContext] = useState("");

  const selected = useMemo(
    () => intakeOptions.find((option) => option.id === selectedId) ?? intakeOptions[0],
    [selectedId],
  );

  const mailSubject = encodeURIComponent(`Cloutsites intake: ${selected.recommendedTrack}`);
  const mailBody = useMemo(() => {
    return encodeURIComponent(
      [
        `Step 1 — Buyer path: ${selected.label}`,
        `Recommended track: ${selected.recommendedTrack}`,
        "",
        "Step 2 — Project scope:",
        context.trim() || "(not provided)",
        "",
        "Step 3 — Contact:",
        `Name: ${name.trim() || "(not provided)"}`,
        `Email: ${email.trim() || "(not provided)"}`,
        "",
        "---",
        "This message was generated from the Cloutsites intake portal.",
      ].join("\n"),
    );
  }, [context, email, name, selected.label, selected.recommendedTrack]);

  const mailHref = `mailto:${company.email}?subject=${mailSubject}&body=${mailBody}`;
  const canAdvanceFromScope = context.trim().length >= 24;
  const canSend = name.trim().length > 1 && email.includes("@") && email.includes(".");

  return (
    <section
      className="section intake-section"
      id="intake"
      role="region"
      aria-labelledby="intake-title"
    >
      <SectionIntro
        eyebrow="Client intake portal"
        titleId="intake-title"
        title="Tell us whether the job is modernization, product build, or outcome discovery."
        body="Three short steps categorize the lead, capture scope, and send a structured brief via email. For production volume, connect this flow to a backend or CRM (see note below)."
      />
      <ol className="intake-steps" aria-label="Intake progress">
        {intakeSteps.map((label, index) => (
          <li key={label} className={index === stepIndex ? "intake-step intake-step--current" : "intake-step"}>
            <span aria-current={index === stepIndex ? "step" : undefined}>
              {String(index + 1).padStart(2, "0")} {label}
            </span>
          </li>
        ))}
      </ol>
      <div className="intake-layout">
        {stepIndex === 0 ? (
          <m.div
            className="intake-options intake-options--wide"
            {...fadeUp}
            viewport={viewport}
            transition={baseTransition}
          >
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
            <div className="selected-track selected-track--inline">
              <span>Recommended engineering track</span>
              <strong>{selected.recommendedTrack}</strong>
              <p>{selected.description}</p>
            </div>
            <div className="intake-nav">
              <button className="button secondary" type="button" disabled>
                Back
              </button>
              <button className="button primary" type="button" onClick={() => setStepIndex(1)}>
                Continue
              </button>
            </div>
          </m.div>
        ) : null}

        {stepIndex === 1 ? (
          <m.div className="intake-panel" {...fadeUp} viewport={viewport} transition={baseTransition}>
            <div className="selected-track">
              <span>Selected path</span>
              <strong>{selected.label}</strong>
              <p>{selected.description}</p>
              <p className="selected-track-note">
                Recommended engineering track: <strong>{selected.recommendedTrack}</strong>
              </p>
            </div>
            <label>
              What needs to change?
              <textarea
                name="context"
                rows={6}
                value={context}
                onChange={(event) => setContext(event.target.value)}
                placeholder="Systems in play, deadlines, risk, compliance, hosting, integrations, success criteria—specific beats vague."
              />
            </label>
            <p className="field-hint">Add at least a few sentences so the next step has enough signal (24+ characters).</p>
            <div className="intake-nav">
              <button className="button secondary" type="button" onClick={() => setStepIndex(0)}>
                Back
              </button>
              <button
                className="button primary"
                type="button"
                onClick={() => setStepIndex(2)}
                disabled={!canAdvanceFromScope}
              >
                Continue
              </button>
            </div>
          </m.div>
        ) : null}

        {stepIndex === 2 ? (
          <m.form
            className="intake-form intake-form--solo"
            {...fadeUp}
            viewport={viewport}
            transition={{ ...baseTransition, delay: 0.05 }}
            onSubmit={(event) => event.preventDefault()}
          >
            <label>
              Name
              <input
                name="name"
                placeholder="Your name"
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>
            <label>
              Work email
              <input
                name="email"
                type="email"
                placeholder="you@company.com"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <div className="intake-nav">
              <button className="button secondary" type="button" onClick={() => setStepIndex(1)}>
                Back
              </button>
              <a
                className={`button primary${canSend ? "" : " button--disabled"}`}
                href={canSend ? mailHref : undefined}
                aria-disabled={!canSend}
                onClick={(event) => {
                  if (!canSend) {
                    event.preventDefault();
                  }
                }}
              >
                Email Cloutsites
              </a>
            </div>
            <p className="form-footnote">{intakeProductionNotes}</p>
          </m.form>
        ) : null}
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
        <a href="/cloutsites#intake">Start a project</a>
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

