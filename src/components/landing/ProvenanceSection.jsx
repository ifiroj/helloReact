import React from "react";
import { icons } from "./common/Icons";
import { provenance } from "../../data/landing";

export default function ProvenanceSection() {
  return (
    <section className="section provenance" id="reading-room">
      <div className="container provenance-grid">
        <div className="provenance-intro" data-reveal>
          <span className="eyebrow">III · The bookseller's note</span>
          <h2 className="section-title">Every volume passes through our hands.</h2>
          <p>
            We are not a warehouse. We are a family that has spent fifty years
            learning which editions age well, which translations stay faithful,
            and which bindings survive a monsoon.
          </p>
          <p>
            If a book is on our shelf, someone here has opened it, read its
            colophon and decided it was worth keeping.
          </p>
          <div className="provenance-signature">
            <span className="signature-mark" lang="hi">स</span>
            <span>
              <strong>Saroj Acharya</strong>
              <small>Third-generation bookseller</small>
            </span>
          </div>
        </div>

        <div className="provenance-list">
          {provenance.map((item, index) => (
            <div
              className="provenance-item"
              key={item.title}
              data-reveal
              style={{ "--reveal-delay": `${index * 90}ms` }}
            >
              <span className="provenance-icon">{icons[item.icon]}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
