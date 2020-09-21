import React from "react";
import AuthForm from "../auth.component";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

class AuthPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.state.isSignin || localStorage.getItem("isAuth")) {
      return <Redirect to='/projects' />;
    }
    return (
      <AuthForm
        handleSubmit={this.props.handleSubmit}
        authData={this.props.authData}
        state={this.props.state}
      />
    );
  }
}
export default AuthPage;
