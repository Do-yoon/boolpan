export type UserState = {
    userinfo: {
        name?: string
        email?: string
        id?: number
    }
    isLoggedIn: boolean
    room?: number
}

export const initialUserState: UserState = {
    userinfo: {
    },
    isLoggedIn: false,
}
