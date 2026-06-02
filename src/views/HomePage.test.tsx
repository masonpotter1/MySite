import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithSite } from "@/test/renderWithSite";
import { HomePage } from "./HomePage";

describe("HomePage", () => {
  it("links recruiters to portfolio and résumé", () => {
    renderWithSite(<HomePage />, { route: "/" });

    expect(screen.getByRole("link", { name: /recruiter path/i })).toHaveAttribute("href", "/mason");
    expect(screen.getByRole("link", { name: /open portfolio/i })).toHaveAttribute("href", "/mason");
    expect(screen.getByRole("link", { name: /résumé/i })).toHaveAttribute("href", "/resume");
    expect(screen.getByRole("link", { name: /explore cloutsites/i })).toHaveAttribute("href", "/cloutsites");
  });
});
