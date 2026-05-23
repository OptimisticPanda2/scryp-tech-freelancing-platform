import "./Navbar.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar glass">

      <div className="logo">
        SCRYP
      </div>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/services">
          Explore
        </Link>

        <Link to="/login">
          Login
        </Link>

        <Link to="/register">
          SignUp
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;