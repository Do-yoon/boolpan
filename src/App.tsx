import MainRouter from './router';
import './css/App.css';
import {initChatSocket, initRoomSocket} from "./io/socket";

function App() {
    initChatSocket();
    initRoomSocket();

    return (
        <div className="App">
            <MainRouter/>
        </div>
    );
}

export default App;
