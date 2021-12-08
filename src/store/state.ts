import {ChatActionType} from "@store/chat/action";
import {connect, ConnectedProps} from "react-redux";
import PopUpContainer from "@component/pop-up/PopUpContainer";

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
    roomId: number
    messages: Message[] | undefined
}

export type ChatState = {
    chat_list: Chat[] | undefined
}

export type UserState = {
    name: string,
    isLoggedIn: boolean,
    room?: number
}

export enum PopUpType {
    NONE,
    CREATE_ROOM,
}

export type PageState = {
    popUp: PopUpType
    width: number
}

export interface State {
    chat: ChatState
    page: PageState
    user: UserState
    room: RoomState
}

export const initialState: State = {
    chat: {
        chat_list: [{
            id: 0,
            name: 'test',
            limit: 100,
            current: 1
        }]
    },
    page: {
        popUp: PopUpType.NONE,
        width: window.innerWidth
    },
    user: {
        name: '',
        isLoggedIn: false
    },
    room: {
        roomId: -1,
        messages: undefined
    }
}

/*
const mapState = (state: State) => ({
    chat_list: state.chat_list,
})

const mapDispatch = {
    get_from_server: () => ({type: ChatActionType.GET_CHATTING_ROOM_LIST})
}

export const connector = connect(mapState, mapDispatch);
export type PropsFromRedux = ConnectedProps<typeof connector>

 */