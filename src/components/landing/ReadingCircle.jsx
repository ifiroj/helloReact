import React from "react";
import { site } from "../../data/landing";

export default function ReadingCircle() {
  return (
    <section className="reading-circle">
      <div className="container circle-inner" data-reveal>
        <div>
          <span className="eyebrow eyebrow--light">The reading circle</span>
          <h2>Looking for a book no one else can find?</h2>
          <p>
            Send us a title, a tradition, or half a remembered line. We will look
            through the stacks and write back within two days.
          </p>
        </div>
        <div className="circle-actions">
          <a className="btn btn-light" href={`mailto:${site.email}`}>Write to the booksellers</a>
          <a className="circle-phone" href={site.phoneHref}>{site.phone}</a>
        </div>
      </div>
    </section>
  );
}
