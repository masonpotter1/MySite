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

  it("links résumé page and recruiter strip", () => {
    renderWithRouter(<MasonPage />, { route: "/mason" });
    expect(screen.getByRole("heading", { name: /what to scan in under a minute/i })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /résumé|resume/i }).some((el) => el.getAttribute("href") === "/resume")).toBe(true);
  });
});
