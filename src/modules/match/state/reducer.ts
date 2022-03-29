import { IAction } from '../../../utils/interface';
import { IMatchItem, IMatchReducer } from '../interfaces/match';
import { matchActions } from './actions';

const initialState: IMatchReducer = {
  isLoading: false,
  error: '',
  matchList: [],
  matchListFilter: [],
  upcomingMatchList: [],
  liveMatchList: [],
  pastMatchList: [],
};

const matchReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case matchActions.GET_MATCH_LIST_REQUEST: {
      return { ...state, isLoading: true };
    }
    case matchActions.GET_MATCH_LIST_SUCCESS: {
      const matchListLoaded: Array<IMatchItem> = action.payload.matchList
      const upcomingMatchListLoaded: Array<IMatchItem> = matchListLoaded.filter(item => item.status === 0)
      const liveMatchListLoaded: Array<IMatchItem> = matchListLoaded.filter(item => item.status === 1)
      const pastMatchListLoaded: Array<IMatchItem> = matchListLoaded.filter(item => item.status === 2)
      return {
        ...state,
        isLoading: false,
        matchList: matchListLoaded,
        matchListFilter: matchListLoaded,
        upcomingMatchList: upcomingMatchListLoaded,
        liveMatchList: liveMatchListLoaded,
        pastMatchList: pastMatchListLoaded,
      };
    }
    case matchActions.GET_MATCH_LIST_FAILED: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    case matchActions.FILTER_MATCH_BY_LEAGUE: {
      const leagueId: string = action.payload.leagueId;
      let matchListFilterLoaded: Array<IMatchItem> = [];
      if (leagueId === 'all') {
        matchListFilterLoaded = state.matchList;
      }
      else {
        matchListFilterLoaded = state.matchList.filter(match => match.league.id === leagueId);
      }
      const upcomingMatchListLoaded: Array<IMatchItem> = matchListFilterLoaded.filter(item => item.status === 0)
      const liveMatchListLoaded: Array<IMatchItem> = matchListFilterLoaded.filter(item => item.status === 1)
      const pastMatchListLoaded: Array<IMatchItem> = matchListFilterLoaded.filter(item => item.status === 2)
      return {
        ...state, 
        matchListFilter: matchListFilterLoaded, 
        upcomingMatchList: upcomingMatchListLoaded,
        liveMatchList: liveMatchListLoaded,
        pastMatchList: pastMatchListLoaded,
      }
    }
    case matchActions.FILTER_MATCH_BY_TEAM: {
      const teamIdArray: Array<string> = action.payload.teamIdArray;
      console.log(teamIdArray)
      return { ...state}
    }
    default:
      return { ...state };
  }
};
export default matchReducer;
