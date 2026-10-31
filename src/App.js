import React from "react";
import Landing from "./pages/Landing";
import ErrorPage from "./pages/ErrorPage";

function getRoute() {
  const path = (window.location.pathname || "/").replace(/\/+$/, "") || "/";

  if (path === "/404" || path.endsWith("/404.html")) return "404";
  if (path === "/500" || path.endsWith("/500.html")) return "500";
  if (path === "/" || path.endsWith("/index.html")) return "home";
  return "404";
}

export default function App() {
  const route = getRoute();

  if (route === "home") return <Landing />;
  return <ErrorPage code={route} />;
}
