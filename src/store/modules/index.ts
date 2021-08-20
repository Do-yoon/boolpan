import { combineReducers, Reducer } from "redux";
import { UserReducer } from "store/modules/Reducer";
import { UserState } from "store/modules/state";


export interface StoreState {
    users: UserState
}

const rootReducer = combineReducers({
    users: UserReducer,
});

export default rootReducer;