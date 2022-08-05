import {ChatAction, ChatActionType} from "@store/chat/action";
import {ChatState, initialChatState} from "@store/chat/state";

export function ChatReducer(
    state = initialChatState,
    action: ChatAction
): ChatState {

    switch (action.type) {
        case ChatActionType.GET_MESSAGE:
            return {
                ...state,
                roominfo: {
                    ...state.roominfo!,
                    messages: [...state.roominfo!.messages!, action.payload.msg]
                }
            };
        case ChatActionType.ENTER_THE_ROOM:
            return {
                ...state,
                roominfo: {
                    room_id: action.payload.room_id,
                    name: action.payload.name,
                    category: action.payload.category,
                    current: action.payload.current,
                    limit: action.payload.limit,
                    explode_time: action.payload.explode_time,
                    messages: []
                }
            };
        case ChatActionType.GET_CHATTING_ROOM_LIST:
            // call backend API
            return {
                ...state,
                chat_list: action.payload.chat_list
            };
        case ChatActionType.SEND_MESSAGE:
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
        case ChatActionType.SET_MESSAGE_LIST:
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