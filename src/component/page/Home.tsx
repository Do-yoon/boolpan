import Chats from 'component/page/chat-list-page/Chats';
import SearchBar from "component/layout/SearchBar";
import Layout from "component/layout/Layout";


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