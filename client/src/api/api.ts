import axios from 'axios';
import {IUpdateEmail} from "../types/email.types.ts";

export const getEmails = async function() {
  const {data} = await axios.get('http://localhost:5000/emails');
  return data;
}

export const updateEmail = async function ({id, user_message}: IUpdateEmail) {
  await axios.put(`http://localhost:5000/emails/update/id:${id}`, {user_message})
}