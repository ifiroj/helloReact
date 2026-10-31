import React from "react";

export default function SectionHead({ eyebrow, title, note, light = false }) {
  return (
    <div className="section-head" data-reveal>
      <div>
        <span className={`eyebrow${light ? " eyebrow--light" : ""}`}>{eyebrow}</span>
        <h2 className="section-title">{title}</h2>
      </div>
      {note && <p className="section-note">{note}</p>}
    </div>
  );
}
