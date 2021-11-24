import {UserActionType, UserAction} from "@store/user/action";
import {initialUserState, UserState} from "@store/user/state";

export function PageReducer(
    state = initialUserState,
    action: UserAction
): UserState {
    switch (action.type) {
        case UserActionType.ENTER_THE_ROOM:
            // call backend API
            return {
                ...state,
                room: action.payload.roomId
            };
        case UserActionType.EXIT_THE_ROOM:
            return {
                ...state,
                room: undefined
            };
        case UserActionType.SEARCH:
            
            return state;
        case UserActionType.LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            };
        case UserActionType.VALIDATE_LOGIN:
            let isValid = false;
            return {
                ...state,
                isLoggedIn: isValid
            };
        case UserActionType.RESIZE_WINDOW:
            return {
                ...state,
                width: action.payload.width
            };
        default:
            return state;
    }
}