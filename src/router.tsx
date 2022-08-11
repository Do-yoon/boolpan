import SearchResult from '@component/page/search-page/SearchResult';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from 'component/page/Home';
import {useDispatch, useSelector} from "react-redux";
import {PageActionType} from "@store/page/action";
import {RootState} from "@store/index";
import Layout from "@component/layout/Layout";
import LoginPopUp from "@component/pop-up/login-popup/LoginPopUp";
import Admin from "@component/page/Admin";
import Diagram from "@component/page/diagram";


function MainRouter() {

    return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/search" component={SearchResult}/>
                    <Route exact path="/boolpan_admin" component={Admin}/>
                    <Route exact path="/diagram" component={Diagram}/>
                    <Redirect path="/*" to="/" />
                </Switch>
            </BrowserRouter>
    )
}

export default MainRouter;