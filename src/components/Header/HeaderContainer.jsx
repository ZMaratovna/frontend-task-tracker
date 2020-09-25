import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
class HeaderContainer extends React.Component {
  render() {
    return <Header isLoggedIn={this.props.isLoggedIn} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: Boolean(state.Session.id),
  };
};
export default connect(mapStateToProps, null)(HeaderContainer);
