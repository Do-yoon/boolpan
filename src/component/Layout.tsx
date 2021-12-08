import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import NavBar from './NavBar';
import 'css/MainLayout.css'
import store, {AppDispatch, RootState} from '.././store'
import {useDispatch, useSelector} from "react-redux";
import PopUpContainer from "@component/pop-up/PopUpContainer";
import {State} from "@store/state";

interface LayoutProps {
    children?: React.ReactNode,
}

function Layout({children}: LayoutProps) {
    //add making pop up logic
    //const popUp = useSelector()

    return (
        <div>
            <div>
                <PopUpContainer PopUpType={-1}/>
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