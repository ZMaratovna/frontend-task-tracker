import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Auth = ({ component: Component, path, isLoggedIn, exact }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) =>
      !isLoggedIn ? <Component {...props} /> : <Redirect to='/projects' />
    }
  />
);

const Protected = ({ component: Component, path, isLoggedIn }) => (
  <Route
    path={path}
    render={(props) => {
      return isLoggedIn ? <Component {...props} /> : <Redirect to='/auth' />;
    }}
  />
);

const mapStateToProps = (state) => ({
  isLoggedIn: Boolean(state.Session.id),
});

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(
  connect(mapStateToProps, null)(Protected)
);
