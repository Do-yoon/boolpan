import Chats from '@component/page/Chats';
import SearchBar from "@component/layout/SearchBar";
import CreateRoomPopUp from "@component/pop-up/create-room-popup/CreateRoomPopUp";
import Layout from "@component/layout/Layout";
import PopUpContainer from "@component/pop-up/PopUpContainer";


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