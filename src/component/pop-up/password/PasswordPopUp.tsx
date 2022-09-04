import PopUpLayout from "../PopUpLayout";
import React, {useState} from "react";
import socket from "../../../io/socket";
import {useAppDispatch, useAppSelector} from "../../../util/hooks";
import {joinRoom} from "../../../store/action";
import {RootState} from "../../../store";

interface PasswordPopUpProps {
    room_id: string
}

function PasswordPopUp({room_id}: PasswordPopUpProps) {
    const [password, setPassword] = useState<string>("");
    const dispatch = useAppDispatch();
    const user_id = useAppSelector((state: RootState) => state.user.user_id)


    const OnSubmitPassword = (e: React.FormEvent) => {
        e.preventDefault()
        if (user_id)
            socket.emit("joinRoom", {room_id, user_id, password}, ({roominfo, error}) => {
                if (error !== "")
                    alert(error)
                else if (roominfo) dispatch(joinRoom({...roominfo, room_id}))
            })
    }

    return (
        <PopUpLayout className='password-pop-up'>
            <p className='password-pop-up pop-up-title'>비밀번호</p>
            <form onSubmit={OnSubmitPassword}>
                <input type="text" value={password} onChange={() => setPassword}/>
            </form>
        </PopUpLayout>
    )
}

export default PasswordPopUp