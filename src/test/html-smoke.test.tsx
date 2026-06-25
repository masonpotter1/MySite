import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { FounderPage } from "@/views/CloutSitesPage";
import { profile } from "@/data/siteContent";

describe("SSR HTML smoke", () => {
  it("FounderPage static markup includes business-visible founder text", () => {
    const html = renderToStaticMarkup(<FounderPage />);
    expect(html).toContain(profile.name);
    expect(html).toContain("Founder");
    expect(html).toContain('href="/contact"');
  });
});
