export interface ITeamFilter {
  id: string;
  name: string;
}

export interface ILeagueFilter {
  id: string;
  name: string;
  teams: Array<ITeamFilter>;
}

export interface IFilterReducer {
  leagueList: Array<ILeagueFilter>;
  teamList: Array<ITeamFilter>;
  isLoading: boolean;
  error?: string;
}
