import { Link, useNavigate } from "react-router-dom";

import "./DashboardNavbar.css";

function DashboardNavbar(){

  const navigate =
    useNavigate();

  const role =
    localStorage.getItem("role");

  const username =
    localStorage.getItem("username");

  /* LOGOUT */

  const logout = ()=>{

    localStorage.clear();

    navigate("/login");

  };

  return(

    <nav className="dashboard-navbar">

      {/* LOGO */}

      <Link
        to="/"
        className="logo"
      >

        SCRYP

      </Link>

      {/* LINKS */}

      <div className="nav-links">
        
        <Link to="/dashboard">
          Go To Dashboard
        </Link>


        <Link to="/dashboard/services">
          Explore Services
        </Link>

        <Link to="/requests">
          Requests
        </Link>

        <Link to="/profile">
          Profile
        </Link>

       
        <Link to="/">
          Home
        </Link>

      </div>

      {/* RIGHT */}

      <div className="nav-right">

       

        <button
          onClick={logout}
        >

          Logout

        </button>

      </div>

    </nav>

  );

}

export default DashboardNavbar;