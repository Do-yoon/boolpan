import {initialChatState} from "store/chat/state";
import {handleActions} from "redux-actions";


const ChatReducer = handleActions({
    GET_CHATTING_ROOM_LIST: (state, action) => ({
        ...state,
        roominfo: {
            ...state.roominfo!,
            chat_list: action.payload.chat_list
        }
    }),
    SEND_MESSAGE: (state, action) => ({
        ...state,
        roominfo: {
            ...state.roominfo!,
            messages: [...state.roominfo!.messages!, ...action.payload.roominfo!.messages]
        }
    }),
    GET_NEW_MESSAGE: (state, action) => ({
        ...state,
        roominfo: {
            ...state.roominfo!,
            messages: [...state.roominfo!.messages!, ...action.payload.roominfo!.messages]
        }
    }),
    ENTER_ROOM: (state, action) => ({
        ...state,
        roominfo: {
            ...action.payload.roominfo!,
            messages: []
        }
    }),
}, initialChatState);

export default ChatReducer;