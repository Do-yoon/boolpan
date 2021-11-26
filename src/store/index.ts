import { UserReducer } from "@store/user/reducer";
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {ChatReducer} from "@store/chat/reducer";
import {PageReducer} from "@store/page/reducer";

const rootReducer = combineReducers({
    users: UserReducer,
    pages: PageReducer,
    chats: ChatReducer
})

const store = configureStore({
    reducer: rootReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;