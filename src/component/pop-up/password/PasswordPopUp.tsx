import PopUpLayout from "../PopUpLayout";
import React, {useState} from "react";
import socket from "../../../io/socket";
import {useAppDispatch} from "../../../util/hooks";
import {joinRoom} from "../../../store/action";

interface PasswordPopUpProps {
    room_id: string
}

function PasswordPopUp({room_id}: PasswordPopUpProps) {
    const [password, setPassword] = useState<string>("");
    const dispatch = useAppDispatch();

    const OnSubmitPassword = (e: React.FormEvent) => {
        e.preventDefault()
        socket.emit("joinRoom", {room_id, password}, ({roominfo, error}) => {
            if(error !== "")
                alert(error)
            else
                if (roominfo) dispatch(joinRoom({...roominfo, room_id}))
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