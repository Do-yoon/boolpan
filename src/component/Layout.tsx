import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import NavBar from './NavBar';
import 'css/MainLayout.css'

interface MainProps {
    name?: string,
    children?: React.ReactNode,
}

function Layout({name, children}: MainProps) {
    return (
        <div>
            <Header name={name}/>
            <div>
                <NavBar className="navbar"/>
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;