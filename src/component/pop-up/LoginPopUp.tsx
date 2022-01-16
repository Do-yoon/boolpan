import {useDispatch} from "react-redux";
import {PageActionType} from "@store/page/action";
import {UserActionType} from "@store/user/action";

function LoginPopUp() {
    const dispatch = useDispatch();
    const LoginSubmit = () => {
        dispatch({type: UserActionType.LOGIN})
        dispatch({type: PageActionType.SET_POP_UP, payload: {popUp: null}})
    }

    return (
        <div>
            <form onSubmit={LoginSubmit}>
                <ol>
                    <li>아이디  <input type="email"/></li>
                    <li>패스워드<input type="password"/></li>
                </ol>
                <input type="submit" value="로그인"/>
                <input type="button" value="회원가입"/>
            </form>
        </div>
    );
}

export default LoginPopUp;