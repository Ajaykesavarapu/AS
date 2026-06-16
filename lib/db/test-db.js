import pg from "pg";
const { Client } = pg;

async function testConnection(label, config) {
  console.log(`\n--- Testing: ${label} ---`);
  const client = new Client(config);
  try {
    await client.connect();
    console.log("Connected successfully!");
    const res = await client.query("SELECT NOW()");
    console.log("Query result:", res.rows[0]);
    await client.end();
    return true;
  } catch (err) {
    console.error("Connection failed:", err.message || err);
    try {
      await client.end();
    } catch {}
    return false;
  }
}

async function run() {
  // Test 1: Pooler connection parameters (6543)
  await testConnection("Pooler (6543) Config Object", {
    host: "aws-0-ap-south-1.pooler.supabase.com",
    port: 6543,
    user: "postgres.nkpcxhruwtavusjbsrvn",
    password: "askreativ@1703",
    database: "postgres",
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 3000
  });

  // Test 2: Pooler connection parameters (5432)
  await testConnection("Pooler (5432) Config Object", {
    host: "aws-0-ap-south-1.pooler.supabase.com",
    port: 5432,
    user: "postgres.nkpcxhruwtavusjbsrvn",
    password: "askreativ@1703",
    database: "postgres",
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 3000
  });

  // Test 3: Direct connection parameters (5432)
  await testConnection("Direct (5432) Config Object", {
    host: "db.nkpcxhruwtavusjbsrvn.supabase.co",
    port: 5432,
    user: "postgres",
    password: "askreativ@1703",
    database: "postgres",
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 3000
  });
}

run();
