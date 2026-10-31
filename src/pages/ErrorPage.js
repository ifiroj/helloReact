import React from "react";

const BookMark = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M12 5.5c-1.8-1.4-4.2-2-7-2v15c2.8 0 5.2.6 7 2 1.8-1.4 4.2-2 7-2v-15c-2.8 0-5.2.6-7 2Z" />
    <path d="M12 5.5v15" />
  </svg>
);

const ArrowLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M19 12H5" />
    <path d="m11 6-6 6 6 6" />
  </svg>
);

const Mandala = () => (
  <svg className="error-mandala" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
    <circle cx="200" cy="200" r="196" />
    <circle cx="200" cy="200" r="150" />
    <circle cx="200" cy="200" r="104" />
    {Array.from({ length: 32 }).map((_, i) => (
      <g key={i} transform={`rotate(${i * 11.25} 200 200)`}>
        <line x1="200" y1="4" x2="200" y2="52" />
        <circle cx="200" cy="84" r="2.5" />
      </g>
    ))}
  </svg>
);

const LostBook = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
    <path d="M4 5.5c2.6 0 4.7.6 6 1.8V21c-1.3-1.2-3.4-1.8-6-1.8V5.5Z" />
    <path d="M20 5.5c-2.6 0-4.7.6-6 1.8V21c1.3-1.2 3.4-1.8 6-1.8V5.5Z" />
    <path d="M12 7.3V21" />
    <path d="M15.2 3.5c.5-.9 1.5-1.5 2.5-1.2 1.2.3 1.9 1.5 1.5 2.7-.3.9-1.2 1.2-1.7 1.9-.2.3-.3.6-.3.9" />
    <circle cx="17.2" cy="9.6" r="0.7" fill="currentColor" />
  </svg>
);

const BrokenInk = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
    <path d="M9 3h6l1 4H8l1-4Z" />
    <path d="M8 7c-1.7 2.2-2.5 4.6-2.5 7A6.5 6.5 0 0 0 18.5 14c0-2.4-.8-4.8-2.5-7" />
    <path d="M10.5 13.5 12 16l1.5-2.5" />
    <path d="M12 16v3" />
  </svg>
);

const messages = {
  404: {
    title: "This page has wandered off the path.",
    kicker: "Page not found",
    message:
      "The shelf you are looking for is empty — or the volume has been moved. Let us guide you back to the collection.",
    hint: (
      <>
        Searching for a specific book? Write to{" "}
        <a href="mailto:namaste@kitabh.in">namaste@kitabh.in</a> and we will look
        through the stacks for you.
      </>
    ),
    icon: <LostBook />,
  },
  500: {
    title: "A page has slipped from the shelf.",
    kicker: "Server error",
    message:
      "Something went wrong in the shop while fetching this page. Our bookseller is already setting things right — please try again in a moment.",
    hint: (
      <>
        Still unwell? Reach us at{" "}
        <a href="mailto:namaste@kitabh.in">namaste@kitabh.in</a> or call
        +91 135 000 1974.
      </>
    ),
    icon: <BrokenInk />,
  },
};

export default function ErrorPage({ code = "404" }) {
  const content = messages[code] || messages["404"];

  return (
    <div className={`error-page error-${code}`}>
      <header className="error-header">
        <div className="container">
          <a className="brand" href="/" aria-label="KITABH home">
            <span className="brand-mark"><BookMark /></span>
            <span>
              <span className="brand-name">KITABH</span>
              <span className="brand-tag">Haridwar · India</span>
            </span>
          </a>
          <a className="error-back" href="/">
            <ArrowLeft /> Back to the shop
          </a>
        </div>
      </header>

      <main className="error-main">
        <span className="error-watermark" aria-hidden="true">{code}</span>
        <Mandala />

        <div className="error-card">
          <div className="error-seal">{content.icon}</div>
          <p className="error-kicker">{content.kicker}</p>
          <h1 className="error-title">{content.title}</h1>
          <p className="error-message">{content.message}</p>

          <div className="error-actions">
            <a className="btn btn-primary" href="/">Return home</a>
            <a className="btn btn-ghost" href="/#collection">Browse collection</a>
          </div>

          <p className="error-hint">{content.hint}</p>
        </div>
      </main>

      <footer className="error-footer">
        KITABH · Booksellers of Haridwar · Since 1974
      </footer>
    </div>
  );
}
