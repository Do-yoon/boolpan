export enum ChatActionType {
    GET_CHATTING_ROOM_LIST,
    GET_CHATTING_ROOM_INFO,
    SEND_MESSAGE,
    GET_CHATTING_ROOM_USERS
}

export type ChatAction =
    { type: ChatActionType.GET_CHATTING_ROOM_LIST}
    | { type: ChatActionType.SEND_MESSAGE; payload: SendMessagePayload}

interface Chats {
    id: number
    name: string
    limit: number
    current: number
}

interface GetChattingRoomListPayload {
    chat_list: Chats[]
}

interface SendMessagePayload {
    message: string
}