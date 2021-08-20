import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import NavBar from './NavBar';
import 'css/MainLayout.css'

interface MainProps {
    name?: string,
    children?: React.ReactNode,
    loginInfo: {
        loginState: boolean;
        setLoginState: React.Dispatch<React.SetStateAction<boolean>>;
    },
}

function Layout({name, children, loginInfo}: MainProps) {
    return (
        <div>
            <Header name={name} loginInfo={loginInfo}/>
            <div>
                <NavBar className="navbar"/>
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;