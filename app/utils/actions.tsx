'use server'
import { createPool } from './db';

export async function getRolls() {
    const db = createPool();
    const client = await db.connect();
    try {
      const data = await client.query("SELECT * FROM rolls");
      return data.rows;
    } finally {
      await client.release();
    }
  }