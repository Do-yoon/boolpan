import UserReducer from "store/user/reducer";
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import ChatReducer from "store/chat/reducer";
import PageReducer from "store/reducer";

const rootReducer = combineReducers({
        users: UserReducer,
        pages: PageReducer,
        chats: ChatReducer,
        // admin: AdminReducer
    })

const store = configureStore({reducer: rootReducer})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;