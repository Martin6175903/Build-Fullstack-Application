export async function getNotes(req, res) {
  try {
    console.log(req.body);
    res.send(`<h1>You response from port 5432</h1>`)
  } catch (err) {
    console.error(err.message);
  }
}