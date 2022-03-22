import { all } from 'redux-saga/effects';
import filterSagas from '../modules/filter/state/saga';
import authSagas from '../modules/user/state/user-saga';

// const appSaga = [fork(authSaga)]

function *rootSaga(){
    yield(all([...authSagas,...filterSagas]))
}
export default rootSaga