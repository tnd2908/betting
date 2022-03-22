import { ILeagueFilter } from '../modules/filter/interface/filter';

export const LEAGUE_LIST: Array<ILeagueFilter> = [
  {
    id: 'l1',
    name: 'UEFA Champions League',
    teams: [
      { id: 't1', name: 'SL Benfica' },
      { id: 't2', name: 'Liverpool' },
      { id: 't3', name: 'Manchester City' },
      { id: 't4', name: 'Real Madrid' },
      { id: 't5', name: 'Chelsea' },
      { id: 't6', name: 'Villarreal' },
    ],
  },
  {
    id: 'l2',
    name: 'Premier League',
    teams: [
      { id: 't2', name: 'Liverpool' },
      { id: 't3', name: 'Manchester City' },
      { id: 't7', name: 'Watford' },
      { id: 't5', name: 'Chelsea' },
      { id: 't9', name: 'Burnley' },
      { id: 't10', name: 'Brentford' },
      { id: 't11', name: 'Leeds United' },
    ],
  },
  {
    id: 'l3',
    name: 'Laliga',
    teams: [
      { id: 't6', name: 'Villarreal' },
      { id: 't12', name: 'Celta Vigo' },
      { id: 't4', name: 'Real Madrid' },
      { id: 't14', name: 'Levante' },
      { id: 't15', name: 'Getafe' },
    ],
  },
  {
    id: 'l4',
    name: 'Bundesliga',
    teams: [
      { id: 't16', name: 'FC Union Berlin' },
      { id: 't17', name: 'SC Freiburg' },
      { id: 't18', name: 'Hertha BSC' },
      { id: 't19', name: 'FC Koln' },
      { id: 't20', name: 'VfL Bochum' },
    ],
  },
  {
    id: 'l5',
    name: 'Serie A',
    teams: [
      { id: 't21', name: 'Spezia' },
      { id: 't22', name: 'Venezia' },
      { id: 't23', name: 'Lazio' },
      { id: 't24', name: 'Genoa' },
    ],
  },
  {
    id: 'l6',
    name: 'Ligue 1',
    teams: [
      { id: 't25', name: 'Lille OSC' },
      { id: 't26', name: 'OGC Nice' },
      { id: 't27', name: 'Montpellier' },
      { id: 't28', name: 'Saint-Étienne' },
    ],
  },
];
