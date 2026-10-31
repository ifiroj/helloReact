import React from "react";
import { BookMark } from "./Icons";
import { site } from "../../../data/landing";

export default function Brand({ href = "/", label = "KITABH home" }) {
  return (
    <a className="brand" href={href} aria-label={label}>
      <span className="brand-mark"><BookMark /></span>
      <span>
        <span className="brand-name">{site.name}</span>
        <span className="brand-tag"><span lang="hi">{site.hindi}</span> · {site.location}</span>
      </span>
    </a>
  );
}
