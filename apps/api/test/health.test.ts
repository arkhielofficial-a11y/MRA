import assert from "node:assert/strict";
import { test } from "node:test";
import type { HealthResponse } from "@mra/protocol";
import { HealthController } from "../src/health.controller";

test("health endpoint reports API readiness and shared protocol version", () => {
  const result: HealthResponse = new HealthController().getHealth();

  assert.deepEqual(result, {
    status: "ok",
    service: "mra-api",
    protocolVersion: "1",
  });
});
