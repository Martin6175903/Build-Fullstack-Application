import './App.scss'
import ListEmails from "./components/listEmails/ListEmails.tsx";
import AddEmail from "./components/addEmail/addEmail.tsx";
import {useEffect, useState} from "react";
import {IEmail} from "./types/email.types.ts";
import {getEmails} from "./api/api.ts";

function App() {

  const [emails, setEmails] = useState<IEmail[]>([]);

  useEffect(() => {
    getEmails().then(response => setEmails(response.sort((a:IEmail, b:IEmail) => a.user_id - b.user_id)))
  }, []);

  return (
    <>
      <AddEmail emails={emails} setEmails={setEmails}/>
      <ListEmails emails={emails} setEmails={setEmails}/>
    </>
  )
}

export default App
