import { API } from "../API/api";
export const SET_STATUS = "SET_STATUS";
export const GET_PROJECT_TASKS = "GET_PROJECT_TASKS";
// export const GET_USER_TASKS = "GET_USER_TASKS";
export const GET_ASSIGN_TASKS = "GET_ASSIGN_TASKS";
export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const ASSIGN_TASK = "ASSIGN_TASK";

//
export function addTask(payload) {
  return {
    type: ADD_TASK,
    task: payload,
  };
}
export const addTaskThunk = (ProjectId, task) => (dispatch) => {
  API.createTask(ProjectId, task).then((task) => dispatch(addTask(task)));
};
//
export const getUserTasks = (payload) => {
  return {
    type: GET_ASSIGN_TASKS,
    tasks: payload,
  };
};
//
export const getUserTasksThunk = (userId) => (dispatch) => {
  API.geUserTasks(userId).then((tasks) => dispatch(getUserTasks(tasks)));
};
//
export const setStatusThunk = (taskId, status) => (dispatch) => {
  API.changeStatus(taskId, status).then((status) =>
    dispatch(setStatus(status))
  );
};
export const setStatus = (payload) => {
  return {
    type: SET_STATUS,
    task: payload,
  };
};
//
export function recieveTasks(payload) {
  return {
    type: GET_PROJECT_TASKS,
    tasks: payload,
  };
}
export const fetchTasks = (id) => (dispatch) => {
  API.getProjectTasks(id).then((tasks) => dispatch(recieveTasks(tasks)));
};
//
export const deleteTask = (payload) => {
  console.log("delete payload", payload);
  return {
    type: DELETE_TASK,
    task: payload.data,
  };
};
export const deleteTaskThunk = (id) => (dispatch) => {
  API.deleteTask(id).then((task) => dispatch(deleteTask(task)));
};

//
export function editTask(payload) {
  return {
    type: EDIT_TASK,
    task: payload,
  };
}
export const editTaskThunk = (id, text) => (dispatch) => {
  API.editTask(id, text).then((task) => dispatch(editTask(task)));
};
//
export function assignTask(payload) {
  return {
    type: ASSIGN_TASK,
    executor: payload.executor,
  };
}
export const assignTaskThunk = (dev, taskId) => (dispatch) => {
  API.assignTask(dev, taskId).then((task) => dispatch(assignTask(task)));
};
