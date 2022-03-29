import { call, fork, put, takeLatest } from 'redux-saga/effects';
import { IMatchItem } from '../interfaces/match';
import * as service from '../match-service';
import {
  getMatchListFailed,
  getMatchListSuccess, matchActions
} from './actions';

export function* getMatchList() {
  try {
    const matchList: Array<IMatchItem> = yield call(service.getMatchList);
    yield put(getMatchListSuccess(matchList));
  } catch (error) {
    let errorMessage = 'Failed to get match list';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);
    yield put(getMatchListFailed(errorMessage));
  }
}

function* watchMatchListRequest() {
  console.log('match');
  yield takeLatest(matchActions.GET_MATCH_LIST_REQUEST, getMatchList);
}

const matchSagas = [fork(watchMatchListRequest)];

export default matchSagas;
