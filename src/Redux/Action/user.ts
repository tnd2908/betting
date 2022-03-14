import { USER_ACTION } from "../../Utils/constant";
import { ILoginField, IRegisterField } from "../../Utils/interface";

export const userLogin = (userInfor: ILoginField) =>{
    return {type: USER_ACTION.LOGIN, payload: userInfor}
}
export const userRegister = (userInfo: IRegisterField) =>{
    return {type: USER_ACTION.REGISTER, payload: userInfo}
}