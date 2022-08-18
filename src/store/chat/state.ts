import {Chat, Message} from "store/chat/type";

export type RoomState = {
    messages?: Message[]
}

export type ChatState = {
    chat_list?: Chat[]
    roominfo?: {
        room_id : string | null
        name: string | null
        current: number | null
        limit: number | null
        explode_time: number
        messages: {
            sender: string | null
            text: string
            timestamp: string
        }[]
    }
}

export const initialChatState: ChatState = {
}
