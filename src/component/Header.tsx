import Constant from "util/Constant";
import type { RootState } from "store";
import { useDispatch, useSelector } from 'react-redux';
import {PageActionType} from "@store/page/action";
import LoginPopUp from "@component/pop-up/LoginPopUp";
import {UserActionType} from "@store/user/action";

interface LocalProps {
    userName: string
}

function LoggedIn({userName}: LocalProps) {
    const dispatch = useDispatch();
    return (
        <div>
            {userName}
            <button onClick={() => dispatch({ type: UserActionType.LOGOUT })}>{Constant.LOGOUT}</button>
        </div>
    )
}

function LoggedOut() {
    const dispatch = useDispatch();

    return (
        <div>
            {Constant.PLEASE_LOGIN}
            <button onClick={() => dispatch({type: PageActionType.SET_POP_UP, payload: {popUp: <LoginPopUp/>}})}>{Constant.LOGIN}</button>
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