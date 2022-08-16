import {initialUserState, UserState} from "store/user/state";
import {handleActions} from "redux-actions";

const UserReducer = handleActions({
    LOGIN: (state, action) => ({
        ...state,
        userinfo: action.payload.userinfo,
        isLoggedIn: true
    }),
    LOGOUT: (state, action) => ({
        ...state,
        isLoggedIn: false
    })
}, initialUserState);

export default UserReducer;