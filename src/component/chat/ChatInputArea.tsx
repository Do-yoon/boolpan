import react, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@store/index";
import React from "react";
import {ChatActionType} from "@store/chat/action";


function ChatInputArea() {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const OnSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('')
        dispatch({type: ChatActionType.SEND_MESSAGE, payload: {text: message}});
    }
    const OnChange = (e: any) => {
        setMessage(e.target.value)
    }

    return <div>
        <form onSubmit={OnSubmit}>
            <input type="text" value={message} onChange={OnChange} />
            <input type="submit"/>
        </form>
    </div>
}

export default ChatInputArea;