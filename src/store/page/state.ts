export enum PopUpType {
    NONE,
    CREATE_ROOM,
}

export type PageState = {
    popUp: PopUpType
}

export const initialPageState: PageState = {
    popUp: PopUpType.NONE
}