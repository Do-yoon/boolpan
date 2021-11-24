import 'css/MainLayout.css'
import {ChatActionType, ChatAction} from "@store/chat/action";
import {useEffect, useState} from 'react';
import {min} from "mathjs";
import store from "@store/index";

interface RoomBannerProps {
    title: string
    limit: number
    current_people: number
}

const columns: RoomBannerProps[] = [
    {
        title: 'roomName',
        limit: 1,
        current_people: 100
    },
    {
        title: 'roomName',
        limit: 2,
        current_people: 100
    }, {
        title: 'roomName',
        limit: 50,
        current_people: 100
    }, {
        title: 'roomName',
        limit: 34,
        current_people: 100
    }, {
        title: 'roomName',
        limit: 12,
        current_people: 100
    }, {
        title: 'roomName',
        limit: 154,
        current_people: 100
    }, {
        title: 'roomName',
        limit: 1453,
        current_people: 100
    }, {
        title: 'roomName',
        limit: 341,
        current_people: 100
    }, {
        title: 'roomName',
        limit: 4,
        current_people: 100
    },
]
let data = [
    {
        name: "test"
    },
    {
        name: "test2"
    },
    {
        name: "test"
    },
    {
        name: "test2"
    },
    {
        name: "test"
    },
    {
        name: "test2"
    },
    {
        name: "test"
    }
]

function RoomBanner(
    data: RoomBannerProps
): (JSX.Element | null) {
    if (data === undefined) return null;
    return (
        <div className="room-banner">
            <span className="title">제목: {data.title}</span>
            <span className="limit">정원: {data.limit} / {data.current_people}</span>
        </div>
    );
}

function getTable(row: number, col: number) {
    const data_length = columns.length;
    let matrix = [...Array(row)].map(() => [...Array(col)].fill(null));


    for (let i = 0; i < min(row, data_length); i++) {
        const idx = Math.floor(Math.random()) % col;
        const temp = columns[i];
        matrix[i][idx] = <RoomBanner title={temp.title} limit={temp.limit} current_people={temp.current_people}/>
    }

    let table: JSX.Element[] = [];
    for (let i = 0; i < row; i++) {
        const t = matrix[i].map((e, idx) => <td className={`chatRoomCol${idx}`}>{e}</td>);
        table.push(<tr id={`chatRoomRow${i}`} className="table-row">{t}</tr>)
    }

    store.dispatch({type: ChatActionType.GET_CHATTING_ROOM_LIST});

    return (
        <table id="chat-room-table">
            <thead/>
            <tbody>
            {table}
            </tbody>
        </table>
    );
}

function ChatRoomTable() {
    // To do: move this state to Reducer
    const getWidth = () => {
        const {innerWidth: widthValue} = window;
        return widthValue;
    }
    const [windowDimensions, setWindowDimensions] = useState(getWidth);

    useEffect(() => {
        async function handleResize() {
            setWindowDimensions(getWidth());
        }

        window.addEventListener('resize', handleResize);
        window.removeEventListener('resize', handleResize);

    }, []);

    const [row, col] = [14, Math.floor((0.8 * windowDimensions - 165) / 140)];
    const table = getTable(row, col);

    return (
        <div id="table-area">
            {table}
        </div>
    );
}

export default ChatRoomTable;