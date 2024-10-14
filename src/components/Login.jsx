import PropTypes from "prop-types";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Login = ({ setUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();

    const body = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    setIsLoading(true);

    fetch(`${API_BASE_URL}/auth/login/local`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem("user", JSON.stringify(result.data.user));
        setUser(result.data.user);
        navigate("/admin");
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  const redirectNote = `Don't have an account?`;

  return (
    <main>
      <div className="form-container">
        <h1>LOGIN PAGE</h1>
        <form onSubmit={handleLoginFormSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="johnwick"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="button-container-center">
            <button
              type="submit"
              className="button-yellow"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>

          {error && <p>There is an error: {error}</p>}
        </form>
        <p className="redirect-text">
          {redirectNote} <Link to="/signup">Signup</Link>
        </p>
      </div>
    </main>
  );
};

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default Login;
