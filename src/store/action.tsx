import {createAction} from "@reduxjs/toolkit";
import {Chat} from "./type";

export const setChattingRoomList = createAction<Chat[]>("setChattingRoomList")
export const sendMessage = createAction<string>("sendMessage")
export const loginPopUp = createAction("loginPopUp")
export const chattingPopUp = createAction("chattingPopUp")
export const signUpPopUp = createAction("signUpPopUp")
export const createRoomPopUp = createAction("createRoomPopUp")
export const closePopUp = createAction("closePopUp")
export const resizeWindow = createAction("resizeWindow")
export const login = createAction<string>("login")
export const logout = createAction("logout")
export const joinRoom = createAction<{
    room_id: string,
    name: string,
    current: number,
    limit: number,
    explode_time: number
}>("joinRoom")
export const leaveRoom = createAction("leaveRoom")