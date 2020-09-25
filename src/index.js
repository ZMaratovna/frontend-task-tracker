import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import configureStore from "./store/store";
import { API } from "./API/api";
import jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";
import {
  setCurrentUser,
  logoutUser,
  authSuccess,
  authUser,
} from "./actions/session.actions";

document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("jwtToken");
  const store = configureStore();
  //Check for token
  if (token) {
    // Set auth token header auth
    API.setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());
      // Redirect to login
      window.location.href = "/auth";
    } else {
      store.dispatch(authSuccess(token));
    }
  }

  ReactDOM.render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
    document.getElementById("root")
  );
});
