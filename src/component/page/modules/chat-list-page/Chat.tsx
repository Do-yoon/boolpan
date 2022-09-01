import {RootState} from "store";
import socket from "io/socket"
import {REST_BASE_URL} from "util/Constant";
import axios from "axios";
import {chattingPopUp, joinRoom, passwordPopUp} from "store/action";
import {useAppDispatch, useAppSelector} from "../../../../util/hooks";

interface RoomBannerProps {
    room_id: string
    name: string
    limit: number
    current: number
    isPassword: boolean
}

function Chat(
    {room_id, name, limit, current, isPassword}: RoomBannerProps
): (JSX.Element | null) {
    const dispatch = useAppDispatch()
    const isLoggedIn = !!useAppSelector((state: RootState) => state.user.name);
    const OnClickBanner = () => {
        if (isLoggedIn.valueOf() && !isPassword) {
            socket.emit("joinRoom", {room_id}, (data, error) => {
                if (error !== "")
                    alert(error)
                else {
                    axios.get(`${REST_BASE_URL}/chat/${room_id}`)
                        .then((res) => {
                            dispatch(joinRoom({
                                room_id,
                                name,
                                limit,
                                current,
                                explode_time: res.data.explode_time
                            }))
                            dispatch(chattingPopUp())
                        })
                }
            })
        } else if (isPassword) {
            dispatch(passwordPopUp({room_id}))
        } else {
            alert('로그인 해 주세요.')
        }
    }

    return (
        <button onClick={OnClickBanner}>
            <div className="room-banner">
                <span className="name">제목: {name}</span>
                <span className="limit">정원: {current} / {limit}</span>
            </div>
        </button>
    );
}


export default Chat;