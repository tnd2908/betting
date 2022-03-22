import { IAction } from '../../../utils/interface';
import {
  IFilterReducer,
  ILeagueFilter,
  ITeamFilter,
} from '../interface/filter';
import { filterActions } from './actions';

const initialState: IFilterReducer = {
  leagueList: [],
  teamList: [],
  isLoading: false,
  error: '',
};

const filterReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case filterActions.GET_LEAGUE_LIST_REQUEST: {
      return { ...state, isLoading: true };
    }
    case filterActions.GET_LEAGUE_LIST_SUCCESS: {
      let teamListLoaded: Array<ITeamFilter> = [];
      action.payload.leagueList.forEach(
        (item: ILeagueFilter) =>
          (teamListLoaded = teamListLoaded.concat(item.teams))
      );
      const ids = teamListLoaded.map((item) => item.id);
      const teamListResult = teamListLoaded.filter(
        ({ id }, index) => !ids.includes(id, index + 1)
      );
      return {
        ...state,
        isLoading: false,
        leagueList: action.payload.leagueList,
        teamList: teamListResult,
      };
    }
    case filterActions.GET_LEAGUE_LIST_FAILED: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    case filterActions.CHOOSE_LEAGUE: {
      const leagueId = action.payload.leagueId;
      if (leagueId === 'all') {
        let teamListLoaded: Array<ITeamFilter> = [];
        state.leagueList.forEach(
          (item: ILeagueFilter) =>
            (teamListLoaded = teamListLoaded.concat(item.teams))
        );
        const ids = teamListLoaded.map((item) => item.id);
        const teamListResult = teamListLoaded.filter(
          ({ id }, index) => !ids.includes(id, index + 1)
        );
        return { ...state, teamList: teamListResult };
      } else {
        const leagueChoose = state.leagueList.filter(
          (item) => item.id === leagueId
        );
        return { ...state, teamList: leagueChoose[0].teams };
      }
    }
    default:
      return { ...state };
  }
};
export default filterReducer;
