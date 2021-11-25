import {ChatActionType, ChatAction} from "@store/chat/action";
import {initialChatState, ChatState} from "@store/chat/state";
import axios from 'axios';

export function ChatReducer(
    state = initialChatState,
    action: ChatAction
): ChatState {
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:8080/v0',
        timeout: 1000
    })
    switch (action.type) {
        case ChatActionType.GET_CHATTING_ROOM_LIST:
            // call backend API
            let data;
            axiosInstance.get('/getChatList')
                .then((res) => {
                    data = res.data
                    console.log(data)
                })
            return {
                ...state,
                chat_list: data
            };
        case ChatActionType.SEND_MESSAGE:
            return {
                ...state,
                room: undefined
            };
        default:
            return state;
    }
}