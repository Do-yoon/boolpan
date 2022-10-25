import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import NavBar from './NavBar';
import 'css/MainLayout.css'
import {useAppSelector} from "../../util/hooks";
import PopUpContainer from "../pop-up/PopUpContainer";

interface LayoutProps {
    children?: React.ReactNode,
}

function Layout({children}: LayoutProps) {
    const modalType = useAppSelector(state => state.popUp.name)
    const room_id = useAppSelector(state => state.chat.roominfo?.room_id)
    const pop_up_element = undefined;

    return (
        <div>
            <PopUpContainer/>
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