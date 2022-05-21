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
    roominfo?: {
        room_id: string
        name: string
        current: number
        limit: number
        category: string
        end_time: number
        messages: {
            sender: string | null
            text: string
            timestamp: string
        }[]
    }
}

export const initialChatState: ChatState = {
}
