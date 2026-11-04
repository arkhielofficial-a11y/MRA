import { resolve } from "node:path";
import dotenv from "dotenv";
import { defineConfig } from "prisma/config";

dotenv.config({ path: resolve(__dirname, "../../.env") });

process.env.DATABASE_URL ??=
  "postgresql://mra:mra_local_only@127.0.0.1:1/mra?schema=public";

export default defineConfig({ schema: "prisma/schema.prisma" });
