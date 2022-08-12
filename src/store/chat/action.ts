import {Chat, Message} from "@store/chat/type";
import {createActions} from "redux-actions"

export const {
    getChattingRoomList,
    sendMessage,
    getMessages,
    getMessage,
    enterRoom
} = createActions({
    GetChattingRoomList: (chat_list: Chat[]) => ({chat_list}),
    SendMessage: (text: string) => ({ text }),
    GetMessages: (messages: Message[]) => ({messages}),
    GetMessage: (message: {
        sender: string | null,
        text: string,
        timestamp: string
    }) => ({message}),
    EnterRoom: (roominfo: {
        room_id: string,
        name: string,
        category: string,
        current: number,
        limit: number,
        explode_time: number
    }) => ({data})
})