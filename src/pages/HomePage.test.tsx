import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithRouter } from "../test/renderWithRouter";
import { HomePage } from "./HomePage";

describe("HomePage", () => {
  it("links to CloutSites and Mason sections", () => {
    renderWithRouter(<HomePage />, { route: "/" });

    expect(screen.getByRole("link", { name: /explore cloutsites/i })).toHaveAttribute("href", "/cloutsites");
    expect(screen.getByRole("link", { name: /view portfolio/i })).toHaveAttribute("href", "/mason");
  });
});
