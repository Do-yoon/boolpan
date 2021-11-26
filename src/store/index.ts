import { UserReducer } from "@store/user/reducer";
import {combineReducers, configureStore, createStore} from '@reduxjs/toolkit'
import {ChatReducer} from "@store/chat/reducer";
import {PageReducer} from "@store/page/reducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    users: UserReducer,
    pages: PageReducer,
    chats: ChatReducer
})

const store = createStore(rootReducer, composeWithDevTools())


/*
const render = () => {
    const state = store.getState();
    if(state.toggle)
}

store.subscribe()
 */

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;