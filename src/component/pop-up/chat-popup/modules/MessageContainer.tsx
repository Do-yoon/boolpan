import {useState} from "react";
import Message from "@component/pop-up/chat-popup/modules/Message";
import {useSelector} from "react-redux";
import {RootState} from "@store/index";

interface MessageContainerProps {
    messages: {
        sender: string | null
        text: string
        timestamp: string
    }[]
}

function MessageContainer(props: MessageContainerProps) {
    
    return (
        <div>
            {props.messages!.map((message) =>
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