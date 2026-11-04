import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaModule } from "@mra/database";
import { resolve } from "node:path";
import { HealthController } from "./health.controller";

function validateEnvironment(environment: Record<string, unknown>) {
  const port = Number(environment.PORT ?? 3001);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error("PORT must be an integer between 1 and 65535");
  }

  const databaseUrl = environment.DATABASE_URL;
  if (databaseUrl !== undefined && databaseUrl !== "") {
    if (typeof databaseUrl !== "string") {
      throw new Error("DATABASE_URL must be a PostgreSQL connection URL");
    }
    let parsed: URL;
    try {
      parsed = new URL(databaseUrl);
    } catch {
      throw new Error("DATABASE_URL must be a valid PostgreSQL connection URL");
    }
    if (parsed.protocol !== "postgresql:" && parsed.protocol !== "postgres:") {
      throw new Error("DATABASE_URL must use the PostgreSQL protocol");
    }
  }

  return { ...environment, PORT: port };
}

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: resolve(process.cwd(), "../../.env"),
      validate: validateEnvironment,
    }),
    PrismaModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
