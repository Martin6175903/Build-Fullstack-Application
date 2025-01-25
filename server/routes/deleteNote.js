import pool from "../db.js";

export async function deleteNote(req, res) {
  try {
    const id = req.params.id;
    await pool.query(`
      delete from users
      where user_id = ${id}
    `)
    res.send('Data is deleting!');
  } catch (err) {
    console.error(err.message);
  }
}