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
        name: string | null
        current: number | null
        limit: number | null
        category: string | null
        end_time: number
        messages: {
            sender: string | null
            text: string
            timestamp: string
        }[]
    }
}

export const initialChatState: ChatState = {
    chat_list: [
        {
            id: 0,
            name: 'test',
            limit: 100,
            current: 1
        }
    ],
    roominfo: {
        name: null,
        current: null,
        limit: null,
        category: null,
        end_time: 0,
        messages: []
    }
}
