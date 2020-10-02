import React from "react";
import UserGreeting from "../UserGreeting";
import GuestGreeting from "../GuestGreeting";
import styles from "./register.module.css";
import RegistrationForm from "../forms/registrationForm";

class RegistrationPage extends React.Component {
  submit = (data) => {
    this.props.registerUser(data);
  };
  render() {
    return (
      <RegistrationForm
        registerUser={this.props.registerUser}
        onSubmit={this.submit}
      />
    );
  }
}

export default RegistrationPage;
