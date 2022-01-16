import * as events from "events";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {PageActionType} from "@store/page/action";

function submit(e: React.FormEvent) {
    alert('summited')
}

function CreateRoomPopUp() {
    const [isPassword, setPassword] = useState(false);
    const dispatch = useDispatch()

    return (
        <div className='createRoomPopUp outer'>
            <div className='createRoomPopUp inner'>
                <div className='createRoomPopUp button-container'>
                    <div className='createRoomPopUp button'
                         onClick={() => dispatch({type: PageActionType.SET_POP_UP, payload: {popUp: null}})}>
                        <span>X</span>
                    </div>
                </div>
                <p className='createRoomPopUp title'>방 만들기</p>
                <form onSubmit={submit}>
                    <ol className='createRoomPopUp form-field'>
                        <li>방 이름</li>
                        <li><input className='createRoomPopup chat_name'/></li>
                        <li>카테고리 분류</li>
                        <li>
                            <select>
                                <option value=''></option>
                                <option value='영화'></option>
                                <option value='드라마'></option>
                                <option value='아이돌'></option>
                            </select>
                        </li>
                        {(isPassword ? (
                            <li>
                                패스워드
                                <input type='password' className='createRoomPopup keyword'/>
                            </li>
                        ) : undefined)}
                        <li>최대 참여 인원 수</li>
                        <li><input type='number' className='createRoomPopup limit'/></li>
                        <li>비밀번호 생성</li>
                        <li>
                            <div onChange={() => setPassword}>
                                <input type='radio' className='createRoomPopup passwordToggle' id='usePassword'
                                       checked={isPassword} onChange={() => setPassword(true)}/>유
                                <input type='radio' className='createRoomPopup passwordToggle' id='notUsePassword'
                                       checked={!isPassword} onChange={() => setPassword(false)}/>무
                            </div>
                        </li>
                    </ol>
                    <div className='createRoomPopUp button-container'>
                        <input type='submit' value='제출' className='createRoomPopUp summit-button'/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateRoomPopUp