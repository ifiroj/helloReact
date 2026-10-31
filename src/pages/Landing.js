import React, { useEffect, useState } from "react";

const BookMark = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M12 5.5c-1.8-1.4-4.2-2-7-2v15c2.8 0 5.2.6 7 2 1.8-1.4 4.2-2 7-2v-15c-2.8 0-5.2.6-7 2Z" />
    <path d="M12 5.5v15" />
  </svg>
);

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

const Mandala = () => (
  <svg className="mandala" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
    <circle cx="200" cy="200" r="196" />
    <circle cx="200" cy="200" r="168" />
    <circle cx="200" cy="200" r="120" />
    <circle cx="200" cy="200" r="72" />
    {Array.from({ length: 24 }).map((_, i) => (
      <g key={i} transform={`rotate(${i * 15} 200 200)`}>
        <line x1="200" y1="4" x2="200" y2="32" />
        <path d="M200 34c15 12 15 30 0 42-15-12-15-30 0-42Z" />
        <circle cx="200" cy="92" r="2.5" />
      </g>
    ))}
  </svg>
);

const QuoteMark = () => (
  <svg className="quote-mark" width="34" height="26" viewBox="0 0 34 26" fill="none" aria-hidden="true">
    <path d="M13.8 2C7.4 4.4 3 9.7 3 16.2 3 21 5.7 24 9.5 24c3.3 0 5.7-2.4 5.7-5.6 0-3.1-2.2-5.4-5.1-5.4-.6 0-1.3.1-1.7.3.4-2.6 2.4-5.1 5.4-6.8L13.8 2Zm16 0c-6.4 2.4-10.8 7.7-10.8 14.2 0 4.8 2.7 7.8 6.5 7.8 3.3 0 5.7-2.4 5.7-5.6 0-3.1-2.2-5.4-5.1-5.4-.6 0-1.3.1-1.7.3.4-2.6 2.4-5.1 5.4-6.8L29.8 2Z" fill="currentColor" />
  </svg>
);

const icons = {
  scriptures: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <path d="M4 5.5c2.6 0 4.7.6 6 1.8V21c-1.3-1.2-3.4-1.8-6-1.8V5.5Z" />
      <path d="M20 5.5c-2.6 0-4.7.6-6 1.8V21c1.3-1.2 3.4-1.8 6-1.8V5.5Z" />
      <path d="M12 7.3V21" />
    </svg>
  ),
  herbs: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <path d="M12 21V10" />
      <path d="M12 12c0-3.9 2.4-6.7 6.5-7-.1 4.1-2.6 6.6-6.5 7Z" />
      <path d="M12 16c0-3.4-2.1-5.9-5.7-6.2.1 3.6 2.3 5.8 5.7 6.2Z" />
      <path d="M8.5 21h7" />
    </svg>
  ),
  spirituality: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <path d="M12 3c2 2.6 3 5 3 7.2 0 2.8-1.3 4.8-3 4.8s-3-2-3-4.8C9 8 10 5.6 12 3Z" />
      <path d="M12 15v6" />
      <path d="M7 21c1.5-1.5 3.2-2.3 5-2.3s3.5.8 5 2.3" />
      <circle cx="12" cy="3.2" r="0.8" fill="currentColor" />
    </svg>
  ),
  yoga: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <circle cx="12" cy="5" r="2.2" />
      <path d="M12 7.5v5" />
      <path d="M12 9.5 6 7.5M12 9.5l6-2" />
      <path d="M12 12.5 7 21M12 12.5 17 21" />
    </svg>
  ),
  source: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="m16 8-2.4 5.6L8 16l2.4-5.6L16 8Z" />
    </svg>
  ),
  inspect: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 4.5 4.5" />
      <path d="M8 10.5h5M10.5 8v5" />
    </svg>
  ),
  wrap: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5v-9Z" />
      <path d="M3.5 7.5 12 12l8.5-4.5M12 12v9" />
      <path d="M7.8 5.2 16.3 9.7" />
    </svg>
  ),
};

const navLinks = [
  { label: "Collection", href: "#collection" },
  { label: "Traditions", href: "#categories" },
  { label: "Reading Room", href: "#reading-room" },
  { label: "Visit", href: "#visit" },
];

