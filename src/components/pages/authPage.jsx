import React from "react";
import LoginForm from "../forms/authForm";
import { Container, Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../styles/pages/forms_pages";
import Footer from "../Footer/Footer";
const AuthPage = (props) => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  let history = useHistory();
  const submit = (formData) => {
    props.authUser(formData);
  };
  return !props.isLoggedIn ? (
    <Container>
      <Paper elevation={0} className={classes.pageContainer}>
        <div className={classes.wave}></div>
        <LoginForm
          onSubmit={submit}
          authError={props.error}
          className={classes.form}
        />
      </Paper>

      <Footer />
    </Container>
  ) : (
    history.push("/projects")
  );
};

export default AuthPage;
