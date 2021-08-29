import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import NavBar from './NavBar';
import 'css/MainLayout.css'

interface LayoutProps {
    children?: React.ReactNode,
}

function Layout({children}: LayoutProps) {
    return (
        <div>
            <Header/>
                <div id="layout-body">
                    <NavBar className="navbar"/>
                    {children}
                </div>
            <Footer/>
        </div>
    );
}

export default Layout;