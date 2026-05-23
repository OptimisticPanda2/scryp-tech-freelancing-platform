import { Link } from "react-router-dom";

import DashboardNavbar from "../components/DashboardNavbar";

import {
  FaRocket,
  FaShieldAlt,
  FaCode,
  FaUserSecret,
  FaArrowRight
} from "react-icons/fa";

import "./Dashboard.css";

function ClientDashboard() {

  return (

    <div>

      <DashboardNavbar />

      <div className="client-dashboard">

        {/* HERO PANEL */}

        <div className="hero-panel glass">

          <div className="hero-content">

            <span className="hero-badge">

              SCRYP MARKETPLACE

            </span>

            <h1>
              Hire Elite Technical Freelancers
            </h1>

            <p>
              Cybersecurity • APIs • Automation • Backend Systems
            </p>

            <div className="hero-actions">

              <Link
                to="/dashboard/services"
                className="neon-btn"
              >

                Explore Services

              </Link>

              <Link
                to="/requests"
                className="hero-link"
              >

                View Requests

                <FaArrowRight />

              </Link>

            </div>

          </div>

          {/* GLOW */}

          <div className="hero-orb cyan"></div>

          <div className="hero-orb purple"></div>

        </div>

        {/* TOP GRID */}

        <div className="top-grid">

          {/* PROFILE */}

          <div className="profile-widget glass">

            <div className="widget-icon">

              <FaUserSecret />

            </div>

            <h2>
              Client Access Active
            </h2>

            <p>
              Verified marketplace access enabled
            </p>

            <Link
              to="/profile"
              className="widget-link"
            >

              Manage Profile

            </Link>

          </div>

          {/* REQUEST */}

          <div className="request-widget glass">

            <div className="widget-top">

              <FaRocket />

              <span>
                LIVE STATUS
              </span>

            </div>

            <h2>
              0 Active Requests
            </h2>

            <p>
              Track all project activities here
            </p>

          </div>

        </div>

        {/* BIG MARKETPLACE PANEL */}

        <div className="marketplace-panel glass">

          <div className="market-left">

            <h2>
              Explore Technical Marketplace
            </h2>

            <p>
              Search highly skilled cybersecurity and backend freelancers
            </p>

            <Link
              to="/dashboard/services"
              className="market-btn"
            >

              Open Marketplace

            </Link>

          </div>

          <div className="market-right">

            <div className="market-circle"></div>

          </div>

        </div>

        {/* TECH STACK */}

        <div className="stack-section">

          <h2>
            Popular Technologies
          </h2>

          <div className="stack-grid">

            <div className="stack-card glass">

              <FaCode />

              <span>
                React
              </span>

            </div>

            <div className="stack-card glass">

              <FaShieldAlt />

              <span>
                Cybersecurity
              </span>

            </div>

            <div className="stack-card glass">

              <FaRocket />

              <span>
                APIs
              </span>

            </div>

            <div className="stack-card glass">

              <FaCode />

              <span>
                Spring Boot
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default ClientDashboard;