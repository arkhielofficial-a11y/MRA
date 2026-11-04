# Architecture overview

## Current foundation

```text
Next.js web ─────┐
Tauri/React UI ──┼── HTTPS ── NestJS API (Vercel Function)
Fabric client ───┘                 │
                                   └── Prisma ── PostgreSQL
                                       (optional, local Redis is not used)
```

The TypeScript protocol package defines the initial event envelope. The JSON
Schema is the language-neutral reference for clients, including the Java mod.
There is no WebSocket server, durable realtime channel, authentication, queue,
match coordinator, or result authority yet.

The API health endpoint is process-only and deliberately does not require the
database to be online. Prisma is injected for later request handlers; the
foundation does not connect to a database on startup.

## Intended deployment boundary

The Next.js site and NestJS API are separate Vercel projects rooted at
`apps/web` and `apps/api`. PostgreSQL is an external managed service selected
and provisioned by the project owner. Local development uses the Compose
PostgreSQL container. Redis is optional and currently unused.

Vercel Functions are short-lived request handlers, not permanent WebSocket or
Minecraft game servers. Live persistent realtime transport and its multi-
instance delivery model require a separately validated design before
implementation.
