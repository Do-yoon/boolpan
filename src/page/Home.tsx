import ChatArea from '@component/ChatArea';
import SearchBar from "@component/SearchBar";
import CreateRoomPopUp from "@component/pop-up/CreateRoomPopUp";

function Home() {
    return (
        <div id={'home-page'}>
            <div id={'search-area'}>
                <SearchBar/>
            </div>
            <ChatArea/>
        </div>
    );
}

export default Home;