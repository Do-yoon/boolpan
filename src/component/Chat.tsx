//import {connector, PropsFromRedux} from '@store/state'

import {ReactNode} from "react";
import {useDispatch, useSelector} from "react-redux";
import {PageActionType} from "@store/page/action";
import ChattingPopUp from "@component/pop-up/ChattingPopUp";
import {UserActionType} from "@store/user/action";
import {RootState} from "@store/index";

interface RoomBannerProps {
    id: number
    name: string
    limit: number
    current: number
}

function Chat(
    data: RoomBannerProps
): (JSX.Element | null) {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state: RootState) => state.users.isLoggedIn );
    const OnClickBanner = () => {
        if (isLoggedIn.valueOf()) {
            dispatch({type: PageActionType.SET_POP_UP, payload: {popUp: <ChattingPopUp/>}})
        } else {
            alert('로그인 해 주세요.')
        }
    }

    return (
        <button onClick={OnClickBanner}>
            <div className="room-banner">
                <span className="name">제목: {data.name}</span>
                <span className="limit">정원: {data.current} / {data.limit}</span>
            </div>
        </button>
    );
}



export default Chat;