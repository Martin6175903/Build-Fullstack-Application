import pool from "../db.js";

export async function createNote(req, res) {
  try {
    const date = new Date();
    const newNote = await pool.query(`insert into users (user_date, user_message, user_name) VALUES ('${date}', 'message from user Martin', 'Martin')`);
    res.json(newNote.rows);
  } catch (err) {
    console.error(err.message);
  }
}