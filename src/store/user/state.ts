export type UserState = {
    name: string,
    isLoggedIn: boolean,
    room?: number
}

export const initialUserState: UserState = {
    name: '',
    isLoggedIn: false,
}
