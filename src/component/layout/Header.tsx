import Constant from "util/Constant";
import type { RootState } from "store/index";
import { useSelector } from 'react-redux';
import {useAppDispatch} from "../../util/hooks";
import UserAction from "../../store/user/action";
import PageAction from "../../store/page/action";
import React from "react";

interface LocalProps {
    userName: string
}

function LoggedIn({userName}: LocalProps) {
    const dispatch = useAppDispatch();
    return (
        <div>
            {userName}
            <button onClick={() => dispatch(UserAction.logout())}>{Constant.LOGOUT}</button>
        </div>
    )
}

function LoggedOut() {
    const dispatch = useAppDispatch();

    return (
        <div>
            {Constant.PLEASE_LOGIN}
            <button onClick={() => dispatch(PageAction.loginPopUp())}>{Constant.LOGIN}</button>
        </div>
    )
}

function LoginInfoArea({userName}: LocalProps) {
    const loginSelector = useSelector((state: RootState) => state.users.isLoggedIn);
    return (
        <div className="login-info-area">
            {loginSelector
                ? <LoggedIn userName={userName}/>
                : <LoggedOut/>
            }
        </div>
    );
}

function MainLogoArea() {
    return (
        <div id={'main-logo-area'}>
            <div id={'main-logo'}>
                <span>불판프 로젝트</span>
            </div>
        </div>
    );
}

function Header() {
    const name_test = "name";
    return (
        <div className="header">
            <LoginInfoArea userName={name_test}/>
            <MainLogoArea/>
        </div>
    );
}

export default Header;