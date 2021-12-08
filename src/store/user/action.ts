export enum UserActionType {
    ENTER_THE_ROOM,
    EXIT_THE_ROOM,
    VALIDATE_LOGIN,
    LOGOUT,
    RESIZE_WINDOW
}

export type UserAction =
    | { type: UserActionType.ENTER_THE_ROOM; payload: EnterTheRoomPayload }
    | { type: UserActionType.EXIT_THE_ROOM; }
    | { type: UserActionType.VALIDATE_LOGIN; payload: ValidateLoginPayload }
    | { type: UserActionType.LOGOUT; payload: number }
    | { type: UserActionType.RESIZE_WINDOW; payload: ResizeWindowPayload };



export interface EnterTheRoomPayload {
    roomId: number
}

export interface ValidateLoginPayload {
    email: string,
    password: string
}

export interface ResizeWindowPayload {
    width: number
}