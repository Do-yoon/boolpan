import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@store/index";
import {useEffect, useState} from "react";
import {useAppSelector, useIOEffect} from "@util/hooks";
import {getTimer} from "@util/getTimestamp";

function ChatHeader() {
    const {name, current, limit, explode_time}
        = useAppSelector((state: RootState) => state.chats.roominfo)
    const [timer, setTimer] = useState(getTimer(explode_time));

    useEffect(() => {
        setTimeout(()=> {
            setTimer(timer-1000);
        }, 1000)
    }, [])

    return <div className="roominfo">
        <span className="roominfo name">{name}</span>
        <span className="roominfo current">{`(${current} / ${limit}) ${timer}`}</span>
    </div>;
}

export default ChatHeader;
