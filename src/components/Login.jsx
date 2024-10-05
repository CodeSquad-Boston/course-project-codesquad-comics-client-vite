const Login = () => {
  const handleLoginFormSubmit = (e) => {
    e.preventDefault();

    console.log("Login form submitted!");

    console.log(e.target.username.value);
    console.log(e.target.password.value);
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
          <input type="submit" className="button-yellow" />
        </div>
      </form>
    </div>
  );
};

export default Login;
