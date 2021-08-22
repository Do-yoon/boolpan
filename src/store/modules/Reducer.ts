import { UserAction } from "store/modules/action";
import { initialUserState, UserState } from "store/modules/state";

export function UserReducer(
    state = initialUserState,
    action: UserAction
): UserState {
    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.payload
            };
        case 'SET_LOGGED_IN':
            return {
                ...state,
                isLoggedIn: true
            };
            case 'SET_LOGGED_OUT':
                return {
                    ...state,
                    isLoggedIn: false
                };
        default:
            return initialUserState;
    }
}