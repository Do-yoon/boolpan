import {Chat} from "@store/chat/state";

export enum ChatActionType {
    GET_CHATTING_ROOM_LIST,
    GET_CHATTING_ROOM_INFO,
    SEND_MESSAGE,
    GET_MESSAGE,
    SET_MESSAGE_LIST,
    GET_CHATTING_ROOM_USERS,
    ENTER_THE_ROOM
}

export type ChatAction =
    { type: ChatActionType.GET_CHATTING_ROOM_LIST; payload: GetChattingRoomListPayload }
    | { type: ChatActionType.SEND_MESSAGE; payload: SendMessagePayload }
    | { type: ChatActionType.SET_MESSAGE_LIST; payload: SetMessageListPayload }
    | { type: ChatActionType.ENTER_THE_ROOM; payload: EnterTheRoomPayload }
    | { type: ChatActionType.GET_MESSAGE; payload: GetMessagePayload }

type GetMessagePayload = {
    msg: {
        sender: string | null,
        text: string,
        timestamp: string
    }
}

type SendMessagePayload = {
    text: string
}
type SetMessageListPayload = {
    messages: []
}

type GetChattingRoomListPayload = {
    chat_list: Chat[]
}

type EnterTheRoomPayload = {
    room_id: string,
    category: string,
    limit: number,
    current: number,
    delete_time: Date
}
