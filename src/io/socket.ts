import {io, Socket} from "socket.io-client";

export interface ServerToClientEvents {
    init: () => void;
    deleteRoom: (msg: string) => void;
    getMessage: (
        message: {
            sender: string,
            text: string,
            timestamp: string
        }) => void;
    newUser: (name: string) => void;
    error: (e: string) => void;
    leaveUser: (name: string) => void;
}

export interface ClientToServerEvents {
    init: (email: string) => void;
    sendMessage: (args: { room_id: string, text: string }) => void;
    createRoom: (roomData: {
                     name: string
                     category: string
                     password: string
                     limit: number
                     keeping_time: number
                 },
                 callback: (e: { error: string }, data: {
                     room_id: string
                 }) => void) => void;
    joinRoom: (data: {
                   room_id: string,
                   password?: string
               },
               callback: (roominfo: {
                              name: string,
                              current: number,
                              limit: number,
                              explode_time: number
                          }, error: string) => void
    ) => void;
    leaveRoom: (args: {
        room_id: string
    }) => void;
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