const Login = () => {
  return (
    <div className="container-content">
      <div className="form-container">
        <h1>LOGIN PAGE</h1>
        <form action="#">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="johnwick"
            required
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter a strong password"
            required
          />
          <br />
          <div className="button-container-center">
            <input className="button-yellow" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
