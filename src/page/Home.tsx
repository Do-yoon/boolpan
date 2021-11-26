import ChatTablePage from '@component/ChatTablePage';
import SearchBar from "@component/SearchBar";

function Home() {
    return (
        <div id={'home-page'}>
            <div id={'search-area'}>
                <SearchBar/>
            </div>
            <ChatTablePage/>
        </div>
    );
}

export default Home;