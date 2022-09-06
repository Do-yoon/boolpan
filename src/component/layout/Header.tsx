import Constant from "util/Constant";
import type { RootState } from "store/index";
import {useAppDispatch, useAppSelector} from "util/hooks";
import React from "react";
import { loginPopUp, logout } from "store/action";

interface LocalProps {
    userName: string
}

function LoggedIn({userName}: LocalProps) {
    const dispatch = useAppDispatch();
    return (
        <div>
            {userName}
            <button onClick={() => dispatch(logout())}>{Constant.LOGOUT}</button>
        </div>
    )
}

function LoggedOut() {
    const dispatch = useAppDispatch();

    return (
        <div>
            {Constant.PLEASE_LOGIN}
            <button onClick={() => dispatch(loginPopUp())}>{Constant.LOGIN}</button>
        </div>
    )
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
    const name = useAppSelector((state: RootState) => state.user.name);

    return (
        <div className="header">
            <div className="login-info-area">
                {name
                    ? <LoggedIn userName={name}/>
                    : <LoggedOut/>
                }
            </div>
            <MainLogoArea/>
        </div>
    );
}

export default Header;