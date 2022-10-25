import {Chat} from "./type";

export type State = {
    popUp: {
        name: string
    }
    user: {
        user_id?: string
        name?: string
    }
    chat: {
        chat_list?: Map<string, Chat>
        roominfo?: {
            room_id : string
            name: string | null
            current: number | null
            limit: number | null
            explode_time: number
        }
    }
}

export const initialState: State = {
    popUp: {
        name: ""
    },
    user: {},
    chat: {}
}
