import React from "react";
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

const RegistrationForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "400px",
    },
    field: {
      // padding: theme.spacing(3),
      marginBottom: "10px",
      height: "70px",
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    formWrapper: {
      display: "flex",
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
    FormControl: {
      marginTop: "30px",
      marginBottom: "20px",
    },
    form: {
      width: "70%",
    },
  }));

  const classes = useStyles();

  const renderRadioGroup = ({ input, ...rest }) => {
    return (
      <FormControl component='fieldset' className={classes.FormControl}>
        <RadioGroup
          aria-label='position'
          name='position'
          {...input}
          {...rest}
          valueSelected={input.value}
          onChange={(event, value) => input.onChange(value)}
        >
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
        </RadioGroup>
      </FormControl>
    );
  };

  return (
    <Container className={classes.formWrapper}>
      <form className={classes.form} onSubmit={handleSubmit}>
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
            variant='contained'
            className={classes.button}
            disabled={submitting}
            color='secondary'
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
    </Container>
  );
};

export default reduxForm({ form: "registration", validate })(RegistrationForm);
