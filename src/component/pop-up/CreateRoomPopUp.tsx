import React, {useState} from "react";
import {useDispatch} from "react-redux";
import PopUpLayout from "component/pop-up/modules/PopUpLayout";
import socket from "io/socket"
import {chattingPopUp, joinRoom} from "store/action";
import {useAppSelector} from "../../util/hooks";
import {RootState} from "../../store";

function CreateRoomPopUp() {
    const [isPassword, setIsPassword] = useState(false);
    const dispatch = useDispatch()
    const user_id = useAppSelector((state: RootState) => state.user.user_id)
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [limit, setLimit] = useState(1);
    const [password, setPassword] = useState("");
    const [keeping_time, setKeepingTime] = useState<number>(100000);

    const CreateRoomSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const data = {
            name: name,
            category: category,
            limit: limit,
            password: password,
            keeping_time: keeping_time
        }
        if (user_id) {
            socket.emit('createRoom', data, {user_id},
                (e, {room_id, name, limit, current, isPassword}) => {
                console.log(e)
                    if (e !== "") {
                        dispatch(joinRoom({
                            room_id: room_id,
                            current: 1,
                            name: name,
                            limit: limit,
                            explode_time: Date.now() / 1000 + keeping_time
                        }))
                        dispatch(chattingPopUp())
                    } else {
                        alert(e)
                    }
                });
        } else alert("로그인 해 주세요.")
    }

    return (
        <PopUpLayout className='create-room-pop-up'>
            <p className='create-room-pop-up pop-up-title'>방 만들기</p>
            <form onSubmit={CreateRoomSubmit}>
                <ol className='create-room-pop-up form-field'>
                    <li>방 이름</li>
                    <li><input className='create-room-pop-up chat_name' value={name}
                               onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                   setName(e.target.value)
                               }}/></li>
                    <li>카테고리 분류</li>
                    <li>
                        <select className='create-room-pop-up select-category' value={category}
                                onChange={(e) => {
                                    setCategory(e.target.value)
                                }}>
                            <option value='영화' selected={true}></option>
                            <option value='드라마'></option>
                            <option value='아이돌'></option>
                        </select>
                    </li>
                    {(isPassword ? (
                        <li>
                            패스워드
                            <input type='password' className='create-room-pop-up keyword' value={password}
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                       setPassword(e.target.value)
                                   }}/>
                        </li>
                    ) : null)}
                    <li>최대 참여 인원 수</li>
                    <li><input type='number' className='create-room-pop-up limit' value={limit}
                               onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                   setLimit(Number(e.target.value))
                               }}/>
                    </li>
                    <li>비밀번호 생성</li>
                    <li>
                        <div onChange={() => setPassword}>
                            <input type='radio' className='create-room-pop-up passwordToggle' id='usePassword'
                                   checked={isPassword} onChange={() => {
                                setIsPassword(true)
                            }}/>유
                            <input type='radio' className='create-room-pop-up passwordToggle' id='notUsePassword'
                                   checked={!isPassword} onChange={() => {
                                setIsPassword(false)
                            }}/>무
                        </div>
                    </li>
                    <li>
                        <label htmlFor="time-limit-select">유지시간:</label>
                        <div
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setKeepingTime(Number(e.target.value))}>
                            <input id="time-limit-select" type="number" min="1" max="100000" value={keeping_time}
                                   required/></div>
                    </li>
                </ol>
                <div className='create-room-pop-up button-container'>
                    <input type='submit' value='제출' className='create-room-pop-up summit-button'/>
                </div>
            </form>
        </PopUpLayout>
    )
}

export default CreateRoomPopUp;