import React, {ChangeEvent, useEffect, useState} from "react";
import * as queryString from "querystring";
import ChatHeader from "@component/chat/ChatHeader";
import MessageContainer from "@component/chat/MessageContainer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@store/index";
import axios from "axios";
import {CHAT_SERVER_BASE_URL, REST_BASE_URL} from "../../util/Constant";
import {ChatActionType} from "@store/chat/action";
import socketClient, {io} from "socket.io-client";
import socket from "../../io/socket"
import {useAppDispatch, useAppSelector, useIOEffect} from "@util/hooks";
import {getTimestampString} from "@util/getTimestamp";

const ENDPOINT = REST_BASE_URL // + '/chatRoom/room' // +`/sendMessage/${room}?user=${user}`;

function ChatInputArea() {
    const [message, setMessage] = useState('')
    const dispatch = useAppDispatch()
    const room_id = useAppSelector((state: RootState) => state.chats.roominfo.room_id)

    const OnSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(`OnSubmit`);
        console.log(socket.connected)

        useIOEffect(() => {
            if (message.length) {
                socket.emit('sendMessage', {msg: message, room_id: room_id});
                dispatch({type: ChatActionType.SEND_MESSAGE, payload: {text: message}});
                setMessage('')
            }
        }, 'sendMessage');
    }
    const OnChange = (e: any) => {
        setMessage(e.target.value)
    }

    return <div>
        <form onSubmit={OnSubmit}>
            <input className="chat input-area" type="text" value={message} onChange={OnChange}/>
            <input className="chat input-submit" type="submit"/>
        </form>
    </div>
}



function ChattingPopUp() {
    const room = useAppSelector((state: RootState) => state.chats.roominfo.room_id)
    const user = useAppSelector((state: RootState) => state.users.userinfo.id)
    // input message onchange state
    console.log(`user: ${typeof user}`)
    console.log(`room: ${typeof room}`)

    const dispatch = useAppDispatch();
    useIOEffect(() => {
        socket.on('getMessage', (sender: number, msg: string) => {
            console.log(msg)
            dispatch({
                type: ChatActionType.GET_MESSAGE, payload: {
                    msg: {
                        sender: `익명${sender}`,
                        text: msg,
                        timestamp: getTimestampString()
                    }
                }
            })
        });
    }, 'getMessage')

    useEffect(() => {
        socket.on('delete-room', (msg) => {
            alert(msg)
        })
    })

    return (
        <div className='chat outerContainer'>
            <div className='chat container'>
                <ChatHeader/>
                <MessageContainer/>
            </div>
            <ChatInputArea/>
        </div>
    );
}

export default ChattingPopUp;
