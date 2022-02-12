import {useDispatch} from "react-redux";
import {PageActionType} from "@store/page/action";
import {UserActionType} from "@store/user/action";
import React from "react";


function SignUpPopUp() {
    const dispatch = useDispatch();
    const SignUpSubmit = (e: React.FormEvent) => {
        alert('logged in')
        dispatch({type: UserActionType.LOGIN})
        dispatch({type: PageActionType.SET_POP_UP, payload: {popUp: null}})
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
                        <input type="submit" className="summit-button" value="기존 계정으로 로그인"/>
                        <input type="button" value="회원가입"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUpPopUp;