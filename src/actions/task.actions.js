import { API } from "../API/api";

export function addTask(payload) {
  return {
    type: ADD_TASK,
    content: payload.data,
  };
}

export const fetchTask = (id, data) => (dispatch) => {
  API.createTask(id, data).then((task) => dispatch(addTask(task)));
};

export function recieveTasks(payload) {
  return {
    type: RECEIVE_TASKS,
    tasks: payload.data,
  };
}

export const fetchTasks = (id) => (dispatch) => {
  API.getProjectTasks(id).then((tasks) => dispatch(recieveTasks(tasks)));
};

export function deleteTask(payload) {
  return {
    type: DELETE_TASK,
    task: payload.data,
  };
}
export const deleteTaskThunk = (id) => (dispatch) => {
  API.deleteTask(id).then((task) => dispatch(deleteTasks(task)));
};

export function editTask(payload) {
  return {
    type: EDIT_TASK,
    task: payload.data,
  };
}
export const editTaskThunk = (id) => (dispatch) => {
  API.editTask(id).then((task) => dispatch(editTask(task)));
};

export function assignTask(payload) {
  return {
    type: ASSIGN_TASK,
    executor: payload.data,
  };
}
export const assignTaskThunk = (dev, taskId) => (dispatch) => {
  API.assignTask(dev, taskId).then((task) => dispatch(assignTask(task)));
};
