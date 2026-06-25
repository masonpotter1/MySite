import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithSite } from "@/test/renderWithSite";
import { FounderPage } from "./CloutSitesPage";

describe("FounderPage", () => {
  it("renders Mason as founder credibility for Cloutsites", () => {
    renderWithSite(<FounderPage />, { route: "/about/mason-potter" });

    expect(screen.getByRole("heading", { name: /mason potter, founder/i })).toBeInTheDocument();
    expect(screen.getByText(/software engineering applied to everyday business problems/i)).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /travel log/i })).not.toBeInTheDocument();
  });

  it("links résumé and Cloutsites contact paths", () => {
    renderWithSite(<FounderPage />, { route: "/about/mason-potter" });
    expect(screen.getByRole("link", { name: /resume/i })).toHaveAttribute("href", "/resume");
    expect(screen.getByRole("link", { name: /contact cloutsites/i })).toHaveAttribute("href", "/contact");
  });
});
