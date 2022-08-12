import Chats from '@component/page/Chats';
import SearchBar from "@component/layout/SearchBar";
import CreateRoomPopUp from "@component/pop-up/create-room-popup/CreateRoomPopUp";
import Layout from "@component/layout/Layout";
import PopUpLayer from "@component/pop-up/PopUpLayer";


function Home() {
    return (
        <Layout>
            <div id='container'>
                <div id={'search-area'}>
                    <SearchBar/>
                </div>
                <Chats/>
            </div>
        </Layout>
    );
}

export default Home;