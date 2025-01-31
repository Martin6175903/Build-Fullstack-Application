import FormAddEmail from "./FormAddEmail.tsx";
import {IListEmailsProps} from "../../types/email.types.ts";

const AddEmail = ({emails, setEmails}: IListEmailsProps) => {
  return (
      <div className="mb-20 font-bold">
        <h2 className={'text-center text-4xl'}>Create new Email</h2>
        <FormAddEmail emails={emails} setEmails={setEmails}/>
      </div>
  );
};

export default AddEmail;