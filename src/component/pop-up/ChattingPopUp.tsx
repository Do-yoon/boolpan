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

const ENDPOINT = REST_BASE_URL // + '/chatRoom/room' // +`/sendMessage/${room}?user=${user}`;
const socket = io("http://localhost:8081", {
    // withCredentials: true,
    transports: ['websocket']
});


const message = (msg: string, time: Date, sender: string) => {
    return (
        <div>
            <p>{sender}</p>
            <p>{msg}</p>
        </div>
    );
}


function ChatInputArea() {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    const OnSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(`OnSubmit`);
        console.log(socket.connected)
        socket.emit('chatMessage', message);

        if (message.length > 0) {
            setMessage('')
            dispatch({type: ChatActionType.SEND_MESSAGE, payload: {text: message}});
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

function ChattingPopUp() {
    const room = useSelector((state: RootState) => state.chats.roominfo.room_id)
    const user = useSelector((state: RootState) => state.users.userinfo.id)
    // input message onchange state
    console.log(`user: ${typeof user}`)

    const dispatch = useDispatch();


    socket.on('message', (msg: any) => {
        console.log(msg)
        dispatch({
            type: ChatActionType.GET_MESSAGE, payload: {
                msg: {
                    sender: "익명",
                    text: msg,
                    timestamp: getTimestampString()
                }
            }
        })
    });

    /*

            useEffect(() => {
                axios.get(ENDPOINT).then(
                    (res) => dispatch({type: ChatActionType.SET_MESSAGE_LIST, payload: {messages: res.data.messages}})
                    // setMessages([...messages, res.data.messages])
                )
            }, [])
         */
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
