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
  let connectionString = process.env.DATABASE_URL;
  try {
    const parsedUrl = new URL(connectionString);
    parsedUrl.searchParams.delete("sslmode");
    connectionString = parsedUrl.toString();
  } catch (err) {
    // Keep original if it's not a standard URL format
  }

  pool = new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false }
  });
  db = drizzle(pool, { schema });
}

export * from "./schema";
