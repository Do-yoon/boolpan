import { combineReducers } from "redux";
import { APIReducer } from "@store/modules/reducer";
import { UserState } from "@store/modules/state";


export interface StoreState {
    users: UserState
}

const rootReducer = combineReducers({
    users: APIReducer,
});

export default rootReducer;