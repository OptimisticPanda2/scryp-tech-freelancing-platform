import { useState } from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  FaArrowLeft
} from "react-icons/fa";

import API from "../services/api";

import "./LoginPage.css";

import loginVideo from "../assets/videos/loginVideo.mp4";

function LoginPage() {

  const navigate = useNavigate();

  // STATES

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  // LOGIN

  const handleLogin = async (e) => {

  e.preventDefault();

  try {

    setLoading(true);

    setMessage("");

    // API CALL

    const response =
      await API.post(

        "/auth/login",

        {
          email,
          password
        }

      );

    console.log(response.data);

    /*
      BACKEND RESPONSE:
      {
        "JWT_TOKEN":
        "Welcome Freelancer"
      }
    */

    // TOKEN EXTRACT

    const token =
      Object.keys(
        response.data
      )[0];

    // MESSAGE EXTRACT

    const loginMessage =
      response.data[token];

    console.log(
      "TOKEN => ",
      token
    );

    console.log(
      "MESSAGE => ",
      loginMessage
    );

    // SAVE TOKEN

    localStorage.setItem(
      "token",
      token
    );

    // SAVE EMAIL

    localStorage.setItem(
      "email",
      email
    );

    // SAVE MESSAGE

    localStorage.setItem(
      "message",
      loginMessage
    );

    // ROLE SAVE

    if(

      loginMessage.includes(
        "Freelancer"
      )

    ){

      localStorage.setItem(
        "role",
        "FREELANCER"
      );

      navigate(
        "/freelancer-dashboard"
      );

    } else {

      localStorage.setItem(
        "role",
        "CLIENT"
      );

      navigate(
        "/client-dashboard"
      );

    }

  } catch (error) {

    console.log(error);

    setMessage(
      "Invalid Credentials"
    );

  } finally {

    setLoading(false);

  }

};

  return (

    <div className="login-page">

      {/* HOME BUTTON */}

      <Link
        to="/"
        className="back-home-btn"
      >

        <FaArrowLeft />

        Home

      </Link>

      {/* LEFT SIDE */}

      <div className="login-left">

        <form
          className="login-card glass"
          onSubmit={handleLogin}
        >

          <h1>
            SCRYP LOGIN
          </h1>

          <p className="login-subtitle">

            Secure Access To
            Technical Marketplace

          </p>

          {
            message && (

              <p className="error-text">

                {message}

              </p>

            )
          }

          {/* EMAIL */}

          <div className="input-group">

            <label>
              Email
            </label>

            <input
              type="email"

              placeholder=
              "Enter your email"

              value={email}

              onChange={(e)=>

                setEmail(
                  e.target.value
                )

              }

              required
            />

          </div>

          {/* PASSWORD */}

          <div className="input-group">

            <label>
              Password
            </label>

            <input
              type="password"

              placeholder=
              "Enter password"

              value={password}

              onChange={(e)=>

                setPassword(
                  e.target.value
                )

              }

              required
            />

          </div>

          {/* LOGIN BUTTON */}

          <button
            className=
            "neon-btn login-btn"

            type="submit"
          >

            {
              loading

                ? "Logging In..."

                : "Login"
            }

          </button>

          {/* LINKS */}

          <div className="login-links">

            <Link to="/forgot-password">

              Forgot Password?

            </Link>

            <p>

              New User?

              {" "}

              <Link to="/register">

                Create Account

              </Link>

            </p>

          </div>

        </form>

      </div>

      {/* RIGHT SIDE */}

      <div className="login-right">

        {/* VIDEO */}

        <video

          src={loginVideo}

          autoPlay
          muted
          loop
          playsInline

          className="login-video"

        />

        {/* OVERLAY */}

        <div className=
        "video-dark-overlay">

        </div>

        {/* CONTENT */}

        <div
          className=
          "login-video-content"
        >

          <h2>

            Secure Technical Freelancing

          </h2>

          <p>

            For the tech minds who code, create, and innovate.

          </p>

        </div>

      </div>

    </div>

  );
}

export default LoginPage;