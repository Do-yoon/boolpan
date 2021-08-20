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
    const weekHeader = Constant.WEEK;
    const weekTimeTable = Constant.TIMELIST;

    return (
        <table className="chat-room-table">
            <thead>
                <th></th>
                {weekHeader}
            </thead>
            <tbody>
                {weekTimeTable}
            </tbody>
        </table>
    )
}

export default ChatRoomTable;