import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './page/Home';

function MainRouter() {
    return (
        <BrowserRouter>
            <Switch>
            <Route path="/" exact component={Home} />
            <Redirect path="*" to="/" />
            </Switch>
        </BrowserRouter>
    )
}

export default MainRouter;