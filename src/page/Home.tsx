import ChatRoomTable from '@component/ChatRoomTable';
import SearchBar from "@component/SearchBar";

function Home() {
    return (
        <div id={'home-page'}>
            <div id={'search-area'}>
                <SearchBar/>
            </div>
            <ChatRoomTable/>
        </div>
    );
}

export default Home;