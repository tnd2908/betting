import createAction from '../../../utils/createAction';
import { ILeagueFilter } from '../interface/filter';

export const filterActions = {
  GET_LEAGUE_LIST_REQUEST: 'GET_LEAGUE_LIST_REQUEST',
  GET_LEAGUE_LIST_SUCCESS: 'GET_LEAGUE_LIST_SUCCESS',
  GET_LEAGUE_LIST_FAILED: 'GET_LEAGUE_LIST_FAILED',
  CHOOSE_LEAGUE: 'CHOOSE_LEAGUE',
};

export const getLeagueListRequest = () =>
  createAction(filterActions.GET_LEAGUE_LIST_REQUEST, null);

export const getLeagueListSuccess = (leagueList: Array<ILeagueFilter>) =>
  createAction(filterActions.GET_LEAGUE_LIST_SUCCESS, { leagueList });

export const getLeagueListFailed = (error: string) =>
  createAction(filterActions.GET_LEAGUE_LIST_FAILED, { error });

export const chooseLeague = (leagueId: string) =>
  createAction(filterActions.CHOOSE_LEAGUE, { leagueId });
