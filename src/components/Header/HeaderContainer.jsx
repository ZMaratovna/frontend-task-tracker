import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/session.actions";
const HeaderContainer = (props) => {
  console.log("header  container props", props.isLoggedIn);
  return (
    <Header
      isLoggedIn={props.isLoggedIn}
      logout={props.logoutUser}
      userName={props.userName}
      position={props.position}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: Boolean(state.Session.id),
    userName: state.Session.username,
    position: state.Session.position,
  };
};
export default connect(mapStateToProps, { logoutUser })(HeaderContainer);
