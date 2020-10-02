import React from "react";
import { Field, reduxForm } from "redux-form";
import styles from "./forms.module.css";
import myInput from "./inputComponent";
import { validate } from "../../utils/formValidation";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const RegistrationForm = (props) => {
  const { handleSubmit } = props;

  // const useStyles = makeStyles((theme) => ({
  //   paper: {
  //     marginTop: theme.spacing(8),
  //     display: "flex",
  //     flexDirection: "column",
  //     alignItems: "center",
  //   },
  //   avatar: {
  //     margin: theme.spacing(1),
  //     backgroundColor: theme.palette.secondary.main,
  //   },
  //   form: {
  //     width: "100%", // Fix IE 11 issue.
  //     marginTop: theme.spacing(3),
  //   },
  //   submit: {
  //     margin: theme.spacing(3, 0, 2),
  //   },
  // }));

  // export default function SignUp() {
  //   const classes = useStyles();
  // }
  return (
    <form className={styles.sendForm} onSubmit={handleSubmit}>
      <div className={styles.nameGroup}>
        <Field
          id='username'
          name='username'
          type='text'
          label='Full name'
          placeholder='John Doe'
          component={myInput}
        />
        <div>
          <label>Position</label>
          <Field
            className={styles.select}
            id='position'
            name='position'
            label='Position'
            value='manager'
            component='select'
          >
            <option />
            <option value='manager'>Manager</option>
            <option value='developer'>Developer</option>
          </Field>
        </div>
      </div>

      <Field
        id='email'
        name='email'
        label='Email'
        type='text'
        placeholder='Email'
        component={myInput}
      />
      <Field
        id='password'
        name='password'
        type='password'
        label='Password'
        placeholder='Password'
        component={myInput}
      />
      <button className={styles.btnSubmit} type='submit'>
        Register
      </button>
    </form>
  );
};

export default reduxForm({ form: "registration", validate })(RegistrationForm);
