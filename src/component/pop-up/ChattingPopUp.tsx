import {ChangeEvent, useEffect, useState} from "react";
import * as queryString from "querystring";
import ChatHeader from "@component/chat/ChatHeader";
import MessageContainer from "@component/chat/MessageContainer";
import ChatInputArea from "@component/chat/ChatInputArea";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@store/index";
import axios from "axios";
import {REST_BASE_URL} from "../../util/Constant";
import {ChatActionType} from "@store/chat/action";

const message = (msg: string, time: Date, sender: string) => {
    return (
        <div>
            <p>{sender}</p>
            <p>{msg}</p>
        </div>
    );
}

function ChattingPopUp() {
    const room = useSelector((state: RootState) => state.chats.roominfo)
    const user = useSelector((state: RootState) => state.users.userinfo.id)
    // input message onchange state
    console.log(`user: ${user}`)
    const ENDPOINT = REST_BASE_URL+`/sendMessage/${room}?${user?.valueOf()}`;
    const dispatch = useDispatch()


    useEffect(() => {
        axios.post(ENDPOINT, {message: {text: message, sender: user, room: room}}).then(
            (res) => dispatch({type: ChatActionType.SEND_MESSAGE, payload: {text: message}})
            // (res) => setMessages([...messages, {sender: user, text: message}])
        )
    })

    useEffect(() => {
        axios.get(ENDPOINT).then(
            (res) => dispatch({type: ChatActionType.SET_MESSAGE_LIST, payload: {messages: res.data.messages}})
            // setMessages([...messages, res.data.messages])
        )
    }, [])

    return (
        <div className='outerContainer'>
            <div className='container'>
                <ChatHeader/>
                <MessageContainer/>
            </div>
            <ChatInputArea/>
        </div>
    );
}

export default ChattingPopUp;