export interface IAction {
    type: string,
    payload: any
}
export interface IUser{
    email: string,
    username: string,
    userId: string,
    avatar?: string
}