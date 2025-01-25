import { IEmailProps } from "../../types/email.types.ts";
import {isLen} from "../../utilities/isLen.ts";
import {useState} from "react";
import {conditionLongStr} from "../../utilities/conditionLongStr.ts";
import {deleteEmail, updateEmail} from "../../api/api.ts";

const ListEmail = ({ user_id, user_date, user_message, user_name, emails, setEmails, idEmailList } :IEmailProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(user_message)

  const date = new Date(user_date);

  function handleEdit() {
    if (isEdit) {
      updateEmail({user_id, editValue})
    }
    setIsEdit(!isEdit)
  }

  function handleDelete() {
    const emailsList = emails;
    emailsList.splice(idEmailList, 1);
    setEmails([...emailsList]);
    deleteEmail({user_id});
  }

  return (
      <div className={'bg-zinc-700 p-5 rounded-lg text-2xl'}>
        <div className={'flex justify-between gap-5 mb-4'}>
          <h2 className={'font-bold'}>Email:</h2>
          <div className={'flex items-start gap-5 text-xl'}>
            <button onClick={handleEdit} className={'rounded-lg bg-zinc-600 py-2 px-4 cursor-pointer duration-300 hover:bg-zinc-500'}>{isEdit ? 'Save' : 'Edit'}</button>
            <button onClick={handleDelete} className={'rounded-lg text-nowrap bg-zinc-600 py-2 px-4 cursor-pointer duration-300 hover:bg-zinc-500'}>Delete email</button>
          </div>
        </div>
        <div>
          <div className={'flex gap-5 w-full'}>
            <span>{idEmailList + 1}.</span>
            <p className={'w-full'}>{(isEdit ?
                <textarea value={editValue} onChange={e => setEditValue(e.target.value)} className={'w-full px-4 resize-none focus-visible:outline-0 rounded-lg border-2 border-gray-500 border-solid duration-300 focus:border-gray-300 min-h-[85px]'}>
                  {conditionLongStr(editValue)}
                </textarea>
                : <span className={'inline-block px-4 border-2 border-transparent border-solid min-h-[85px]'}>{conditionLongStr(editValue)}</span>)}
            </p>
          </div>
        </div>
        <div className={'flex justify-between mt-5 pt-2 border-solid border-t-2 border-gray-500'}>
          <h5 className={'text-gray-400'}>Author: by {user_name}</h5>
          <div>Date of sending the message: {`${isLen(date.getDay())}.${isLen(date.getMonth() + 1)}.${date.getFullYear()}`}</div>
        </div>
      </div>
  );
};

export default ListEmail;