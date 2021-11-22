export interface Chat {
    name: string
    limit: number
    current_user: number
}

export interface PageState {
    chat_list: Chat[]
    users: number
    chats: number
}

