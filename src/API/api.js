import * as axios from "axios";
import { getDevelopersThunk } from "../actions/task.actions";

const baseURL = "http://localhost:5001/";

export const API = {
  //Registration and authentification
  async postNewUser(userData) {
    const response = await axios.post(`${baseURL}register`, userData);
    return response.data;
  },
  async auth(authData) {
    console.log("posy auth request", authData);
    try {
      const response = await axios.post(`${baseURL}auth`, authData);
      console.log(response);
      return response;
    } catch (e) {
      console.log(e);
      return e;
    }
  },
  setAuthToken(token) {
    if (token) {
      // Apply to every request
      axios.defaults.headers.common["Authorization"] = token;
    } else {
      // Delete auth header
      delete axios.defaults.headers.common["Authorization"];
    }
  },
  async getUser(id) {
    const response = await axios.get(`users/${id}`);
    return response.data;
  },

  //Projects
  async createProject(userId, projectData) {
    console.log("createProjectData", projectData);
    const response = await axios.post(
      `${baseURL}projects/add/${userId}`,
      projectData
    );
    return response.data;
  },
  async assignProject(devId, projectId) {
    console.log("assign request", devId);
    const response = await axios.post(
      `${baseURL}projects/assign/${projectId}`,
      {
        developer: devId,
      }
    );
    console.log(response.data);
    return response.data;
  },
  async getUserProjects(userId) {
    const response = await axios.get(`${baseURL}users/projects/${userId}`);
    return response.data;
  },
  async getProject(projectId) {
    const response = await axios.get(`${baseURL}projects/${projectId}`);
    console.log(response.data);
    return response.data[0];
  },
  async deleteProject(projectId) {
    const response = await axios.delete(`${baseURL}projects/${projectId}`);
    return response.data;
  },
  async editProject(projectId, projectData) {
    console.log(projectData);
    const response = await axios.post(`${baseURL}projects/${projectId}`, {
      content: projectData,
    });
    console.log(response.data);
    return response.data;
  },

  //Tasks
  async createTask(projectId, taskData) {
    const response = await axios.post(
      `${baseURL}tasks/add/${projectId}`,
      taskData
    );

    return response.data;
  },
  async getDevelopers() {
    const response = await axios.get(`${baseURL}users/`);

    return response.data;
  },
  async geUserTasks(userId) {
    const response = await axios.get(`${baseURL}tasks/${userId}`);

    return response.data;
  },
  async getProjectTasks(projectId) {
    const response = await axios.get(`${baseURL}tasks/project/${projectId}`);

    return response.data;
  },
  async deleteTask(taskId) {
    const response = await axios.delete(`${baseURL}tasks/${taskId}`);
    return response;
  },
  async editTask(taskId, taskData) {
    const response = await axios.post(`${baseURL}tasks/update/${taskId}`, {
      content: taskData,
    });
    console.log("editTask response", response.data);
    return response.data;
  },
  async assignTask(developer, taskId) {
    const response = await axios.post(
      `${baseURL}tasks/assign/${taskId}`,
      developer
    );
    return response.data;
  },
  async changeStatus(taskId, status) {
    const response = await axios.post(`${baseURL}tasks/status/${taskId}`, {
      status: status,
    });
    return response.data;
  },
  // Comments
  async createComment(taskId, commentData) {
    const response = await axios.post(
      `${baseURL}comments/add/${taskId}`,
      commentData
    );
    console.log(response.data);
    return response;
  },
  async deleteComment(commentId) {
    const response = await axios.delete(`${baseURL}comments${commentId}`);
    console.log(response.data);
    return response;
  },
  async editComment(commentId, commentData) {
    const response = await axios.post(
      `${baseURL}comments/update/${commentId}`,
      commentData
    );
    console.log(response.data);
    return response;
  },
};
