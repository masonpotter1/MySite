import { fireEvent, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithRouter } from "../test/renderWithRouter";
import { CloutSitesPage } from "./CloutSitesPage";

describe("CloutSitesPage", () => {
  it("renders the core positioning and service tracks", () => {
    renderWithRouter(<CloutSitesPage />, { route: "/cloutsites" });

    expect(
      screen.getByRole("heading", {
        name: /engineering systems built for real operations/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/we don't just build sites; we build systems/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /enterprise modernization/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /digital growth & product/i })).toBeInTheDocument();
    expect(screen.getByText(/selenium tests cover critical paths/i)).toBeInTheDocument();
    expect(screen.getByText(/production ready/i)).toBeInTheDocument();
  });

  it("renders the plain-English bridge and credibility section", () => {
    renderWithRouter(<CloutSitesPage />, { route: "/cloutsites" });
    expect(
      screen.getByRole("heading", { name: /what we actually do for your business/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /how we engage—without theatre/i })).toBeInTheDocument();
  });

  it("updates the intake recommendation when a buyer path is selected", () => {
    renderWithRouter(<CloutSitesPage />, { route: "/cloutsites" });

    const intake = screen.getByRole("region", {
      name: /tell us whether the job is modernization/i,
    });

    const buildOption = within(intake).getByRole("button", {
      name: /i need to build a new product/i,
    });
    fireEvent.click(buildOption);

    expect(buildOption).toHaveAttribute("aria-pressed", "true");
    expect(within(intake).getByText("Digital Growth & Product")).toBeInTheDocument();
  });

  it("links to the Mason portfolio", () => {
    renderWithRouter(<CloutSitesPage />, { route: "/cloutsites" });
    expect(screen.getByRole("link", { name: /meet mason potter/i })).toHaveAttribute("href", "/mason");
  });
});
