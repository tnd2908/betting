import { put, takeLatest } from 'redux-saga/effects';
import { USER_ACTION } from '../../Utils/constant';
import { IAction } from '../../Utils/interface';

export function* authSaga(){
    yield takeLatest(USER_ACTION.LOGIN, function*callBack(action :IAction){
        const response = {success: true}
        const {navigate} = action.payload
        yield put({type: USER_ACTION.LOGIN_SUCCESS, payload: response})
        if(response.success === true){
            navigate('/user')
        }

    })
    yield takeLatest(USER_ACTION.REGISTER, function* callBack(action: IAction){
        yield console.log(action.payload)
    })
    yield takeLatest(USER_ACTION.LOGIN_GOOGLE, function* callBack(action: IAction){
        const {accessToken, profileObj, googleId} = action.payload.response
        const {navigate} = action.payload
        if(accessToken){
            const userInfo = {
                username: profileObj.name,
                email: profileObj.email,
                avatar: profileObj.imageUrl,
                userId: googleId
            }
            console.log(userInfo)
            yield put({type: USER_ACTION.LOGIN_GOOGLE_SUCCESS, payload: userInfo})
            navigate('/matches')
        }
    })
    yield takeLatest(USER_ACTION.LOGIN_FACEBOOK, function* callBack(action: IAction){
        yield console.log(action.payload.response)
        const {accessToken, email, name, userID, picture} = action.payload.response
        const {navigate} = action.payload
        if(accessToken){
            const userInfo = {
                username: name,
                email,
                avatar: picture.data.url,
                userId: userID
            }
            console.log(userInfo)
            yield put({type: USER_ACTION.LOGIN_FACEBOOK_SUCCESS, payload: userInfo})
            navigate('/matches')
        }
    })
}
