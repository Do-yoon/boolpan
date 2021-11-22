import { combineReducers } from "redux";
import { APIReducer } from "store/user/reducer";
import { UserState } from "store/user/state";


export interface StoreState {
    users: UserState
}

const rootReducer = combineReducers({
    users: APIReducer,
});

export default rootReducer;