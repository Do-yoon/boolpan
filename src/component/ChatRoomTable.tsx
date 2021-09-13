import 'css/MainLayout.css'
import {useEffect, useState} from 'react';

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
    },{
        title: 'roomName',
        limit: 50,
        current_people: 100
    },{
        title: 'roomName',
        limit: 34,
        current_people: 100
    },{
        title: 'roomName',
        limit: 12,
        current_people: 100
    },{
        title: 'roomName',
        limit: 154,
        current_people: 100
    },{
        title: 'roomName',
        limit: 1453,
        current_people: 100
    },{
        title: 'roomName',
        limit: 341,
        current_people: 100
    },{
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
): JSX.Element{
    return (
        <div className="room-banner">
            <span className="title">{data.title}</span>
            <span className="limit">{data.limit}</span>
            <span className="current-people">{data.current_people}</span>
        </div>
    );
}
/*
function randomRender(
    roomData: RoomBannerProps[],
    n: number,

): JSX.Element {
    const sparseMatrix = []
}
*/
function getTable(row: number, col: number) {
    const room_cnt = columns.length;
    let row_cnt = Math.floor(room_cnt / col);
    let table = [];
    for(let i=0; i<row; i++) {
        if (row_cnt <= 0)
            break;
        const t = [...columns.slice(i * col, (i+1) * col)].map((e, idx) => <td className={`chatRoomCol${idx}`}></td>)
        table.push(<tr className={`chatRoomRow${i}`}>{t}</tr>)
        row_cnt --;
    }

    let table_row = null;
    if (row_cnt < row) {
        const table_col = [...Array(col)].map((e, i) => <td className={`chatRoomCol${i}`}></td>)
        table_row = [...Array(row - row_cnt)].map((e, i) => <tr className={`chatRoomRow${i}`}>{table_col}</tr>)
        table.push(table_row)
    }


    return (
        <table className="chat-room-table">
            <thead/>
            <tbody>
            {table}
            {table_row}
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
        function handleResize() {
            setWindowDimensions(getWidth());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [row, col] = [14, Math.floor((0.8*windowDimensions-165)/140)];
    const table = getTable(row, col);

    return table;
}

export default ChatRoomTable;