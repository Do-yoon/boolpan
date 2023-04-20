import {Chat} from "./type";

export type State = {
    popUp: {
        createRoomPopUp: boolean
        loginPopUp: boolean
        chattingPopUp: boolean
        passwordPopUp: boolean
        signUpPopUp: boolean
    }
    user: {
        user_id?: string
        name?: string
    }
    chat: {
        chat_list?: Map<string, Chat>
        roominfo?: {
            room_id : string | null
            name: string | null
            current: number | null
            limit: number | null
            explode_time: number
        }
    }
}

export const initialState: State = {
    popUp: {
        createRoomPopUp: false,
        loginPopUp: false,
        chattingPopUp: false,
        passwordPopUp: false,
        signUpPopUp: false
    },
    user: {},
    chat: {}
}
