import "../css/Message.css"

interface MessageProps {
    sender: string | null
    text: string
    timestamp: string
}

interface MessageContainerProps {
    sender: string | null
    text: string
    timestamp: string
    children: React.ReactNode
}

function ReceivedMessage({sender, timestamp, children}: MessageContainerProps) {
    return (
        <div className="message">
            <div className="message receive messageContainer">
                <p className="message receive sender-area">{sender}</p>
                {children}
            </div>
            <p className="message receive timestamp">{timestamp}</p>
        </div>
    );
}

function SentMessage({sender, timestamp, children}: MessageContainerProps) {

    return (
        <div className="message">
            <p className="message send timestamp">{timestamp}</p>
            <div className="message send messageContainer">
                <p className="message send sender-area">{sender}</p>
                {children}
            </div>
        </div>
    );
}

function Message(props: MessageProps) {
    const {sender, text} = props
    const messageType = props.sender ? "receive" : "send;";
    const MessageContainer = sender ? ReceivedMessage : SentMessage

    return (
        <MessageContainer {...props}>
            <div>
                <p className={messageType}>{text}</p>
            </div>
        </MessageContainer>
    );

}

export default Message;