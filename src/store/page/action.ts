import {PopUpType} from "@store/page/state";

export enum PageActionType {
    OPEN_POP_UP,
    RESIZE_WINDOW,
    SEARCH,
}


export type PageAction =
    { type: PageActionType.OPEN_POP_UP; payload: OpenPopUpPayload }
    | { type: PageActionType.RESIZE_WINDOW; payload: ResizeWindowPayload }
    | { type: PageActionType.SEARCH; payload: SearchPayload }

interface SearchPayload {
    key: string,
    option: number
}
export interface OpenPopUpPayload {
    type: PopUpType
}

export interface ResizeWindowPayload {
    width: number
}
