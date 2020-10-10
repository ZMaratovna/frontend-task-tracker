import React from "react";
import { connect } from "react-redux";
import RegistrationPage from "./registrPage";
import { registerUserThunk } from "../../actions/session.actions";

const RegistrationPageContainer = (props) => {
  return (
    <RegistrationPage
      registerUser={props.registerUser}
      error={props.authError}
      isSuccess={props.isSuccess}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.Session.authError,
    isSuccess: state.Session.success,
  };
};
export default connect(mapStateToProps, { registerUser: registerUserThunk })(
  RegistrationPageContainer
);
