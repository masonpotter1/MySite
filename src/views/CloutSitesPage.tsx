"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { m } from "framer-motion";
import { TechStackGlyph } from "@/components/TechIcons";
import { fadeUp, viewport, baseTransition } from "@/lib/motion";
import {
  audienceGroups,
  caseStudies,
  company,
  engineeringStandards,
  intakeOptions,
  intakeProductionNotes,
  processSteps,
  proofStats,
  reliabilityChecks,
  serviceCards,
  servicePages,
  techStack,
  whyCloutsites,
  type IntakeOptionId,
  type ServiceId,
} from "@/data/cloutsitesContent";
import { education, experiences, profile, skillGroups } from "@/data/siteContent";

const cloutTransition = { ...baseTransition, duration: 0.5 };

export function CloutSitesPage() {
  return (
    <BusinessPageShell>
      <main id="main-content" tabIndex={-1}>
        <HomeHero />
        <WhoWeHelp />
        <CoreServices />
        <WhyCloutsites />
        <WorkPreview />
        <FounderStrip />
        <FinalCta />
      </main>
    </BusinessPageShell>
  );
}

export function ServicesPage() {
  return (
    <BusinessPageShell>
      <main id="main-content" tabIndex={-1}>
        <SimpleHero
          eyebrow="Services"
          title="Practical digital help, organized around what small businesses actually need."
          body="Start with the lane that matches your immediate problem. If the work crosses categories, Cloutsites can connect the website, marketing, accounts, and systems into one sane plan."
          primaryHref="/contact"
          primaryLabel="Start a project"
          secondaryHref="/process"
          secondaryLabel="How projects work"
        />
        <CoreServices expanded />
        <ServiceComparison />
        <FinalCta
          title="Not sure where the project fits?"
          body="Bring the outcome, the current tools, and what feels messy. We will translate that into a practical first step."
        />
      </main>
    </BusinessPageShell>
  );
}

export function ServiceDetailPage({ serviceId }: { serviceId: ServiceId }) {
  const service = serviceCards.find((card) => card.id === serviceId) ?? serviceCards[0];
  const detail = servicePages[service.id];

  return (
    <BusinessPageShell>
      <main id="main-content" tabIndex={-1}>
        <SimpleHero
          eyebrow={service.shortTitle}
          title={detail.hero}
          body={detail.lead}
          primaryHref="/contact"
          primaryLabel="Start this conversation"
          secondaryHref="/services"
          secondaryLabel="All services"
        />
        <section className="section service-detail-grid" aria-label={`${service.shortTitle} details`}>
          <DetailPanel title="Common problems" items={detail.commonProblems} />
          <DetailPanel title="What we can deliver" items={detail.deliverables} />
          <DetailPanel title="Best fit" items={detail.bestFit} />
          <m.article className="track-card service-next-step" {...fadeUp} viewport={viewport} transition={cloutTransition}>
            <p className="track-eyebrow">Best next step</p>
            <h2>{detail.nextStep}</h2>
            <p>{service.summary}</p>
            <Link className="button primary" href="/contact">
              Start a project
            </Link>
          </m.article>
        </section>
        {service.id === "systems-consulting" ? <TechnicalDepth /> : null}
      </main>
    </BusinessPageShell>
  );
}

