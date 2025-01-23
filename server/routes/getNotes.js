import pool from "../db.js";

export async function getNotes(req, res) {
  try {
    const { rows } = await pool.query(`select * from users`);
    res.json(rows);
  } catch (err) {
    console.error(err.message);
  }
}