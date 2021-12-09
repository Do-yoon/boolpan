import ChatArea from '@component/ChatArea';
import SearchBar from "@component/SearchBar";
import CreateRoomPopUp from "@component/pop-up/CreateRoomPopUp";
import Layout from "@component/Layout";
import PopUpContainer from "@component/pop-up/PopUpContainer";

interface Props {
    popUp: number
    popUpController: Function
}

function Home({popUpController, popUp}: Props) {
    return (
        <Layout>
            <PopUpContainer PopUpType={popUp}></PopUpContainer>
            <div id={'search-area'}>
                <SearchBar/>
            </div>
            <ChatArea/>
        </Layout>
    );
}

export default Home;