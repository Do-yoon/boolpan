export enum UserActionType {
    ENTER_THE_ROOM,
    EXIT_THE_ROOM,
    LOGIN,
    LOGOUT,
    RESIZE_WINDOW
}

export type UserAction =
    | { type: UserActionType.ENTER_THE_ROOM; payload: EnterTheRoomPayload }
    | { type: UserActionType.EXIT_THE_ROOM; }
    | { type: UserActionType.LOGIN, payload: LoginFetchPayload}
    | { type: UserActionType.LOGOUT; payload: number }
    | { type: UserActionType.RESIZE_WINDOW; payload: ResizeWindowPayload };


export type LoginFetchPayload = {
    email: string
    password: string
}

export type EnterTheRoomPayload = {
    roomId: number
}

export type ResizeWindowPayload = {
    width: number
}