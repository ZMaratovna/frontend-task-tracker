import React from "react";
import RegistrationForm from "../forms/registrationForm";
import Box from "@material-ui/core/Box";
import Image from "../../img/good_team.svg";

class RegistrationPage extends React.Component {
  submit = (data) => {
    this.props.registerUser(data);
  };
  render() {
    return (
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          backgroundImage: `url(${Image})`,
        }}
      >
        <RegistrationForm
          isSuccess={this.props.isSuccess}
          registerUser={this.props.registerUser}
          onSubmit={this.submit}
          error={this.props.error}
        />
      </Box>
    );
  }
}

export default RegistrationPage;
