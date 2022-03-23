import { combineReducers } from 'redux';
import filterReducer from '../modules/filter/state/reducer';
import matchReducer from '../modules/match/state/reducer';
import userReducer from '../modules/user/state/user-reducer';

const rootReducer = combineReducers({
  user: userReducer,
  filter: filterReducer,
  match: matchReducer,
});
export default rootReducer;
export type State = ReturnType<typeof rootReducer>;
