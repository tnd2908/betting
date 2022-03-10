import { USER_ACTION } from "../../Utils/constant"
import { IAction, IUser } from "../../Utils/interface"

const initialState : IUser = {
    username: '',
    email: '',
    userId: ''
}
const userReducer = (state = initialState, action: IAction) =>{
    switch (action.type){
        case USER_ACTION.LOGIN:{
            return {...state}
        }
        default: 
            return {...state}
    }
}
export default userReducer