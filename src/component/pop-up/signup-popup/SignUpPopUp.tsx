import {useDispatch} from "react-redux";
import {PageActionType} from "@store/page/action";
import {UserActionType} from "@store/user/action";
import React, {useState} from "react";
import LoginPopUp from "@component/pop-up/login-popup/LoginPopUp";
import axios from "axios";
import {REST_BASE_URL} from "@util/Constant";
import PopUp from "@component/pop-up/PopUp";


function SignUpPopUp() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");
    const [name, setName] = useState("");

    const SignUpSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== verifyPassword) {
            alert('패스워드 확인이 일치하지 않습니다.')
            return;
        }

        const loginFetch = await axios.post(REST_BASE_URL + "/user/signup", {
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
        <PopUp classname='sign-up-pop-up'>
            <p className='sign-up-pop-up pop-up-title'>회원가입</p>
            <form onSubmit={SignUpSubmit}>
                <ol className="form-field">
                    <li>아이디 <input type="email" value={email} onChange={OnChangeEmail}/></li>
                    <li>패스워드<input type="password" value={password} onChange={OnChangePassword}/></li>
                    <li>패스워드 확인<input type="password" value={verifyPassword} onChange={OnChangeVerifyPassword}/></li>
                    <li>이름<input type="text" value={name}/></li>
                </ol>
                <div className="sign-up-pop-up button-container">
                    <input type="submit" value="회원가입"/>
                </div>
            </form>
            <input type="button" className="summit-button" value="기존 계정으로 로그인" onClick={OnClickToLogin}/>
        </PopUp>
    );
}

export default SignUpPopUp;