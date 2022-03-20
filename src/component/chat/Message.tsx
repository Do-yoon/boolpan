function TextContainer({text}: {text: string}) {
    return (
        <div>
            <p>{text}</p>
        </div>
    );
}
function Message({sender, text, timestamp}: {sender: string | null, text: string, timestamp: string}) {

    return (
        <div className="message">
            <p>{sender}</p>
            <TextContainer text={text}></TextContainer>
            <p>{timestamp}</p>
        </div>
    )

}

export default Message;