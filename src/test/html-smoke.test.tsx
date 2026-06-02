import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { MasonPage } from "@/views/MasonPage";
import { profile } from "@/data/siteContent";
import { experiences } from "@/data/siteContent";

describe("SSR HTML smoke", () => {
  it("MasonPage static markup includes recruiter-visible text", () => {
    const html = renderToStaticMarkup(<MasonPage />);
    expect(html).toContain(profile.name);
    expect(html).toContain(experiences[0]?.company ?? "Paycom");
    expect(html).toContain('href="/resume"');
  });
});
