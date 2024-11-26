"use server"

import { createPool } from "./utils/db"

export async function fetchData(username:string, roll:number) {

const db = await createPool()
db.query('INSERT INTO rolls (username, roll) VALUES ($1,$2)', [username, roll])
}