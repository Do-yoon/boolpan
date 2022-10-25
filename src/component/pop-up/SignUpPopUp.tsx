import {useDispatch} from "react-redux";
import React, {useState} from "react";
import axios from "axios";
import {REST_BASE_URL} from "util/Constant";
import PopUpLayout from "component/pop-up/modules/PopUpLayout";
import {loginPopUp} from "store/action";

function SignUpPopUp() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");
    const [name, setName] = useState("");

    const SignUpSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== verifyPassword) {
            alert('패스워드 확인이 일치하지 않습니다.')
            return;
        }

        axios.post(REST_BASE_URL + "/user/signup", {
            userinfo: {
                name: name,
                email: email,
                password: password
            }
        }).then((loginFetch) => {
            const data = loginFetch.data
            if (data) {
                alert('회원가입이 완료되었습니다.')
                dispatch(loginPopUp())
            } else {
                alert('아이디가 이미 존재합니다.')
            }
        });
    }

    const OnClickToLogin = (e: React.MouseEvent) => {
        dispatch(loginPopUp())
    }

    const OnChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const OnChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const OnChangeVerifyPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVerifyPassword(e.target.value)
    }

    const OnChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    return (
        <PopUpLayout className='sign-up-pop-up'>
            <p className='sign-up-pop-up pop-up-title'>회원가입</p>
            <form onSubmit={SignUpSubmit}>
                <ol className="form-field">
                    <li>아이디 <input type="email" value={email} onChange={OnChangeEmail}/></li>
                    <li>패스워드<input type="password" value={password} onChange={OnChangePassword}/></li>
                    <li>패스워드 확인<input type="password" value={verifyPassword} onChange={OnChangeVerifyPassword}/></li>
                    <li>이름<input type="text" value={name} onChange={OnChangeName}/></li>
                </ol>
                <div className="sign-up-pop-up button-container">
                    <input type="submit" value="회원가입"/>
                </div>
            </form>
            <input type="button" className="summit-button" value="기존 계정으로 로그인" onClick={OnClickToLogin}/>
        </PopUpLayout>
    );
}

export default SignUpPopUp;