import React, { useState } from "react";
import Brand from "./common/Brand";
import { navLinks, site } from "../../data/landing";
import useEscapeKey from "../../hooks/useEscapeKey";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEscapeKey(menuOpen, closeMenu);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />

        <nav className="site-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a className="nav-link" href={link.href} key={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="btn btn-primary header-cta" href="#collection">Browse Books</a>
          <button
            type="button"
            className={`menu-toggle${menuOpen ? " is-open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-nav" id="mobile-nav">
          <nav className="mobile-nav-links" aria-label="Mobile">
            {navLinks.map((link) => (
              <a href={link.href} key={link.href} onClick={closeMenu}>{link.label}</a>
            ))}
          </nav>
          <a className="btn btn-primary mobile-nav-cta" href="#collection" onClick={closeMenu}>
            Browse the collection
          </a>
          <p className="mobile-nav-meta">
            {site.addressLines[0]}<br />
            Open Mon–Sat · 9:00 am – 8:00 pm
          </p>
        </div>
      )}
    </header>
  );
}
