import {UserActionType, UserAction} from "@store/user/action";
import {initialUserState, UserState} from "@store/user/state";

export function UserReducer(
    state = initialUserState,
    action: UserAction
): UserState {
    switch (action.type) {
        case UserActionType.ENTER_THE_ROOM:
            return {
                ...state,
                room: action?.payload?.roomId
            };
        case UserActionType.EXIT_THE_ROOM:
            return {
                ...state,
            };
        case UserActionType.LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            };
        case UserActionType.LOGIN:
            return {
                ...state,
                isLoggedIn: true
            };

        default:
            return state;
    }
}