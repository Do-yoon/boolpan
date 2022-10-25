import {useDispatch} from "react-redux";
import React, {useState} from "react";
import axios from "axios";
import {REST_BASE_URL} from "util/Constant";
import {AdminActionType} from "store/admin/action";
import PopUpLayout from "../pop-up/modules/PopUpLayout";

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
        const data = loginFetch.data
        console.log(`got the data: ${data}`)
        if (data !== null) {
            dispatch({type: AdminActionType.ADMIN_LOGIN, payload: {email: email}})
        } else {
            alert('유효하지 않습니다.')
        }
    }

    const OnChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const OnChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    return (
        <PopUpLayout className='login-pop-up pop-up-title'>
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
        </PopUpLayout>
    );
}

export default LoginPopUp;