import { all } from 'redux-saga/effects';
import { authSaga } from './user';

// const appSaga = [fork(authSaga)]

function *rootSaga(){
    yield(all([authSaga()]))
}
export default rootSaga