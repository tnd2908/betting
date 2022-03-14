import { put, takeLatest } from 'redux-saga/effects';
import { USER_ACTION } from '../../Utils/constant';
import { IAction } from '../../Utils/interface';

export function* authSaga(){
    yield takeLatest(USER_ACTION.LOGIN, function*callBack(action :IAction){
        yield console.log(action.payload)
        yield put({type: USER_ACTION.LOGIN_SUCCESS, payload: action.payload})
    })
    yield takeLatest(USER_ACTION.REGISTER, function* callBack(action: IAction){
        yield console.log(action.payload)
    })
}
