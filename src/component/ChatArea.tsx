import 'css/MainLayout.css'
import {ChatActionType, ChatAction} from "@store/chat/action";
import {useEffect, useState} from 'react';
import {min} from "mathjs";
import store from "@store/index";
import {useDispatch, useSelector} from "react-redux";
import Chat from "@component/Chat";
//import {PropsFromRedux} from "@store/state";
import {type} from "os";
import axios from "axios";


let test_column = [
    {
        id: 1,
        name: 'roomName',
        title: 'roomName',
        limit: 1,
        current: 1010
    },
    {
        id: 2,
        name: 'roomName',
        title: 'roomName',
        limit: 2,
        current: 100
    }
]
/*
interface ChatTableProps extends PropsFromRedux{
    //chat_list: typeof Chat[]
    windowDimensions: number
}
 */

interface ChatTableProps {
    chat_list: typeof Chat[]
}

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/v0',
    timeout: 1000
})

function ChatTable() {
    let table = [];
    let data = test_column;
    axiosInstance.get('/chat')
        .then(res => (data = res.data))

    const getWidth = () => {
        const {innerWidth: widthValue} = window;
        return widthValue;
    }
    const [windowDimensions, setWindowDimensions] = useState(getWidth);
    store.dispatch({type: ChatActionType.GET_CHATTING_ROOM_LIST});

    // tables
    const [row, col] = [14, Math.floor((0.8 * windowDimensions - 165) / 140)];
    let matrix = [...Array(row)].map(() => [...Array(col)].fill(null));

    const data_length = (data.length);
    console.log(`length: ${data_length}`)

    useEffect(() => {
        async function handleResize() {
            setWindowDimensions(getWidth());
        }

        window.addEventListener('resize', handleResize);
        window.removeEventListener('resize', handleResize);

    }, []);

    try {

        for (let i = 0; i < min(row, data_length); i++) {
            const idx = Math.floor(Math.random()) % col;
            const temp = data[i];
            console.log(temp)
            matrix[i][idx] = <Chat id={temp.id} name={temp.name} limit={temp.limit} current={temp.current}/>
        }

        for (let i = 0; i < row; i++) {
            const t = matrix[i].map((e, idx) => <td className={`chatRoomCol${idx}`}>{e}</td>);
            table.push(<tr id={`chatRoomRow${i}`} className="table-row">{t}</tr>)
        }
        console.log(table)
    } catch (e) {
        console.log(e)
    }

    return (
        <table id="chat-room-table">
            <thead/>
            <tbody>
            {table}
            </tbody>
        </table>
    );
}

function ChatArea() {

    return (
        <div id="table-area">
            <ChatTable />
        </div>
    );
}

export default ChatArea;