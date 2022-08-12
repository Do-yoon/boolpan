import {initialChatState} from "@store/chat/state";
import {handleActions} from "redux-actions";


const reducer = handleActions({
    GetChattingRoomList: (state, action) => ({
        ...state,
        roominfo: {
            ...state.roominfo!,
            chat_list: action.payload.chat_list
        }
    }),
    SendMessage: (state, action) => ({
        ...state,
        roominfo: {
            ...state.roominfo!,
            messages: [...state.roominfo!.messages!, ...action.payload.roominfo.messages]
        }
    }),
    GetNewMessage: (state, action) => ({
        ...state,
        roominfo: {
            ...state.roominfo!,
            messages: [...state.roominfo!.messages!, ...action.payload.roominfo.messages]
        }
    }),
    EnterRoom: (state, action) => ({

        ...state,
        roominfo: {
            ...action.payload.roominfo,
            messages: []

        }
    }),
}, initialChatState);

export default reducer;