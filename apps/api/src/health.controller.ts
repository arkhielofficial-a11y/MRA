import { Controller, Get } from "@nestjs/common";
import { PROTOCOL_VERSION } from "@mra/protocol";

@Controller("health")
export class HealthController {
  @Get()
  getHealth() {
    return {
      status: "ok",
      service: "mra-api",
      protocolVersion: PROTOCOL_VERSION,
    };
  }
}
