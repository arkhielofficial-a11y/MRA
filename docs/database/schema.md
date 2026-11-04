# Database schema

The initial Prisma schema contains:

- `User`: unique email field (future account writes must normalize case),
  password-hash field, role, timestamps.
- `Session`: unique token hash, user relation, expiry, creation time, expiry and
  user/expiry indexes.
- `PlayerProfile`: one profile per account and an optional unique Minecraft
  UUID.

This is a schema foundation only. Registration, password hashing, session
issuance/rotation, Microsoft linking, profile APIs, and cleanup jobs are not
implemented. No production database or migration has been created.

Use `corepack pnpm db:validate` to validate the schema and
`corepack pnpm db:generate` to generate Prisma Client. `db:push` is documented
for disposable local development only. Production schema changes should use
reviewed Prisma migrations; never run `db push` against production.

Indexes are limited to the current unique identifiers and lookup/expiry paths.
Add indexes only with query evidence as the application grows.
