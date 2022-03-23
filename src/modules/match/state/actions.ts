import createAction from '../../../utils/createAction';
import { IMatchItem } from '../interfaces/match';

export const matchActions = {
  GET_MATCH_LIST_REQUEST: 'GET_MATCH_LIST_REQUEST',
  GET_MATCH_LIST_SUCCESS: 'GET_MATCH_LIST_SUCCESS',
  GET_MATCH_LIST_FAILED: 'GET_MATCH_LIST_FAILED',
};

export const getMatchListRequest = () =>
  createAction(matchActions.GET_MATCH_LIST_REQUEST, null);

export const getMatchListSuccess = (matchList: Array<IMatchItem>) =>
  createAction(matchActions.GET_MATCH_LIST_SUCCESS, { matchList });

export const getMatchListFailed = (error: string) =>
  createAction(matchActions.GET_MATCH_LIST_FAILED, { error });

