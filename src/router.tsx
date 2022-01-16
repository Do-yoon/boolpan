import SearchResult from 'page/SearchResult';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from 'page/Home';
import {useDispatch, useSelector} from "react-redux";
import {PageActionType} from "@store/page/action";
import {RootState} from "@store/index";
import Layout from "@component/Layout";
import LoginPopUp from "@component/pop-up/LoginPopUp";


function MainRouter() {

    return (
        <Layout>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/search" component={SearchResult}/>
                    <Redirect path="/*" to="/" />
                </Switch>
            </BrowserRouter>
        </Layout>
    )
}

export default MainRouter;