import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import NavBar from './NavBar';
import 'css/MainLayout.css'
import PopUpContainer from "../pop-up/modules/PopUpContainer";
import {Outlet} from "react-router";


function Layout() {

    return (
        <div>
            <PopUpContainer/>
            <Header/>
            <div id="layout-body">
                <NavBar/>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}


export default Layout;