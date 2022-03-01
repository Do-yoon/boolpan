import {useDispatch} from "react-redux";
import {PageActionType} from "@store/page/action";
import {UserActionType} from "@store/user/action";
import React, {useState} from "react";
import LoginPopUp from "@component/pop-up/LoginPopUp";
import axios from "axios";


function SignUpPopUp() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");

    const SignUpSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== verifyPassword) {
            alert('패스워드 확인이 일치하지 않습니다.')
            return;
        }

        const loginFetch = await axios.post("http://localhost:8081/v0/user/signup", {
            userinfo: {
                email: email,
                password: password
            }
        });
        const data = loginFetch.data
        console.log(data)
        if (data) {
            alert('회원가입이 완료되었습니다.')
            dispatch({type: PageActionType.SET_POP_UP, payload: {popUp: <LoginPopUp/>}})
        } else {
            alert('아이디가 이미 존재합니다.')
        }

    }

    const OnClickToLogin = (e: React.MouseEvent) => {
        dispatch({type: PageActionType.SET_POP_UP, payload: {popUp: <LoginPopUp/>}})
    }

    const OnChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        //console.log(e.target.value)
        setEmail(e.target.value)
    }

    const OnChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        //console.log(e.target.value)
        setPassword(e.target.value)
    }

    const OnChangeVerifyPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        //console.log(e.target.value)
        setVerifyPassword(e.target.value)
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
                        <li>아이디 <input type="email" value={email} onChange={OnChangeEmail}/></li>
                        <li>패스워드<input type="password" value={password} onChange={OnChangePassword}/></li>
                        <li>패스워드 확인<input type="password" value={verifyPassword} onChange={OnChangeVerifyPassword}/>
                        </li>
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