import {useState} from "react";
import Message from "@component/chat/Message";
import {useSelector} from "react-redux";
import {RootState} from "@store/index";

interface MessageContainerProps {
    messages: {
        sender: number | null
        text: string
    }[]
}

function MessageContainer() {
    const messages = useSelector((state: RootState) => state.chats.roominfo.messages)

    return (
        <div>
            {messages.map((message) =>
                    <Message
                        sender={message.sender}
                        text={message.text}
                        timestamp={message.timestamp}
                    />)
            }
        </div>
    )
}

export default MessageContainer;