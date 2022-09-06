import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import NavBar from './NavBar';
import 'css/MainLayout.css'
import PopUpWrapper from "component/layout/PopUpWrapper";
import {useAppSelector} from "../../util/hooks";
import CreateRoomPopUp from "../pop-up/CreateRoomPopUp";
import LoginPopUp from "../pop-up/LoginPopUp";
import PasswordPopUp from "../pop-up/PasswordPopUp";
import ChattingPopUp from "../pop-up/ChattingPopUp";
import SignUpPopUp from "../pop-up/SignUpPopUp";
import {PopUpType} from "../../store/state";

interface LayoutProps {
    children?: React.ReactNode,
}

function Layout({children}: LayoutProps) {
    const room_id = useAppSelector(state => state.chat.roominfo?.room_id)
    const type = useAppSelector(state => state.popUp.type)
    const isOpen = (type == PopUpType.None ? false : true)


    return (
        <div>
            {type == PopUpType.CreateRoomPopUp ? <PopUpWrapper className="create-room-pop-up" isOpen={isOpen}><CreateRoomPopUp/></PopUpWrapper> : undefined}
            {type == PopUpType.LoginPopUp ? <PopUpWrapper className="login-pop-up" isOpen={false}><LoginPopUp/></PopUpWrapper> : undefined}
            {type == PopUpType.ChattingPopUp ? <PopUpWrapper className="chat" isOpen={false}><ChattingPopUp/></PopUpWrapper> : undefined}
            {type == PopUpType.PasswordPopUp && room_id ? <PopUpWrapper className="password-pop-up" isOpen={false}><PasswordPopUp room_id={room_id}/></PopUpWrapper> : undefined}
            {type == PopUpType.SignUpPopUp ? <PopUpWrapper className="sign-up-pop-up" isOpen={false}><SignUpPopUp/></PopUpWrapper> : undefined}
            <Header/>
            <div id="layout-body">
                <NavBar/>
                {children}
            </div>
            <Footer/>
        </div>
    );
}


export default Layout;