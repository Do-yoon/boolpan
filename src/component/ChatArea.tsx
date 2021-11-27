import 'css/MainLayout.css'
import {ChatActionType, ChatAction} from "@store/chat/action";
import {useEffect, useState} from 'react';
import {min} from "mathjs";
import store from "@store/index";
import {useDispatch, useSelector} from "react-redux";
import Chat from "@component/Chat";
<<<<<<< HEAD
import {ChatState, PropsFromRedux} from "@store/chat/state";
=======
import {ChatState} from "@store/chat/state";
>>>>>>> 609c427f1833206d9fb022cbe16b0ef060678f7e
import {type} from "os";


const columns = [
    {
        id: 1,
<<<<<<< HEAD
        name: 'roomName',
=======
        title: 'roomName',
>>>>>>> 609c427f1833206d9fb022cbe16b0ef060678f7e
        limit: 1,
        current: 100
    },
    {
        id: 2,
<<<<<<< HEAD
        name: 'roomName',
=======
        title: 'roomName',
>>>>>>> 609c427f1833206d9fb022cbe16b0ef060678f7e
        limit: 2,
        current: 100
    }
]

<<<<<<< HEAD

interface ChatTableProps extends PropsFromRedux{
    //chat_list: typeof Chat[]
    windowDimensions: number
}

const mapStateToProps = (state: ChatTableProps) => {

=======
interface ChatTableProps {
    chat_list: typeof Chat[]
>>>>>>> 609c427f1833206d9fb022cbe16b0ef060678f7e
}


function ChatTable() {
    // hooks
    const getWidth = () => {
        const {innerWidth: widthValue} = window;
        return widthValue;
    }
    const [windowDimensions, setWindowDimensions] = useState(getWidth);
    store.dispatch({type: ChatActionType.GET_CHATTING_ROOM_LIST});
<<<<<<< HEAD

    const chat_list = useSelector((state: ChatTableProps) => state.chat_list)
=======
    const chat_list = useSelector((state: ChatState) => state.chat_list)
>>>>>>> 609c427f1833206d9fb022cbe16b0ef060678f7e
    console.log(`type is: ${typeof chat_list}`)


    // tables
    const [row, col] = [14, Math.floor((0.8 * windowDimensions - 165) / 140)];
    let matrix = [...Array(row)].map(() => [...Array(col)].fill(null));

<<<<<<< HEAD
    const data_length = columns.length;
=======
    const data_length = chat_list.length;
>>>>>>> 609c427f1833206d9fb022cbe16b0ef060678f7e


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
<<<<<<< HEAD
        const temp = columns[i];
        console.log(`instance is ${temp}`)
        matrix[i][idx] = <Chat id={temp.id} name={temp.name} limit={temp.limit} current={temp.current}/>
=======
        const temp = chat_list[i];
        console.log(`instance is ${temp}`)
        matrix[i][idx] = <Chat title={temp.name} limit={temp.limit} current={temp.current} id={temp.id}/>
>>>>>>> 609c427f1833206d9fb022cbe16b0ef060678f7e
    }

    let table: JSX.Element[] = [];
    for (let i = 0; i < row; i++) {
        const t = matrix[i].map((e, idx) => <td className={`chatRoomCol${idx}`}>{e}</td>);
        table.push(<tr id={`chatRoomRow${i}`} className="table-row">{t}</tr>)
    }

<<<<<<< HEAD
=======


>>>>>>> 609c427f1833206d9fb022cbe16b0ef060678f7e
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