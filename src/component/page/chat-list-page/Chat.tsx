import {useDispatch, useSelector} from "react-redux";
import ChattingPopUp from "component/pop-up/chat-popup/ChattingPopUp";
import {RootState} from "store/index";
import socket from "io/socket"

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
                        type: "ENTER_THE_ROOM", payload: {
                            room_id: props.room_id
                        }
                    })
                    dispatch({type: "CHATTING_POP_UP", payload: {popUp: <ChattingPopUp/>}})
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