const categories = [
  {
    icon: "scriptures",
    index: "01",
    title: "Ancient Hindu Scriptures",
    copy: "The Vedas, Upanishads, Puranas and epics — critical editions, commentaries and faithful translations.",
    count: "1,200+ titles",
  },
  {
    icon: "herbs",
    index: "02",
    title: "Herbal Medicine",
    copy: "Ayurvedic classics and plant lore, from the Charaka Samhita to regional herbals of the Himalaya.",
    count: "640+ titles",
  },
  {
    icon: "spirituality",
    index: "03",
    title: "Spirituality",
    copy: "Bhakti poetry, tantra, dharma and the quiet literature of seekers, saints and sages.",
    count: "980+ titles",
  },
  {
    icon: "yoga",
    index: "04",
    title: "Yoga",
    copy: "Patanjali's sutras, hatha manuals and the living traditions of practice and breath.",
    count: "420+ titles",
  },
];

const books = [
  {
    title: "The Bhagavad Gita",
    author: "Vyasa · Sanskrit & English",
    price: "₹450",
    lang: "Bilingual",
    coverTitle: "The Bhagavad Gita",
    coverLabel: "KITABH · Classics",
    coverMeta: "18 Chapters",
    tag: "Staff pick",
    edition: "Commentary edition · 2019",
    background: "linear-gradient(155deg, #7c262c, #43121a 78%)",
  },
  {
    title: "Charaka Samhita",
    author: "Acharya Charaka",
    price: "₹1,200",
    lang: "Sanskrit",
    coverTitle: "Charaka Samhita",
    coverLabel: "Ayurveda · Vol. I",
    coverMeta: "Herbal Science",
    tag: "Rare",
    edition: "Critical edition · 1962",
    background: "linear-gradient(155deg, #33453a, #1b271f 78%)",
  },
  {
    title: "The Yoga Sutras",
    author: "Patanjali",
    price: "₹380",
    lang: "Bilingual",
    coverTitle: "The Yoga Sutras",
    coverLabel: "KITABH · Practice",
    coverMeta: "196 Sutras",
    tag: "New arrival",
    edition: "Sadhana edition · 2024",
    background: "linear-gradient(155deg, #a96b24, #75420f 78%)",
  },
  {
    title: "Upanishads",
    author: "Principal Texts",
    price: "₹640",
    lang: "English",
    coverTitle: "Upanishads",
    coverLabel: "Wisdom · Selections",
    coverMeta: "Twelve Texts",
    tag: "Limited",
    edition: "Clothbound · 1998",
    background: "linear-gradient(155deg, #4a3d5c, #251d33 78%)",
  },
];

const provenance = [
  {
    icon: "source",
    title: "Sourced by hand",
    copy: "We travel to Varanasi, Kolkata, Rishikesh and old family libraries to find editions worth keeping.",
  },
  {
    icon: "inspect",
    title: "Checked page by page",
    copy: "Every second-hand volume is collated and graded, with condition notes written by hand.",
  },
  {
    icon: "wrap",
    title: "Wrapped for the journey",
    copy: "Books leave the shop in cloth, board and paper — protected for the Indian postal route.",
  },
];

const testimonials = [
  {
    quote: "I came for a Gita and left with a 1930s commentary I did not know existed. They know their shelves by heart.",
    name: "Meera S.",
    place: "Delhi",
  },
  {
    quote: "My father's Ayurvedic texts came from KITABH. Twenty years later, mine do too. Some shops become inheritance.",
    name: "Dr. Anil Joshi",
    place: "Dehradun",
  },
  {
    quote: "The only place in Haridwar where a question about a rare Upanishad is met with tea, a ladder and a good argument.",
    name: "Ruth M.",
    place: "London",
  },
];

const timeline = [
  { year: "1974", text: "One almirah of Sanskrit texts opens on Jwalapur Road." },
  { year: "1996", text: "The reading room is added, with a table for visiting scholars." },
  { year: "Today", text: "Three generations, twelve thousand volumes, one narrow lane." },
];

