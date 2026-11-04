const assert = require("node:assert/strict");
const { test } = require("node:test");
const { HealthController } = require("../dist/health.controller.js");

test("health endpoint reports API readiness and shared protocol version", () => {
  const result = new HealthController().getHealth();

  assert.deepEqual(result, {
    status: "ok",
    service: "mra-api",
    protocolVersion: "1",
  });
});
