import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@store/index";
import {useEffect, useState} from "react";

function ChatHeader() {
    const roominfo = useSelector((state: RootState) => state.chats.roominfo)
    const end_time = useSelector((state: RootState) => state.chats.roominfo.end_time)
    const timer = new Date(end_time).getHours();

    return <div className="roominfo">
        <span className="roominfo name">{roominfo.name}</span>
        <span className="roominfo current">{`(${roominfo.current} / ${roominfo.limit}) ${timer}`}</span>
    </div>;
}

export default ChatHeader;
