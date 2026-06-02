import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteHeader } from "@/layout/SiteHeader";
import { renderWithSite } from "@/test/renderWithSite";

describe("SiteHeader routing", () => {
  it("renders global nav with active CloutSites route", () => {
    renderWithSite(<SiteHeader />, { route: "/cloutsites" });

    expect(screen.getByRole("navigation", { name: /site sections/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "CloutSites" })).toHaveClass("site-nav-link--active");
  });

  it("does not render on-this-page section nav in the header", () => {
    renderWithSite(<SiteHeader />, { route: "/cloutsites" });
    expect(screen.queryByRole("navigation", { name: /on this page/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /on this page/i })).not.toBeInTheDocument();
  });

  it("highlights Mason nav on resume route", () => {
    renderWithSite(<SiteHeader />, { route: "/resume" });
    expect(screen.getByRole("link", { name: "Mason" })).toHaveClass("site-nav-link--active");
  });
});
