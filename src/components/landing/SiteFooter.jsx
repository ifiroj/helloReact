import React from "react";
import Brand from "./common/Brand";
import { footerColumns, site } from "../../data/landing";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand />
            <p className="footer-about">{site.footerAbout}</p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.heading}>
              <div className="footer-heading">{column.heading}</div>
              <div className="footer-links">
                {column.links.map((link) =>
                  link.href ? (
                    <a href={link.href} key={link.label}>{link.label}</a>
                  ) : (
                    <span key={link.label}>{link.label}</span>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {site.name} Booksellers, Haridwar. All rights reserved.</span>
          <span>{site.footerNote}</span>
        </div>
      </div>
    </footer>
  );
}
