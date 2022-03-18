import { NavigateFunction } from "react-router-dom";
import { USER_ACTION } from "../../../Utils/constant";
import { ILoginField, IRegisterField } from "../../../Utils/interface";
import {
  ReactFacebookLoginInfo,
  ReactFacebookFailureResponse,
} from "react-facebook-login";
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import createAction from "../../helpers/createAction";

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
