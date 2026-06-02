import { useCallback, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { company } from "../data/cloutsitesContent";
import { profile } from "../data/siteContent";
import {
  cloutsitesSectionNav,
  masonSectionNavPrefixed,
  siteNav,
  type SiteRoute,
} from "../config/siteNav";

function useActiveRoute(): SiteRoute | "other" {
  const { pathname } = useLocation();
  if (pathname === "/") return "/";
  if (pathname.startsWith("/cloutsites")) return "/cloutsites";
  if (pathname.startsWith("/mason") || pathname.startsWith("/resume")) return "/mason";
  return "other";
}

export function SiteHeader() {
  const { pathname } = useLocation();
  const route = useActiveRoute();
  const [menuOpen, setMenuOpen] = useState(false);
  const [sectionOpen, setSectionOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setSectionOpen(false);
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

  const sectionNav =
    route === "/cloutsites" ? cloutsitesSectionNav : route === "/mason" ? masonSectionNavPrefixed : [];

  const brand =
    route === "/cloutsites"
      ? { mark: "CS", name: company.name, role: company.descriptor, to: "/cloutsites", label: "Cloutsites home" }
      : route === "/mason"
        ? { mark: "MP", name: profile.name, role: profile.title, to: "/mason", label: "Mason Potter home" }
        : { mark: "CS", name: "Cloutsites", role: "Home", to: "/", label: "Cloutsites home" };

  return (
    <header className="topbar site-header">
      <NavLink className="brand" to={brand.to} aria-label={brand.label} onClick={closeMenu}>
        <span className="brand-mark">{brand.mark}</span>
        <span>
          <span className="brand-name">{brand.name}</span>
          <span className="brand-role">{brand.role}</span>
        </span>
      </NavLink>

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
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? "site-nav-link site-nav-link--active" : "site-nav-link")}
              onClick={closeMenu}
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {sectionNav.length > 0 ? (
          <div className="site-nav-section-wrap">
            <button
              type="button"
              className="section-nav-toggle"
              aria-expanded={sectionOpen}
              onClick={() => setSectionOpen((open) => !open)}
            >
              On this page
            </button>
            <nav
              className={`nav-links site-nav-section${sectionOpen ? " nav-links--open" : ""}`}
              aria-label="On this page"
            >
              {sectionNav.map((item) => (
                <a key={item.href} href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        ) : null}
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
