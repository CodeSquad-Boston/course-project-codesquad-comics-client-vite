import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Signup = ({ setUser }) => {
  const navigate = useNavigate();

  const handleSignupFormSubmit = (e) => {
    e.preventDefault();

    const body = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      username: e.target.username.value,
      password: e.target.password.value,
    };

    console.log("body :>> ", JSON.stringify(body));

    fetch(`http://localhost:8080/signup`, {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("result :>> ", result);
        localStorage.setItem("user", JSON.stringify(result.data));
        setUser(result.data);
        navigate("/admin");
      })
      .catch();
  };

  return (
    <React.Fragment>
      <h1>SIGNUP PAGE</h1>
      <form onSubmit={handleSignupFormSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" id="firstName" placeholder="John" required />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" id="lastName" placeholder="Wick" required />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" placeholder="johnwick" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Enter a strong password" required />
        </div>
        <button type="submit">Sign up</button>
      </form>
    </React.Fragment>
  );
};

Signup.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default Signup;