export function WorkPage() {
  return (
    <BusinessPageShell>
      <main id="main-content" tabIndex={-1}>
        <SimpleHero
          eyebrow="Work"
          title="Before-and-after examples without inflated claims."
          body="Cloutsites uses honest proof framing: what was messy before, what changed after, and which outcomes should be measured once client permission and real data are available."
          primaryHref="/contact"
          primaryLabel="Talk through your project"
          secondaryHref="/services"
          secondaryLabel="See services"
        />
        <CaseStudyGrid full />
        <section className="section proof-policy" aria-labelledby="proof-policy-title">
          <m.div className="credibility-strip" {...fadeUp} viewport={viewport} transition={cloutTransition}>
            <p className="eyebrow">Proof policy</p>
            <h2 id="proof-policy-title" className="credibility-heading">
              Credibility is stronger when the numbers are real.
            </h2>
            <p className="credibility-sub">
              Public case studies should use verified outcomes, client permission, and clear context. Until then,
              Cloutsites frames examples around project types, before-and-after changes, and the measurement plan.
            </p>
            <div className="credibility-grid">
              {["No fake metrics", "Permission before naming clients", "Before/after clarity", "Measurement plan included"].map(
                (item) => (
                  <article className="cred-card" key={item}>
                    <h3>{item}</h3>
                    <p>Useful proof should help a buyer understand risk, fit, and next steps without exaggeration.</p>
                  </article>
                ),
              )}
            </div>
          </m.div>
        </section>
      </main>
    </BusinessPageShell>
  );
}

export function ProcessPage() {
  return (
    <BusinessPageShell>
      <main id="main-content" tabIndex={-1}>
        <SimpleHero
          eyebrow="Process"
          title="A clear path from messy problem to useful handoff."
          body="Every project starts by understanding the business outcome. The scope might become a website, marketing cleanup, Microsoft/email setup, or deeper system consulting."
          primaryHref="/contact"
          primaryLabel="Start with discovery"
          secondaryHref="/work"
          secondaryLabel="See work examples"
        />
        <ProcessRail />
        <ReliabilitySection />
      </main>
    </BusinessPageShell>
  );
}

