export type Chat = {
    id: number
    name: string
    limit: number
    current: number
}

export interface Message {
    user: number,
    message: string,
    timestamp: number
}