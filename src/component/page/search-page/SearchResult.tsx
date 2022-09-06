import SearchResultList from "component/page/search-page/SearchResultList";
import qs from "qs"
import { useLocation } from "react-router-dom";
import Layout from "component/layout/Layout";
import SearchBar from "component/layout/SearchBar";

function SearchResult() {
    const location = useLocation();
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });

    return (
        <Layout>
            <div id='container'>
                <div id={'search-area'}>
                    <SearchBar/>
                </div>
                <SearchResultList key={query["key"] as string} option="room_name"/>
            </div>
        </Layout>
    )
}

export default SearchResult;