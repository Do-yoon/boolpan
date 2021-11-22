export enum UserActionType {
    SEARCH,
    ENTER_THE_ROOM,
    EXIT_THE_ROOM,
    VALIDATE_LOGIN,
    LOGOUT,
    RESIZE_WINDOW
}

export enum RoomActionType {
    GET_CHATTING_ROOM_LIST,
    GET_CHATTING_ROOM_INFO,
}

export type UserAction =
    { type: UserActionType.SEARCH; payload: SearchPayload }
    | { type: UserActionType.ENTER_THE_ROOM; payload: EnterTheRoomPayload }
    | { type: UserActionType.EXIT_THE_ROOM; payload: ExitTheRoomPayload }
    | { type: UserActionType.VALIDATE_LOGIN; payload: ValidateLoginPayload }
    | { type: UserActionType.LOGOUT; payload: number }
    | { type: UserActionType.RESIZE_WINDOW; payload: ResizeWindowPayload };

export function UserActionPayload() {

}
interface SearchPayload {
    key: string,
    option: number
}

export interface EnterTheRoomPayload {
    userId: number,
    roomId: number
}

export interface ExitTheRoomPayload {
    userId: number,
    roomId: number
}

export interface ValidateLoginPayload {
    email: string,
    password: string
}

export interface ResizeWindowPayload {
    width: number
}