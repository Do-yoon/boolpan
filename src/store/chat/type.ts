export interface ChatState {
    messages: Message[]
};

export interface Message {
    user: number,
    message: string,
    timestamp: number
}

