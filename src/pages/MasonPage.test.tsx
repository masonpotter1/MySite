import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithRouter } from "../test/renderWithRouter";
import { MasonPage } from "./MasonPage";
import { profile } from "../data/siteContent";

describe("MasonPage", () => {
  it("renders profile and major sections", () => {
    renderWithRouter(<MasonPage />, { route: "/mason" });

    expect(screen.getByRole("heading", { name: profile.name })).toBeInTheDocument();
    expect(document.getElementById("about")).toBeInTheDocument();
    expect(document.getElementById("projects")).toBeInTheDocument();
    expect(document.getElementById("travel")).toBeInTheDocument();
  });

  it("links resume download at site root", () => {
    renderWithRouter(<MasonPage />, { route: "/mason" });
    const resume = screen.getByRole("link", { name: /resume/i });
    expect(resume).toHaveAttribute("href", "/resume.pdf");
  });
});
