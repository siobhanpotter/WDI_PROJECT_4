import React from 'react';


const RegisterForm = ({ handleChange, handleSubmit, user }) => {
// const RegisterForm = () => {
  return (
    <div>
      <h1>Register Form</h1>
      <form onSubmit={handleSubmit}>
        {/* add style to div */}
        <div >
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={handleChange}
            value={user.username}
            className="form-control"
          />
        </div>
        <div >
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
        <div >
          <input
            type="password"
            name="passwordConfirmation"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={user.passwordConfirmation}
            className="form-control"
          />
        </div>

        <button>Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
