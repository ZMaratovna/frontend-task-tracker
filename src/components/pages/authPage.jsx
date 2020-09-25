import React from "react";
import LoginForm from "../forms/authForm";
import { API } from "../../API/api";

class AuthPage extends React.Component {
  submit = (formData) => {
    this.props.authUser(formData);
    console.log("sunmit auth form");
  };

  render() {
    {
      return !this.props.isLoggedIn ? (
        <div>
          <LoginForm onSubmit={this.submit} />
        </div>
      ) : (
        (window.location.href = "/projects")
      );
    }
  }
}

export default AuthPage;
