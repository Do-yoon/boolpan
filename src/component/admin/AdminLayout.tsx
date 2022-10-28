import React from 'react';
import Footer from "component/layout/Footer";
import Header from "component/layout/Header";
import NavBar from 'component/layout/NavBar';
import 'css/MainLayout.css'
import ModalLayer from "component/layout/ModalLayer";
import {Outlet} from "react-router";

function AdminLayout() {

    return (
        <div>
            <Header/>
            <div id="layout-body">
                <NavBar/>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}


export default AdminLayout;