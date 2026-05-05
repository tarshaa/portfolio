# Portfolio

Tarshaa Krishnaraj — personal site.

Built with Next.js (App Router) + Tailwind v4. Statically exported and deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

The site reads its content from `data/content.json` at build time. Edit that file, then refresh / rebuild.

## Deploy

`main` is auto-deployed by `.github/workflows/deploy.yml` to `https://tarshaa.github.io/portfolio/`.

The build sets `NEXT_PUBLIC_BASE_PATH=/portfolio` so all asset and route references work under the project-page URL prefix. To deploy under a different path (e.g. a custom domain), change that env var in the workflow (or unset it).
