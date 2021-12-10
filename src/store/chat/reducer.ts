import {ChatActionType, ChatAction} from "@store/chat/action";
import axios from 'axios';
import {Chat, ChatState, initialChatState} from "@store/chat/state";

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
            let data: Chat[] = [];
            axiosInstance.get('/chat/chatRoomList')
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
                chat_list: []
            };
        default:
            return state;
    }
}