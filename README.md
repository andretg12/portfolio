# Andre Torrealba Portfolio

Modern static portfolio for Andre Torrealba, built with React, Vite, Sass, and pnpm.

## Requirements

- Node.js 22 or newer
- pnpm 10.33.3 via Corepack

```bash
corepack enable
pnpm install
```

## Scripts

```bash
pnpm dev      # start the local Vite dev server
pnpm build    # create a production build in dist/
pnpm preview  # preview the production build locally
pnpm audit    # fail on high-severity dependency advisories
```

## Supply-chain posture

- `pnpm-lock.yaml` is committed and should be treated as the source of truth for installs.
- The app no longer depends on the legacy CRA toolchain, `node-sass`, Bootstrap CDN scripts, jQuery, Popper, Font Awesome CDN assets, or the unused Firebase package.
- GitHub Actions runs a frozen lockfile install, high-severity audit, and production build.
- Dependabot is configured for npm dependencies and GitHub Actions.

## Deployment

The site is configured for Netlify in `netlify.toml`.

- Build command: `pnpm build`
- Publish directory: `dist`
- Node version: `22`

If the Netlify site is connected to the GitHub repository, merging to `master` should trigger a redeploy with these settings. If it is not connected, deploy the generated `dist/` directory manually or connect the repository in Netlify.
