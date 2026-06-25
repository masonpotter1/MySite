"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { company } from "@/data/cloutsitesContent";
import { siteNav, type ActiveNavRoute } from "@/config/siteNav";

function useActiveRoute(): ActiveNavRoute | "other" {
  const pathname = usePathname();
  if (pathname.startsWith("/services")) return "/services";
  if (pathname.startsWith("/work")) return "/work";
  if (pathname.startsWith("/process")) return "/process";
  if (pathname.startsWith("/about") || pathname.startsWith("/resume")) return "/about";
  if (pathname.startsWith("/contact")) return "/contact";
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

  const brand = { name: company.name, role: company.descriptor, to: "/", label: "Cloutsites home" };

  return (
    <header className="topbar site-header">
      <Link className="brand" href={brand.to} aria-label={brand.label} onClick={closeMenu}>
        <span className="brand-mark" aria-hidden="true">
          CS
        </span>
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

      <Link className="header-cta" href="/contact" onClick={closeMenu}>
        Start a Project
      </Link>
    </header>
  );
}

