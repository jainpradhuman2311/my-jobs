import "./Login.css";
import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <div className="login-form">
      <p className="login-text">Login</p>
      <form>
        <div>
          <label>Email address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
          ></input>
        </div>
        <div>
          <label>Password</label>
          <NavLink className="forgot-link" to="/forgot">
            Forgot password
          </NavLink>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          ></input>
        </div>
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
      <p className="login-bottom-text">
        New to MyJobs?
        <NavLink to="/signup">
          <span>Create an account</span>
        </NavLink>
      </p>
    </div>
  );
};

export default Login;
