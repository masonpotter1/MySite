import { describe, expect, it } from "vitest";
import { caseStudies, engineeringStandards, intakeOptions, serviceCards, techStack } from "./cloutsitesContent";

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

  it("keeps stack entries aligned with icon ids", () => {
    const ids = techStack.map((tech) => tech.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(techStack.every((tech) => tech.focus.length >= 2)).toBe(true);
  });

  it("keeps service pages aligned with the requested site map", () => {
    expect(serviceCards.map((service) => service.path)).toEqual([
      "/services/websites",
      "/services/marketing",
      "/services/business-it",
      "/services/systems-consulting",
    ]);
  });

  it("keeps intake categories unique and mapped to distinct recommendations", () => {
    const ids = new Set(intakeOptions.map((option) => option.id));
    const recommendations = new Set(intakeOptions.map((option) => option.recommendedTrack));

    expect(ids.size).toBe(intakeOptions.length);
    expect(recommendations).toEqual(
      new Set(["Websites", "Marketing", "Business IT", "Systems consulting"]),
    );
  });

  it("documents engineering standards and case study guardrails", () => {
    expect(engineeringStandards.title.toLowerCase()).toContain("software");
    expect(engineeringStandards.columns.length).toBe(3);
    expect(engineeringStandards.columns.every((col) => col.items.length >= 2)).toBe(true);
    expect(caseStudies.every((study) => study.before && study.after && study.metric)).toBe(true);
  });
});
