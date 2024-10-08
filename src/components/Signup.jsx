import React from "react";

const Signup = () => {
  const handleSignupFormSubmit = (e) => {
    e.preventDefault();

    console.log("Signup form submitted!");

    console.log(e.target.firstName.value);
    console.log(e.target.lastName.value);
    console.log(e.target.userName.value);
    console.log(e.target.password.value);
  };

  return (
    <React.Fragment>
      <h1>SIGNUP PAGE</h1>
      <form onSubmit={handleSignupFormSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="John"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Wick"
            required
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="johnwick"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div>
          <button type="submit" className="button-yellow">
            Sign up
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Signup;
