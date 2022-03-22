import { LEAGUE_LIST } from '../../dummy-data/league-list';
import { ILeagueFilter } from './interface/filter';

export const getLeagueList = () => {
  const leagueList: Array<ILeagueFilter> = LEAGUE_LIST;
  return leagueList;
};
