import { useEffect, useState } from "react";

import axios from "axios";

import {
  FaGithub,
  FaGlobe,
  FaPlay,
  FaStar
} from "react-icons/fa";

import DashboardNavbar
from "../components/DashboardNavbar";

import "./DashboardServices.css";

function DashboardServices() {

  const [services, setServices] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [tech, setTech] =
    useState("");

  useEffect(() => {

    fetchServices();

  }, []);

  // FETCH SERVICES

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

      // SAFE RESPONSE

      if (
        Array.isArray(response.data)
      ) {

        setServices(response.data);

      }

      else if (
        Array.isArray(response.data.content)
      ) {

        setServices(
          response.data.content
        );

      }

      else {

        setServices([]);

      }

    } catch (error) {

      console.log(error);

      setServices([]);

    }

  };

  // DUMMY SERVICES

  const dummyServices = [

    {
      id:1001,

      title:
        "AI Automation System",

      description:
        "Modern AI automation workflows and intelligent scripting systems.",

      category:
        "Automation",

      techStack:
        "Python, AI",

      price:4500,

      githubLink:"#",

      portfolioLink:"#",

      demoVideoLink:"#"
    },

    {
      id:1002,

      title:
        "Cybersecurity Penetration Testing",

      description:
        "Professional vulnerability analysis and penetration testing.",

      category:
        "Cybersecurity",

      techStack:
        "Kali Linux, OWASP",

      price:6500,

      githubLink:"#",

      portfolioLink:"#",

      demoVideoLink:"#"
    },

    {
      id:1003,

      title:
        "Secure Backend APIs",

      description:
        "Production-grade REST APIs with advanced security.",

      category:
        "Backend Development",

      techStack:
        "Spring Boot",

      price:5500,

      githubLink:"#",

      portfolioLink:"#",

      demoVideoLink:"#"
    }

  ];

  // MERGE

  const allServices = [

    ...services,

    ...dummyServices

  ];

  // FILTER

  const filteredServices =
    allServices.filter((service) => {

      return (

        service.title
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          )

        &&

        service.category
          ?.toLowerCase()
          .includes(
            category.toLowerCase()
          )

        &&

        service.techStack
          ?.toLowerCase()
          .includes(
            tech.toLowerCase()
          )

      );

    });

  return (

    <div>

      <DashboardNavbar />

      <div className="dashboard-services">

        {/* HERO */}

        <div className="services-hero">

          <h1>
            SCRYP Marketplace 🚀
          </h1>

          <p>
            Explore futuristic technical
            freelancing services from elite
            cybersecurity professionals and
            developers.
          </p>

        </div>

        {/* SEARCH */}

        <div className="search-section">

          <input
            type="text"
            placeholder="Search Services..."
            value={search}
            onChange={(e)=>
              setSearch(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Search By Category..."
            value={category}
            onChange={(e)=>
              setCategory(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Search By Tech Stack..."
            value={tech}
            onChange={(e)=>
              setTech(e.target.value)
            }
          />

        </div>

        {/* SERVICES */}

        <div className="services-grid">

          {

            filteredServices.map((service) => (

              <div
                className="market-card glass"
                key={service.id}
              >

                {/* TOP */}

                <div className="market-top">

                  <span>
                    {service.category}
                  </span>

                  <div className="market-rating">

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

                <div className="market-tech">

                  {service.techStack}

                </div>

                {/* LINKS */}

                <div className="market-links">

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

    </div>

  );
}

export default DashboardServices;