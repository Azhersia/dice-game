import pg from "pg";

const { Pool } = pg;

export function createPool() {
  const db = new Pool({
    connectionString: process.env.POSTGRES_URL,
  })
  return db;
}
