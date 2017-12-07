import React from 'react';

const LoginForm = ({ handleChange, handleSubmit, user }) => {
// const LoginForm = () => {
  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>

        {/* add class to div to style */}
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={user.email}
            className="form-control"
          />
        </div>
        <div >
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={user.password}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
