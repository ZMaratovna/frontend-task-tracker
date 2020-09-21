import React from "react";

export default function AuthForm(props) {
  return (
    <div>
      <form
        className='auth-form'
        onSubmit={(e) => props.handleSubmit(e)}
        action='/projects'
      >
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          name='email'
          type='text'
          placeholder='Email'
          value={props.state.email}
          onChange={(e) => props.authData(e.target.name, e.target.value)}
        />

        <label htmlFor='password'>Password</label>
        <input
          id='password'
          name='password'
          type='password'
          value={props.state.password}
          onChange={(e) => props.authData(e.target.name, e.target.value)}
        />
        <input type='submit' value='Sign in' />
      </form>
    </div>
  );
}
