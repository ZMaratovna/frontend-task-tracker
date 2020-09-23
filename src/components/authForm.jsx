import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import myInput from "./inputComponent";
import { validate } from "../utils/formValidation";

class LoginForm extends Component {
  render() {
    console.log("Login from props", this.props);
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name='email'
          label='Email'
          component={myInput}
          type='text'
          placeholder='Email'
        />
        <Field
          name='password'
          label='Password'
          component={myInput}
          type='password'
          placeholder='Password'
        />
        <button type='submit' label='submit'>
          Submit
        </button>
      </form>
    );
  }
}

LoginForm = reduxForm({
  form: "login",
  validate,
})(LoginForm);

export default LoginForm;
