import { describe, expect, it } from "vitest";
import { caseStudies, intakeOptions, specReview, techStack } from "./cloutsitesContent";

describe("Cloutsites content contracts", () => {
  it("keeps required competencies in the stack visualization", () => {
    const names = techStack.map((tech) => tech.name);

    expect(names).toEqual(
      expect.arrayContaining([
        "React",
        "PHP / Laravel",
        "C#",
        "SQL",
        "Docker",
        "Kubernetes",
        "Datadog",
        "Selenium",
        "Vercel",
      ]),
    );
  });

  it("keeps intake categories unique and mapped to distinct recommendations", () => {
    const ids = new Set(intakeOptions.map((option) => option.id));
    const recommendations = new Set(intakeOptions.map((option) => option.recommendedTrack));

    expect(ids.size).toBe(intakeOptions.length);
    expect(recommendations).toEqual(
      new Set(["Enterprise Modernization", "Digital Growth & Product", "Discovery Sprint"]),
    );
  });

  it("documents spec improvements and case study guardrails", () => {
    expect(specReview.verdict).toMatch(/strong direction/i);
    expect(specReview.improvementsMade.some((item) => item.includes("sub-1s"))).toBe(true);
    expect(specReview.launchRisks.some((item) => item.includes("case studies"))).toBe(true);
    expect(caseStudies.every((study) => study.before && study.after && study.metric)).toBe(true);
  });
});
