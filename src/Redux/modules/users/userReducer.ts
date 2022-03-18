import { USER_ACTION } from "./userActions"
import { IAction, IUserReducer } from "../../../utils/interface"

const initialState : IUserReducer = {
    userInfo: {
        username: '',
        email: '',
        userId: '',
        avatar: '',
    },
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
        case USER_ACTION.LOGIN_GOOGLE_SUCCESS:{
            const information = action.payload;
            console.log(information)
            return {...state, userInfo: {...information}}
        }
        case USER_ACTION.LOGIN_FACEBOOK_SUCCESS:{
            const information = action.payload;
            console.log(information)
            return {...state, userInfo: {...information}}
        }
        default: 
            return {...state}
    }
}
export default userReducer