# KITABH

Website for KITABH, a family-run bookstore in Haridwar, India. Built with Create React App.

## Requirements

- Node.js 16+ and npm

## Scripts

- `npm start` — run the site locally at http://localhost:3000
- `npm run build` — create an optimized production build in `build/`
- `npm test` — run the test runner
- `npm run deploy` — build and publish `build/` to GitHub Pages via `gh-pages`

## Project structure

```
public/          Static assets, index.html, 404/500 pages, CNAME, headers
src/
  components/    Landing page sections and shared UI
  data/          Content for the landing page (books, categories, copy, etc.)
  hooks/         useReveal and useEscapeKey
  pages/         Landing and ErrorPage
  App.js         Route handling for home, 404, and 500
  index.css      Design tokens and styles
docs/            Design system notes
```

## Deployment

Deploys to GitHub Pages (`npm run deploy`). `public/CNAME` sets the custom domain and
`public/_headers` holds security and caching headers.
