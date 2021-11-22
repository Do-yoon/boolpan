import SearchResult from 'page/SearchResult';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from 'page/Home';
import Layout from 'component/Layout';


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