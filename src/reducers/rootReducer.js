import { combineReducers } from "redux";
import projectReducer from "./projectReducer";
import taskReducer from "./taskReducer";
import sessionReducer from "./sessionReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  User: userReducer,
  Projects: projectReducer,
  Tasks: taskReducer,
  Errors: errorReducer,
  Session: sessionReducer,
});

export default rootReducer;
