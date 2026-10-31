import React from "react";

export const BookMark = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M12 5.5c-1.8-1.4-4.2-2-7-2v15c2.8 0 5.2.6 7 2 1.8-1.4 4.2-2 7-2v-15c-2.8 0-5.2.6-7 2Z" />
    <path d="M12 5.5v15" />
  </svg>
);

export const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const Mandala = () => (
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

export const QuoteMark = () => (
  <svg className="quote-mark" width="34" height="26" viewBox="0 0 34 26" fill="none" aria-hidden="true">
    <path d="M13.8 2C7.4 4.4 3 9.7 3 16.2 3 21 5.7 24 9.5 24c3.3 0 5.7-2.4 5.7-5.6 0-3.1-2.2-5.4-5.1-5.4-.6 0-1.3.1-1.7.3.4-2.6 2.4-5.1 5.4-6.8L13.8 2Zm16 0c-6.4 2.4-10.8 7.7-10.8 14.2 0 4.8 2.7 7.8 6.5 7.8 3.3 0 5.7-2.4 5.7-5.6 0-3.1-2.2-5.4-5.1-5.4-.6 0-1.3.1-1.7.3.4-2.6 2.4-5.1 5.4-6.8L29.8 2Z" fill="currentColor" />
  </svg>
);

export const icons = {
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
