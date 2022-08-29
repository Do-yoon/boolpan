import {Chat, Message} from "./type";

export type State = {
    popUp: null | React.ReactNode
    user: {
        name?: string
    }
    chat: {
        chat_list?: Chat[]
        roominfo?: {
            room_id : string | null
            name: string | null
            current: number | null
            limit: number | null
            explode_time: number
            messages: Message[]
        }
    }
}

export const initialState: State = {
    popUp: null,
    user: {
    },
    chat: {}
}
