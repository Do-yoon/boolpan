import 'css/MainLayout.css'
import { useState } from 'react';

let columns = [
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
]
let data = [
    {
        name: "test"
    },
    {
        name: "test2"
    }
]
// todo: 테이블 내의 선이 보이도록 할 것
function ChatRoomTable() {
    let [size, setSize] = useState(6);
    let rows = [];

    for (var i = 0; i < size; i++) {
        let rowID = `row${i}`
        let cell = []
        for (var idx = 0; idx < size; idx++) {
            let cellID = `cell${i}-${idx}`
            cell.push(<td key={cellID} id={cellID}></td>)
        }
        rows.push(<tr key={i} id={rowID}>{cell}</tr>)
    }
    return (
        <div className="chat-room-table">
            <div className="row">
                <div className="col s12 board">
                    <table id="simple-board">
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ChatRoomTable;