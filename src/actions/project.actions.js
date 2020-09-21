import { API } from "../API/api";
export const ADD_PROJECT = "ADD_PROJECT";
export const GET_PROJECT = "GET_PROJECT";
export const GET_PROJECTS = "GET_PROJECTS";
export const ASSIGN_PROJECT = "ASSIGN_PROJECT";

export const addProject = (payload) => {
  return {
    type: ADD_PROJECT,
    project: payload,
  };
};

export const addProjectThunk = (id, data) => (dispatch) => {
  API.createProject(id, data).then((Project) => dispatch(addProject(Project)));
};

export const getProject = (payload) => {
  return {
    type: GET_PROJECT,
    project: payload.data,
  };
};
export const getProjectThunk = (ProjectId) => (dispatch) => {
  API.getProject(ProjectId).then((project) => getProject(project));
};
export const getProjects = (payload) => {
  console.log("payload data", payload);
  return {
    type: GET_PROJECTS,
    projects: payload,
  };
};
export const getProjectsThunk = (id) => (dispatch) => {
  API.getUserProjects(id).then((Projects) => dispatch(getProjects(Projects)));
};

export const assignProject = (payload) => {
  return {
    type: ASSIGN_PROJECT,
    executor: payload.data.executor,
    project: payload.data.project,
  };
};
export const assignProjectThunk = (dev, ProjectId) => (dispatch) => {
  API.assignProject(dev, ProjectId).then((Project) =>
    dispatch(assignProject(Project))
  );
};
