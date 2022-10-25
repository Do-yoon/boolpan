import SearchResult from 'component/page/search-page/SearchResult';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from 'component/page/Home';
import Admin from "component/page/Admin";
import Diagram from "component/page/diagram";
import Layout from "./component/layout/Layout";
import AdminLayout from "./component/admin/AdminLayout";

function MainRouter() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/boolpan_admin" element={<AdminLayout/>}>
                        <Route path="/boolpan_admin" element={<Admin/>}/>
                    </Route>
                    <Route element={<Layout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/search" element={<SearchResult/>}/>
                        <Route path="/diagram" element={<Diagram/>}/>
                        <Route path="/*" element={<Home/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
    )
}

export default MainRouter;