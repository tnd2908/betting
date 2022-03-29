import createAction from '../../../utils/createAction';
import { IMatchItem } from '../interfaces/match';

export const matchActions = {
  GET_MATCH_LIST_REQUEST: 'GET_MATCH_LIST_REQUEST',
  GET_MATCH_LIST_SUCCESS: 'GET_MATCH_LIST_SUCCESS',
  GET_MATCH_LIST_FAILED: 'GET_MATCH_LIST_FAILED',
  FILTER_MATCH_BY_LEAGUE: 'FILTER_MATCH_BY_LEAGUE',
  FILTER_MATCH_BY_TEAM: 'FILTER_MATCH_BY_TEAM',
};

export const getMatchListRequest = () =>
  createAction(matchActions.GET_MATCH_LIST_REQUEST, null);

export const getMatchListSuccess = (matchList: Array<IMatchItem>) =>
  createAction(matchActions.GET_MATCH_LIST_SUCCESS, { matchList });

export const getMatchListFailed = (error: string) =>
  createAction(matchActions.GET_MATCH_LIST_FAILED, { error });

export const filterMatchByLeague = (leagueId: string) =>
  createAction(matchActions.FILTER_MATCH_BY_LEAGUE, { leagueId });

export const filterMatchByTeam = (teamIdArray: Array<string>) =>
  createAction(matchActions.FILTER_MATCH_BY_TEAM, { teamIdArray });

