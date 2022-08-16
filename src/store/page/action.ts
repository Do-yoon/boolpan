import {createActions} from "redux-actions"
import LoginPopUp from "component/pop-up/login-popup/LoginPopUp";
import ChattingPopUp from "component/pop-up/chat-popup/ChattingPopUp";
import SignUpPopUp from "component/pop-up/signup-popup/SignUpPopUp";
import CreateRoomPopUp from "component/pop-up/create-room-popup/CreateRoomPopUp";

const PageActions = createActions({
    LOGIN_POP_UP: ()=>({popUp: LoginPopUp}),
    CHATTING_POP_UP: ()=>({popUp: ChattingPopUp}),
    SIGNUP_POP_UP: ()=>({popUp: SignUpPopUp}),
    CREATE_ROOM_POP_UP: ()=>({popUp: CreateRoomPopUp}),
    CLOSE_POP_UP: ()=>({popUp: null}),
    RESIZE_WINDOW: (width: number)=>({}),
})

export default PageActions