const marqueeItems = [
  "Rare editions",
  "Sanskrit manuscripts",
  "Ayurvedic herbals",
  "Hand-bound volumes",
  "Since 1974",
  "Haridwar, India",
];

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!("IntersectionObserver" in window) || reduceMotion) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <div className="topbar">
        <div className="container topbar-inner">
          <span>Est. 1974 · Haridwar, India</span>
          <span className="topbar-mid">Hand-sourced books &amp; rare editions</span>
          <a href="#visit">Find the shop <Arrow /></a>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="/" aria-label="KITABH home">
            <span className="brand-mark"><BookMark /></span>
            <span>
              <span className="brand-name">KITABH</span>
              <span className="brand-tag"><span lang="hi">किताब</span> · Haridwar, India</span>
            </span>
          </a>

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
              Jwalapur Road, near Har Ki Pauri<br />
              Open Mon–Sat · 9:00 am – 8:00 pm
            </p>
          </div>
        )}
      </header>

      <main id="main">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="eyebrow">
                <span className="eyebrow-hi" lang="hi">किताब</span>
                A bookshop of living traditions
              </span>
              <h1 className="hero-title">
                Ancient wisdom,
                <br />
                <em>bound in pages.</em>
              </h1>
              <p className="hero-copy">
                In the shadow of the Ganga, KITABH keeps the old books alive.
                A family-run shop in Haridwar for scriptures, herbal medicine,
                spirituality and yoga — gathered from across the Indian subcontinent.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#collection">Explore the collection</a>
                <a className="btn btn-ghost" href="#visit">Plan your visit</a>
              </div>
              <ul className="hero-trust">
                <li>Sourced by hand</li>
                <li>Authentic editions</li>
                <li>Shipped across India</li>
              </ul>
              <div className="hero-stats">
                <div className="stat">
                  <div className="stat-number">12,000+</div>
                  <div className="stat-label">Volumes in store</div>
                </div>
                <div className="stat">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Rare editions</div>
                </div>
                <div className="stat">
                  <div className="stat-number">1974</div>
                  <div className="stat-label">Serving seekers since</div>
                </div>
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

        <div className="marquee" aria-hidden="true">
          <div className="container marquee-inner">
            {marqueeItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <section className="section" id="categories">
          <div className="container">
            <div className="section-head" data-reveal>
              <div>
                <span className="eyebrow">I · Four traditions, one shelf</span>
                <h2 className="section-title">Browse by discipline</h2>
              </div>
              <p className="section-note">
                Every section is curated by hand, with editions chosen for clarity,
                authenticity and the care of their making.
              </p>
            </div>

            <div className="categories-grid">
              {categories.map((category, index) => (
                <a
                  className="category-card"
                  href="#collection"
                  key={category.title}
                  data-reveal
                  style={{ "--reveal-delay": `${index * 80}ms` }}
                >
                  <div className="category-top">
                    <span className="category-icon">{icons[category.icon]}</span>
                    <span className="category-index">{category.index}</span>
                  </div>
                  <h3>{category.title}</h3>
                  <p>{category.copy}</p>
                  <div className="category-foot">
                    <span className="category-count">{category.count}</span>
                    <span className="category-link">Browse <Arrow /></span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section collection" id="collection">
          <div className="container">
            <div className="section-head" data-reveal>
              <div>
                <span className="eyebrow eyebrow--light">II · From the reading table</span>
                <h2 className="section-title">Selected volumes</h2>
              </div>
              <p className="section-note">
                A small glimpse of what waits on our shelves. New arrivals and rare
                finds are added every week.
              </p>
            </div>

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
                <span className="signature-mark" lang="hi">क</span>
                <span>
                  <strong>Raghav Sharma</strong>
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

        <section className="quote-section">
          <div className="container" data-reveal>
            <span className="quote-ornament" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M12 3c1.7 4.3 4.7 7.3 9 9-4.3 1.7-7.3 4.7-9 9-1.7-4.3-4.7-7.3-9-9 4.3-1.7 7.3-4.7 9-9Z" />
              </svg>
            </span>
            <p className="quote-sanskrit" lang="sa">सा विद्या या विमुक्तये</p>
            <p className="quote-translation">
              “That alone is knowledge which leads to liberation.”
            </p>
            <p className="quote-source">Vishnu Purana · 1.19.41</p>
          </div>
        </section>

        <section className="section testimonials">
          <div className="container">
            <div className="section-head" data-reveal>
              <div>
                <span className="eyebrow">IV · Readers' notes</span>
                <h2 className="section-title">Kept, reread, passed on.</h2>
              </div>
              <p className="section-note">
                Notes from the people who have carried our books home, and sometimes
                brought them back for the next reader.
              </p>
            </div>

            <div className="testimonials-grid">
              {testimonials.map((item, index) => (
                <figure
                  className="testimonial"
                  key={item.name}
                  data-reveal
                  style={{ "--reveal-delay": `${index * 80}ms` }}
                >
                  <QuoteMark />
                  <blockquote>{item.quote}</blockquote>
                  <figcaption>
                    <span className="testimonial-name">{item.name}</span>
                    <span className="testimonial-place">{item.place}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section story" id="story">
          <div className="container visit-grid">
            <div className="visit-copy" id="visit" data-reveal>
              <span className="eyebrow">V · Our story &amp; your visit</span>
              <h2 className="section-title">A quiet corner of Haridwar</h2>
              <p>
                KITABH began in 1974 with a single almirah of Sanskrit texts and a
                simple belief: that the old knowledge of this land deserves to be
                read, not only preserved. Three generations later, the shop still
                smells of paper, camphor and the river.
              </p>
              <p>
                Come to browse, to ask questions, or to sit with a book you did not
                know you were looking for. Tea is always on.
              </p>

              <div className="story-timeline">
                {timeline.map((item) => (
                  <div className="timeline-item" key={item.year}>
                    <span className="timeline-year">{item.year}</span>
                    <span className="timeline-text">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="visit-details">
                <div>
                  <div className="visit-label">Address</div>
                  <div className="visit-value">
                    Jwalapur Road, near Har Ki Pauri<br />
                    Haridwar, Uttarakhand 249401
                  </div>
                </div>
                <div>
                  <div className="visit-label">Shop hours</div>
                  <div className="visit-value">
                    Monday – Saturday<br />
                    9:00 am – 8:00 pm
                  </div>
                </div>
                <div>
                  <div className="visit-label">Talk to us</div>
                  <div className="visit-value">
                    +91 135 000 1974<br />
                    namaste@kitabh.in
                  </div>
                </div>
                <div>
                  <div className="visit-label">Language</div>
                  <div className="visit-value">
                    Hindi · English<br />
                    Sanskrit &amp; regional editions
                  </div>
                </div>
              </div>
            </div>

            <div className="map-card" data-reveal>
              <svg className="map-route" viewBox="0 0 420 420" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
                <path d="M18 392c72-10 88-74 142-94 54-20 74 12 112-30 38-42 62-42 112-106" strokeDasharray="4 7" />
                <circle cx="160" cy="298" r="4" fill="currentColor" stroke="none" />
                <circle cx="272" cy="268" r="4" fill="currentColor" stroke="none" />
                <circle cx="384" cy="162" r="4" fill="currentColor" stroke="none" />
              </svg>
              <div className="map-top">
                <span className="map-eyebrow">Haridwar · Uttarakhand</span>
                <span className="map-coords">29.9457° N · 78.1642° E</span>
              </div>
              <div className="map-pin">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                  <path d="M12 21s7-6.1 7-11.2A7 7 0 0 0 5 9.8C5 14.9 12 21 12 21Z" />
                  <circle cx="12" cy="9.6" r="2.4" />
                </svg>
              </div>
              <div className="map-bottom">
                <div className="map-name">KITABH</div>
                <p className="map-address">
                  Jwalapur Road, near Har Ki Pauri, Haridwar — a two-minute walk
                  from the Ganga, down the lane of the old book bazaar.
                </p>
                <a
                  className="map-link"
                  href="https://www.google.com/maps/search/?api=1&query=Har+Ki+Pauri+Haridwar"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in maps <Arrow />
                </a>
              </div>
            </div>
          </div>
        </section>

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
              <a className="btn btn-light" href="mailto:namaste@kitabh.in">Write to the booksellers</a>
              <a className="circle-phone" href="tel:+911350001974">+91 135 000 1974</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a className="brand" href="/">
                <span className="brand-mark"><BookMark /></span>
                <span>
                  <span className="brand-name">KITABH</span>
                  <span className="brand-tag"><span lang="hi">किताब</span> · Haridwar, India</span>
                </span>
              </a>
              <p className="footer-about">
                A bookseller of ancient Hindu scriptures, herbal medicine,
                spirituality and yoga. Keeping living traditions in print since 1974.
              </p>
            </div>

            <div>
              <div className="footer-heading">Collection</div>
              <div className="footer-links">
                <a href="#categories">Hindu Scriptures</a>
                <a href="#categories">Herbal Medicine</a>
                <a href="#categories">Spirituality</a>
                <a href="#categories">Yoga</a>
              </div>
            </div>

            <div>
              <div className="footer-heading">Visit</div>
              <div className="footer-links">
                <a href="#visit">Find the shop</a>
                <a href="#visit">Opening hours</a>
                <a href="#story">Our story</a>
                <a href="#collection">New arrivals</a>
              </div>
            </div>

            <div>
              <div className="footer-heading">Contact</div>
              <div className="footer-links">
                <a href="mailto:namaste@kitabh.in">namaste@kitabh.in</a>
                <span>+91 135 000 1974</span>
                <span>Jwalapur Road, Haridwar</span>
                <span>Uttarakhand 249401</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} KITABH Booksellers, Haridwar. All rights reserved.</span>
            <span>Made with reverence for the written word.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
