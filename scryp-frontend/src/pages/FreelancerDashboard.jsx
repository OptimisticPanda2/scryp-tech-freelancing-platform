import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

import DashboardNavbar from "../components/DashboardNavbar";

import {
  FaCode,
  FaStar,
  FaProjectDiagram,
  FaShieldAlt
} from "react-icons/fa";

import "./FreelancerDashboard.css";

function FreelancerDashboard() {

  const [services, setServices] =
    useState([]);

  // FETCH SERVICES

  useEffect(() => {

    fetchServices();

  }, []);

  const fetchServices = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const response =
        await axios.get(

          "http://localhost:8080/my-services",

          {
            headers: {
              Authorization:
                `Bearer ${token}`
            }
          }

        );

      console.log(response.data);

      // SAFE CHECK

      if (
        Array.isArray(response.data)
      ) {

        setServices(response.data);

      } else {

        setServices([]);

      }

    } catch (error) {

      console.log(error);

      setServices([]);

    }

  };

  return (

    <div>

      <DashboardNavbar />

      <div className="freelancer-dashboard">

        {/* HERO */}

        <div className="freelancer-hero glass">

          <div className="hero-left">

            <h1>
              Welcome Back, Freelancer 🚀
            </h1>

            <p>
              Build secure systems for the next generation
            </p>

            <div className="hero-buttons">

              <Link
                to="/add-service"
                className="neon-btn"
              >

                Add More Service

              </Link>

              <Link
                to="/dashboard/services"
                className="glass hero-btn"
              >

                Explore Market

              </Link>

            </div>

          </div>

          {/* RIGHT */}

          <div className="hero-right">

            <div className="cyber-circle"></div>

            <div className="cyber-circle small"></div>

          </div>

        </div>

        {/* STATS */}

        <div className="stats-grid">

          <div className="stats-card glass">

            <FaCode />

            <h2>
              {services.length}
            </h2>

            <p>
              Services
            </p>

          </div>

          <div className="stats-card glass">

            <FaStar />

            <h2>
              5.0
            </h2>

            <p>
              Ratings
            </p>

          </div>

          <div className="stats-card glass">

            <FaProjectDiagram />

            <h2>
              12
            </h2>

            <p>
              Requests
            </p>

          </div>

          <div className="stats-card glass">

            <FaShieldAlt />

            <h2>
              ACTIVE
            </h2>

            <p>
              System Status
            </p>

          </div>

        </div>

        {/* ACTIONS */}

        <div className="freelancer-actions">

          

          <Link
            to="/dashboard/services"
            className="freelancer-card glass"
          >

            <h2>
              Explore Services
            </h2>

            <p>
              Browse technical marketplace
            </p>

          </Link>

          <Link
            to="/requests"
            className="freelancer-card glass"
          >

            <h2>
              Requests
            </h2>

            <p>
              Manage client requests
            </p>

          </Link>

          <Link
            to="/profile"
            className="freelancer-card glass"
          >

            <h2>
              Profile
            </h2>

            <p>
              Update your freelancer profile
            </p>

          </Link>

        </div>

        {/* SERVICES */}

        <div className="freelancer-section">

          <h2>
            My Services
          </h2>

          {

            services.length === 0 ? (

              <div className="empty-services glass">

                <h3>
                  No Services Added Yet
                </h3>

                <p>
                  Start building your technical reputation
                </p>

                <Link
                  to="/add-service"
                  className="neon-btn"
                >

                  Add First Service

                </Link>

              </div>

            ) : (

              <div className="services-grid">

                {

                  services.map((service) => (

                    <div
                      className="service-card glass"
                      key={service.id}
                    >

                      <h3>
                        {service.title}
                      </h3>

                      <p>
                        {service.description}
                      </p>

                      <h4>
                        ₹ {service.price}
                      </h4>

                      <span>
                        {service.category}
                      </span>

                      <p>
                        <strong>
                          Tech Stack:
                        </strong>

                        {" "}

                        {service.techStack}
                      </p>

                      <div className="service-links">

                        <a
                          href={service.githubLink}
                          target="_blank"
                          rel="noreferrer"
                        >

                          GitHub

                        </a>

                        <a
                          href={service.portfolioLink}
                          target="_blank"
                          rel="noreferrer"
                        >

                          Portfolio

                        </a>

                        <a
                          href={service.demoVideoLink}
                          target="_blank"
                          rel="noreferrer"
                        >

                          Demo

                        </a>

                      </div>

                    </div>

                  ))

                }

              </div>

            )

          }

        </div>

      </div>

    </div>

  );
}

export default FreelancerDashboard;