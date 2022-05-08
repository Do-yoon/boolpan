export type AdminState = {
    isAdminLoggedIn?: boolean,
    admininfo?: {
        email: string
    }
}

export const initialAdminState: AdminState = {
    isAdminLoggedIn: false,
}
