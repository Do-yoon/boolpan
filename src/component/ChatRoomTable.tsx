import 'css/MainLayout.css'
import * as _ from 'lodash';
import Constant from 'util/Constant'
import { useState } from 'react';

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


function ChatRoomTable() {
    const [row, col] = [14, 7];
    const table_col = [...Array(col)].map((e, i) => <td className={`chatRoomCol${i}`}></td>)
    const table_row = [...Array(row)].map((e, i) => <tr className={`chatRoomRow${i}`}>{table_col}</tr>)

    return (
        <table className="chat-room-table">
            <thead>
            </thead>
            <tbody>
                {table_row}
            </tbody>
        </table>
    )
}

export default ChatRoomTable;