import React from 'react';
import Footer from "@component/layout/Footer";
import Header from "@component/layout/Header";
import NavBar from '@component/layout/NavBar';
import 'css/MainLayout.css'
import PopUpContainer from "@component/pop-up/PopUpContainer";

interface LayoutProps {
    children?: React.ReactNode,
}

function Layout({children}: LayoutProps) {

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