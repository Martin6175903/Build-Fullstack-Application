import {useEffect, useState} from "react";
import {getEmails} from "../../api/api.ts";
import {IEmail} from "../../types/email.types.ts";
import ListEmail from "./ListEmail.tsx";

const ListEmails = () => {

  const [emails, setEmails] = useState<IEmail[]>([]);

  useEffect(() => {
    getEmails().then(response => setEmails(response))
  }, []);

  return (
      <div>
        <h2 className={'text-4xl text-center mb-4'}>Your Emails</h2>
        <div className={'flex flex-col gap-5'}>
          {emails.length ?
              emails.map((email, id) =>
                  <ListEmail key={email.user_id} user_date={email.user_date} user_id={email.user_id} user_message={email.user_message} user_name={email.user_name} emails={emails} setEmails={setEmails} idEmailList={id}/>
              ) : <h1>Loading...</h1>
          }
        </div>
      </div>
  );
};

export default ListEmails;