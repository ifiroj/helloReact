import React from "react";
import { Arrow } from "./common/Icons";
import { story, timeline } from "../../data/landing";

export default function StorySection() {
  return (
    <section className="section story" id="story">
      <div className="container visit-grid">
        <div className="visit-copy" id="visit" data-reveal>
          <span className="eyebrow">V · Our story &amp; your visit</span>
          <h2 className="section-title">A quiet corner of Haridwar</h2>
          {story.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div className="story-timeline">
            {timeline.map((item) => (
              <div className="timeline-item" key={item.year}>
                <span className="timeline-year">{item.year}</span>
                <span className="timeline-text">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="visit-details">
            {story.visitDetails.map((detail) => (
              <div key={detail.label}>
                <div className="visit-label">{detail.label}</div>
                <div className="visit-value">
                  {detail.lines.map((line, index) => (
                    <React.Fragment key={line}>
                      {index > 0 && <br />}
                      {line}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
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
            <span className="map-eyebrow">{story.map.eyebrow}</span>
            <span className="map-coords">{story.map.coords}</span>
          </div>
          <div className="map-pin">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
              <path d="M12 21s7-6.1 7-11.2A7 7 0 0 0 5 9.8C5 14.9 12 21 12 21Z" />
              <circle cx="12" cy="9.6" r="2.4" />
            </svg>
          </div>
          <div className="map-bottom">
            <div className="map-name">{story.map.name}</div>
            <p className="map-address">{story.map.address}</p>
            <a
              className="map-link"
              href={story.map.link}
              target="_blank"
              rel="noreferrer"
            >
              {story.map.linkLabel} <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
