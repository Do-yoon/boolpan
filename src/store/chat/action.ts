import {Chat} from "@store/chat/state";

export enum ChatActionType {
    GET_CHATTING_ROOM_LIST,
    GET_CHATTING_ROOM_INFO,
    SEND_MESSAGE,
    GET_CHATTING_ROOM_USERS
}

export type ChatAction =
    { type: ChatActionType.GET_CHATTING_ROOM_LIST; payload: GetChattingRoomListPayload}
    | { type: ChatActionType.SEND_MESSAGE; payload: SendMessagePayload}


type SendMessagePayload = {
    message: string
}

type GetChattingRoomListPayload = {
    chat_list: Chat[]
}