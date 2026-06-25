import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SiteHeader } from "@/layout/SiteHeader";
import { renderWithSite } from "@/test/renderWithSite";

describe("SiteHeader routing", () => {
  it("renders business nav with active services route", () => {
    renderWithSite(<SiteHeader />, { route: "/services/websites" });

    expect(screen.getByRole("navigation", { name: /site sections/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Services" })).toHaveClass("site-nav-link--active");
    expect(screen.getByRole("link", { name: /start a project/i })).toHaveAttribute("href", "/contact");
  });

  it("does not render on-this-page section nav in the header", () => {
    renderWithSite(<SiteHeader />, { route: "/services" });
    expect(screen.queryByRole("navigation", { name: /on this page/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /on this page/i })).not.toBeInTheDocument();
  });

  it("highlights About nav on resume route", () => {
    renderWithSite(<SiteHeader />, { route: "/resume" });
    expect(screen.getByRole("link", { name: "About" })).toHaveClass("site-nav-link--active");
  });
});

