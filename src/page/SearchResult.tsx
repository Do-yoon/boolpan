import SearchResultList from "@component/SearchResultList";
import qs from "qs"
import { useLocation } from "react-router-dom";

function SearchResult() {
    const location = useLocation();
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });

    return (
        <SearchResultList key={query["key"] as string} option="room_name"/>

    )
}

export default SearchResult;