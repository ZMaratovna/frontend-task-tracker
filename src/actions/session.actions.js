import { API } from "../API/api";
import jwt from "jsonwebtoken";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const GET_ERRORS = "GET_ERRORS";
export const REGISTER = "REGISTER";
export const REMOVE_SESSION_ERRORS = "REMOVE_SESSION_ERRORS";

export const receiveCurrentUser = (payload) => ({
  type: RECEIVE_CURRENT_USER,
  payload,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const registerUserThunk = (userData) => (dispatch) => {
  API.postNewUser(userData).then((user) => dispatch(registerUser(user)));
};

export const registerUser = (payload) => {
  return {
    type: REGISTER,
  };
};

// Logged in
export const authUser = (userData) => (dispatch) =>
  API.auth(userData).then(
    (res) => {
      const token = res.data;
      localStorage.setItem("jwtToken", token);
      API.setAuthToken(token);
      const decoded = jwt.verify(token, "Secret");
      console.log("decoded", decoded);
      dispatch(receiveCurrentUser(decoded));
    },
    (err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
  );

// Log user out
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  API.setAuthToken(false);
  dispatch(logoutCurrentUser());
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: RECEIVE_CURRENT_USER,
    payload: decoded,
  };
};

export const removeSessionErrors = () => ({
  type: REMOVE_SESSION_ERRORS,
});
