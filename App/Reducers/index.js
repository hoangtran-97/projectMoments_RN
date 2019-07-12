import { combineReducer } from "redux";
import updateIndexReducer from "./updateIndexReducer";
const allReducers = combineReducer({
  updateIndexReducer
});
export default allReducers;
