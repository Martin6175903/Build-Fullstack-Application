import express from 'express';
import cors from 'cors';
import {getNotes} from "./routes/getNotes.js";
import {createNote} from "./routes/createNote.js";
import {deleteNote} from "./routes/deleteNote.js";

const app = express();
const PORT = 5000;

//middleware
app.use(cors());
app.use(express.json());

// ROUTES: getNotes, createNote, deleteNote
app.get('/', getNotes);

app.get('/emails', getNotes)
app.post('/emails', createNote);

app.delete('/emails/del:id', deleteNote);

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
})
