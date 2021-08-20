export type UserState = {
    name: string,
    isLoggedIn: boolean
};
  
export const initialUserState: UserState = {
    name: '',
    isLoggedIn: false
};