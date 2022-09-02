import ChatBannerArea from 'component/page/modules/chat-list-page/ChatBannerArea';
import SearchBar from "component/layout/SearchBar";
import Layout from "component/layout/Layout";


function Home() {
    return (
        <Layout>
            <div id='container'>
                <div id={'search-area'}>
                    <SearchBar/>
                </div>
                <ChatBannerArea/>
            </div>
        </Layout>
    );
}

export default Home;