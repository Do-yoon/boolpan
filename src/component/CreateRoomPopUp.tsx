import * as events from "events";
import React from "react";

let isPassword: boolean = false

function setPassword(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.id === 'usePassword')
        isPassword = true
    else
        isPassword = false
}

function submit(e: React.FormEvent) {
    alert('summited')
}

function CreateRoomPopUp() {
    return (
        <div className='createRoomPopUp'>
            <div className='createRoomPopUp outer'>
                <div className='createRoomPopUp inner'>
                    <form onSubmit={submit}>
                        <ol>
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
                            <li>패스워드</li>
                            <li><input type='password' className='createRoomPopup keyword'/></li>
                            <li>최대 참여 인원 수</li>
                            <li><input type='number' className='createRoomPopup limit'/></li>
                            <li>비밀번호 생성</li>
                            <li><input type='radio' className='createRoomPopup passwordToggle' id='usePassword'
                                       checked={isPassword} onChange={setPassword}/>유
                            </li>
                            <li><input type='radio' className='createRoomPopup passwordToggle' id='notUsePassword'
                                       checked={isPassword}/>무
                            </li>
                        </ol>
                        <input type='submit' value='제출'/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateRoomPopUp