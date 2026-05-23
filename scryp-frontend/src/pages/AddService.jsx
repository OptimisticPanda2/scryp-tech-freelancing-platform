import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import DashboardNavbar from "../components/DashboardNavbar";

import "./AddService.css";

function AddService() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    title: "",
    description: "",
    price: "",
    category: "",
    deliveryDays: "",
    techStack: "",
    githubLink: "",
    demoVideoLink: "",
    portfolioLink: ""

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:e.target.value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try{

      // TOKEN

      const token =
        localStorage.getItem("token");

      console.log("TOKEN => ", token);

      // FINAL DATA

      const finalData = {

        ...formData,

        price:Number(formData.price),

        deliveryDays:
          Number(formData.deliveryDays)

      };

      console.log(finalData);

      const response = await axios.post(

        "http://localhost:8080/services",

        finalData,

        {

          headers:{

            Authorization:
              `Bearer ${token}`

          }

        }

      );

      console.log(response.data);

      alert(
        "Service Added Successfully 🚀"
      );

      navigate(
        "/freelancer-dashboard"
      );

    }
    catch(error){


      console.log(error);

      console.log(error.response);

      console.log(error.response?.data);

      alert(
        JSON.stringify(
          error.response?.data
        )
      );
}
  };

  return (

    <div>

      <DashboardNavbar />

      <div className="add-service-page">

        <div className="add-service-box glass">

          <h1>
            Add Service
          </h1>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="title"
              placeholder="Service Title"
              value={formData.title}
              onChange={handleChange}
              required
            />

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >

              <option value="">
                Select Category
              </option>

              <option value="Cybersecurity">
                Cybersecurity
              </option>

              <option value="Backend Development">
                Backend Development
              </option>

              <option value="API Development">
                API Development
              </option>

              <option value="Automation">
                Automation
              </option>

              <option value="Authentication Systems">
                Authentication Systems
              </option>

              <option value="FrontEnd Development">
                FrontEnd Development
              </option>

              <option value="Full Stack Development">
                Full Stack Development
              </option>

              <option value="DevOps & Cloud">
                DevOps & Cloud
              </option>

              <option value="Testing & QA">
                Testing & QA
              </option>

              <option value="Other">
                Other
              </option>

            </select>

            {
              formData.category ===
              "Other" && (

                <input
                  type="text"
                  name="category"
                  placeholder="Custom Category"
                  onChange={handleChange}
                  required
                />

              )
            }

            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="techStack"
              placeholder="Tech Stack"
              value={formData.techStack}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="deliveryDays"
              placeholder="Delivery Days"
              value={formData.deliveryDays}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="githubLink"
              placeholder="Github Link"
              value={formData.githubLink}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="demoVideoLink"
              placeholder="Demo Video Link (Optional)"
              value={formData.demoVideoLink}
              onChange={handleChange}
              optional
            />

            <input
              type="text"
              name="portfolioLink"
              placeholder="Portfolio Link"
              value={formData.portfolioLink}
              onChange={handleChange}
              required
            />

            <button type="submit">

              Add Service

            </button>

          </form>

        </div>

      </div>

    </div>

  );
}

export default AddService;