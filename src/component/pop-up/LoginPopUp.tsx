import {useDispatch} from "react-redux";
import {PageActionType} from "@store/page/action";
import {UserActionType} from "@store/user/action";
import React, {useState} from "react";
import axios from "axios";
import SignUpPopUp from "@component/pop-up/SignUpPopUp";



function LoginPopUp() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const LoginSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const loginFetch = await axios.post("http://3.37.61.56:8081/v0/user/login", {
            userinfo: {
                email: email,
                password: password
            }
        });
        // console.log(typeof email);
        // console.log(email);
        const data = loginFetch.data
        console.log(data)
        if (data) {
            dispatch({type: UserActionType.LOGIN, payload: {data}})
            dispatch({type: PageActionType.SET_POP_UP, payload: {popUp: null}})
        } else {
            alert('유효하지 않습니다.')
        }
    }

    const OnChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        //console.log(e.target.value)
        setEmail(e.target.value)
    }

    const OnChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        //console.log(e.target.value)
        setPassword(e.target.value)
    }

    const OnClickSignUp = (e: React.MouseEvent) => {
        dispatch({type: PageActionType.SET_POP_UP, payload: {popUp: <SignUpPopUp/>}})
    }

    return (
        <div className="login-pop-up outer">
            <div className="login-pop-up inner">
                <div className="login-pop-up close-pop-up-button-container">
                    <div className='login-pop-up close-pop-up-button'
                         onClick={() => dispatch({type: PageActionType.SET_POP_UP, payload: {popUp: null}})}>
                        <span>X</span>
                    </div>
                </div>
                <p className='login-pop-up pop-up-title'>로그인</p>
                <form onSubmit={LoginSubmit}>
                    <ol className="form-field">
                        <li>아이디 <input type="email" value={email} onChange={OnChangeEmail}/></li>
                        <li>패스워드<input type="password" value={password} onChange={OnChangePassword}/></li>
                    </ol>
                    <div className="login-pop-up button-container">
                        <input type="submit" className="summit-button" value="로그인"/>

                    </div>
                </form>
                <input type="button" value="회원가입" onClick={OnClickSignUp} />
            </div>
        </div>
    );
}

export default LoginPopUp;