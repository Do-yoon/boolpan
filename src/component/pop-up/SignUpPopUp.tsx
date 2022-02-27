import {useDispatch} from "react-redux";
import {PageActionType} from "@store/page/action";
import {UserActionType} from "@store/user/action";
import React from "react";
import LoginPopUp from "@component/pop-up/LoginPopUp";
import axios from "axios";


function SignUpPopUp() {
    const dispatch = useDispatch();
    const SignUpSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const loginFetch = await axios.post("http://localhost:8080/v0/user/signup", {
            userinfo: {
                email: "aaa@aaa.a",
                password: "aa111"
            }
        });
        const data = loginFetch.data
        console.log(data)
        alert('회원가입이 완료되었습니다.')
        dispatch({type: PageActionType.SET_POP_UP, payload: {popUp: <LoginPopUp/>}})
    }

    const OnClickToLogin = (e: React.MouseEvent) => {
        dispatch({type: PageActionType.SET_POP_UP, payload: {popUp: <LoginPopUp/>}})
    }

    return (
        <div className="sign-up-pop-up outer">
            <div className="sign-up-pop-up inner">
                <div className="sign-up-pop-up close-pop-up-button-container">
                    <div className="sign-up-pop-up close-pop-up-button"
                         onClick={() => dispatch({type: PageActionType.SET_POP_UP, payload: {popUp: null}})}>
                        <span>X</span>
                    </div>
                </div>
                <p className='sign-up-pop-up pop-up-title'>회원가입</p>
                <form onSubmit={SignUpSubmit}>
                    <ol className="form-field">
                        <li>아이디 <input type="email"/></li>
                        <li>패스워드<input type="password"/></li>
                        <li>패스워드 확인<input type="password"/></li>
                    </ol>
                    <div className="sign-up-pop-up button-container">
                        <input type="submit" value="회원가입"/>
                    </div>
                </form>
                <input type="button" className="summit-button" value="기존 계정으로 로그인" onClick={OnClickToLogin}/>
            </div>
        </div>
    );
}

export default SignUpPopUp;