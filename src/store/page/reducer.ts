import {PageActionType, PageAction, SetPopUpPayload, SearchPayload, ResizeWindowPayload} from "@store/page/action";
import {initialPageState, PageState} from "@store/page/state";

export function PageReducer(
    state = initialPageState,
    action: PageAction
): PageState {
    switch (action.type) {
        case PageActionType.RESIZE_WINDOW:
            return {
                ...state,
            };
        case PageActionType.SET_POP_UP:
            console.log('action.payload.popUp')
            console.log(action.payload.popUp)
            return {
                ...state,
                popUp: action.payload.popUp
            };
        default:
            return state;
    }
}