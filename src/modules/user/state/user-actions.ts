import { NavigateFunction } from "react-router-dom";
import { ILoginField, IRegisterField } from "../../../utils/interface";
import {
  ReactFacebookLoginInfo,
  ReactFacebookFailureResponse,
} from "react-facebook-login";
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import createAction from "../../../utils/createAction";

export const USER_ACTION = {
  LOGIN: 'USER_LOGIN',
  LOGOUT: 'USER_LOGOUT',
  LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
  LOGIN_FAIL: 'USER_LOGIN_FAIL',
  REGISTER: 'USER_REGISTER',
  REGISTER_SUCCESS: 'USER_REGISTER_SUCCESS',
  REGISTER_FAIL: 'USER_REGISTER_FAIL',
  LOGIN_FACEBOOK: 'USER_LOGIN_FACEBOOK',
  LOGIN_FACEBOOK_SUCCESS: 'USER_LOGIN_FACEBOOK_SUCCESS',
  LOGIN_FACEBOOK_FAIL: 'USER_LOGIN_FACEBOOK_FAIL',
  LOGIN_GOOGLE: 'USER_LOGIN_GOOGLE',
  LOGIN_GOOGLE_SUCCESS: 'USER_LOGIN_GOOGLE_SUCCESS',
  LOGIN_GOOGLE_FAIL: 'USER_LOGIN_GOOGLE_FAIL',
}

export const userLogin = (userInfor: ILoginField, navigate: NavigateFunction) =>
  createAction(USER_ACTION.LOGIN, { userInfor, navigate });

export const userLoginFacebook = (
  response: ReactFacebookLoginInfo | ReactFacebookFailureResponse,
  navigate: NavigateFunction
) => createAction(USER_ACTION.LOGIN_FACEBOOK, { response, navigate });

export const userLoginGoogle = (
  response: GoogleLoginResponse | GoogleLoginResponseOffline,
  navigate: NavigateFunction
) => createAction(USER_ACTION.LOGIN_GOOGLE, { response, navigate });

export const userRegister = (userInfo: IRegisterField) =>
  createAction(USER_ACTION.REGISTER, userInfo);
