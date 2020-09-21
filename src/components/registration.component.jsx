import React from "react";

export default function RegistrationForm(props) {
  return (
    <div>
      <form className='send-form' onSubmit={(e) => props.handleSubmit(e)}>
        <label htmlFor='username'>Full name</label>
        <input
          id='username'
          name='username'
          type='text'
          placeholder='John Doe'
          onChange={(e) => props.updateData(e.target.name, e.target.value)}
        />
        <label htmlFor='position'>Choose a position:</label>
        <select
          id='position'
          name='position'
          value='manager'
          onChange={(e) => props.updateData(e.target.name, e.target.value)}
        >
          <option value='manager'>Manager</option>
          <option value='developer'>Developer</option>
        </select>

        <label htmlFor='email'>Login</label>
        <input
          id='email'
          name='email'
          type='text'
          placeholder='Email'
          onChange={(e) => props.updateData(e.target.name, e.target.value)}
        />

        <label htmlFor='password'>Password</label>
        <input
          id='password'
          name='password'
          type='password'
          onChange={(e) => props.updateData(e.target.name, e.target.value)}
        />
        <input type='submit' />
      </form>
      <h6>
        <a href='/auth'>Already have an account? Sign in</a>
      </h6>
    </div>
  );
}
