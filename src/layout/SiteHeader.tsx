"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { company } from "@/data/cloutsitesContent";
import { profile } from "@/data/siteContent";
import { siteNav, type SiteRoute } from "@/config/siteNav";

function useActiveRoute(): SiteRoute | "other" {
  const pathname = usePathname();
  if (pathname === "/") return "/";
  if (pathname.startsWith("/cloutsites")) return "/cloutsites";
  if (pathname.startsWith("/mason") || pathname.startsWith("/resume")) return "/mason";
  return "other";
}

export function SiteHeader() {
  const pathname = usePathname();
  const route = useActiveRoute();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, closeMenu]);

  const brand =
    route === "/cloutsites"
      ? { mark: "CS", name: company.name, role: company.descriptor, to: "/cloutsites", label: "Cloutsites home" }
      : route === "/mason"
        ? { mark: "MP", name: profile.name, role: profile.title, to: "/mason", label: "Mason Potter home" }
        : { mark: "CS", name: "Cloutsites", role: "Home", to: "/", label: "Cloutsites home" };

  return (
    <header className="topbar site-header">
      <Link className="brand" href={brand.to} aria-label={brand.label} onClick={closeMenu}>
        <span className="brand-mark">{brand.mark}</span>
        <span>
          <span className="brand-name">{brand.name}</span>
          <span className="brand-role">{brand.role}</span>
        </span>
      </Link>

      <button
        type="button"
        className="nav-toggle"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        Menu
      </button>

      <div
        id="site-navigation"
        className={`site-header-nav${menuOpen ? " site-header-nav--open" : ""}`}
      >
        <nav className="site-nav-global" aria-label="Site sections">
          {siteNav.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              className={route === item.to ? "site-nav-link site-nav-link--active" : "site-nav-link"}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {route === "/cloutsites" ? (
        <a className="header-cta" href="/cloutsites#intake" onClick={closeMenu}>
          Start intake
        </a>
      ) : route === "/mason" ? (
        <a
          className="header-cta"
          href={pathname.startsWith("/resume") ? "/mason" : "/resume"}
          onClick={closeMenu}
        >
          {pathname.startsWith("/resume") ? "Portfolio" : "Résumé"}
        </a>
      ) : null}
    </header>
  );
}
