import { combineReducers } from "redux";
import userReducer from "./modules/users/userReducer";

const rootReducer = combineReducers({
    user: userReducer
})
export default rootReducer
export type State = ReturnType<typeof rootReducer>