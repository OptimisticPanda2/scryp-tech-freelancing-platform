import { useState } from "react";

import API from "../services/api";

import "./RequestsPage.css";

function RequestsPage({ serviceId }) {

  const [formData, setFormData] =
    useState({

      serviceId: serviceId,

      projectTitle: "",

      description: "",

      budget: "",

      status: "PENDING"

    });

  const [loading, setLoading] =
    useState(false);

  // HANDLE CHANGE

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value

    });

  };

  // SEND REQUEST

  const sendRequest =
    async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const token =
        localStorage.getItem(
          "token"
        );

      console.log(formData);

      const response =
        await API.post(

          "/project-request",

          formData,

          {
            headers:{
              Authorization:
              `Bearer ${token}`
            }
          }

        );

      console.log(response.data);

      alert(
        "Request Sent Successfully 🚀"
      );

      // RESET FORM

      setFormData({

        serviceId: serviceId,

        projectTitle: "",

        description: "",

        budget: "",

        status: "PENDING"

      });

    } catch(error){

      console.log(error);

      alert(
        "Failed To Send Request"
      );

    } finally{

      setLoading(false);

    }

  };

  return (

    <div className="request-page">

      {/* CARD */}

      <div className="request-card glass">

        <h1>
          Send Project Request 🚀
        </h1>

        <p>
          Collaborate securely with elite developers
        </p>

        <form
          onSubmit={sendRequest}
        >

          {/* TITLE */}

          <input
            type="text"

            name="projectTitle"

            placeholder=
            "Project Title"

            value={
              formData.projectTitle
            }

            onChange={handleChange}

            required
          />

          {/* DESCRIPTION */}

          <textarea

            name="description"

            placeholder=
            "Describe Your Project..."

            value={
              formData.description
            }

            onChange={handleChange}

            required

          />

          {/* BUDGET */}

          <input
            type="number"

            name="budget"

            placeholder=
            "Project Budget"

            value={
              formData.budget
            }

            onChange={handleChange}

            required
          />

          {/* BUTTON */}

          <button
            type="submit"
            className="request-btn"
          >

            {

              loading

              ?

              "Sending..."

              :

              "Send Request"

            }

          </button>

        </form>

      </div>

    </div>

  );
}

export default RequestsPage;