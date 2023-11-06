import { combineReducers } from "redux";
import taskReducers from "./taskReducers";
import counterReducers from "./counterReducers";

export default combineReducers({
  tasks: taskReducers,
  counter: counterReducers,
});
