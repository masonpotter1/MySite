import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithRouter } from "./test/renderWithRouter";
import App from "./App";

describe("App routing", () => {
  it("renders global nav with active CloutSites route", () => {
    renderWithRouter(<App />, { route: "/cloutsites" });

    expect(screen.getByRole("navigation", { name: /site sections/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "CloutSites" })).toHaveClass("site-nav-link--active");
  });

  it("shows section nav on CloutSites route", () => {
    renderWithRouter(<App />, { route: "/cloutsites" });
    expect(screen.getByRole("navigation", { name: /on this page/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Services" })).toHaveAttribute("href", "/cloutsites#services");
  });

  it("renders 404 for unknown routes", () => {
    renderWithRouter(<App />, { route: "/does-not-exist" });
    expect(screen.getByRole("heading", { name: /page not found/i })).toBeInTheDocument();
  });
});
