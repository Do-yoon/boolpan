import {ChatAction, ChatActionType} from "@store/chat/action";
import {ChatState, initialChatState} from "@store/chat/state";
import {Simulate} from "react-dom/test-utils";

export function ChatReducer(
    state = initialChatState,
    action: ChatAction
): ChatState {

    switch (action.type) {
        case ChatActionType.ENTER_THE_ROOM:
            return {
                ...state,
                roominfo: {
                    ...state.roominfo,
                    name: action?.payload.room_name,
                    category: action?.payload.category,
                    limit: action?.payload.limit
                }
            };
        case ChatActionType.GET_CHATTING_ROOM_LIST:
            // call backend API
            return {
                ...state,
                chat_list: action.payload.chat_list
            };
        case ChatActionType.SEND_MESSAGE:
            const now = Date.now();
            return {
                ...state,
                roominfo: {
                    ...state.roominfo,
                    messages: [...state.roominfo.messages,
                        {
                            text: action?.payload.text,
                            sender: null,
                            timestamp: new Intl.DateTimeFormat('ko-KR', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(now)
                        }

                    ]
                }
            };
        case ChatActionType.SET_MESSAGE_LIST:
            return {
                ...state,
                roominfo: {
                    ...state.roominfo,
                    messages: [...state.roominfo?.messages,
                        ...action?.payload.messages
                    ]
                }
            };
        default:
            return state;
    }
}