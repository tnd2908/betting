export interface ILeagueMatch {
    id: string;
    name: string;
    logo: string;
}

export interface ITeamMatch {
    id: string;
    name: string;
    logo: string;
}

export interface IMatchItem {
    id: string;
    league: ILeagueMatch;
    teams: Array<ITeamMatch>;
    startTime: string;
    status: number;
    score: number[];
}