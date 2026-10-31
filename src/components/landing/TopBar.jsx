import React from "react";
import { Arrow } from "./common/Icons";
import { site } from "../../data/landing";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <span>{site.established}</span>
        <span className="topbar-mid">{site.tagline}</span>
        <a href="#visit">Find the shop <Arrow /></a>
      </div>
    </div>
  );
}
