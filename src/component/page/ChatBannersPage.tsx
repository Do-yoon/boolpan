import 'css/MainLayout.css'
import {useEffect, useState} from 'react';
import {min} from "mathjs";
import {RootState} from "store";
import socket, {RoomSocket} from "io/socket"
import {chattingPopUp, joinRoom, passwordPopUp} from "store/action";
import {useAppDispatch, useAppSelector} from "util/hooks";

interface ChatBannerProps {
    room_id: string
    name: string
    limit: number
    current: number
    isPassword: boolean
}

function ChatBanner(
    {room_id, name, limit, current, isPassword}: ChatBannerProps
): (JSX.Element | null) {
    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector((state: RootState) => state.user.name);
    const user_id = useAppSelector((state: RootState) => state.user.user_id);

    const OnClickBanner = () => {
        if (!!isLoggedIn && !isPassword && !!user_id) {
            RoomSocket.emit("joinRoom", {room_id, user_id}, ({roominfo, error}) => {
                console.log("joinRoom")
                if (roominfo) {
                    dispatch(joinRoom({
                        room_id,
                        name,
                        limit,
                        current,
                        explode_time: roominfo.explode_time
                    }))
                    dispatch(chattingPopUp())
                } else alert(error)
            })
        } else if (isPassword) {
            dispatch(passwordPopUp({room_id}))
        } else {
            alert('로그인 해 주세요.')
        }
    }

    return (
        <button onClick={OnClickBanner}>
            <div className="room-banner">
                <span className="name">제목: {name}</span>
                <span className="limit">정원: {current} / {limit}</span>
            </div>
        </button>
    );
}

function ChatTable() {
    const getWidth = () => {
        const {innerWidth: widthValue} = window;
        return widthValue;
    }
    const [windowDimensions, setWindowDimensions] = useState(getWidth);
    const [data, setData]
        : [ChatBannerProps[], Function]
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
        const fetchChats = () => {
            RoomSocket.emit("getChattingRoomList", (data: {
                room_id: string
                name: string
                limit: number
                current?: number
                isPassword: boolean
            }[]) => {
                console.log(`data get : ${data}`)
                setData(data)
            })
        }

            fetchChats();
    }, [])

    let table = [];
    const data_length = data.length

    for (let i = 0; i < min(row, data_length); i++) {
        const idx = Math.floor(Math.random()) % col;
        const temp: ChatBannerProps = data[i];
        console.log(temp);
        matrix[i][idx] =
            <ChatBanner room_id={temp.room_id} name={temp.name} limit={temp.limit} current={temp.current}
                        isPassword={temp.isPassword}/>
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

function ChatBannersPage() {

    return (
        <div id="table-area">
            <ChatTable/>
        </div>
    );
}

export default ChatBannersPage;