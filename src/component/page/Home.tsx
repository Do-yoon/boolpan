import ChatBannersPage from 'component/page/ChatBannersPage';
import SearchBar from "component/layout/SearchBar";
import Layout from "component/layout/Layout";
import ModalLayer from "../layout/ModalLayer";


function Home() {
    return (
        <div id='container'>
            <div id={'search-area'}>
                <SearchBar/>
            </div>
            <ChatBannersPage/>
        </div>
    );
}

export default Home;