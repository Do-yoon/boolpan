import {RootState} from "store";
import socket from "io/socket"
import {chattingPopUp, joinRoom, passwordPopUp} from "store/action";
import {useAppDispatch, useAppSelector} from "util/hooks";

export interface ChatBannerProps {
    room_id: string
    name: string
    limit: number
    current?: number
    isPassword: boolean
}

function ChatBanner(
    {room_id, name, limit, current, isPassword}: ChatBannerProps
): (JSX.Element | null) {
    const dispatch = useAppDispatch()
    const isLoggedIn = !!useAppSelector((state: RootState) => state.user.name);
    const OnClickBanner = () => {
        if (isLoggedIn.valueOf() && !isPassword) {
            socket.emit("joinRoom", {room_id}, ({roominfo, error}) => {
                if (roominfo && current) {
                    dispatch(joinRoom({
                        room_id,
                        name,
                        limit,
                        current,
                        explode_time: roominfo.explode_time
                    }))
                    dispatch(chattingPopUp())
                } else alert(error)
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


export default ChatBanner;