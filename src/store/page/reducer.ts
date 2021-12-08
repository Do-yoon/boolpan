import {PageActionType, PageAction} from "@store/page/action";
import {initialState, State} from "@store/state";

export function PageReducer(
    state = initialState,
    action: PageAction
): State {
    switch (action.type) {
        case PageActionType.RESIZE_WINDOW:
            return {
                ...state,
                page: {
                    ...state.page,
                    width: action.payload.width
                }
            };
        default:
            return state;
    }
}