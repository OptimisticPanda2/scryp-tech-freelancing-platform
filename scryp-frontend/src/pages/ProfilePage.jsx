import { useEffect, useState } from "react";

import axios from "axios";

import DashboardNavbar
from "../components/DashboardNavbar";

import {
  FaUser,
  FaEnvelope,
  FaUserShield,
  FaCheckCircle,
  FaTimesCircle,
  FaCamera
} from "react-icons/fa";

import "./ProfilePage.css";

function ProfilePage() {

  const [profile, setProfile] =
    useState({

      name:"",
      email:"",
      role:"",
      verified:false,
      profilePhoto:""

    });

  const [image, setImage] =
    useState(null);

  const [preview, setPreview] =
    useState("");

  // FETCH PROFILE

  useEffect(() => {

    fetchProfile();

  }, []);

  const fetchProfile = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const response =
        await axios.get(

          "http://localhost:8080/my-profile",

          {
            headers:{
              Authorization:
                `Bearer ${token}`
            }
          }

        );

      console.log(response.data);

      setProfile(response.data);

    } catch(error){

      console.log(error);

    }

  };

  // HANDLE IMAGE

  const handleImage = (e) => {

    const file =
      e.target.files[0];

    setImage(file);

    setPreview(
      URL.createObjectURL(file)
    );

  };

  // UPLOAD PHOTO

  const uploadPhoto = async () => {

    try {

      if(!image){

        alert(
          "Please Select Image"
        );

        return;
      }

      const token =
        localStorage.getItem("token");

      const formData =
        new FormData();

      formData.append(
        "file",
        image
      );

      const response =
        await axios.post(

          "http://localhost:8080/upload-profile",

          formData,

          {
            headers:{
              Authorization:
                `Bearer ${token}`,

              "Content-Type":
                "multipart/form-data"
            }
          }

        );

      console.log(response.data);

      alert(
        "Photo Uploaded Successfully 🚀"
      );

      fetchProfile();

    } catch(error){

      console.log(error);

      alert(
        "Photo Upload Failed"
      );

    }

  };

  return (

    <div>

      <DashboardNavbar />

      <div className="profile-page">

        {/* BACKGROUND GLOW */}

        <div className="profile-glow one"></div>

        <div className="profile-glow two"></div>

        {/* CARD */}

        <div className="profile-card glass">

          {/* LEFT */}

          <div className="profile-left">

            {/* IMAGE */}

            <div className="profile-image">

              {

                preview

                ?

                <img
                  src={preview}
                  alt=""
                />

                :

                profile.profilePhoto

                ?

                <img
                  src={
                    `http://localhost:8080/${profile.profilePhoto}`
                  }
                  alt=""
                />

                :

                <FaUser />

              }

            </div>

            {/* NAME */}

            <h2>
              {profile.name}
            </h2>

            <p>
              Elite SCRYP Member
            </p>

            {/* BUTTON */}

            <label
              className="upload-btn"
            >

              <FaCamera />

              Choose Photo

              <input
                type="file"
                hidden
                onChange={handleImage}
              />

            </label>

            <button
              className="save-btn"
              onClick={uploadPhoto}
            >

              Upload Photo

            </button>

          </div>

          {/* RIGHT */}

          <div className="profile-right">

            <h1>
              My Cyber Profile 
            </h1>

            {/* INFO GRID */}

            <div className="profile-grid">

              {/* NAME */}

              <div className="info-card">

                <FaUser />

                <h3>
                  Full Name
                </h3>

                <p>
                  {profile.name}
                </p>

              </div>

              {/* EMAIL */}

              <div className="info-card">

                <FaEnvelope />

                <h3>
                  Email
                </h3>

                <p>
                  {profile.email}
                </p>

              </div>

              {/* ROLE */}

              <div className="info-card">

                <FaUserShield />

                <h3>
                  Role
                </h3>

                <p>
                  {profile.role}
                </p>

              </div>

              {/* VERIFIED */}

              <div className="info-card">

                {

                  profile.verified

                  ?

                  <FaCheckCircle />

                  :

                  <FaTimesCircle />

                }

                <h3>
                  Verification
                </h3>

                <p>

                  {

                    profile.verified

                    ?

                    "Verified User"

                    :

                    "Not Verified"

                  }

                </p>

              </div>

            </div>

            {/* ABOUT */}

            <div className="about-card">

              <h2>
                About SCRYP Identity
              </h2>

              <p>

                SCRYP is a futuristic
                technical freelancing
                platform where developers,
                cybersecurity engineers,
                backend architects and
                elite freelancers build
                trust through proof-based
                services and technical
                excellence.

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default ProfilePage;