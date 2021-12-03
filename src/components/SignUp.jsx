import { NavLink } from "react-router-dom";
import "./SignUp.css";
const SignUp = () => {
  return (
    <div className="signup-form">
      <p className="signup-text">SignUp</p>
      <form>
        <p>I'm</p>
        <div className="signup-select-btn">
          <button className="recrutier">Recrutier</button>
          <button className="candidate">Candidate</button>
        </div>

        <div>
          <label>Full Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Email Address</label>
          <input type="email" />
        </div>
        <div className="signup-password">
          <div>
            <label>Password</label>
            <input type="password" />
          </div>
          <div>
            <label>Confirm Password</label>
            <input type="password" />
          </div>
        </div>
        <div>
          <label>Skills</label>
          <input type="text" />
        </div>
        <center>
          <button className="signup-btn" type="submit">
            SignUp
          </button>
        </center>
      </form>
      <p className="signup-bottom-text">
        Have an account?{" "}
        <NavLink to="/login">
          <span>Login</span>{" "}
        </NavLink>
      </p>
    </div>
  );
};

export default SignUp;
