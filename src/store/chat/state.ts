export type Chat = {
    id: number
    name: string
    limit: number
    current: number
}

export interface Message {
    user: number,
    message: string,
    timestamp: number
}

export type RoomState = {
    messages?: Message[]
}

export type ChatState = {
    chat_list?: Chat[]
}

export const initialChatState = {
    chat_list: [{
        id: 0,
        name: 'test',
        limit: 100,
        current: 1
    }]
}
