import {Chat} from "./type";

export type State = {
    popUp: {
        type: PopUpType
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

export enum PopUpType {
    None,
    CreateRoomPopUp,
    LoginPopUp,
    PasswordPopUp,
    ChattingPopUp,
    SignUpPopUp
}

export const initialState: State = {
    popUp: {
        type: PopUpType.None
    },
    user: {},
    chat: {}
}
