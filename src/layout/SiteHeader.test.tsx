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

  it("shows section nav on CloutSites route", () => {
    renderWithSite(<SiteHeader />, { route: "/cloutsites" });
    expect(screen.getByRole("navigation", { name: /on this page/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Services" })).toHaveAttribute("href", "/cloutsites#services");
  });

  it("highlights Mason nav on resume route", () => {
    renderWithSite(<SiteHeader />, { route: "/resume" });
    expect(screen.getByRole("link", { name: "Mason" })).toHaveClass("site-nav-link--active");
  });
});
