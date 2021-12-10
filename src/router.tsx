import SearchResult from 'page/SearchResult';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from 'page/Home';
import {useDispatch, useSelector} from "react-redux";
import {PageActionType} from "@store/page/action";
import {RootState} from "@store/index";


function MainRouter() {
    const popUp = useSelector((state: RootState) => state.pages.popUp);
    const dispatch = useDispatch()
    console.log(popUp)
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