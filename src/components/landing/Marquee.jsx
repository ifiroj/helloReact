import React from "react";
import { marqueeItems } from "../../data/landing";

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="container marquee-inner">
        {marqueeItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
