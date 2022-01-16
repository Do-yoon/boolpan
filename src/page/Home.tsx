import ChatArea from '@component/ChatArea';
import SearchBar from "@component/SearchBar";
import CreateRoomPopUp from "@component/pop-up/CreateRoomPopUp";
import Layout from "@component/Layout";
import PopUpContainer from "@component/pop-up/PopUpContainer";


function Home() {
    return (
            <div id='container'>
                <div id={'search-area'}>
                    <SearchBar/>
                </div>
                <ChatArea/>
            </div>
    );
}

export default Home;