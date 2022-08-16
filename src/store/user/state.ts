export type UserState = {
    userinfo: {
        name?: string
    }
    isLoggedIn: boolean
}

export const initialUserState: UserState = {
    userinfo: {
    },
    isLoggedIn: false,
}
