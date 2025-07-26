import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "../db/schema";

if (!global.postgres) {
  global.postgres = postgres(process.env.DATABASE_URL!);
}

const client = global.postgres;

if (!global.db) {
  global.db = drizzle(client, { schema });
}

export const db = global.db;

declare global {
  var postgres: postgres.Sql | undefined;
  var db: ReturnType<typeof drizzle> | undefined;
}
