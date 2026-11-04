# Performance approach

This repository contains no performance benchmark results. Do not claim that
the foundation has met resource or latency targets.

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
