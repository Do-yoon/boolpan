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
    roominfo: {
        room_id : string | null
        name: string | null
        current: number | null
        limit: number | null
        category: string | null
        explode_time: number
        messages: {
            sender: string | null
            text: string
            timestamp: string
        }[]
    }
}

export const initialChatState: ChatState = {
    roominfo: {
        room_id: null,
        name: null,
        current: null,
        limit: null,
        category: null,
        explode_time: 0,
        messages: []
    }
}
