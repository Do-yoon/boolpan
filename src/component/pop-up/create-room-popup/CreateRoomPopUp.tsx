import React, {useState} from "react";
import {useDispatch} from "react-redux";
import PopUpLayout from "component/pop-up/PopUpLayout";
import socket from "io/socket"
import {chattingPopUp, joinRoom} from "store/action";

function CreateRoomPopUp() {
    const [isPassword, setIsPassword] = useState(false);
    const dispatch = useDispatch()
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [limit, setLimit] = useState(1);
    const [password, setPassword] = useState("");
    const [keeping_time, setKeepingTime] = useState(0);

    const CreateRoomSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const data = {
            name: name,
            category: category,
            limit: limit,
            password: password,
            keeping_time: keeping_time
        }
        console.log(keeping_time)

        socket.emit('createRoom', data,
            /* acknowledgements */
            (e, data) => {
                if (!e) {
                    dispatch(joinRoom({
                        room_id: data.room_id,
                        current: 1,
                        name: name,
                        limit: limit,
                        explode_time: Date.now() / 1000 + keeping_time
                    }))
                    dispatch(chattingPopUp())
                } else {
                    alert("방 이름이 중복되었습니다.")
                }
            });
    }

    return (
        <PopUpLayout className='createRoomPopUp'>
            <p className='createRoomPopUp pop-up-title'>방 만들기</p>
            <form onSubmit={CreateRoomSubmit}>
                <ol className='createRoomPopUp form-field'>
                    <li>방 이름</li>
                    <li><input className='createRoomPopup chat_name' value={name}
                               onChange={(e) => setName(e.target.value)}/></li>
                    <li>카테고리 분류</li>
                    <li>
                        <select className='createRoomPopup select-category'
                                onChange={(e) => setCategory(e.target.value)}>
                            <option value=''></option>
                            <option value='영화'></option>
                            <option value='드라마'></option>
                            <option value='아이돌'></option>
                        </select>
                    </li>
                    {(isPassword ? (
                        <li>
                            패스워드
                            <input type='password' className='createRoomPopup keyword' value={password}
                                   onChange={(e) => setPassword(e.target.value)}/>
                        </li>
                    ) : undefined)}
                    <li>최대 참여 인원 수</li>
                    <li><input type='number' className='createRoomPopup limit' value={limit}
                               onChange={(e: any) => setLimit(e.target.value)}/>
                    </li>
                    <li>비밀번호 생성</li>
                    <li>
                        <div onChange={() => setPassword}>
                            <input type='radio' className='createRoomPopup passwordToggle' id='usePassword'
                                   checked={isPassword} onChange={() => setIsPassword(true)}/>유
                            <input type='radio' className='createRoomPopup passwordToggle' id='notUsePassword'
                                   checked={!isPassword} onChange={() => setIsPassword(false)}/>무
                        </div>
                    </li>
                    <li>
                        <label htmlFor="time-limit-select">유지시간:</label>
                        <div onChange={() => setKeepingTime}>
                            <input id="time-limit-select" type="number" min="1" max="100000" required/></div>
                    </li>
                </ol>
                <div className='createRoomPopUp button-container'>
                    <input type='submit' value='제출' className='createRoomPopUp summit-button'/>
                </div>
            </form>
        </PopUpLayout>
    )
}

export default CreateRoomPopUp;