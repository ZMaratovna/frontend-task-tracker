import React from "react";
import AuthForm from "../authForm";
import LoginForm from "../authForm";
import { API } from "../../API/api";

class AuthPage extends React.Component {
  submit = (formData) => {
    this.props.authUser(formData);
  };

  render() {
    console.log("authForm propas", this.props);
    return <LoginForm onSubmit={this.submit} />;
  }
}
export default AuthPage;
