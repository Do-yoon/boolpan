import {Chat} from "@store/chat/state";

import {action, createAction} from 'typesafe-actions';

export const GetChattingRoomList = createAction('pages/GetChattingRoomList', action => {
    return (chat_list: Chat[]) => action({chat_list});
});

export const SendMesageAction = createAction('SendMesageAction', () => {
    text: string
});

export interface SetMessageListAction {
    type: "SetMessageListAction"
    payload: {
        messages: []
    }
}

export interface EnterRoomAction {
    type: "EnterRoomAction"
    payload: {
        room_id: string
        name: string,
        category: string,
        current: number
        limit: number
        explode_time: number
    }
}

export interface GetMessagesAction {
    type: "GetMessagesAction"
    payload: {
        msg: {
            sender: string | null,
            text: string,
            timestamp: string
        }
    }
}
