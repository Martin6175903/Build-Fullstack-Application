import pool from "../db.js";

export async function updateNote(req, res) {
  try {
    const id = req.params.id;
    const message = req.body.message;
    await pool.query(`
      update users
      set user_message = '${message}'
      where user_id = ${id}
    `)
    res.send("Data is updating!")
  } catch (err) {
    console.error(err.message);
  }
}