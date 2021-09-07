import 'css/MainLayout.css'
import * as _ from 'lodash';
import Constant from 'util/Constant'
import {useEffect, useState} from 'react';

const columns = [
    {
        title: 'roomName',
        dataIndex: 'name',
        key: 'name',
        width: 100
    },
    {
        title: 'roomName2',
        dataIndex: 'name2',
        key: 'name2',
        width: 100
    }
    , {
        title: 'roomName',
        dataIndex: 'name',
        key: 'name',
        width: 100
    },
    {
        title: 'roomName2',
        dataIndex: 'name2',
        key: 'name2',
        width: 100
    }, {
        title: 'roomName',
        dataIndex: 'name',
        key: 'name',
        width: 100
    },
    {
        title: 'roomName2',
        dataIndex: 'name2',
        key: 'name2',
        width: 100
    }, {
        title: 'roomName',
        dataIndex: 'name',
        key: 'name',
        width: 100
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

function getTable(row: number, col: number) {
    const table_col = [...Array(col)].map((e, i) => <td className={`chatRoomCol${i}`}></td>)
    const table_row = [...Array(row)].map((e, i) => <tr className={`chatRoomRow${i}`}>{table_col}</tr>)

    return (
        <table className="chat-room-table">
            <thead/>
            <tbody>
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