export type UserAction = {type: 'SET_NAME'; payload: string}
    | {type: 'SET_LOGGED_IN'; payload: boolean}
    | {type: 'SET_LOGGED_OUT'; payload: boolean};