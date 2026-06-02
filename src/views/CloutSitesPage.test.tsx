import { fireEvent, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithSite } from "@/test/renderWithSite";
import { CloutSitesPage } from "./CloutSitesPage";

describe("CloutSitesPage", () => {
  it("renders the core positioning and service tracks", () => {
    renderWithSite(<CloutSitesPage />, { route: "/cloutsites" });

    expect(
      screen.getByRole("heading", {
        name: /websites and systems that earn trust/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/broken checkouts, slow pages/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /fix & modernize what you already run/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /launch & grow a credible web presence/i })).toBeInTheDocument();
    expect(screen.getByText(/selenium tests cover critical paths/i)).toBeInTheDocument();
    expect(screen.getByText(/production ready/i)).toBeInTheDocument();
  });

  it("renders the plain-English bridge and credibility section", () => {
    renderWithSite(<CloutSitesPage />, { route: "/cloutsites" });
    expect(
      screen.getByRole("heading", { name: /what we actually do for your business/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /how we engage—without theatre/i })).toBeInTheDocument();
  });

  it("updates the intake recommendation when a buyer path is selected", () => {
    renderWithSite(<CloutSitesPage />, { route: "/cloutsites" });

    const intake = screen.getByRole("region", {
      name: /tell us whether the job is modernization/i,
    });

    const buildOption = within(intake).getByRole("button", {
      name: /i need to build a new product/i,
    });
    fireEvent.click(buildOption);

    expect(buildOption).toHaveAttribute("aria-pressed", "true");
    expect(within(intake).getByText("Launch & grow")).toBeInTheDocument();
  });

  it("links to the Mason portfolio", () => {
    renderWithSite(<CloutSitesPage />, { route: "/cloutsites" });
    expect(screen.getByRole("link", { name: /about the founder/i })).toHaveAttribute("href", "/mason");
  });
});