export function AboutPage() {
  return (
    <BusinessPageShell>
      <main id="main-content" tabIndex={-1}>
        <SimpleHero
          eyebrow="About Cloutsites"
          title="A practical digital partner for small businesses and early-stage operators."
          body="Cloutsites exists for businesses that need more than a pretty page. The goal is a web presence, marketing setup, account structure, and operating workflow that feel easier to trust after the work is done."
          primaryHref="/contact"
          primaryLabel="Start a project"
          secondaryHref="/about/team"
          secondaryLabel="About the team"
        />
        <WhyCloutsites />
        <section className="section about-values" aria-labelledby="values-title">
          <SectionIntro
            eyebrow="Company values"
            titleId="values-title"
            title="Clear, useful, and honest beats impressive-sounding."
            body="The site and service model are built for owners who want direct answers, careful implementation, and practical next steps."
          />
          <div className="track-grid">
            {[
              ["Plain language", "Technical work should be explainable to the people paying for and operating it."],
              ["Useful scope", "A small, well-finished launch is better than a bloated plan nobody can maintain."],
              ["Real handoff", "Owners should know what changed, where accounts live, and how to ask for future updates."],
              ["Room to grow", "The same partner can support a first website and later help with deeper systems problems."],
            ].map(([title, body]) => (
              <article className="track-card" key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </BusinessPageShell>
  );
}

export function TeamPage() {
  return (
    <BusinessPageShell>
      <main id="main-content" tabIndex={-1}>
        <SimpleHero
          eyebrow="About the team"
          title="Owner-led, engineering-first, and honest about how the work gets done."
          body="Cloutsites is currently an owner-led studio. That means clients work close to the person responsible for architecture, implementation, quality, and communication."
          primaryHref="/about/mason-potter"
          primaryLabel="Meet Mason"
          secondaryHref="/contact"
          secondaryLabel="Start a project"
        />
        <section className="section team-layout" aria-label="How the team works">
          <m.article className="credibility-strip" {...fadeUp} viewport={viewport} transition={cloutTransition}>
            <p className="eyebrow">Collaboration model</p>
            <h2 className="credibility-heading">Small team attention with specialist help when the project needs it.</h2>
            <p className="credibility-sub">
              Clients should not have to guess who owns the work. Mason leads discovery, technical direction, and
              delivery quality, then brings in trusted specialist or vendor support when a scope calls for it.
            </p>
            <div className="credibility-grid">
              {[
                ["Direct owner contact", "Clear communication with the person accountable for the final result."],
                ["Practical vendor coordination", "Help translating between business needs, platforms, and outside tools."],
                ["Documented handoff", "Simple notes for accounts, pages, launches, and future improvements."],
                ["Built for small businesses", "Enough process to protect the work without burying owners in overhead."],
              ].map(([title, body]) => (
                <article className="cred-card" key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </m.article>
          <FounderCard />
        </section>
      </main>
    </BusinessPageShell>
  );
}

export function FounderPage() {
  const cloutsitesExperience = experiences.find((item) => item.company === "CloutSites LLC");
  const relevantExperience = experiences.filter((item) =>
    ["Paycom Payroll LLC", "CloutSites LLC", "Hays Medical Spa", "Financial Partners Group"].includes(item.company),
  );

  return (
    <BusinessPageShell>
      <main id="main-content" tabIndex={-1}>
        <SimpleHero
          eyebrow="Founder"
          title="Mason Potter, founder and full-stack engineer behind Cloutsites."
          body="Mason brings enterprise software, consulting, healthcare web, marketing, and practical IT experience to small-business problems. The founder story supports the company; it is not the main doorway."
          primaryHref="/contact"
          primaryLabel="Contact Cloutsites"
          secondaryHref="/resume"
          secondaryLabel="Resume"
        />
        <section className="section founder-profile" aria-labelledby="founder-profile-title">
          <m.article className="profile-card founder-profile-card" {...fadeUp} viewport={viewport} transition={cloutTransition}>
            <div className="profile-banner" />
            <div className="profile-card-content">
              <p className="eyebrow">At a glance</p>
              <h2 id="founder-profile-title">{profile.name}</h2>
              <p>{profile.headline}</p>
              <div className="chip-row">
                <span className="chip">{profile.location}</span>
                <span className="chip">{education.degree}</span>
                <span className="chip">Founder · Cloutsites LLC</span>
              </div>
            </div>
          </m.article>
          <m.article className="track-card" {...fadeUp} viewport={viewport} transition={cloutTransition}>
            <p className="track-eyebrow">Why it matters for clients</p>
            <h2>Software engineering applied to everyday business problems.</h2>
            <p>
              {cloutsitesExperience?.summary ??
                "Cloutsites connects websites, marketing, practical IT, and systems consulting under one clear service model."}
            </p>
            <ul className="outcome-list">
              <li>Enterprise ATS work across PHP, React, SQL, and Selenium.</li>
              <li>Healthcare website modernization with booking, ads, analytics, and office IT support.</li>
              <li>Marketing and website support experience for finance and local-service businesses.</li>
              <li>Founder-led delivery for clients who need clear technical guidance.</li>
            </ul>
          </m.article>
        </section>
        <section className="section" aria-labelledby="background-title">
          <SectionIntro
            eyebrow="Professional background"
            titleId="background-title"
            title="Credibility from software, consulting, web operations, and business systems."
          />
          <div className="case-grid">
            {relevantExperience.map((item) => (
              <article className="case-card" key={`${item.company}-${item.role}`}>
                <span className="metric">{item.dates}</span>
                <h3>{item.role}</h3>
                <p className="mini-label">{item.company}</p>
                <p>{item.summary}</p>
                <div className="chip-row">
                  {item.tags.slice(0, 4).map((tag) => (
                    <span className="chip" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="section" aria-labelledby="skills-title">
          <SectionIntro
            eyebrow="Technical credibility"
            titleId="skills-title"
            title="Useful range without making the homepage feel enterprise-only."
            body="The deeper technical stack stays available for systems consulting, while the primary business site stays approachable for local and small-business clients."
          />
          <div className="stack-grid compact-stack-grid">
            {skillGroups.map((group) => (
              <article className="stack-card founder-skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="chip-row">
                  {group.skills.slice(0, 6).map((skill) => (
                    <span className="chip" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </BusinessPageShell>
  );
}

export function ContactPage() {
  return (
    <BusinessPageShell>
      <main id="main-content" tabIndex={-1}>
        <SimpleHero
          eyebrow="Contact"
          title="Tell us what needs to change."
          body="Whether the first step is a website, marketing help, Microsoft/email cleanup, or a deeper systems conversation, the intake starts with the business problem."
          primaryHref="#intake"
          primaryLabel="Open intake"
          secondaryHref="/services"
          secondaryLabel="Review services"
        />
        <IntakePortal />
      </main>
    </BusinessPageShell>
  );
}

function BusinessPageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-cloutsites">
      {children}
      <Footer />
    </div>
  );
}

function HomeHero() {
  return (
    <section className="hero section business-hero" id="top">
      <m.div className="hero-copy" {...fadeUp} viewport={viewport} transition={cloutTransition}>
        <p className="eyebrow">{company.heroEyebrow}</p>
        <h1>{company.tagline}</h1>
        <p className="hero-subtitle">{company.heroSubtitle}</p>
        <p className="value-prop">{company.valueProposition}</p>
        <div className="hero-actions">
          <Link className="button primary" href="/contact">
            Start a Project
          </Link>
          <Link className="button secondary" href="/services">
            See Services
          </Link>
        </div>
        <div className="chip-row" aria-label="Service highlights">
          {company.seoKeywords.slice(0, 4).map((keyword) => (
            <span className="chip" key={keyword}>
              {keyword}
            </span>
          ))}
        </div>
      </m.div>

      <m.aside
        className="hero-terminal business-snapshot"
        aria-label="Cloutsites service snapshot"
        {...fadeUp}
        viewport={viewport}
        transition={{ ...cloutTransition, delay: 0.1 }}
      >
        <div className="terminal-bar">
          <span />
          <span />
          <span />
          <strong>small-business.digital</strong>
        </div>
        <div className="snapshot-list">
          {serviceCards.map((service) => (
            <Link href={service.path} className="snapshot-row" key={service.id}>
              <span>{service.shortTitle}</span>
              <small>{service.diagnostics.slice(0, 3).join(" · ")}</small>
            </Link>
          ))}
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

function SimpleHero({
  eyebrow,
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow: string;
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}) {
  return (
    <section className="section simple-page-hero">
      <m.div className="hero-copy simple-page-hero-copy" {...fadeUp} viewport={viewport} transition={cloutTransition}>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-subtitle">{body}</p>
        <div className="hero-actions">
          <Link className="button primary" href={primaryHref}>
            {primaryLabel}
          </Link>
          <Link className="button secondary" href={secondaryHref}>
            {secondaryLabel}
          </Link>
        </div>
      </m.div>
    </section>
  );
}

function WhoWeHelp() {
  return (
    <section className="section" id="who-we-help" aria-labelledby="who-we-help-title">
      <SectionIntro
        eyebrow="Who we help"
        titleId="who-we-help-title"
        title="Built for owners and early operators who need digital work to feel less scattered."
        body="The average client is not looking for enterprise jargon. They need a credible web presence, marketing support, basic IT clarity, or someone who can step into the current mess and make it easier to run."
      />
      <div className="credibility-grid audience-grid">
        {audienceGroups.map((group, index) => (
          <m.article
            className="cred-card"
            key={group.title}
            {...fadeUp}
            viewport={viewport}
            transition={{ ...cloutTransition, delay: index * 0.04 }}
          >
            <h3>{group.title}</h3>
            <p>{group.body}</p>
          </m.article>
        ))}
      </div>
    </section>
  );
}

function CoreServices({ expanded = false }: { expanded?: boolean }) {
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <SectionIntro
        eyebrow="Core services"
        titleId="services-title"
        title="One partner for the front door and the behind-the-scenes cleanup."
        body={
          expanded
            ? "Each lane has a clear buying path, but many projects blend them. A website rebuild might also need email cleanup, analytics, and a better booking workflow."
            : "The homepage stays focused on practical help. Deeper software, cloud, QA, and modernization language lives inside systems consulting for clients who need it."
        }
      />
      <div className="track-grid service-card-grid">
        {serviceCards.map((service, index) => (
          <m.article
            className="track-card service-card"
            key={service.id}
            {...fadeUp}
            viewport={viewport}
            transition={{ ...cloutTransition, delay: index * 0.06 }}
          >
            <p className="track-eyebrow">{service.eyebrow}</p>
            <h3>{service.title}</h3>
            <p>{service.summary}</p>
            {expanded ? (
              <ul className="outcome-list">
                {service.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            ) : null}
            <div className="chip-row">
              {service.diagnostics.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <Link className="button secondary service-card-link" href={service.path}>
              Explore {service.shortTitle}
            </Link>
          </m.article>
        ))}
      </div>
    </section>
  );
}

function WhyCloutsites() {
  return (
    <section className="section" aria-labelledby="why-title">
      <m.div className="plain-english" {...fadeUp} viewport={viewport} transition={cloutTransition}>
        <p className="eyebrow">Why Cloutsites</p>
        <h2 id="why-title">Practical, approachable, and technical enough to fix deeper problems.</h2>
        <p className="plain-lead">
          Cloutsites is not trying to make every owner buy a giant software project. The work starts with the most
          useful next step and keeps the deeper technical capability available when the project actually needs it.
        </p>
      </m.div>
      <div className="credibility-grid why-grid">
        {whyCloutsites.map((item, index) => (
          <m.article
            className="cred-card"
            key={item.title}
            {...fadeUp}
            viewport={viewport}
            transition={{ ...cloutTransition, delay: index * 0.04 }}
          >
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </m.article>
        ))}
      </div>
    </section>
  );
}

function WorkPreview() {
  return (
    <section className="section" aria-labelledby="work-preview-title">
      <SectionIntro
        eyebrow="Work preview"
        titleId="work-preview-title"
        title="Proof framed around real business changes."
        body="The work page keeps examples honest: project type, before state, after state, and what should be measured next."
      />
      <CaseStudyGrid limit={3} />
      <p className="centered-action">
        <Link className="button secondary" href="/work">
          View work examples
        </Link>
      </p>
    </section>
  );
}

function CaseStudyGrid({ limit, full = false }: { limit?: number; full?: boolean }) {
  const studies = typeof limit === "number" ? caseStudies.slice(0, limit) : caseStudies;

  return (
    <div className={full ? "case-grid case-grid--full" : "case-grid"}>
      {studies.map((study, index) => (
        <m.article
          className="case-card"
          key={study.title}
          {...fadeUp}
          viewport={viewport}
          transition={{ ...cloutTransition, delay: index * 0.05 }}
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
  );
}

function FounderStrip() {
  return (
    <section className="section founder-strip" aria-labelledby="founder-strip-title">
      <m.div className="credibility-strip founder-strip-panel" {...fadeUp} viewport={viewport} transition={cloutTransition}>
        <div>
          <p className="eyebrow">Founder credibility</p>
          <h2 id="founder-strip-title" className="credibility-heading">
            Founded by Mason Potter, a full-stack engineer with practical business systems experience.
          </h2>
          <p className="credibility-sub">
            Mason&apos;s background in enterprise software, healthcare web modernization, marketing systems, and
            small-business IT gives Cloutsites more depth than a design-only website shop.
          </p>
        </div>
        <Link className="button secondary" href="/about/mason-potter">
          About Mason Potter
        </Link>
      </m.div>
    </section>
  );
}

function FinalCta({
  title = "Ready to make the digital side of the business easier?",
  body = "Start with a short description of what you need: website, marketing, Microsoft/email setup, or a deeper systems problem.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="section final-cta" aria-labelledby="final-cta-title">
      <m.div className="reliability-copy final-cta-panel" {...fadeUp} viewport={viewport} transition={cloutTransition}>
        <p className="eyebrow">Start a project</p>
        <h2 id="final-cta-title">{title}</h2>
        <p>{body}</p>
        <div className="hero-actions">
          <Link className="button primary" href="/contact">
            Start a Project
          </Link>
          <Link className="button secondary" href="/services">
            Compare services
          </Link>
        </div>
      </m.div>
    </section>
  );
}

function ServiceComparison() {
  return (
    <section className="section" aria-labelledby="comparison-title">
      <SectionIntro
        eyebrow="Choosing a path"
        titleId="comparison-title"
        title="Match the problem to the first conversation."
      />
      <div className="comparison-table" role="table" aria-label="Service comparison">
        <div className="comparison-row comparison-row--head" role="row">
          <span role="columnheader">Service</span>
          <span role="columnheader">Choose this if</span>
          <span role="columnheader">Typical deliverables</span>
        </div>
        {serviceCards.map((service) => (
          <div className="comparison-row" role="row" key={service.id}>
            <span role="cell">
              <Link href={service.path}>{service.shortTitle}</Link>
            </span>
            <span role="cell">{servicePages[service.id].bestFit[0]}</span>
            <span role="cell">{service.outcomes.slice(0, 2).join(" ")}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function DetailPanel({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <m.article className="track-card detail-panel" {...fadeUp} viewport={viewport} transition={cloutTransition}>
      <p className="track-eyebrow">{title}</p>
      <ul className="outcome-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </m.article>
  );
}

function ProcessRail() {
  return (
    <section className="section process-section" aria-labelledby="process-title">
      <SectionIntro
        eyebrow="How projects work"
        titleId="process-title"
        title="Simple enough for small projects, structured enough for serious ones."
      />
      <div className="process-rail process-rail--five">
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

function ReliabilitySection() {
  return (
    <section className="section reliability-panel" aria-labelledby="quality-title">
      <m.div className="reliability-copy" {...fadeUp} viewport={viewport} transition={cloutTransition}>
        <p className="eyebrow">Responsive and reliable</p>
        <h2 id="quality-title">The work should hold up on real phones, tablets, and desktops.</h2>
        <p>
          Mobile layouts, forms, booking links, account access, analytics, and launch details get checked before
          handoff. Deeper systems work adds QA and release notes where the risk calls for it.
        </p>
      </m.div>
      <m.div className="release-checklist-wrap" {...fadeUp} viewport={viewport} transition={cloutTransition}>
        <div className="release-checklist">
          {reliabilityChecks.map((check, index) => (
            <div className="check-row" key={check}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <p>{check}</p>
            </div>
          ))}
        </div>
      </m.div>
    </section>
  );
}

function TechnicalDepth() {
  return (
    <>
      <section className="section spec-review" aria-labelledby="technical-depth-title">
        <SectionIntro
          eyebrow={engineeringStandards.eyebrow}
          titleId="technical-depth-title"
          title={engineeringStandards.title}
          body={engineeringStandards.intro}
        />
        <div className="review-grid">
          {engineeringStandards.columns.map((column) => (
            <article className="review-card" key={column.title}>
              <h3>{column.title}</h3>
              <ul>
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="section" aria-labelledby="stack-title">
        <SectionIntro
          eyebrow="Technical stack"
          titleId="stack-title"
          title="Advanced tools stay available when the project needs them."
          body="This stack supports deeper systems consulting, modernization, QA, and deployment work."
        />
        <div className="stack-grid">
          {techStack.map((tech) => (
            <article className="stack-card technical-stack-card" key={tech.id}>
              <TechStackGlyph id={tech.id} className="stack-icon" />
              <span className="stack-card-category">{tech.category}</span>
              <h3>{tech.name}</h3>
              <p className="stack-card-lede">{tech.description}</p>
              <ul className="stack-focus">
                {tech.focus.map((focus) => (
                  <li key={focus}>{focus}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function FounderCard() {
  return (
    <m.article className="track-card founder-card" {...fadeUp} viewport={viewport} transition={cloutTransition}>
      <p className="track-eyebrow">Founder</p>
      <h2>Mason Potter</h2>
      <p>
        Full-stack engineer and Cloutsites founder based in Oklahoma City, with experience across enterprise ATS,
        healthcare web operations, marketing, and small-business systems.
      </p>
      <div className="chip-row">
        <span className="chip">PHP</span>
        <span className="chip">React</span>
        <span className="chip">Selenium</span>
        <span className="chip">SEO/SEM</span>
        <span className="chip">Business IT</span>
      </div>
      <Link className="button secondary service-card-link" href="/about/mason-potter">
        About Mason
      </Link>
    </m.article>
  );
}

const intakeSteps = ["Path", "Scope", "Contact"] as const;

function IntakePortal() {
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedId, setSelectedId] = useState<IntakeOptionId>("website");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [context, setContext] = useState("");

  const selected = useMemo(
    () => intakeOptions.find((option) => option.id === selectedId) ?? intakeOptions[0],
    [selectedId],
  );

  const mailSubject = encodeURIComponent(`Cloutsites project: ${selected.recommendedTrack}`);
  const mailBody = useMemo(() => {
    return encodeURIComponent(
      [
        `Service path: ${selected.label}`,
        `Recommended track: ${selected.recommendedTrack}`,
        "",
        "What needs to change:",
        context.trim() || "(not provided)",
        "",
        "Contact:",
        `Name: ${name.trim() || "(not provided)"}`,
        `Email: ${email.trim() || "(not provided)"}`,
        "",
        "---",
        "This message was generated from the Cloutsites contact page.",
      ].join("\n"),
    );
  }, [context, email, name, selected.label, selected.recommendedTrack]);

  const mailHref = `mailto:${company.email}?subject=${mailSubject}&body=${mailBody}`;
  const canAdvanceFromScope = context.trim().length >= 20;
  const canSend = name.trim().length > 1 && email.includes("@") && email.includes(".");

  return (
    <section className="section intake-section" id="intake" role="region" aria-labelledby="intake-title">
      <SectionIntro
        eyebrow="Client intake"
        titleId="intake-title"
        title="Start with the service path that sounds closest."
        body="Three short steps organize the request and open a structured email. If you are unsure, pick the closest option and explain the business outcome."
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
          <m.div className="intake-options intake-options--wide" {...fadeUp} viewport={viewport} transition={cloutTransition}>
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
              <span>Recommended track</span>
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
          <m.div className="intake-panel" {...fadeUp} viewport={viewport} transition={cloutTransition}>
            <div className="selected-track">
              <span>Selected path</span>
              <strong>{selected.label}</strong>
              <p>{selected.description}</p>
            </div>
            <label>
              What needs to change?
              <textarea
                name="context"
                rows={6}
                value={context}
                onChange={(event) => setContext(event.target.value)}
                placeholder="Tell us about the business, current site/tools, deadlines, and what would make this feel solved."
              />
            </label>
            <p className="field-hint">Add at least a sentence or two so the next step has enough signal.</p>
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
          <m.form className="intake-form intake-form--solo" {...fadeUp} viewport={viewport} transition={cloutTransition}>
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
              Email
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
                  if (!canSend) event.preventDefault();
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
        <Link href="/privacy.html">Privacy</Link>
        <span aria-hidden="true">/</span>
        <Link href="/about/team">Team</Link>
        <span aria-hidden="true">/</span>
        <Link href="/about/mason-potter">Founder</Link>
        <span aria-hidden="true">/</span>
        <Link href="/contact">Start a project</Link>
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
    <m.div className="section-heading" {...fadeUp} viewport={viewport} transition={cloutTransition}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={titleId}>{title}</h2>
      </div>
      {body ? <p>{body}</p> : null}
    </m.div>
  );
}
