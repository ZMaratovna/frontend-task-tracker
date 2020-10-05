import React from "react";
import LoginForm from "../forms/authForm";
import Box from "@material-ui/core/Box";
import Image from "../../img/good_team.svg";
import { useHistory } from "react-router-dom";
const AuthPage = (props) => {
  let history = useHistory();
  const submit = (formData) => {
    props.authUser(formData);
  };
  return !props.isLoggedIn ? (
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
      <LoginForm onSubmit={submit} />
    </Box>
  ) : (
    history.push("/projects")
  );
};

export default AuthPage;
