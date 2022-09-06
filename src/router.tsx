import SearchResult from 'component/page/search-page/SearchResult';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from 'component/page/Home';
import Admin from "component/page/Admin";
import Diagram from "component/page/diagram";

function MainRouter() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/search" element={<SearchResult/>}/>
                    <Route path="/boolpan_admin" element={<Admin/>}/>
                    <Route path="/diagram" element={<Diagram/>}/>
                    <Route path="/*" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
    )
}

export default MainRouter;