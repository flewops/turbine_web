# Turbine

Marketing site for [Turbine](https://turbine.flewops.com), a business operating system. Built with React 19, Vite, Tailwind CSS 4 and React Router.

## Development

```sh
npm install
npm run dev      # local dev server
npm run build    # type-check and build to dist/
npm run lint
```

## Content

- Apps, industries, pricing and company copy live in `src/data/`.
- The Resources page reads docs from the public GitHub repo set in `src/data/docsSource.ts` (`flewops/turbine-docs`, `main`). Layout: `versions.json` at the root (newest version first, with the app ids documented in each), one folder per version holding `index.md` (overview) and `<app-id>.md` per app. Visitors must pick a version (latest by default); the app is optional. Set `VITE_DOCS_BASE_URL` to read from elsewhere, e.g. a local folder server.
- Page titles, descriptions and canonical URLs are set per page with `src/components/SEO.tsx`.

## SEO

- `dist/sitemap.xml` is generated on every build from the routes in `vite.config.ts` plus every app and industry in `src/data/`, so new entries are included automatically. Add any new top-level page to `staticRoutes` there.
- `public/robots.txt` points crawlers at the sitemap.
- `vercel.json` serves `index.html` for client-side routes so deep links like `/apps/crm` load directly.
