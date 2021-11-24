export interface ChatState {
    id: number
    name: string
    limit: number
    current: number
};

const initChatState: ChatState = {
    id: 0,
    name: "test",
    limit: 100,
    current: 12
}

export default initChatState;