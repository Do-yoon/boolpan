import React, {useEffect, useState} from "react";
import {RootState} from "store";
import {REST_BASE_URL} from "util/Constant";
import socket from "io/socket"
import {useAppDispatch, useAppSelector} from "util/hooks";
import Message from "./modules/Message";
import {sendMessage} from "store/action";

const ENDPOINT = REST_BASE_URL // + '/chatRoom/room' // +`/sendMessage/${room}?user=${user}`;

function Timer() {
    // initialize timeLeft with the seconds prop
    const explode_time = useAppSelector((state: RootState) => state.chat.roominfo!.explode_time)
    const [timeLeft, setTimeLeft] = useState(Number(explode_time - (Date.now() / 1000)));
    const date = new Date(timeLeft);
    const [hours, setHours] = useState(("0" + date.getHours()).slice(-2));
    const [minutes, setMinutes] = useState(("0" + date.getMinutes()).slice(-2));
    const [seconds, setSeconds] = useState(("0" + date.getSeconds()).slice(-2));

    useEffect(() => {
        // exit early when we reach 0
        if (!timeLeft) return;

        // save intervalId to clear the interval when the
        // component re-renders
        function tick() {
            setTimeLeft(timeLeft - 1);
            setHours(("0" + date.getHours()).slice(-2));
            setMinutes(("0" + date.getMinutes()).slice(-2));
            setSeconds(("0" + date.getSeconds()).slice(-2));
            console.log()
        }

        const intervalId = setInterval(() => {
            tick()
        }, 1000);

        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
    }, [timeLeft, hours, minutes, seconds]);

    return (
        <span>{`${hours}:${minutes}:${seconds}`}</span>
    );
};

function ChattingPopUp() {
    const [messages, setMessages] = useState<JSX.Element[]>([])
    const [message, setMessage] = useState('')
    const dispatch = useAppDispatch()
    const room_id = useAppSelector((state: RootState) => state.chat.roominfo?.room_id)
    const user_id = useAppSelector((state: RootState) => state.user.user_id)
    const {name, current, limit}
        = useAppSelector((state: RootState) => state.chat.roominfo!)


    const OnSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.length && room_id && user_id) {
            socket.emit('sendMessage', {text: message, room_id: room_id, user_id: user_id});
            dispatch(sendMessage(message));
            setMessage('')
        }
    }

    useEffect(() => {
        socket.on('getMessage', ({message}) => {
            console.log(message.text)
            const temp = [...messages, <Message {...message}/>]
            setMessages(temp)
        });
    })

    useEffect(() => {
        socket.on('deleteRoom', (msg: string) => {
            alert(msg)
        })
    })

    const OnChange = (e: any) => {
        setMessage(e.target.value)
    }

    return (
        <div className='chat outerContainer'>
            <div className='chat container'>
                {/* 채팅 헤더 */}
                <div className="roominfo">
                    <span className="roominfo name">{name}</span>
                    <span className="roominfo current">{`(${current} / ${limit})`}</span>
                    <Timer/>
                </div>
                {/* 채팅 컨테이너 */}
                <div>
                    {messages}
                </div>
            </div>
            {/* 채팅 입력 부분 */}
            <div>
                <form onSubmit={OnSubmit}>
                    <input className="chat input-area" type="text" value={message} onChange={OnChange}/>
                    <input className="chat input-submit" type="submit"/>
                </form>
            </div>
        </div>
    );
}

export default ChattingPopUp;
