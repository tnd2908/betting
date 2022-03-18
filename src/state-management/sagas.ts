import { all } from 'redux-saga/effects';
import { authSaga } from '../modules/user/state/user-saga';

// const appSaga = [fork(authSaga)]

function *rootSaga(){
    yield(all([authSaga()]))
}
export default rootSaga