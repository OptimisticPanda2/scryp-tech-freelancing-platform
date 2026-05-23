import { useEffect, useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

import "./ClientExploreServices.css";

function ClientExploreServices() {

  const [services, setServices] =
    useState([]);

  const [category, setCategory] =
    useState("");

  const [tech, setTech] =
    useState("");

  // FETCH SERVICES

  useEffect(() => {

    fetchServices();

  }, []);

  const fetchServices = async () => {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      const response =
        await axios.get(

          "http://localhost:8080/services",

          {
            headers:{
              Authorization:
              `Bearer ${token}`
            }
          }

        );

      console.log(response.data);

      // DUMMY SERVICES

      const dummyServices = [

        {
          id:1001,
          title:
          "Advanced Penetration Testing",

          description:
          "Professional cybersecurity testing for enterprise systems.",

          techStack:
          "Kali Linux",

          category:
          "Cybersecurity",

          price:15000,

          githubLink:"#"
        },

        {
          id:1002,
          title:
          "JWT Authentication API",

          description:
          "Secure authentication backend with Spring Boot and JWT.",

          techStack:
          "Spring Boot",

          category:
          "Backend Development",

          price:12000,

          githubLink:"#"
        },

        {
          id:1003,
          title:
          "Automation Testing Suite",

          description:
          "Automation scripts and QA pipelines for modern apps.",

          techStack:
          "Selenium",

          category:
          "Testing",

          price:18000,

          githubLink:"#"
        }

      ];

      setServices([

        ...response.data,

        ...dummyServices

      ]);

    } catch(error){

      console.log(error);

    }

  };

  // SEARCH CATEGORY

  const searchByCategory =
    async () => {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      const response =
        await axios.get(

          `http://localhost:8080/services/category/${category}`,

          {
            headers:{
              Authorization:
              `Bearer ${token}`
            }
          }

        );

      setServices(response.data);

    } catch(error){

      console.log(error);

    }

  };

  // SEARCH TECH

  const searchByTech =
    async () => {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      const response =
        await axios.get(

          `http://localhost:8080/services/tech/${tech}`,

          {
            headers:{
              Authorization:
              `Bearer ${token}`
            }
          }

        );

      setServices(response.data);

    } catch(error){

      console.log(error);

    }

  };

  return (

    <div className="client-services-page">

      {/* HERO */}

      <div className="services-hero">

        <h1>
          Explore Elite Services 🚀
        </h1>

        <p>
          Discover cybersecurity,
          backend, automation and
          premium technical solutions
        </p>

      </div>

      {/* SEARCH */}

      <div className="search-section glass">

        {/* CATEGORY */}

        <div className="search-box">

          <input
            type="text"

            placeholder=
            "Search By Category"

            value={category}

            onChange={(e)=>

              setCategory(
                e.target.value
              )

            }
          />

          <button
            onClick={
              searchByCategory
            }
          >

            Search

          </button>

        </div>

        {/* TECH */}

        <div className="search-box">

          <input
            type="text"

            placeholder=
            "Search By Tech Stack"

            value={tech}

            onChange={(e)=>

              setTech(
                e.target.value
              )

            }
          />

          <button
            onClick={
              searchByTech
            }
          >

            Search

          </button>

        </div>

      </div>

      {/* SERVICES */}

      <div className="services-grid">

        {

          services.map((service)=>(

            <div
              key={service.id}
              className=
              "service-card glass"
            >

              <h2>
                {service.title}
              </h2>

              <p>
                {service.description}
              </p>

              <div className="service-tags">

                <span>
                  {service.category}
                </span>

                <span>
                  {service.techStack}
                </span>

              </div>

              <h3>

                ₹ {service.price}

              </h3>

              {/* BUTTONS */}

              <div className="service-buttons">

                <a
                  href={
                    service.githubLink
                  }

                  target="_blank"

                  rel="noreferrer"
                >

                  GitHub

                </a>

                <Link
                  to={`/request/${service.id}`}
                  className="hire-btn"
                >

                  Ask For Work

                </Link>

              </div>

            </div>

          ))

        }

      </div>

    </div>

  );
}

export default ClientExploreServices;