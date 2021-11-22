import {ActionType, APIAction} from "@store/modules/action";
import {initialUserState, UserState} from "@store/modules/state";

export function APIReducer(
    state = initialUserState,
    action: APIAction
): UserState {
    switch (action.type) {
        case ActionType.ENTER_THE_ROOM:
            // call backend API
            return {
                ...state,
                room: action.payload.roomId
            };
        case ActionType.EXIT_THE_ROOM:
            return {
                ...state,
                room: undefined
            };
        case ActionType.SEARCH:
            
            return state;
        case ActionType.LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            };
        case ActionType.VALIDATE_LOGIN:
            let isValid = false;
            return {
                ...state,
                isLoggedIn: isValid
            };
        case ActionType.RESIZE_WINDOW:
            return {
                ...state,
                width: action.payload.width
            };
        default:
            return state;
    }
}