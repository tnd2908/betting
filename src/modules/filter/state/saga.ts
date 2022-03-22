import { call, fork, put, takeEvery } from 'redux-saga/effects';
import * as service from '../filter-service';
import { ILeagueFilter } from '../interface/filter';
import {
  filterActions,
  getLeagueListFailed,
  getLeagueListSuccess,
} from './actions';

export function* getLeagueList() {
  try {
    const leagueList: Array<ILeagueFilter> = yield call(service.getLeagueList);
    yield put(getLeagueListSuccess(leagueList));
  } catch (error) {
    let errorMessage = 'Failed to get league list';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);
    yield put(getLeagueListFailed(errorMessage));
  }
}

function* watchLeagueListRequest() {
  console.log('filter');
  yield takeEvery(filterActions.GET_LEAGUE_LIST_REQUEST, getLeagueList);
}

const filterSagas = [fork(watchLeagueListRequest)];

export default filterSagas;
