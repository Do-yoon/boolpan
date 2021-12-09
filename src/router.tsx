import SearchResult from 'page/SearchResult';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from 'page/Home';
import Layout from 'component/Layout';
import CreateRoomPopUp from "@component/pop-up/CreateRoomPopUp";
import {useDispatch, useSelector} from "react-redux";
import {State} from "@store/state";
import {PageActionType} from "@store/page/action";


function MainRouter() {
    const popUp = useSelector((state: State) => state.page.popUp);
    const dispatch = useDispatch()
    return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={() => <Home popUp={popUp} popUpController={() => dispatch({type: PageActionType.OPEN_POP_UP})}/>} />
                    <Route exact path="/search" component={SearchResult}/>
                    <Redirect path="/*" to="/" />
                </Switch>
            </BrowserRouter>
    )
}

export default MainRouter;