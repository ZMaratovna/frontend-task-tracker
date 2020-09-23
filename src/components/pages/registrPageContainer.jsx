import React from "react";
import { connect } from "react-redux";
import RegistrationPage from "./registrPage";
import { registerUserThunk } from "../../actions/session.actions";

const RegistrationPageContainer = (props) => {
  return <RegistrationPage registerUser={props.registerUser} />;
};

export default connect(null, { registerUser: registerUserThunk })(
  RegistrationPageContainer
);
