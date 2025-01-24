export interface IEmail {
  user_date: string
  user_id: number
  user_media?: string
  user_message: string
  user_name: string
}

export interface IUpdateEmail {
  id: number
  user_message: string
}