import {useDispatch} from "react-redux";
import {PageActionType} from "@store/page/action";
import {UserActionType} from "@store/user/action";
import React, {useState} from "react";
import axios from "axios";
import SignUpPopUp from "@component/pop-up/SignUpPopUp";
import {REST_BASE_URL} from "@util/Constant";
import {AdminActionType} from "@store/admin/action";



function LoginPopUp() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const LoginSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const loginFetch = await axios.post(REST_BASE_URL + "/admin/login", {
            admininfo: {
                email: email,
                password: password
            }
        });
        // console.log(typeof email);
        // console.log(email);
        const data = loginFetch.data
        console.log(`got the data: ${data}`)
        if (data !== null) {
            dispatch({type: AdminActionType.ADMIN_LOGIN, payload: {email: email}})
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
            </div>
        </div>
    );
}

export default LoginPopUp;