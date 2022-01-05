import {ChatActionType, ChatAction} from "@store/chat/action";
import axios from 'axios';
import {Chat, ChatState, initialChatState} from "@store/chat/state";

export function ChatReducer(
    state = initialChatState,
    action: ChatAction
): ChatState {

    switch (action.type) {
        case ChatActionType.GET_CHATTING_ROOM_LIST:
            // call backend API
            return {
                ...state,
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