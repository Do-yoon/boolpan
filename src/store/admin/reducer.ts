import {AdminAction, AdminActionType} from "store/admin/action";
import {AdminState, initialAdminState} from "store/admin/state";

export function AdminReducer(
    state = initialAdminState,
    action: AdminAction
): AdminState {

    switch (action.type) {
        case AdminActionType.ADMIN_LOGIN:
            return {
                ...state,
                isAdminLoggedIn: true,
                admininfo: {
                    email: action.payload.email
                }
            };
        default:
            return state;
    }
}