# MRA — MINECRAFT RANKED ARENA

MRA is a competitive Minecraft platform. This repository is a runnable
development foundation, not a finished matchmaking or ranked service.

## What exists

- **Web:** responsive Next.js landing, login/register UI, and an explicitly
  unconnected player dashboard.
- **API:** NestJS REST foundation with `/api/v1/health`, input validation, and
  an injectable Prisma client service.
- **Database:** initial Prisma models for MRA accounts, sessions, and profiles.
- **Launcher:** React/Vite interface and a Tauri 2 Rust shell foundation.
- **Fabric mod:** minimal Fabric client entrypoint targeting Minecraft 1.16.1.
- **Protocol:** shared TypeScript event envelope and JSON Schema for client
  integrations.
- **Local infrastructure:** PostgreSQL Compose service; Redis is optional.

Authentication, Minecraft/Microsoft account linking, matchmaking, game event
reporting, persistent WebSockets, and deployment are not implemented.

## Requirements

- Node.js 22.12 or newer (Node.js 24 LTS recommended).
- Corepack and pnpm 10.34.9.
- Git.
- Optional: Docker Desktop for local PostgreSQL.
- Optional: Rust toolchain and platform prerequisites for building Tauri.
- Optional: Java 17+ for the Fabric mod; its Gradle 9.2.1 wrapper is included.

## Quick start (PowerShell)

From the repository root:

```powershell
Copy-Item .env.example .env
.\scripts\setup.ps1
.\scripts\dev.ps1
```

The website runs at `http://localhost:3000`; the API runs at
`http://localhost:3001/api/v1/health`. Neither requires PostgreSQL to start.
The API health route reports process readiness only; it does not claim that a
database is connected.

To run PostgreSQL locally, start Docker Desktop and run:

```powershell
docker compose -f infrastructure/docker/compose.yml up -d postgres
corepack pnpm db:generate
```

Apply the initial schema to a local database only with:

```powershell
corepack pnpm --filter @mra/database db:push
```

This command is not for production. Production schema changes must use reviewed,
backward-compatible Prisma migrations and an approved deployment process.

## Useful commands

```powershell
.\scripts\doctor.ps1
.\scripts\build.ps1
.\scripts\test.ps1
corepack pnpm --filter @mra/launcher dev
```

For Tauri development use `corepack pnpm --filter @mra/launcher tauri:dev` after
installing Rust and the operating-system build prerequisites. The launcher
currently has no Minecraft installation, authentication, or game-launch logic.

Build the Fabric mod from PowerShell with:

```powershell
Push-Location .\minecraft\fabric-mod
.\gradlew.bat build
Pop-Location
```

See [deployment instructions](docs/deployment/vercel.md),
[architecture](docs/architecture/overview.md), and each component's setup guide
before connecting external services.
