import React from "react";
import SectionHead from "./common/SectionHead";
import { QuoteMark } from "./common/Icons";
import { testimonials } from "../../data/landing";

export default function TestimonialsSection() {
  return (
    <section className="section testimonials">
      <div className="container">
        <SectionHead
          eyebrow="IV · Readers' notes"
          title="Kept, reread, passed on."
          note="Notes from the people who have carried our books home, and sometimes brought them back for the next reader."
        />

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
  );
}
