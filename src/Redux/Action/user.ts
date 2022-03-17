import { NavigateFunction } from "react-router-dom";
import { USER_ACTION } from "../../Utils/constant";
import {  ILoginField, IRegisterField } from "../../Utils/interface";
import { ReactFacebookLoginInfo, ReactFacebookFailureResponse } from 'react-facebook-login'
import { GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";

export const userLogin = (userInfor: ILoginField, navigate: NavigateFunction) =>{
    return {type: USER_ACTION.LOGIN, payload: {userInfor, navigate}}
}
export const userLoginFacebook = (response: ReactFacebookLoginInfo | ReactFacebookFailureResponse, navigate : NavigateFunction) =>{
    return {type: USER_ACTION.LOGIN_FACEBOOK, payload: {response, navigate}}
}
export const userLoginGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline, navigate : NavigateFunction) =>{
    return {type: USER_ACTION.LOGIN_GOOGLE, payload: {response, navigate}}
}
export const userRegister = (userInfo: IRegisterField) =>{
    return {type: USER_ACTION.REGISTER, payload: userInfo}
}