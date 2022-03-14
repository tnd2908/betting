export interface IAction {
    type: string,
    payload: any
}
export interface IUserReducer{
    userInfor: {
        email: string,
        username: string,
        userId: string,
        avatar?: string,
    },
    isLoading: boolean,
    error?: string,
}
export interface ILoginField{
    email: string,
    password: string
}
export interface IRegisterField{
    name: string,
    email: string,
    password: string
}