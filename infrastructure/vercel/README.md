# Vercel deployment configuration

Create separate Vercel projects for `apps/web` and `apps/api`, both connected to
the same GitHub repository. Set the project Root Directory to the corresponding
app directory and enable pnpm monorepo installation as documented in
`docs/deployment/vercel.md`. This keeps the static/SSR web app separate from
the short-lived API Function.

No project, cloud resource, credential, or production deployment is created by
this repository.
