import {ChatActionType} from "@store/chat/action";
import {connect, ConnectedProps} from "react-redux";

export interface Chat {
    id: number
    name: string
    limit: number
    current: number
}

export interface ChatState {
    chat_list: Chat[]
}

export const initialChatState: ChatState = {
    chat_list: [{
        id: 0,
        name: 'test',
        limit: 100,
        current: 1
    }]
}


const mapState = (state: ChatState) => ({
    chat_list: state.chat_list,
})

const mapDispatch = {
    get_from_server: () => ({ type: ChatActionType.GET_CHATTING_ROOM_LIST })
}

export const connector = connect(mapState, mapDispatch);
export type PropsFromRedux = ConnectedProps<typeof connector>