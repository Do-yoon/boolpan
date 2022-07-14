import * as events from "events";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {PageActionType} from "@store/page/action";
import axios from "axios";
import {UserActionType} from "@store/user/action";
import ChattingPopUp from "@component/pop-up/ChattingPopUp";
import {REST_BASE_URL} from "../../util/Constant";
import {ChatActionType} from "@store/chat/action";
import PopUp from "@component/pop-up/PopUp";


function CreateRoomPopUp() {
    const [isPassword, setIsPassword] = useState(false);
    const dispatch = useDispatch()
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [limit, setLimit] = useState(1);
    const [password, setPassword] = useState("");

    const CreateRoomSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // console.log(typeof email);
        // console.log(email);
        const createRoomFetch = await axios.post(REST_BASE_URL + "/chat/createRoom", {
            roominfo: {
                name: name,
                category: category,
                limit: limit,
                password: password
            }
        });

        const data = createRoomFetch.data;
        console.log(`data: ${data.name}`)
        if (data) {
            dispatch({
                type: ChatActionType.ENTER_THE_ROOM,
                payload: {name: name, category: category, limit: limit, room_id: data.room_id, end_time: data.end_time}
            })
            dispatch({type: PageActionType.SET_POP_UP, payload: {popUp: <ChattingPopUp/>}})
        } else {
            alert('유효하지 않습니다.')
        }
    }

    return (
        <PopUp classname='createRoomPopUp'>
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
                               onChange={(e: any) => setLimit(e.target.value)}/></li>
                    <li>비밀번호 생성</li>
                    <li>
                        <div onChange={() => setPassword}>
                            <input type='radio' className='createRoomPopup passwordToggle' id='usePassword'
                                   checked={isPassword} onChange={() => setIsPassword(true)}/>유
                            <input type='radio' className='createRoomPopup passwordToggle' id='notUsePassword'
                                   checked={!isPassword} onChange={() => setIsPassword(false)}/>무
                        </div>
                    </li>
                </ol>
                <div className='createRoomPopUp button-container'>
                    <input type='submit' value='제출' className='createRoomPopUp summit-button'/>
                </div>
            </form>
        </PopUp>
    )
}

export default CreateRoomPopUp;