import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "./schema";

const { Pool } = pg;

export let pool: any = null;
export let db: any = null;

if (!process.env.DATABASE_URL) {
  console.warn(
    "DATABASE_URL must be set. Did you forget to provision a database? Falling back to standalone mode."
  );
} else {
  pool = new Pool({ connectionString: process.env.DATABASE_URL });
  db = drizzle(pool, { schema });
}

export * from "./schema";
