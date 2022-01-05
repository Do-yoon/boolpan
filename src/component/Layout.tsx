import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import NavBar from './NavBar';
import 'css/MainLayout.css'
import PopUpContainer from "@component/pop-up/PopUpContainer";
import {PopUpType} from "@store/page/state";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@store/index";
import {PageActionType} from "@store/page/action";

interface LayoutProps {
    children?: React.ReactNode,
}

function Layout({children}: LayoutProps) {
    const popUp = useSelector((state: RootState) => state.pages.popUp);
    const dispatch = useDispatch()
    console.log(popUp)

    return (
        <div>
            <PopUpContainer PopUpType={PopUpType.NONE}
                            PopUpContainer={() => dispatch({type: PageActionType.OPEN_POP_UP})}/>
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