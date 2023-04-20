import React from 'react';
import Footer from "component/layout/Footer";
import Header from "component/layout/Header";
import NavBar from 'component/layout/NavBar';
import 'css/MainLayout.css'
import Modal from "component/layout/Modal";
import LoginPopUp from "../pop-up/LoginPopUp";
import {useAppDispatch} from "../../util/hooks";


const popUp = {
    "loginPopUp": <LoginPopUp/>
}

interface LayoutProps {
    children?: React.ReactNode,
}

function Layout({children}: LayoutProps) {
    const dispatch = useAppDispatch()

    return (
        <div>
            <Modal isOpen={false} className="modal-layer">

            </Modal>
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