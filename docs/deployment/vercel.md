# Vercel deployment

## Status

Vercel CLI 62.2.0 is authenticated locally, but the account's visible projects
do not include MRA. There is no MRA Vercel project or GitHub repository
connected, no deployment URL, and no deployment has been run. No project,
database provider, paid resource, or production domain has been created.

## Monorepo projects

Vercel documents one project per app directory in a monorepo. After the MRA
repository is available in GitHub, create two Vercel projects from that same
repository:

1. **MRA web**: Root Directory `apps/web`, framework preset Next.js.
2. **MRA API**: Root Directory `apps/api`, framework preset NestJS.

Each app has a `vercel.json` specifying its framework and build command. Both
commands are dependency-aware pnpm workspace filters, run from the monorepo
root. The web build selects `@mra/web...`, which builds its shared protocol
dependency first; the API selects `@mra/api...`, which builds Prisma/database
and protocol packages before NestJS. These exact commands were run successfully
from their respective app directories locally.

Use the repository's root `pnpm-lock.yaml` and pinned pnpm version. In each
Vercel project's Root Directory settings, enable **Include source files outside
the Root Directory in the Build Step**. Vercel says this is enabled by default
on new projects; verify it rather than assuming it. Leave install command at
the workspace-aware detected default so dependency resolution uses the root
lockfile. Do not set Root Directory to the monorepo root.

The API uses the documented NestJS `src/main.ts` entrypoint and is deployed as
a Node.js Vercel Function. It handles short-lived HTTP requests; it is not a
permanent server. The `/api/v1/health` route does not access the database.
Prisma Client is generated during the API build; its connection is not opened
at application startup. Actual database endpoint connectivity and connection
pool sizing must be tested separately before adding production DB routes.

## Branch deployments

Set `main` as Production Branch in both projects. With Vercel's GitHub
integration, non-production branch pushes (including `development`) and pull
requests create Preview deployments; commits to `main` create Production
deployments. Protect `main` in GitHub with review and the required CI check.
See [automatic deployment workflow](automatic-deployment.md).

## Environment variables

| Variable | Web | API | Local | Preview | Production |
|---|---|---|---|---|---|
| `DATABASE_URL` | Not used | Optional for current health-only API; PostgreSQL when DB features exist | Local-only URL in ignored `.env` | Configure separately only when a Preview DB is approved | Not configured; do not activate a production DB |
| `PORT` | Platform assigned | Vercel assigned; local default is 3001 | `.env` optional | Platform assigned | Platform assigned |
| `NEXT_PUBLIC_MRA_API_URL` | Not used yet | N/A | Only when browser API calls are implemented | Configure per Preview project if needed | Configure after domain and API routing are approved |

Never put credentials in the repository or `NEXT_PUBLIC_*` variables. Keep
local `.env` files ignored by Git. Configure Vercel variables separately for
Development, Preview, and Production; do not copy production credentials into
Preview. `.env.example` contains only loopback development placeholders.

The repository does not select or provision a managed database. Use the
provider's pooled connection URL when appropriate, validate Prisma's behavior
with that provider, and set conservative connection limits before production.
No database, production variables, Marketplace integration, or paid service
has been configured.

## Realtime limitation

There is no WebSocket endpoint in the current API. NestJS on Vercel Functions
does not make the API an unlimited, permanently running WebSocket/game server.
Validate connection lifetime, scaling, and shared-state behavior in a Preview
proof-of-concept before choosing realtime transport. Do not deploy a raw
Minecraft TCP relay as a Vercel Function.

References: [Vercel monorepos](https://vercel.com/docs/monorepos),
[NestJS on Vercel](https://vercel.com/docs/frameworks/backend/nestjs),
[Git deployments](https://vercel.com/docs/git),
[environments](https://vercel.com/docs/deployments/environments).
