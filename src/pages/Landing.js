import React from "react";
import {
  SiteFooter,
  SiteHeader,
  TopBar,
  landingSections,
} from "../components/landing";
import useReveal from "../hooks/useReveal";

export default function Landing() {
  useReveal();

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <TopBar />
      <SiteHeader />

      <main id="main">
        {landingSections.map(({ id, Component }) => (
          <Component key={id} />
        ))}
      </main>

      <SiteFooter />
    </>
  );
}
