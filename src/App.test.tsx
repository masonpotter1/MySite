import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("Cloutsites homepage", () => {
  it("renders the core positioning and service tracks", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /engineering the future of oklahoma business/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/we don't just build sites; we build systems/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /enterprise modernization/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /digital growth & product/i })).toBeInTheDocument();
    expect(screen.getByText(/selenium-driven end-to-end testing/i)).toBeInTheDocument();
  });

  it("updates the intake recommendation when a buyer path is selected", () => {
    render(<App />);

    const intake = screen.getByRole("region", {
      name: /tell us whether the job is modernization/i,
    });

    expect(within(intake).getByText("Enterprise Modernization")).toBeInTheDocument();

    const buildOption = within(intake).getByRole("button", {
      name: /i need to build a new product/i,
    });
    fireEvent.click(buildOption);

    expect(buildOption).toHaveAttribute("aria-pressed", "true");
    expect(within(intake).getByText("Digital Growth & Product")).toBeInTheDocument();
  });

  it("keeps launch form fields accessible", () => {
    render(<App />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/work email/i)).toHaveAttribute("type", "email");
    expect(screen.getByLabelText(/what needs to change/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /email cloutsites/i })).toHaveAttribute(
      "href",
      expect.stringContaining("mailto:hello@cloutsites.com"),
    );
  });
});
