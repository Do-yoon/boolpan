import "../css/Message.css"

function TextContainer({className, text}: { className: string, text: string }) {
    return (
        <div>
            <p className={className}>{text}</p>
        </div>
    );
}

function Message({sender, text, timestamp}: { sender: string | null, text: string, timestamp: string }) {
    const res = sender
        ? (
            <div className="message">
                <div className="message receive messageContainer">
                    <p className="message receive sender-area">{sender}</p>
                    <TextContainer className="message receive text-area" text={text}></TextContainer>
                </div>
                <p className="message receive timestamp">{timestamp}</p>
            </div>
        )
        : (
            <div className="message">
                <p className="message send timestamp">{timestamp}</p>
                <div className="message send messageContainer">
                    <p className="message send sender-area">{sender}</p>
                    <TextContainer className="message send text-area" text={text}></TextContainer>
                </div>
            </div>
        )
    return res

}

export default Message;