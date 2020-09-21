import React from "react";
import ReactDOM from "react-dom";

function UserGreeting(props) {
  return (
    <h1>
      Hello,{props.user}! Registration successfully completed! Please confirm
      your email address.
    </h1>
  );
}

export default UserGreeting;
