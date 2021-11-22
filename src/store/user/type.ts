export type UserState = {
    name: string,
    isLoggedIn: boolean,
    width: number,
    room?: number
};

const getWidth = () => {
    const {innerWidth: widthValue} = window;
    return widthValue;
}

export const initialUserState: UserState = {
    name: '',
    isLoggedIn: false,
    width: getWidth()
};