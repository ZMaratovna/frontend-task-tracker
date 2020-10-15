import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import projectReducer from "./projectReducer";
import taskReducer from "./taskReducer";
import sessionReducer from "./sessionReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  User: userReducer,
  Projects: projectReducer,
  Tasks: taskReducer,
  Session: sessionReducer,
  form: formReducer,
});

export default rootReducer;
