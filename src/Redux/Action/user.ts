import { NavigateFunction } from "react-router-dom";
import { USER_ACTION } from "../../Utils/constant";
import { ILoginField, IRegisterField } from "../../Utils/interface";

export const userLogin = (userInfor: ILoginField, navigate: NavigateFunction) =>{
    return {type: USER_ACTION.LOGIN, payload: {userInfor, navigate}}
}

export const userRegister = (userInfo: IRegisterField) =>{
    return {type: USER_ACTION.REGISTER, payload: userInfo}
}