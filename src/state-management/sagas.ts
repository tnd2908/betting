import { all } from 'redux-saga/effects';
import filterSagas from '../modules/filter/state/saga';
import matchSagas from '../modules/match/state/saga';
import authSagas from '../modules/user/state/user-saga';

function *rootSaga(){
    yield(all([...authSagas,...filterSagas,...matchSagas]))
}
export default rootSaga