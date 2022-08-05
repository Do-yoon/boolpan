//import {connector, PropsFromRedux} from '@store/state'

import {ReactNode} from "react";
import {useDispatch, useSelector} from "react-redux";
import {PageActionType} from "@store/page/action";
import ChattingPopUp from "@component/pop-up/ChattingPopUp";
import {UserActionType} from "@store/user/action";
import {RootState} from "@store/index";
import {ChatActionType} from "@store/chat/action";
import socket from "../io/socket"

interface RoomBannerProps {
    name: string
    limit: number
    current: number
    room_id: string
}

function Chat(
    props: RoomBannerProps
): (JSX.Element | null) {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state: RootState) => state.users.isLoggedIn);
    const OnClickBanner = () => {
        if (isLoggedIn.valueOf()) {
            socket.emit("join-room", props.room_id, (error: string, data: {
                keeping_time: number
            }) => {
                console.log(props.room_id)
                if (error !== "")
                    alert(error)
                else {
                    dispatch({
                        type: ChatActionType.ENTER_THE_ROOM, payload: {
                            room_id: props.room_id
                        }
                    })
                    dispatch({type: PageActionType.SET_POP_UP, payload: {popUp: <ChattingPopUp/>}})
                }
            })
        } else {
            alert('로그인 해 주세요.')
        }
    }

    return (
        <button onClick={OnClickBanner}>
            <div className="room-banner">
                <span className="name">제목: {props.name}</span>
                <span className="limit">정원: {props.current} / {props.limit}</span>
            </div>
        </button>
    );
}


export default Chat;