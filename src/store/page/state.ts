export enum PopUpType {
    NONE,
    CREATE_ROOM,
}

export type PageState = {
    popUp: null | React.ReactNode
}

export const initialPageState: PageState = {
    popUp: null
}