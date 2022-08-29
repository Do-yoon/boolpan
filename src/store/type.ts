export type Chat = {
    id: number
    name: string
    limit: number
    current: number
}

export interface Message {
    sender: string | null
    text: string
    timestamp: string
}