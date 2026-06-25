import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithSite } from "@/test/renderWithSite";
import { HomePage } from "./HomePage";

describe("HomePage", () => {
  it("renders the Cloutsites business homepage", () => {
    renderWithSite(<HomePage />, { route: "/" });

    expect(
      screen.getByRole("heading", {
        name: /websites, marketing, and practical it help for small businesses/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: /start a project/i }).some((link) => link.getAttribute("href") === "/contact"),
    ).toBe(true);
    expect(screen.getByRole("link", { name: /see services/i })).toHaveAttribute("href", "/services");
  });
});
