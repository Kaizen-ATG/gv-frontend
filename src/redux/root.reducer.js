import { combineReducers } from "redux";
import usersReducer from "./users.reducer.js";

const rootReducer = combineReducers({ users: usersReducer });
export default rootReducer;