import React from "react";
import RegistrationForm from "../forms/registrationForm";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../styles/pages/forms_pages";
import { Container, Paper } from "@material-ui/core";
import Footer from "../Footer/Footer";

const RegistrationPage = (props) => {
  const submit = (data) => {
    props.registerUser(data);
  };
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <Container>
      <Paper elevation={0} className={classes.pageContainer}>
        <div className={classes.wave}></div>
        <RegistrationForm
          isSuccess={props.isSuccess}
          registerUser={props.registerUser}
          onSubmit={submit}
          error={props.error}
        />
      </Paper>
      <Footer />
    </Container>
  );
};

export default RegistrationPage;
