import express from 'express';
import cors from 'cors';
import {getNotes} from "./routes/getNotes.js";

const app = express();
const PORT = 5000;

//middleware
app.use(cors());
app.use(express.json());

// ROUTES: getNotes, createNote, deleteNote

app.post('/notes', getNotes)


app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
})
