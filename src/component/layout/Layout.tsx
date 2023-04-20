import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import NavBar from './NavBar';
import 'css/MainLayout.css'
import Modal from "component/layout/Modal";
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
    const room_id = useAppSelector(state => state.chat.roominfo?.room_id);
    const createRoomPopUp = useAppSelector(state => state.popUp.createRoomPopUp);
    const signUpPopUp = useAppSelector(state => state.popUp.signUpPopUp);
    const loginPopUp = useAppSelector(state => state.popUp.loginPopUp);
    const chattingPopUp = useAppSelector(state => state.popUp.chattingPopUp);
    const passwordPopUp = useAppSelector(state => state.popUp.passwordPopUp);


    return (
        <div>
            <Modal isOpen={createRoomPopUp} className="create-room-pop-up"><CreateRoomPopUp/></Modal>
            <Modal className="login-pop-up" isOpen={signUpPopUp}><LoginPopUp/></Modal>
            <Modal className="chat" isOpen={loginPopUp}><ChattingPopUp/></Modal>
            <Modal className="password-pop-up" isOpen={chattingPopUp}><PasswordPopUp room_id={room_id!}/></Modal>
            <Modal className="sign-up-pop-up" isOpen={chattingPopUp}><SignUpPopUp/></Modal>
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