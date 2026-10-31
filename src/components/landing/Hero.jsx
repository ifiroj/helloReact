import React from "react";
import { Mandala } from "./common/Icons";
import { hero } from "../../data/landing";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="eyebrow">
            <span className="eyebrow-hi" lang="hi">{hero.eyebrowHindi}</span>
            {hero.eyebrow}
          </span>
          <h1 className="hero-title">
            {hero.titleLead}
            <br />
            <em>{hero.titleEm}</em>
          </h1>
          <p className="hero-copy">{hero.copy}</p>
          <div className="hero-actions">
            {hero.actions.map((action) => (
              <a className={`btn ${action.variant}`} href={action.href} key={action.href}>
                {action.label}
              </a>
            ))}
          </div>
          <ul className="hero-trust">
            {hero.trust.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="hero-stats">
            {hero.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-stage">
          <div className="hero-arch" aria-hidden="true" />
          <div className="halo" />
          <Mandala />
          <div className="book-scene">
            <div className="book book-back" aria-hidden="true" />
            <div className="book book-mid" aria-hidden="true" />
            <div className="book book-front">
              <span className="book-ribbon" aria-hidden="true" />
              <div>
                <div className="book-kicker">KITABH · Rare Edition</div>
                <div className="book-title">The Upanishads</div>
                <div className="book-rule" />
                <div className="book-meta">Sanskrit · English</div>
              </div>
              <svg className="book-emblem" width="86" height="86" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
                <circle cx="50" cy="50" r="38" />
                <circle cx="50" cy="50" r="26" />
                <path d="M50 12v76M12 50h76M23 23l54 54M77 23 23 77" />
                <circle cx="50" cy="50" r="8" />
              </svg>
            </div>
          </div>
          <div className="hero-stamp" aria-hidden="true">
            <span>50+</span>
            <small>Rare editions</small>
            <small>KITABH</small>
          </div>
          <div className="hero-badge"><span />Est. 1974 · Haridwar</div>
        </div>
      </div>
    </section>
  );
}
