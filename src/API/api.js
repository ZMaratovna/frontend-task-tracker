import * as axios from "axios";

const baseURL = "http://localhost:5001/";

export const API = {
  //Registration and authentification
  async postNewUser(userData) {
    const response = await axios.post(`${baseURL}register`, userData);
    console.log(response);
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
    console.log(response.data);
    return response.data;
  },
  async assignProject(projectData) {
    const response = await axios.post(`${baseURL}projects/assign`, projectData);
    console.log(response.data);
    return response;
  },
  async getUserProjects(userId) {
    console.log("get user projects request");
    const response = await axios.get(`${baseURL}users/projects/${userId}`);
    console.log("get user projects response", response.data);

    return response.data;
  },
  async getProject(projectId) {
    const response = await axios.get(`${baseURL}projects/${projectId}`);
    console.log(response.data);
    return response.data[0];
  },

  //Tasks
  async createTask(projectId, taskData) {
    const response = await axios.post(
      `${baseURL}tasks/add/${projectId}`,
      taskData
    );
    console.log(response.data);
    return response;
  },
  async getProjectTasks(projectId) {
    const response = await axios.get(`${baseURL}tasks/project/${projectId}`);
    console.log(response.data);
    return response.data;
  },
  async deleteTask(taskId) {
    const response = await axios.delete(`${baseURL}tasks/${taskId}`);
    console.log(response.data);
    return response;
  },
  async editTask(taskId, taskData) {
    const response = await axios.post(
      `${baseURL}tasks/update/${taskId}`,
      taskData
    );
    console.log(response.data);
    return response;
  },
  async assignTask(developer, taskId) {
    const response = await axios.post(
      `${baseURL}tasks/assign/${taskId}`,
      developer
    );
    console.log(response.data);
    return response;
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
