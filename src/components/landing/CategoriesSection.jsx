import React from "react";
import SectionHead from "./common/SectionHead";
import { Arrow, icons } from "./common/Icons";
import { categories } from "../../data/landing";

export default function CategoriesSection() {
  return (
    <section className="section" id="categories">
      <div className="container">
        <SectionHead
          eyebrow="I · Four traditions, one shelf"
          title="Browse by discipline"
          note="Every section is curated by hand, with editions chosen for clarity, authenticity and the care of their making."
        />

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
  );
}
