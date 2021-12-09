import {UserActionType, UserAction} from "@store/user/action";
import {initialState, State} from "@store/state";

export function UserReducer(
    state = initialState,
    action: UserAction
): State {
    switch (action.type) {
        case UserActionType.ENTER_THE_ROOM:
            return {
                ...state,
                user: {
                    ...state.user,
                    room: action.payload.roomId
                }
            };
        case UserActionType.EXIT_THE_ROOM:
            return {
                ...state,
                user: {
                    ...state.user,

                }
            };
        case UserActionType.LOGOUT:
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: false
                }
            };
        case UserActionType.VALIDATE_LOGIN:
            let isValid = false;
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: isValid
                }
            };

        default:
            return state;
    }
}