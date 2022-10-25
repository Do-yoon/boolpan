import {useDispatch} from "react-redux";
import React, {useState} from "react";
import axios, {AxiosResponse} from "axios";
import {REST_BASE_URL} from "util/Constant";
import PopUpLayout from "component/pop-up/modules/PopUpLayout";
import {closePopUp, login, signUpPopUp} from "store/action";

function LoginPopUp() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const LoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        axios.post(REST_BASE_URL + "/user/login", {
            userinfo: {
                email: email,
                password: password
            }
        }).then((res: AxiosResponse<{name: string, user_id: string}, any>) => {
            const data = res.data
            if (data) {
                console.log(data)
                dispatch(login({name: data.name, user_id: data.user_id}))
                dispatch(closePopUp())
            } else {
                alert('유효하지 않습니다.')
            }
        })
    };

    const OnChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const OnChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const OnClickSignUp = () => {
        dispatch(signUpPopUp())
    }

    return (
        <PopUpLayout className='login-pop-up'>
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
        </PopUpLayout>
    );
}

export default LoginPopUp;