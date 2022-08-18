import {createActions} from "redux-actions";

// Expected: {"payload": {"popUp": <LoginPopUp />}, "type": "LOGIN_POP_UP"}
const UserAction = createActions({
    LOGIN: (name: string) => ({name}),
    LOGOUT: () => ({})
});

export default UserAction;