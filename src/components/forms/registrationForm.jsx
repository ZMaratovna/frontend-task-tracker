import React, { useState, Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import { validate } from "../../utils/formValidation";
import myInput from "./inputComponent";
import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import styles from "../../styles/components/forms/RegisterStyle.js";

const RegistrationForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const [isRegister, setIsRegister] = useState(false);
  const useStyles = makeStyles(styles);

  const classes = useStyles();

  const renderRadioGroup = ({ input, meta }) => {
    return (
      <FormControl component='fieldset' className={classes.FormControl}>
        <RadioGroup
          aria-label='position'
          name='position'
          {...input}
          {...meta}
          valueSelected={input.value}
          onChange={(event, value) => input.onChange(value)}
        >
          <Fragment>
            <FormControlLabel
              value='developer'
              control={<Radio />}
              label='developer'
              className={classes.label}
            />
            <FormControlLabel
              value='manager'
              control={<Radio />}
              label='manager'
              className={classes.label}
            />
            {meta.error && meta.touched && (
              <div style={{ color: "#f50057", fontSize: "12px" }}>
                {meta.error}
              </div>
            )}
          </Fragment>
        </RadioGroup>
      </FormControl>
    );
  };

  return (
    <Container className={classes.formWrapper}>
      {!isRegister ? (
        <form
          className={classes.form}
          onSubmit={() => {
            handleSubmit();
            console.log("submit");
            setIsRegister(true);
          }}
        >
          <div>
            <Field
              className={classes.field}
              id='username'
              name='username'
              type='text'
              label='Full name'
              placeholder='Full name'
              component={myInput}
            />
          </div>
          <div>
            <Field
              name='email'
              component={myInput}
              className={classes.field}
              id='email'
              label='Email'
              type='text'
              placeholder='Email'
            />
          </div>
          <div>
            <Field
              name='password'
              className={classes.field}
              id='password'
              type='password'
              label='Password'
              placeholder='Password'
              component={myInput}
            />
          </div>
          <div>
            <Field name='position' component={renderRadioGroup}></Field>
          </div>
          <div>
            <Button
              type='submit'
              variant='contained'
              className={classes.button}
              disabled={submitting}
              fullWidth
            >
              {submitting ? "In progress…" : "Sign Up"}
            </Button>
            <Button
              type='button'
              fullWidth
              disabled={pristine || submitting}
              onClick={reset}
            >
              Clear Values
            </Button>
          </div>
        </form>
      ) : (
        <div className={classes.submitMessage}>
          {props.isSuccess && !props.error ? (
            <Typography>
              We sent you a email. Please, confirm your email address!
            </Typography>
          ) : (
            <div>
              <Typography>That user has already exist!</Typography>
            </div>
          )}
        </div>
      )}
    </Container>
  );
};

export default reduxForm({ form: "registration", validate })(RegistrationForm);
