import {createActions} from "redux-actions";

const UserActions = createActions({
    LOGIN: (name: string) => ({name}),
    LOGOUT: () => ({})
});

export default UserActions;