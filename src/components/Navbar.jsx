import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <p className="navbar-logo">
          My<span className="navbar-text">Jobs</span>
        </p>

        <NavLink to="/login" activeClassName="nav-btn-active">
          <button className="navbar-btn">Login/SignUp</button>
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
