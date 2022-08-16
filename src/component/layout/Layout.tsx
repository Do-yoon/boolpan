import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import NavBar from './NavBar';
import 'css/MainLayout.css'
import PopUpLayer from "component/pop-up/PopUpLayer";

interface LayoutProps {
    children?: React.ReactNode,
}

function Layout({children}: LayoutProps) {

    return (
        <div>
            <PopUpLayer/>
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