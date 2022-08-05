import {io} from "socket.io-client";

function socket() {
    const s = io("http://localhost:8081", {
        // withCredentials: true,
        transports: ['websocket']
    });
    s.on("connect", () => {
        console.log()
    })
    return s
}

export default socket()