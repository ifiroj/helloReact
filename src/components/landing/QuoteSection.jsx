import React from "react";
import { quote } from "../../data/landing";

export default function QuoteSection() {
  return (
    <section className="quote-section">
      <div className="container" data-reveal>
        <span className="quote-ornament" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M12 3c1.7 4.3 4.7 7.3 9 9-4.3 1.7-7.3 4.7-9 9-1.7-4.3-4.7-7.3-9-9 4.3-1.7 7.3-4.7 9-9Z" />
          </svg>
        </span>
        <p className="quote-sanskrit" lang="sa">{quote.sanskrit}</p>
        <p className="quote-translation">{quote.translation}</p>
        <p className="quote-source">{quote.source}</p>
      </div>
    </section>
  );
}
