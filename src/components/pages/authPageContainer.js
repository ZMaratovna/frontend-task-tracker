import React from "react";
import { connect } from "react-redux";
import AuthPage from "./authPage";
import { authUser } from "../../actions/session.actions";

const AuthPageContainer = (props) => {
  console.log("authpage props", props);
  return (
    <>
      <AuthPage authUser={props.authUser} />
    </>
  );
};

export default connect(null, { authUser })(AuthPageContainer);
