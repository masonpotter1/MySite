import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithSite } from "@/test/renderWithSite";
import { ResumePage } from "./ResumePage";
import { profile } from "../data/siteContent";

describe("ResumePage", () => {
  it("renders print-friendly résumé content", () => {
    renderWithSite(<ResumePage />, { route: "/resume" });

    expect(screen.getByRole("heading", { name: profile.name })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /experience/i })).toBeInTheDocument();
    expect(screen.getByText(/Paycom Payroll LLC/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /print/i })).toBeInTheDocument();
  });
});
