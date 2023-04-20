import {initialState} from "store/state";
import {createReducer} from "@reduxjs/toolkit";
import {
    setChattingRoomList,
    sendMessage,
    chattingPopUp,
    signUpPopUp,
    createRoomPopUp,
    closePopUp,
    resizeWindow, logout, login, joinRoom, leaveRoom, loginPopUp, passwordPopUp
} from "./action";
import ChattingPopUp from "../component/pop-up/ChattingPopUp";
import SignUpPopUp from "../component/pop-up/SignUpPopUp";
import CreateRoomPopUp from "../component/pop-up/CreateRoomPopUp";
import LoginPopUp from "../component/pop-up/LoginPopUp";
import PasswordPopUp from "../component/pop-up/PasswordPopUp";

export const reducer = createReducer(initialState, builder =>
    builder
        .addCase(setChattingRoomList, (state, action) => ({
            ...state,
            chat: {
                chat_list: action.payload
            }
        }))
        .addCase(loginPopUp, (state) => ({
            ...state,
            popUp: { name: "LoginPopUp" }
        }))
        .addCase(chattingPopUp, (state) => ({
            ...state,
            popUp: { name: "ChattingPopUp" }
        }))
        .addCase(signUpPopUp, (state) => ({
            ...state,
            popUp: { name: "SignUpPopUp" }
        }))
        .addCase(createRoomPopUp, (state) => ({
            ...state,
            popUp: { name: "CreateRoomPopUp" }
        }))
        .addCase(passwordPopUp, (state, action) => ({
            ...state,
            popUp: {
                name: "PasswordPopUp",
                props: {room_id: action.payload.room_id}
            }
        }))
        .addCase(closePopUp, (state) => ({
            ...state,
            popUp: { name: "" }
        }))
        .addCase(resizeWindow, (state) => {
        })
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
        .addCase(login, (state, action) => {
            console.log(action.payload);
            return {
                ...state,
                user: {
                    name: action.payload.name,
                    user_id: action.payload.user_id
                }
            }
            })
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