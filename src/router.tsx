import SearchResult from 'page/SearchResult';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from 'page/Home';
import {useDispatch, useSelector} from "react-redux";
import {PageActionType} from "@store/page/action";
import {RootState} from "@store/index";
import Layout from "@component/Layout";
import LoginPopUp from "@component/pop-up/LoginPopUp";
import Admin from "@page/Admin";
import Diagram from "@page/diagram";


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