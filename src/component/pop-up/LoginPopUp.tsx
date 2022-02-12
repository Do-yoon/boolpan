import {useDispatch} from "react-redux";
import {PageActionType} from "@store/page/action";
import {UserActionType} from "@store/user/action";
import React from "react";
import axios from "axios";



function LoginPopUp() {
    const dispatch = useDispatch();
    const LoginSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const loginFetch = await axios.post("http://localhost:8080/v0/user/login");
        const data = loginFetch.data
        console.log(data)
        if (data) {
            dispatch({type: UserActionType.LOGIN, payload: {data}})
            dispatch({type: PageActionType.SET_POP_UP, payload: {popUp: null}})
        } else {
            alert('invalid')
        }
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
                        <li>아이디 <input type="email"/></li>
                        <li>패스워드<input type="password"/></li>
                    </ol>
                    <div className="login-pop-up button-container">
                        <input type="submit" className="summit-button" value="로그인"/>
                        <input type="button" value="회원가입"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPopUp;