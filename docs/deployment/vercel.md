# Vercel deployment

## Status

Vercel configuration is documented, not connected. No Vercel account, project,
database provider, or deployment has been created or tested.

## Project setup

Create two Vercel projects from the GitHub repository:

1. Web project Root Directory: `apps/web`; framework: Next.js.
2. API project Root Directory: `apps/api`; framework: NestJS (Vercel's
   zero-configuration NestJS support).

Use the same Git repository and branch strategy for both projects. Configure
the package manager as pnpm and ensure the Vercel install step installs the
workspace from the repository root. Confirm workspace dependencies resolve
from each selected root directory in a Preview deployment before promoting.
The deployment layout has not yet been tested against a linked Vercel project.

Vercel documents NestJS entrypoint detection at
`src/main.ts`; the API follows that convention. Each Vercel project runs as a
separate app, not as one combined multi-app build.

## Environments

Set environment variables separately for Development, Preview, and Production.
The API may use `DATABASE_URL` for the selected PostgreSQL provider and `PORT`
is assigned by the platform. Keep database credentials out of Git and client
bundles. Use a provider's pooled connection URL when required by its pooling
model; verify Prisma compatibility and connection limits before production.

The repository does not choose, provision, or configure a managed database.
Use a distinct database or isolated schema per environment.

## Realtime limitation

The current API has no WebSocket route. Vercel's NestJS Functions support does
not make a Function an unlimited, permanently running WebSocket/game server.
Validate the platform's current realtime support, connection lifetime, scaling,
and shared-state requirements in a non-production Preview before choosing a
transport. Do not deploy a raw Minecraft TCP relay as a Vercel Function.

References: [NestJS on Vercel](https://vercel.com/docs/frameworks/backend/nestjs),
[Node.js Functions](https://vercel.com/docs/functions/runtimes/node-js).
