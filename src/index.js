import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import configureStore from "./store/store";
import { API } from "./API/api";
import jwt from "jsonwebtoken";
import { setCurrentUser, logoutUser } from "./actions/session.actions";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  // Check for token
  if (localStorage.jwtToken) {
    // Set auth token header auth
    API.setAuthToken(localStorage.jwtToken);
    // Decode token and get user info and exp
    const decoded = jwt.verify(localStorage.jwtToken, "Secret");
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());
      // Redirect to login
      window.location.href = "/auth";
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
