import {useDispatch, useSelector} from "react-redux";
import ChattingPopUp from "component/pop-up/chat-popup/ChattingPopUp";
import {RootState} from "store/index";
import socket from "io/socket"
import PageAction from "../../../store/page/action";
import ChatAction from "../../../store/chat/action";
import {REST_BASE_URL} from "../../../util/Constant";
import axios from "axios";

interface RoomBannerProps {
    room_id: string
    name: string
    limit: number
    current: number
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
                    axios.get(`${REST_BASE_URL}/chat/${props.room_id}`)
                        .then((res) => {
                            dispatch(ChatAction.enterTheRoom({
                                ...props,
                                explode_time: res.data.explode_time
                            }))
                            dispatch(PageAction.chattingPopUp())
                        })
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