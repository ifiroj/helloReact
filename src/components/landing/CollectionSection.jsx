import React from "react";
import SectionHead from "./common/SectionHead";
import { books } from "../../data/landing";

export default function CollectionSection() {
  return (
    <section className="section collection" id="collection">
      <div className="container">
        <SectionHead
          light
          eyebrow="II · From the reading table"
          title="Selected volumes"
          note="A small glimpse of what waits on our shelves. New arrivals and rare finds are added every week."
        />

        <div className="books-grid">
          {books.map((book, index) => (
            <article
              className="book-card"
              key={book.title}
              data-reveal
              style={{ "--reveal-delay": `${index * 80}ms` }}
            >
              <div className="mini-cover" style={{ background: book.background }}>
                <span className="cover-tag">{book.tag}</span>
                <span className="cover-label">{book.coverLabel}</span>
                <span className="cover-title">{book.coverTitle}</span>
                <span className="cover-foot">
                  <span>KITABH</span>
                  <span>{book.coverMeta}</span>
                </span>
              </div>
              <div className="book-info">
                <h3>{book.title}</h3>
                <p className="book-author">{book.author}</p>
                <p className="book-edition">{book.edition}</p>
                <div className="book-price-row">
                  <span className="book-price">{book.price}</span>
                  <span className="book-lang">{book.lang}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="collection-foot">
          <p>Looking for a title that is not listed? Our shelves run deeper than this page.</p>
          <a className="btn btn-light" href="#visit">Ask at the counter</a>
        </div>
      </div>
    </section>
  );
}
