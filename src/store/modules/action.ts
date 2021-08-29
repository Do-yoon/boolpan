export enum ActionType {
    SEARCH,
    ENTER_THE_ROOM,
    EXIT_THE_ROOM,
    VALIDATE_LOGIN,
    LOGOUT
}

export type APIAction = { type: ActionType.SEARCH; payload: SearchPayload }
    | { type: ActionType.ENTER_THE_ROOM; payload: EnterTheRoomPayload }
    | { type: ActionType.EXIT_THE_ROOM; payload: ExitTheRoomPayload }
    | { type: ActionType.VALIDATE_LOGIN; payload: number }
    | { type: ActionType.LOGOUT; payload: number };

export interface SearchPayload {
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