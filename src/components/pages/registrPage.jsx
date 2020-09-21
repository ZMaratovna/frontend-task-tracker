import React from "react";
import UserGreeting from "../UserGreeting";
import GuestGreeting from "../GuestGreeting";
import RegistrationForm from "../registration.component";

class RegistrationPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const isRegistr = this.props.isRegistr;
    let heading = null;
    let form = null;
    if (isRegistr) {
      heading = <UserGreeting user={this.props.state.username} />;
      form = null;
    } else {
      heading = <GuestGreeting />;
      form = (
        <RegistrationForm
          updateData={this.props.updateData}
          handleSubmit={this.props.handleSubmit}
        />
      );
    }
    return (
      <div>
        {heading}
        {form}
      </div>
    );
  }
}
export default RegistrationPage;
