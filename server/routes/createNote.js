import pool from "../db.js";

export async function createNote(req, res) {
  try {
    const {user_date, user_media, user_message, user_name} = req.body;
    const newEmail = await pool.query(`
      insert into users (user_date, user_message, user_media, user_name)
      VALUES ('${user_date}', '${user_message}', ${user_media}, '${user_name}')
    `);
    res.send('<h1>Email still create!</h1>');
  } catch (err) {
    console.error(err.message);
  }
}