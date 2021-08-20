import Constant from "util/Constant";
import type { RootState, AppDispatch } from "store";
import store from 'store';
import { useDispatch } from 'react-redux';

function LoginButton() {
    return <button onClick={LoginHandler}>{Constant.LOGIN}</button>
}

function LogoutButton() {
    return <button onClick={LogoutHandler}>{Constant.LOGOUT}</button>
}

function LoginHandler() {
    useDispatch<AppDispatch>();
}

function LogoutHandler() {
    useDispatch<AppDispatch>();
}

function LoggedIn(name: any) {
    return (
        <div>
            {name}
            <LogoutButton/>
        </div>
    )
}

function LoggedOut() {
    return (
        <div>
            로그인 해 주세요.
            <LoginButton/>
        </div>
    )
}

function LoginInfoArea(name: any) {
    return (
        <div className="login-info-area">
            {store.getState().users.isLoggedIn ? <LoggedIn name={name}/> : <LoggedOut/>}
        </div>
    );
}

interface HeaderProps {
    name?: string
    loginInfo: {
        loginState: boolean;
        setLoginState: React.Dispatch<React.SetStateAction<boolean>>;
    }
}

function Header({name, loginInfo}: HeaderProps) {
    return (
        <div className="header">
            <LoginInfoArea name={name}/>
        </div>
    );
}

export default Header;