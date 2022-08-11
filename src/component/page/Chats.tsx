import 'css/MainLayout.css'
import {useEffect, useState} from 'react';
import {min} from "mathjs";
import Chat from "@component/page/chat-list-page/Chat";
import axios from "axios";
import {REST_BASE_URL} from "@util/Constant";
import {RoomType} from "@util/type";


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

function ChatTable() {
    const getWidth = () => {
        const {innerWidth: widthValue} = window;
        return widthValue;
    }
    const [windowDimensions, setWindowDimensions] = useState(getWidth);
    const [data, setData]
        : [RoomType[], Function]
        = useState([]);

    useEffect(() => {
        async function handleResize() {
            setWindowDimensions(getWidth());
        }

        window.addEventListener('resize', handleResize);
        window.removeEventListener('resize', handleResize);

    }, []);

    // tables
    const [row, col] = [14, Math.floor((0.8 * windowDimensions - 165) / 140)];
    let matrix = [...Array(row)].map(() => [...Array(col)].fill(null));


    // let data = test_column;
    useEffect(() => {
        const fetchChats = async () => {
            try {
                // TODO: 백엔드 데이터베이스 + REST send 형식 맞추어 보내기.
                const res = await axios.get(REST_BASE_URL + "/chat")
                console.log(`data get : ${res.data}`)
                setData(res.data)

            } catch (e) {
                console.log(e)
            }
        }

        fetchChats();
    }, [])

    let table = [];
    const data_length = data.length

    for (let i = 0; i < min(row, data_length); i++) {
        const idx = Math.floor(Math.random()) % col;
        const temp: RoomType = data[i];
        console.log(temp);
        matrix[i][idx] =
            <Chat room_id={temp._id} name={temp.name} limit={temp.limit} current={temp.current}/>
    }

    for (let i = 0; i < row; i++) {
        const t = matrix[i].map((e, idx) => <td className={`chatRoomCol${idx}`}>{e}</td>);
        table.push(<tr id={`chatRoomRow${i}`} className="table-row">{t}</tr>)
    }
    console.log(table)

    return (
        <table id="chat-room-table">
            <thead/>
            <tbody>
            {table}
            </tbody>
        </table>
    );

}

function Chats() {

    return (
        <div id="table-area">
            <ChatTable/>
        </div>
    );
}

export default Chats;