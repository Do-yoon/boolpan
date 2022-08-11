export enum UserActionType {
    ENTER_THE_ROOM,
    EXIT_THE_ROOM,
    LOGIN,
    LOGOUT,
    RESIZE_WINDOW
}

export type UserAction =
    | { type: UserActionType.ENTER_THE_ROOM; payload: EnterTheRoomPayload }
    | { type: UserActionType.EXIT_THE_ROOM}
    | { type: UserActionType.LOGIN, payload: LoginFetchPayload}
    | { type: UserActionType.LOGOUT}
    | { type: UserActionType.RESIZE_WINDOW; payload: ResizeWindowPayload };


export type LoginFetchPayload = {
    email: string
    name: string
    id: string
}

export type EnterTheRoomPayload = {
    name: string,
    category: string,
    limit: string
    room_id: string
}

export type ResizeWindowPayload = {
    width: number
}