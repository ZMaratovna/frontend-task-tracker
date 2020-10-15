import React from "react";
import { connect } from "react-redux";
import AuthPage from "./authPage";
import { authSuccess } from "../../actions/session.actions";
import { authUser } from "../../actions/session.actions";

const AuthPageContainer = (props) => {
  return (
    <>
      <AuthPage
        authSuccess={props.authSuccess}
        authUser={props.authUser}
        isLoggedIn={props.isLoggedIn}
        error={props.authError}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: Boolean(state.Session.id),
    authError: state.Session.authError,
  };
};

export default connect(mapStateToProps, { authUser, authSuccess })(
  AuthPageContainer
);
