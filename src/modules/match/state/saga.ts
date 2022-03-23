import { call, fork, put, takeEvery } from 'redux-saga/effects';
import { IMatchItem } from '../interfaces/match';
import * as service from '../match-service';
import {
  matchActions,
  getMatchListFailed,
  getMatchListSuccess,
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
  console.log('filter');
  yield takeEvery(matchActions.GET_MATCH_LIST_REQUEST, getMatchList);
}

const matchSagas = [fork(watchMatchListRequest)];

export default matchSagas;
