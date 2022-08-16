import {useDispatch} from "react-redux";
import React, {useState} from "react";
import axios from "axios";
import SignUpPopUp from "component/pop-up/signup-popup/SignUpPopUp";
import {REST_BASE_URL} from "util/Constant";
import PopUp from "component/pop-up/PopUp";


function LoginPopUp() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const LoginSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const loginFetch = await axios.post(REST_BASE_URL + "/user/login", {
            userinfo: {
                email: email,
                password: password
            }
        });
        // console.log(typeof email);
        // console.log(email);
        const data = loginFetch.data
        console.log(`got the data: ${data}`)
        if (data !== null) {
            dispatch({type: "LOGIN", payload: {name: data.name}})
            dispatch({type: "CHATTING_POP_UP"})
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
        dispatch({type: "SIGNUP_POP_UP"})
    }

    return (
        <PopUp classname='login-pop-up'>
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
            <input type="button" value="회원가입" onClick={OnClickSignUp}/>
        </PopUp>
    );
}

export default LoginPopUp;