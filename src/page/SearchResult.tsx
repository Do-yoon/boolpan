import SearchResultList from "@component/SearchResultList";
import qs from "qs"
import { useLocation } from "react-router-dom";
import Layout from "@component/Layout";

function SearchResult() {
    const location = useLocation();
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });

    return (
        <Layout>
            <SearchResultList key={query["key"] as string} option="room_name"/>
        </Layout>

    )
}

export default SearchResult;