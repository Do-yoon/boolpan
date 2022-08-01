import React, {ChangeEvent, useEffect, useState} from "react";
import * as queryString from "querystring";
import ChatHeader from "@component/chat/ChatHeader";
import MessageContainer from "@component/chat/MessageContainer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@store/index";
import axios from "axios";
import {CHAT_SERVER_BASE_URL, REST_BASE_URL} from "../../util/Constant";
import {ChatActionType} from "@store/chat/action";
import socketClient, {io, Socket} from "socket.io-client";

const ENDPOINT = REST_BASE_URL // + '/chatRoom/room' // +`/sendMessage/${room}?user=${user}`;

function ChatInputArea({socket}: {socket: Socket}) {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const room_id = useSelector((state: RootState) => state.chats.roominfo.room_id)

    const OnSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(`OnSubmit`);
        console.log(socket.connected)

        if (message.length) {
            socket.emit('sendMessage', {msg: message, room_id: room_id});
            dispatch({type: ChatActionType.SEND_MESSAGE, payload: {text: message}});
            setMessage('')
        }
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

function getTimestampString() {
    const now = new Date();
    let hours = now.getHours();
    const noon = ((hours / 12) == 0) ? '오전' : '오후';
    hours = (hours > 12) ? hours % 12 : hours;

    const minutes = now.getMinutes();
    const zero = minutes < 10 ? '0' : ''
    return `${noon} ${hours}:${zero}${minutes}`;
}

function ChattingPopUp({socket}: {socket?: Socket}) {
    const room = useSelector((state: RootState) => state.chats.roominfo!.room_id)
    const user = useSelector((state: RootState) => state.users.userinfo.id)
    // input message onchange state
    console.log(`user: ${typeof user}`)
    console.log(`room: ${typeof room}`)
    socket = (!socket
        ? io("http://localhost:8081", {
        // withCredentials: true,
        transports: ['websocket']
        })
        : socket)

    const dispatch = useDispatch();

    console.log(socket.connected)
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

    return (
        <div className='chat outerContainer'>
            <div className='chat container'>
                <ChatHeader/>
                <MessageContainer/>
            </div>
            <ChatInputArea socket={socket}/>
        </div>
    );
}

export default ChattingPopUp;
