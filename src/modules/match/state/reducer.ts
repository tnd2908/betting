import { IAction } from '../../../utils/interface';
import { IMatchItem, IMatchReducer } from '../interfaces/match';
import { matchActions } from './actions';

const initialState: IMatchReducer = {
  isLoading: false,
  error: '',
  matchList: [],
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
      const matchListLoaded:Array<IMatchItem> = action.payload.matchList
      const upcomingMatchListLoaded:Array<IMatchItem> = matchListLoaded.filter(item => item.status === 0)
      const liveMatchListLoaded:Array<IMatchItem> = matchListLoaded.filter(item => item.status === 1)
      const pastMatchListLoaded:Array<IMatchItem> = matchListLoaded.filter(item => item.status === 2)
      return {
        ...state,
        isLoading: false,
        matchList: matchListLoaded,
        upcomingMatchList: upcomingMatchListLoaded,
        liveMatchList: liveMatchListLoaded,
        pastMatchList: pastMatchListLoaded,
      };
    }
    case matchActions.GET_MATCH_LIST_FAILED: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return { ...state };
  }
};
export default matchReducer;
