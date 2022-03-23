import { MATCH_LIST } from '../../dummy-data/match-list';
import { IMatchItem } from './interfaces/match';

export const getMatchList = () => {
    const matchList: Array<IMatchItem> = MATCH_LIST;
    return matchList;
};
