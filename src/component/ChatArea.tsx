import 'css/MainLayout.css'
import {ChatActionType, ChatAction} from "@store/chat/action";
import {useEffect, useState} from 'react';
import {min} from "mathjs";
import store from "@store/index";
import {useDispatch, useSelector} from "react-redux";
import Chat from "@component/Chat";
import {PropsFromRedux} from "@store/chat/state";
import {ChatState} from "@store/chat/state";
import {type} from "os";


const columns = [
    {
        id: 1,
        name: 'roomName',
        title: 'roomName',
        limit: 1,
        current: 100
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

const mapStateToProps = (state: ChatTableProps) => {
}

interface ChatTableProps {
    chat_list: typeof Chat[]
}


function ChatTable() {
    // hooks
    const getWidth = () => {
        const {innerWidth: widthValue} = window;
        return widthValue;
    }
    const [windowDimensions, setWindowDimensions] = useState(getWidth);
    store.dispatch({type: ChatActionType.GET_CHATTING_ROOM_LIST});

    const chat_list = useSelector((state: ChatTableProps) => state.chat_list)

    // tables
    const [row, col] = [14, Math.floor((0.8 * windowDimensions - 165) / 140)];
    let matrix = [...Array(row)].map(() => [...Array(col)].fill(null));

    const data_length = columns.length;

    useEffect(() => {
        async function handleResize() {
            setWindowDimensions(getWidth());
        }

        window.addEventListener('resize', handleResize);
        window.removeEventListener('resize', handleResize);

    }, []);

    console.log('here!! : ' + chat_list)

    for (let i = 0; i < min(row, data_length); i++) {
        const idx = Math.floor(Math.random()) % col;
        const temp = columns[i];
        console.log(`instance is ${temp}`)
        matrix[i][idx] = <Chat id={temp.id} name={temp.name} limit={temp.limit} current={temp.current}/>
    }

    let table: JSX.Element[] = [];
    for (let i = 0; i < row; i++) {
        const t = matrix[i].map((e, idx) => <td className={`chatRoomCol${idx}`}>{e}</td>);
        table.push(<tr id={`chatRoomRow${i}`} className="table-row">{t}</tr>)
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
    // To do: move this state to Reducer

    return (
        <div id="table-area">
            <ChatTable />
        </div>
    );
}

export default ChatArea;