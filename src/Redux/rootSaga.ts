import { all } from 'redux-saga/effects';
import { authSaga } from './modules/users/userSaga';

// const appSaga = [fork(authSaga)]

function *rootSaga(){
    yield(all([authSaga()]))
}
export default rootSaga