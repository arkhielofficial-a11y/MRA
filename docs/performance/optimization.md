# Performance approach

No gameplay, latency, or resource-budget benchmark has been run. Do not claim
that the foundation has met runtime performance targets.

## Local deployment build snapshot

Measured on Windows with Node.js 24.20.0 and pnpm 10.34.9 on 2026-11-04. A
warm sequential `pnpm build` across the protocol, Prisma/database, Next.js,
NestJS, and launcher projects took 28.02 seconds.

- Next.js static client output: 0.56 MiB across 12 files.
- Next.js server output: 4.56 MiB across 172 files.
- API TypeScript output: 4.6 KiB of JavaScript; 0.32 MiB for the whole `dist`
  directory including declarations, maps, and TypeScript build metadata.
- Launcher Vite output: 222.33 KB JavaScript (69.67 KB gzip), 2.67 KB CSS
  (1.07 KB gzip), and 0.46 KB HTML.
- Installed pnpm package files: 751.02 MiB across 31,414 files, including
  development/build dependencies. This is local install storage, not a
  deployment or serverless-function bundle measurement.

No Vercel deployment artifact or API Function bundle has been generated. Its
actual traced dependencies and size remain unmeasured until a linked Preview
build exists. The local `apps/api/dist` measurement includes application output,
not bundled Nest/Prisma runtime dependencies.

Current low-cost choices:

- No periodic polling, scheduled jobs, or always-on application process.
- The API health route does not query PostgreSQL.
- Prisma is available through dependency injection but connects only when a
  database operation is added.
- Redis is an opt-in Compose profile and is unused by application code.
- The web foundation uses server-rendered pages and no UI component framework.
- The mod performs one startup log and has no tick callbacks or network client.

Measure API latency, database connection count, browser bundle size, desktop
startup/memory, and mod frame-time impact before adding infrastructure or
claiming a budget is met.
