import { combineReducers } from "redux";
import userReducer from "../modules/user/state/user-reducer";

const rootReducer = combineReducers({
    user: userReducer
})
export default rootReducer
export type State = ReturnType<typeof rootReducer>