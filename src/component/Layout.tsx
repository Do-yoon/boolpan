import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import NavBar from './NavBar';
import 'css/MainLayout.css'
import store, {RootState} from '.././store'
import {useDispatch, useSelector} from "react-redux";

interface LayoutProps {
    children?: React.ReactNode,
}

function Layout({children}: LayoutProps) {
    //add making pop up logic
    //const popUp = useSelector()

    return (
        <div>
            <div>
                /*{popUp}*/
            </div>
            <div>
                <Header/>
                <div id="layout-body">
                    <NavBar/>
                    {children}
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default Layout;