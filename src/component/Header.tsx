import Constant from "util/Constant";
import type { RootState, AppDispatch } from "store";
import { useDispatch, useSelector } from 'react-redux';

interface LocalProps {
    name: string
}

function LoggedIn({name}: LocalProps) {
    const dispatch = useDispatch();
    return (
        <div>
            {name}
            <button onClick={() => dispatch({ type: 'SET_LOGGED_OUT' })}>{Constant.LOGOUT}</button>
        </div>
    )
}

function LoggedOut() {
    const dispatch = useDispatch();
    return (
        <div>
            로그인 해 주세요.
            <button onClick={() => dispatch({ type: 'SET_LOGGED_IN' })}>{Constant.LOGIN}</button>
        </div>
    )
}

function LoginInfoArea({name}: LocalProps) {
    const loginSelector = useSelector((state: RootState) => state.users.isLoggedIn);    return (
        <div className="login-info-area">
            {loginSelector
                ? <LoggedIn name={name}/>
                : <LoggedOut/>
            }
        </div>
    );
}

interface HeaderProps {
    name?: string
}

function Header({name}: HeaderProps) {
    const name_test = "name";
    return (
        <div className="header">
            <LoginInfoArea name={name_test}/>
        </div>
    );
}

export default Header;