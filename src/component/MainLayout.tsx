import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import NavBar from './NavBar';
import 'css/MainLayout.css'

interface MainProps {
    name?: string,
    children?: React.ReactNode,
}

function MainLayout({name, children}: MainProps) {
    return (
        <div>
            <Header name={name}/>
            <NavBar className="navbar"/>
            {children}
            <Footer/>
        </div>
    );
}

export default MainLayout;