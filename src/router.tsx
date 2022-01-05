import SearchResult from 'page/SearchResult';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from 'page/Home';
import {useDispatch, useSelector} from "react-redux";
import {PageActionType} from "@store/page/action";
import {RootState} from "@store/index";


function MainRouter() {

    return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/search" component={SearchResult}/>
                    <Redirect path="/*" to="/" />
                </Switch>
            </BrowserRouter>
    )
}

export default MainRouter;