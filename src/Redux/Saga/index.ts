import { all, fork } from 'redux-saga/effects';
import { authSaga } from './user';

const appSaga = [fork(authSaga)]
function *rootSaga(){
    yield(all([...appSaga]))
}
export default rootSaga