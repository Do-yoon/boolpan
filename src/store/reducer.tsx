import {initialState} from "store/state";
import {createReducer} from "@reduxjs/toolkit";
import {
    setChattingRoomList,
    sendMessage,
    chattingPopUp,
    signUpPopUp,
    createRoomPopUp,
    closePopUp,
    resizeWindow, logout, login, setNewMessage, joinRoom, leaveRoom, loginPopUp
} from "./action";
import ChattingPopUp from "../component/pop-up/chat-popup/ChattingPopUp";
import SignUpPopUp from "../component/pop-up/modules/signup-popup/SignUpPopUp";
import CreateRoomPopUp from "../component/pop-up/modules/create-room-popup/CreateRoomPopUp";
import LoginPopUp from "../component/pop-up/modules/login-popup/LoginPopUp";

export const reducer = createReducer(initialState, builder =>
    builder
        .addCase(loginPopUp, (state) => ({
            ...state,
            popUp: <LoginPopUp/>
        }))
        .addCase(chattingPopUp, (state) => ({
            ...state,
            popUp: <ChattingPopUp/>
        }))
        .addCase(signUpPopUp, (state) => ({
            ...state,
            popUp: <SignUpPopUp/>
        }))
        .addCase(createRoomPopUp, (state) => ({
            ...state,
            popUp: <CreateRoomPopUp/>
        }))
        .addCase(closePopUp, (state) => ({
            ...state,
            popUp: null
        }))
        .addCase(resizeWindow, (state) => {
        })
        .addCase(setChattingRoomList, (state, action) => ({
            ...state,
            chat: {
                chat_list: action.payload
            }
        }))
        .addCase(sendMessage, (state, action) => {
            const now = new Date();
            let hours = now.getHours();
            const noon = ((hours / 12) == 0) ? '오전' : '오후';
            hours = (hours > 12) ? hours % 12 : hours;

            const minutes = now.getMinutes();
            const zero = minutes < 10 ? '0' : ''

            const timestamp = `${noon} ${hours}:${zero}${minutes}`
            return {
                ...state,
                chat: {
                    ...state.chat,
                    roominfo: {
                        ...state.chat.roominfo!,
                        messages: [{
                            sender: null,
                            text: action.payload,
                            timestamp: timestamp
                        }]
                    }
                }
            }
        })
        .addCase(logout, (state) => ({
            ...state,
            user: {
                ...state.user,
                name: undefined
            }
        }))
        .addCase(login, (state, action) => ({
            ...state,
            user: {
                ...state.user,
                name: action.payload
            }
        }))
        .addCase(setNewMessage, (state, action) => ({
            ...state,
            chat: {
                ...state.chat,
                roominfo: {
                    ...state.chat.roominfo!,
                    messages: [...state.chat.roominfo?.messages!, action.payload]
                }
            }
        }))
        .addCase(joinRoom, (state, action) => ({
            ...state,
            chat: {
                ...state.chat,
                roominfo: {
                    ...action.payload,
                    messages: []
                }
            }
        }))
        .addCase(leaveRoom, (state, action) => ({
            ...state,
            chat: {
                ...state.chat,
                roominfo: undefined
            }
        }))
)