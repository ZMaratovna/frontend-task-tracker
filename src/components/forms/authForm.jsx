import React from "react";
import { Field, reduxForm } from "redux-form";
import myInput from "./inputComponent";
import { validate } from "../../utils/formValidation";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import { makeStyles } from "@material-ui/core/styles";

const LoginForm = (props) => {
  console.log("authprops", props);
  const { handleSubmit, submitting } = props;
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "400px",
    },
    field: {
      marginBottom: "10px",
      height: "70px",
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    formWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "50px 20px",
      width: "400px",
      border: "1px solid #3f51b5",
      borderRadius: "10px",
      boxShadow: "1px 1px 2px #3f51b5",
      backgroundColor: "rgba(255,255,255,0.9)",
    },
    label: {
      color: "rgba(100, 100, 100, 1)",
    },
    form: {
      width: "70%",
    },
    comment: {
      fontSize: "12px",
      color: "rgb(52,53,64)",
      marginTop: "10px",
    },
    commentLink: {
      padding: " 0px  10px",
      color: "#3f51b5",
    },
    button: {
      marginTop: "20px",
    },
    error: {
      fontSize: "12px",
      color: "#f50057",
    },
  }));

  const classes = useStyles();
  return (
    <Container className={classes.formWrapper}>
      {props.authError ? (
        <div className={classes.error}>{props.authError}</div>
      ) : (
        <div></div>
      )}
      <form onSubmit={handleSubmit}>
        <Field
          className={classes.field}
          name='email'
          label='Email'
          component={myInput}
          type='text'
          placeholder='Email'
        />
        <Field
          className={classes.field}
          name='password'
          label='Password'
          component={myInput}
          type='password'
          placeholder='Password'
        />
        <Button
          type='submit'
          variant='contained'
          className={classes.button}
          disabled={submitting}
          color='secondary'
          fullWidth
        >
          {submitting ? "In progress…" : "Log in"}
        </Button>
        <Typography className={classes.comment}>
          Have not account yet?
          <Link
            className={classes.commentLink}
            href='/register'
            color='inherit'
          >
            SIGN UP
          </Link>
        </Typography>
      </form>
    </Container>
  );
};

export default reduxForm({
  form: "login",
  validate,
})(LoginForm);
