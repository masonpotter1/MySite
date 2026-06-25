import { fireEvent, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithSite } from "@/test/renderWithSite";
import {
  CloutSitesPage,
  ContactPage,
  FounderPage,
  ServiceDetailPage,
  ServicesPage,
} from "./CloutSitesPage";

describe("CloutSitesPage", () => {
  it("renders the small-business positioning and service cards", () => {
    renderWithSite(<CloutSitesPage />, { route: "/" });

    expect(
      screen.getByRole("heading", {
        name: /websites, marketing, and practical it help for small businesses/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /websites that make the business look real/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /social media, ads, and content support/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /business it setup without the confusion/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /systems consulting for messy workflows/i })).toBeInTheDocument();
  });

  it("renders the services overview with buying paths", () => {
    renderWithSite(<ServicesPage />, { route: "/services" });

    expect(screen.getByRole("heading", { name: /practical digital help/i })).toBeInTheDocument();
    expect(screen.getByRole("table", { name: /service comparison/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Websites" })).toHaveAttribute("href", "/services/websites");
  });

  it("updates the intake recommendation when a buyer path is selected", () => {
    renderWithSite(<ContactPage />, { route: "/contact" });

    const intake = screen.getByRole("region", {
      name: /start with the service path that sounds closest/i,
    });

    const marketingOption = within(intake).getByRole("button", {
      name: /i need marketing help/i,
    });
    fireEvent.click(marketingOption);

    expect(marketingOption).toHaveAttribute("aria-pressed", "true");
    expect(within(intake).getByText("Marketing")).toBeInTheDocument();
  });

  it("keeps advanced technical language on the systems consulting page", () => {
    renderWithSite(<ServiceDetailPage serviceId="systems-consulting" />, {
      route: "/services/systems-consulting",
    });

    expect(screen.getByRole("heading", { name: /consulting for outdated systems/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /advanced tools stay available/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Selenium/i).length).toBeGreaterThan(0);
  });

  it("renders Mason as founder credibility instead of a top-level portfolio", () => {
    renderWithSite(<FounderPage />, { route: "/about/mason-potter" });

    expect(screen.getByRole("heading", { name: /mason potter, founder/i })).toBeInTheDocument();
    expect(screen.getByText(/supports the company/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /contact cloutsites/i })).toHaveAttribute("href", "/contact");
  });
});
