import ChatBannersPage from 'component/page/ChatBannersPage';
import SearchBar from "component/layout/SearchBar";
import Layout from "component/layout/Layout";


function Home() {
    return (
        <Layout>
            <div id='container'>
                <div id={'search-area'}>
                    <SearchBar/>
                </div>
                <ChatBannersPage/>
            </div>
        </Layout>
    );
}

export default Home;