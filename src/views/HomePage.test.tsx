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
    expect(screen.getByRole("link", { name: /start a project/i })).toHaveAttribute("href", "/contact");
    expect(screen.getByRole("link", { name: /see services/i })).toHaveAttribute("href", "/services");
  });
});
