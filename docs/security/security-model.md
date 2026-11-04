# Security model (foundation)

## Implemented safeguards

- The API validates environment values at startup.
- Nest's global `ValidationPipe` strips unknown fields, rejects non-whitelisted
  properties, and transforms declared DTO input.
- The database schema stores a password-hash field and a session token-hash
  field, not plaintext-password/token fields.
- The launcher has no authentication or filesystem permissions beyond its
  default local window capability.
- Local PostgreSQL and Redis ports bind to loopback only.
- The login/register controls are disabled and explicitly warn that
  authentication is not connected.

## Not implemented

There is no authentication, password hashing, session/token lifecycle, CSRF
protection, rate limiting, authorization, OAuth, account linking, admin
control, anti-cheat, audit logging, or production secrets configuration.
Schema fields do not provide these controls by themselves. Do not collect real
credentials through the foundation UI.

Use Argon2id and short-lived, revocable sessions when authentication is
implemented. Never place secrets in the web, launcher, or mod bundle. Treat
client match telemetry as untrusted evidence.
