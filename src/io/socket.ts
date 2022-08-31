import {io, Socket} from "socket.io-client";

interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
    hello: () => void;
}

function socket() {
    const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io("http://localhost:8081", {
        // withCredentials: true,
        transports: ['websocket']
    });


    socket.on("connect", () => {
        console.log("connect")
    })
    return socket
}

export default socket()