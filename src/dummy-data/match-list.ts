import { IMatchItem } from "../modules/match/interfaces/match";

export const MATCH_LIST: Array<IMatchItem> = [
  {
    id: 'match1',
    league: {
      id: 'l1',
      name: 'UEFA Champions League',
      logo: 'https://api.sofascore.com/api/v1/unique-tournament/7/image',
    },
    teams: [
      {
        id: 't1',
        name: 'SL Benfica',
        logo: 'https://api.sofascore.com/api/v1/team/3006/image',
      },
      {
        id: 't2',
        name: 'Liverpool',
        logo: 'https://api.sofascore.com/api/v1/team/44/image',
      }],
    startTime: '02:00 06/04/2022',
    status: 0,
    score: [0, 0]
  },
  {
    id: 'match2',
    league: {
      id: 'l1',
      name: 'UEFA Champions League',
      logo: 'https://api.sofascore.com/api/v1/unique-tournament/7/image',
    },
    teams: [
      {
        id: 't3',
        name: 'Manchester City',
        logo: 'https://api.sofascore.com/api/v1/team/17/image',
      },
      {
        id: 't4',
        name: 'Real Madrid',
        logo: 'https://api.sofascore.com/api/v1/team/2829/image',
      }],
    startTime: '03:00 06/04/2022',
    status: 0,
    score: [0, 0]
  },
  {
    id: 'match3',
    league: {
      id: 'l1',
      name: 'UEFA Champions League',
      logo: 'https://api.sofascore.com/api/v1/unique-tournament/7/image',
    },
    teams: [
      {
        id: 't5',
        name: 'Chelsea',
        logo: 'https://api.sofascore.com/api/v1/team/38/image',
      },
      {
        id: 't6',
        name: 'Villarreal',
        logo: 'https://api.sofascore.com/api/v1/team/2819/image',
      }],
    startTime: '04:00 06/04/2022',
    status: 0,
    score: [0, 0]
  },
  {
    id: 'match4',
    league: {
      id: 'l2',
      name: 'Premier League',
      logo: 'https://api.sofascore.com/api/v1/unique-tournament/17/image',
    },
    teams: [
      {
        id: 't2',
        name: 'Liverpool',
        logo: 'https://api.sofascore.com/api/v1/team/44/image',
      },
      {
        id: 't3',
        name: 'Manchester City',
        logo: 'https://api.sofascore.com/api/v1/team/17/image',
      }],
    startTime: '04:00 12/04/2022',
    status: 0,
    score: [0, 0]
  },
  {
    id: 'match5',
    league: {
      id: 'l2',
      name: 'Premier League',
      logo: 'https://api.sofascore.com/api/v1/unique-tournament/17/image',
    },
    teams: [
      {
        id: 't7',
        name: 'Watford',
        logo: 'https://api.sofascore.com/api/v1/team/24/image',
      },
      {
        id: 't5',
        name: 'Chelsea',
        logo: 'https://api.sofascore.com/api/v1/team/38/image',
      }],
    startTime: '21:00 12/04/2022',
    status: 0,
    score: [0, 0]
  },
  {
    id: 'match6',
    league: {
      id: 'l2',
      name: 'Premier League',
      logo: 'https://api.sofascore.com/api/v1/unique-tournament/17/image',
    },
    teams: [
      {
        id: 't9',
        name: 'Burnley',
        logo: 'https://api.sofascore.com/api/v1/team/6/image',
      },
      {
        id: 't10',
        name: 'Brentford',
        logo: 'https://api.sofascore.com/api/v1/team/50/image',
      }],
    startTime: '21:00 12/04/2022',
    status: 2,
    score: [0, 0]
  },
  {
    id: 'match7',
    league: {
      id: 'l2',
      name: 'Premier League',
      logo: 'https://api.sofascore.com/api/v1/unique-tournament/17/image',
    },
    teams: [
      {
        id: 't5',
        name: 'Chelsea',
        logo: 'https://api.sofascore.com/api/v1/team/38/image',
      },
      {
        id: 't11', 
        name: 'Leeds United',
        logo: 'https://api.sofascore.com/api/v1/team/34/image',
      }],
    startTime: '21:00 12/04/2022',
    status: 1,
    score: [0, 0]
  },
  {
    id: 'match8',
    league: {
      id: 'l5',
      name: 'Serie A',
      logo: 'https://api.sofascore.com/api/v1/unique-tournament/23/image',
    },
    teams: [
      {
        id: 't21', 
        name: 'Spezia',
        logo: 'https://api.sofascore.com/api/v1/team/2735/image',
      },
      {
        id: 't22', 
        name: 'Venezia',
        logo: 'https://api.sofascore.com/api/v1/team/2688/image',
      }],
    startTime: '01:00 4/04/2022',
    status: 0,
    score: [0, 0]
  },
  {
    id: 'match9',
    league: {
      id: 'l5',
      name: 'Serie A',
      logo: 'https://api.sofascore.com/api/v1/unique-tournament/23/image',
    },
    teams: [
      {
        id: 't29', 
        name: 'Juventus',
        logo: 'https://api.sofascore.com/api/v1/team/2687/image',
      },
      {
        id: 't23', 
        name: 'Lazio',
        logo: 'https://api.sofascore.com/api/v1/team/2699/image',
      }],
    startTime: '01:00 4/04/2022',
    status: 1,
    score: [0, 0]
  },
  {
    id: 'match10',
    league: {
      id: 'l5',
      name: 'Serie A',
      logo: 'https://api.sofascore.com/api/v1/unique-tournament/23/image',
    },
    teams: [
      {
        id: 't29', 
        name: 'Juventus',
        logo: 'https://api.sofascore.com/api/v1/team/2687/image',
      },
      {
        id: 't23', 
        name: 'Lazio',
        logo: 'https://api.sofascore.com/api/v1/team/2699/image',
      }],
    startTime: '01:00 12/03/2022',
    status: 2,
    score: [0, 0]
  },
  {
    id: 'match11',
    league: {
      id: 'l2',
      name: 'Premier League',
      logo: 'https://api.sofascore.com/api/v1/unique-tournament/17/image',
    },
    teams: [
      {
        id: 't2',
        name: 'Liverpool',
        logo: 'https://api.sofascore.com/api/v1/team/44/image',
      },
      {
        id: 't3',
        name: 'Manchester City',
        logo: 'https://api.sofascore.com/api/v1/team/17/image',
      }],
    startTime: '04:00 12/02/2022',
    status: 2,
    score: [0, 0]
  },
  {
    id: 'match12',
    league: {
      id: 'l1',
      name: 'UEFA Champions League',
      logo: 'https://api.sofascore.com/api/v1/unique-tournament/7/image',
    },
    teams: [
      {
        id: 't1',
        name: 'SL Benfica',
        logo: 'https://api.sofascore.com/api/v1/team/3006/image',
      },
      {
        id: 't2',
        name: 'Liverpool',
        logo: 'https://api.sofascore.com/api/v1/team/44/image',
      }],
    startTime: '02:00 06/04/2022',
    status: 0,
    score: [0, 0]
  },
]
