import { USER_ACTION } from "../../Utils/constant"
import { IAction, IUserReducer } from "../../Utils/interface"

const initialState : IUserReducer = {
    username: '',
    email: '',
    userId: '',
    avatar: '',
    isLoading: false,
    error: '',
}
const userReducer = (state = initialState, action: IAction) =>{
    switch (action.type){
        case USER_ACTION.LOGIN:{
            return {...state, isLoading: true}
        }
        case USER_ACTION.LOGIN_SUCCESS:{
            return {...state, isLoading: false}
        }
        default: 
            return {...state}
    }
}
export default userReducer