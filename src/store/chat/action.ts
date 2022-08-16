import {Chat, Message} from "store/chat/type";
import {createActions} from "redux-actions"

const ChatActions = createActions({
    GET_CHATTING_ROOM_LIST: (chat_list: Chat[]) => ({chat_list}),
    SEND_MESSAGE: (text: string) => {
        const now = new Date();
        let hours = now.getHours();
        const noon = ((hours / 12) == 0) ? '오전' : '오후';
        hours = (hours > 12) ? hours % 12 : hours;

        const minutes = now.getMinutes();
        const zero = minutes < 10 ? '0' : ''

        const timestamp = `${noon} ${hours}:${zero}${minutes}`
        return {
            roominfo: {
                messages: [{
                    sender: null,
                    text: text,
                    timestamp: timestamp
                }]
            }
        }
    },
    GET_NEW_MESSAGE: (message: {
        sender: string,
        text: string,
        timestamp: string
    }) => ({
        roominfo: {
            messages: [message]
        }
    }),
    ENTER_ROOM: (roominfo: {
        room_id: string,
        name: string,
        category: string,
        current: number,
        limit: number,
        explode_time: number
    }) => ({roominfo}),
    EXIT_THE_ROOM: () => ({}),
})

export default ChatActions