import {
    getChattingRoomList,
    sendMessage,
    getMessages,
    getMessage,
    enterRoom
} from "@store/chat/action";
import {ChatState, initialChatState} from "@store/chat/state";
import {handleActions} from "redux-actions";
import {useAppSelector} from "@util/hooks";


const reducer = handleActions({
    GetMessages: (state, action) => ({
        ...state,
        roominfo: {
            ...state.roominfo!,
            messages: [...state.roominfo!.messages!, action.payload.]
        }
    }),
    GetMessage
    EnterRoom: (state, action) => ({
        ...state,
        roominfo: {
            room_id: action.payload.roominfo.room_id,
            name: action.payload.roominfo.name,
            category: action.payload.roominfo.category,
            current: action.payload.roominfo.current,
            limit: action.payload.roominfo.limit,
            explode_time: action.payload.roominfo.explode_time,
            messages: []

        }
    }),


}, initialChatState);
}

{

case
    "SetMessageListAction"
:
    // call backend API
    return {
        ...state,
        chat_list: action.payload.c
    };
case
    "EnterRoomAction"
:
    const now = new Date();
    let hours = now.getHours();
    const noon = ((hours / 12) == 0) ? '오전' : '오후';
    hours = (hours > 12) ? hours % 12 : hours;

    const minutes = now.getMinutes();
    const zero = minutes < 10 ? '0' : ''
    return {
        ...state,
        roominfo: {
            ...state.roominfo!,
            messages: [...state.roominfo!.messages!,
                {
                    text: action?.payload.text,
                    sender: null,
                    timestamp: `${noon} ${hours}:${zero}${minutes}`
                }

            ]
        }
    };
case
    "GetMessagesAction"
:
    return {
        ...state,
        roominfo: {
            ...state.roominfo!,
            messages: [...state.roominfo!.messages!,
                ...action?.payload.messages
            ]
        }
    };
default:
    return state;
}
}