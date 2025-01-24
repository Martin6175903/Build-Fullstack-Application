import pool from "../db.js";

export async function updateNote(req, res) {
  try {
    const [rows] = await pool.query(``)
  } catch (err) {
    console.error(err.message);
  }
}