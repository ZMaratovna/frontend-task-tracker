import { API } from "../API/api";

import jwt_decode from "jwt-decode";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const GET_ERRORS = "GET_ERRORS";
export const REGISTER = "REGISTER";
export const REMOVE_SESSION_ERRORS = "REMOVE_SESSION_ERRORS";
export const INVALID_TOKEN = "INVALID_TOKEN";
export const invalidTokenThunk = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  dispatch(invalidToken());
};

export const invalidToken = (payload) => {
  return {
    type: INVALID_TOKEN,
    message: payload,
  };
};
export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const registerUserThunk = (userData) => (dispatch) => {
  API.postNewUser(userData).then((user) => {
    if (user === "That user already exisits!") {
      dispatch(invalidToken(user));
    } else {
      dispatch(registerUser(user));
    }
  });
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
      if (
        token === "Incorrect email or password" ||
        token === "Please confirm your email address before"
      ) {
        dispatch(invalidToken(token));
      } else {
        localStorage.setItem("jwtToken", token);
        API.setAuthToken(token);
        const decoded = jwt_decode(token, "Secret");
        dispatch(setCurrentUser(decoded));
      }
    },
    (err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
  );

export const authSuccess = (token) => (dispatch) => {
  console.log("authsuccess");
  if (token) {
    console.log(token);
    API.setAuthToken(token);
    const decoded = jwt_decode(token, "Secret");
    dispatch(setCurrentUser(decoded));
  } else {
    dispatch(logoutCurrentUser());
  }
};

// Log user out
export const logoutUser = () => (dispatch) => {
  console.log("LOGOUT USER");
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
