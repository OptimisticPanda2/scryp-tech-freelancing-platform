import { useEffect, useState } from "react";

import axios from "axios";

import {
  FaGithub,
  FaGlobe,
  FaPlay,
  FaStar
} from "react-icons/fa";

import "./ServicesPage.css";

function ServicesPage() {

  const [services, setServices] =
    useState([]);

  // FETCH REAL SERVICES

  useEffect(() => {

    fetchServices();

  }, []);

  const fetchServices = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const response =
        await axios.get(

          "http://localhost:8080/services",

          {
            headers: {
              Authorization:
                `Bearer ${token}`
            }
          }

        );

      console.log(response.data);

      if (
        Array.isArray(response.data)
      ) {

        setServices(response.data);

      }

    } catch (error) {

      console.log(error);

    }

  };

  // DUMMY SHOWCASE SERVICES

  const demoServices = [

    {
      id:101,
      title:
        "Advanced JWT Authentication System",

      description:
        "Enterprise-grade authentication with JWT, refresh tokens and secure role-based authorization.",

      category:"Cybersecurity",

      techStack:
        "Spring Boot, JWT, MySQL",

      price:4999,

      githubLink:"#",

      portfolioLink:"#",

      demoVideoLink:"#"
    },

    {
      id:102,
      title:
        "Cybersecurity Penetration Testing",

      description:
        "Professional penetration testing with vulnerability analysis and advanced security auditing.",

      category:"Cybersecurity",

      techStack:
        "Kali Linux, OWASP",

      price:7999,

      githubLink:"#",

      portfolioLink:"#",

      demoVideoLink:"#"
    },

    {
      id:103,
      title:
        "Modern REST API Development",

      description:
        "Production-ready scalable REST APIs with Spring Boot and secure backend architecture.",

      category:"Backend Development",

      techStack:
        "Java, Spring Boot",

      price:3499,

      githubLink:"#",

      portfolioLink:"#",

      demoVideoLink:"#"
    }

  ];

  // MERGE REAL + DUMMY

  const allServices = [

    ...services,

    ...demoServices

  ];

  return (

    <div className="explore-page">

      {/* HERO */}

      <div className="explore-hero">

        <h1>
          Explore Technical Services 🚀
        </h1>

        <p>
          Discover futuristic cybersecurity,
          backend engineering, automation,
          authentication systems and elite
          technical freelancing services.
        </p>

      </div>

      {/* LOGIN NOTICE */}

      <div className="login-notice glass">

        <h2>
          Unlock Full SCRYP Experience 🔥
        </h2>

        <p>
          Login to interact with freelancers,
          send project requests, access
          premium technical services and
          experience the next generation
          cybersecurity freelancing platform.
        </p>

      </div>

      {/* SERVICES */}

      <div className="explore-grid">

        {

          allServices.map((service) => (

            <div
              className="explore-card glass"
              key={service.id}
            >

              {/* TOP */}

              <div className="card-top">

                <span>
                  {service.category}
                </span>

                <div className="rating">

                  <FaStar />

                  5.0

                </div>

              </div>

              {/* TITLE */}

              <h2>
                {service.title}
              </h2>

              {/* DESC */}

              <p>
                {service.description}
              </p>

              {/* PRICE */}

              <h3>
                ₹ {service.price}
              </h3>

              {/* TECH */}

              <div className="tech-stack">

                {service.techStack}

              </div>

              {/* LINKS */}

              <div className="explore-links">

                <a
                  href={service.githubLink}
                  target="_blank"
                  rel="noreferrer"
                >

                  <FaGithub />

                  GitHub

                </a>

                <a
                  href={service.portfolioLink}
                  target="_blank"
                  rel="noreferrer"
                >

                  <FaGlobe />

                  Portfolio

                </a>

                <a
                  href={service.demoVideoLink}
                  target="_blank"
                  rel="noreferrer"
                >

                  <FaPlay />

                  Demo

                </a>

              </div>

            </div>

          ))

        }

      </div>

    </div>

  );
}

export default ServicesPage;