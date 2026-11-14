# Portfolio

Tarshaa Krishnaraj — personal site at https://tarshaakrishnaraj.com.

## Current publication

The GitHub Pages workflow publishes the static portfolio from
[tarshaa/work-website](https://github.com/tarshaa/work-website), pinned to
`d5418bb93d02b03b5061c352c11432c7457ee30a`. This is the version with original-resolution,
automatically looping GIF covers.

To publish a newer approved version, update the checkout ref in
`.github/workflows/deploy.yml`. A push to this repository's `main` branch
redeploys the custom domain using its existing GitHub Pages configuration.

The workflow preserves the media under `public/`, including the Series A
animation, and redirects the previous project URLs to their current pages.

## Previous site

The previous Next.js source and its content remain here for reference and
rollback. It is no longer the custom domain's deployed build.
