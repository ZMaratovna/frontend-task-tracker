import React from "react";
import { Field, reduxForm } from "redux-form";
import myInput from "./inputComponent";
import { validate } from "../../utils/formValidation";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../styles/components/forms/AuthStyle.js";
const LoginForm = (props) => {
  console.log("authprops", props);
  const { handleSubmit, submitting } = props;
  const useStyles = makeStyles(styles);

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
