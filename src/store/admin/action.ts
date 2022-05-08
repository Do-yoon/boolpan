export enum AdminActionType {
    ADMIN_LOGIN
}

export type AdminAction =
    { type: AdminActionType.ADMIN_LOGIN; payload: AdminLoginPayload }


type AdminLoginPayload = {
    email: string
}