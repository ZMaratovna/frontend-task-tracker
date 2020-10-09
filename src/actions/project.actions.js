import { API } from "../API/api";
export const ADD_PROJECT = "ADD_PROJECT";
export const GET_PROJECT = "GET_PROJECT";
export const GET_PROJECTS = "GET_PROJECTS";
export const ASSIGN_PROJECT = "ASSIGN_PROJECT";
export const EDIT_PROJECT = "EDIT_PROJECT";
export const DELETE_PROJECT = "DELETE_PROJECT";

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
    project: payload,
  };
};

export const getProjectThunk = (ProjectId) => (dispatch) => {
  API.getProject(ProjectId).then((project) => dispatch(getProject(project)));
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
    executor: payload.executor,
    project: payload.project,
  };
};
export const assignProjectThunk = (dev, projectId) => (dispatch) => {
  API.assignProject(dev, projectId).then((project) =>
    dispatch(assignProject(project))
  );
};
export const editProject = (payload) => {
  return {
    type: EDIT_PROJECT,
    project: payload,
  };
};
export const editProjectThunk = (ProjectId, projectData) => (dispatch) => {
  API.editProject(ProjectId, projectData).then((Project) =>
    dispatch(editProject(Project))
  );
};
export const deleteProject = (payload) => {
  return {
    type: DELETE_PROJECT,
    project: payload,
  };
};
export const deleteProjectThunk = (ProjectId) => (dispatch) => {
  API.deleteProject(ProjectId).then((Project) =>
    dispatch(deleteProject(Project))
  );
};
