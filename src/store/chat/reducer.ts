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
            let data: ChatState = {chat_list: []};
            axiosInstance.get('/chat/chatRoomList')
                .then((res) => {
                    data.chat_list = res.data
                    console.log(data)
                })
            return {
                ...state,
                ...data
            };
        case ChatActionType.SEND_MESSAGE:
            return {
                ...state,
                chat_list: []
            };
        default:
            return state;
    }
}