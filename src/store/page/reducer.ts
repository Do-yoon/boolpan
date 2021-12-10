import {PageActionType, PageAction} from "@store/page/action";
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
        default:
            return state;
    }
}