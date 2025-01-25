import axios from 'axios';
import {IDeleteEmail, IUpdateEmail} from "../types/email.types.ts";

export const getEmails = async function() {
  const {data} = await axios.get('http://localhost:5000/emails');
  return data;
}

export const updateEmail = async function ({user_id, editValue}: IUpdateEmail) {
  await axios.put(`http://localhost:5000/emails/update/${user_id}`, {message: editValue})
}

export const deleteEmail = async function ({user_id}: IDeleteEmail) {
  await axios.delete(`http://localhost:5000/emails/delete/${user_id}`);
}