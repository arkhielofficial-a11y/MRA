# Architecture decisions

## Initial foundation (2026-11)

- Use pnpm workspaces for the TypeScript apps and packages; Java/Gradle and
  Rust/Cargo projects keep their native build systems.
- Keep Next.js and NestJS in separate Vercel projects so each uses its native
  framework deployment path.
- Use PostgreSQL as the permanent data store and Prisma 6 for the initial
  schema. Redis remains optional and is not required for the first API routes.
- Keep the API health check independent from the database, and avoid opening a
  database connection for a request that does not need one.
- Share protocol envelope types and a language-neutral JSON Schema. Do not
  claim this small initial envelope provides authentication, replay protection,
  or a working realtime transport.
- Target Minecraft 1.16.1 with legacy-compatible Fabric versions and Java 8
  bytecode. The launcher UI and native Tauri shell are groundwork only.
- Do not create cloud projects, paid resources, production databases, or
  deployments from local bootstrap scripts.
