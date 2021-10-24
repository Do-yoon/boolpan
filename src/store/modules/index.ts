import { combineReducers } from "redux";
import { APIReducer } from "store/modules/Reducer";
import { UserState } from "store/modules/state";


export interface StoreState {
    users: UserState
}

const rootReducer = combineReducers({
    users: APIReducer,
});

export default rootReducer;