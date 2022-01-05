import {PopUpType} from "@store/page/state";

export enum PageActionType {
    SET_POP_UP,
    RESIZE_WINDOW,
    SEARCH,
}


export type PageAction =
    { type: PageActionType.SET_POP_UP; payload: SetPopUpPayload }
    | { type: PageActionType.RESIZE_WINDOW; payload: ResizeWindowPayload }
    | { type: PageActionType.SEARCH; payload: SearchPayload }

export type SearchPayload = {
    key: string
    option: number
}
export type SetPopUpPayload = {
    popUp: null | React.ReactNode
}

export type ResizeWindowPayload = {
    width: number
}
