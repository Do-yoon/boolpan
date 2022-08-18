import {initialPageState} from "store/page/state";
import {handleActions} from "redux-actions";

const PageReducer = handleActions({
    LOGIN_POP_UP: (state, action) => ({
        ...state,
        popUp: action.payload.popUp
    }),
    CHATTING_POP_UP: (state, action) => ({
        ...state,
        popUp: action.payload.popUp
    }),
    SIGNUP_POP_UP: (state, action) => ({
        ...state,
        popUp: action.payload.popUp
    }),
    CREATE_ROOM_POP_UP: (state, action) => ({
        ...state,
        popUp: action.payload.popUp
    }),
    CLOSE_POP_UP: (state, action) => ({
        ...state,
        popUp: action.payload.popUp
    })
}, initialPageState);

export default PageReducer;