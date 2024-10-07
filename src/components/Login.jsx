import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    fetch(`http://localhost:8080/auth/login/local`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("result :>> ", result);
        localStorage.setItem("user", JSON.stringify(result.data.user));
        setUser(result.data.user);
        navigate("/admin");
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="form-container">
      <h1>LOGIN PAGE</h1>
      <form onSubmit={handleLoginFormSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="johnwick"
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
        />
        <br />
        <div className="button-container-center">
          <button type="submit" className="button-yellow" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </div>

        {error && <p>There is an error: {error}</p>}
      </form>
    </div>
  );
};

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default Login;
