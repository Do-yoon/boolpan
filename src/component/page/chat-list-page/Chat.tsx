import {useDispatch, useSelector} from "react-redux";
import {RootState} from "store/index";
import socket from "io/socket"
import {REST_BASE_URL} from "../../../util/Constant";
import axios from "axios";
import {chattingPopUp, joinRoom} from "store/action";

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
    const isLoggedIn = !!useSelector((state: RootState) => state.user.name);
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
                            dispatch(joinRoom({
                                ...props,
                                explode_time: res.data.explode_time
                            }))
                            dispatch(chattingPopUp())
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