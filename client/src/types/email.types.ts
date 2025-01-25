import {Dispatch, SetStateAction} from "react";

export interface IEmail {
  user_date: string
  user_id: number
  user_media?: string
  user_message: string
  user_name: string
}

export interface IEmailsList {
  idEmailList: number
  emails: IEmail[]
  setEmails: Dispatch<SetStateAction<IEmail[]>>
}

export interface IEmailProps extends IEmail, IEmailsList {}

export interface IUpdateEmail {
  user_id: number
  editValue: string
}

export interface IDeleteEmail {
  user_id: number;
}