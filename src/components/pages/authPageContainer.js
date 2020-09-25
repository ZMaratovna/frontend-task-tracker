import React from "react";
import { connect } from "react-redux";
import AuthPage from "./authPage";
import { authSuccess } from "../../actions/session.actions";
import { authUser } from "../../actions/session.actions";

class AuthPageContainer extends React.Component {
  render() {
    return (
      <>
        <AuthPage
          authSuccess={this.props.authSuccess}
          authUser={this.props.authUser}
          isLoggedIn={this.props.isLoggedIn}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: Boolean(state.Session.id),
  };
};

export default connect(mapStateToProps, { authUser, authSuccess })(
  AuthPageContainer
);
