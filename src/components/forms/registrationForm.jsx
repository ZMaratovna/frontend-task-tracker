import React from "react";
import { Field, reduxForm } from "redux-form";
import myInput from "./inputComponent";
import { validate } from "../../utils/formValidation";

class RegistrationForm extends React.Component {
  render() {
    console.log("registration form props", this.props);
    const { handleSubmit } = this.props;

    return (
      <form className='send-form' onSubmit={handleSubmit}>
        <Field
          id='username'
          name='username'
          type='text'
          label='Full name'
          placeholder='John Doe'
          component={myInput}
        />
        <Field
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
          component={myInput}
        />
        <button type='submit'>Register</button>
      </form>
    );
  }
}

export default reduxForm({ form: "registration", validate })(RegistrationForm);
