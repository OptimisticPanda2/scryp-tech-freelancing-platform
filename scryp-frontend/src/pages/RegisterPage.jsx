import { useState } from "react";

import { Link } from "react-router-dom";

import API from "../services/api";

import "./RegisterPage.css";

import registerVideo from "../assets/videos/registerVideo.mp4";

function RegisterPage() {

  // STATES

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [role, setRole] = useState("CLIENT");

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const [showPassword,setShowPassword] =
    useState(false);

  const [showConfirmPassword,setShowConfirmPassword] =
    useState(false);

  // REGISTER FUNCTION

  const handleRegister = async (e) => {

    e.preventDefault();

    // PASSWORD CHECK

    if(password !== confirmPassword){

      setMessage("Passwords do not match");

      return;
    }

    try {

      setLoading(true);

      setMessage("");

      const response = await API.post("/auth/register", {

        name,
        email,
        password,
        role

      });

      console.log(response.data);

      setMessage("Registration Successful , Login to Continue");
      

    } catch (error) {

      console.log(error);

      setMessage("Registration Failed");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="register-page">

      {/* HOME BUTTON */}

      <Link
        to="/"
        className="home-btn"
      >
        Home
      </Link>

      {/* LEFT */}

      <div className="register-left">

        <form
          className="register-card"
          onSubmit={handleRegister}
        >

          <h1>
            CREATE ACCOUNT
          </h1>

          {
            message && (
              <p className="register-message">
                {message}
              </p>
            )
          }

          {/* NAME */}

          <div className="input-group">

            <label>
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"

              value={name}

              onChange={(e) => setName(e.target.value)}
            />

          </div>

          {/* EMAIL */}

          <div className="input-group">

            <label>
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"

              value={email}

              onChange={(e) => setEmail(e.target.value)}
            />

          </div>

          {/* PASSWORD */}

          <div className="input-group">

            <label>
              Password
            </label>

            <div className="password-box">

              <input
                type={
                  showPassword
                  ?
                  "text"
                  :
                  "password"
                }

                placeholder="Enter password"

                value={password}

                onChange={(e) => setPassword(e.target.value)}
              />

              <span
                onClick={()=>
                  setShowPassword(!showPassword)
                }
              >

                {
                  showPassword
                  ?
                  "Hide"
                  :
                  "Show"
                }

              </span>

            </div>

          </div>

          {/* CONFIRM PASSWORD */}

          <div className="input-group">

            <label>
              Confirm Password
            </label>

            <div className="password-box">

              <input
                type={
                  showConfirmPassword
                  ?
                  "text"
                  :
                  "password"
                }

                placeholder="Confirm password"

                value={confirmPassword}

                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <span
                onClick={()=>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
              >

                {
                  showConfirmPassword
                  ?
                  "Hide"
                  :
                  "Show"
                }

              </span>

            </div>

          </div>

          {/* ROLE */}

          <div className="input-group">

            <label>
              Select Role
            </label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >

              <option value="CLIENT">
                Client
              </option>

              <option value="FREELANCER">
                Freelancer
              </option>

            </select>

          </div>

          {/* BUTTON */}

          <button
            className="neon-btn register-btn"
            type="submit"
          >

            {
              loading
                ? "Creating Account..."
                : "Register"
            }

          </button>

          {/* LINKS */}

          <div className="register-links">

            <p>

              Already have an account?

              <Link to="/login">
                Login
              </Link>

            </p>

          </div>

        </form>

      </div>

      {/* RIGHT */}

      <div className="register-right">

        <video
          src={registerVideo}
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="register-overlay"></div>

        <div className="register-video-content">

          <h2>
            Join SCRYP
          </h2>

          <p>
            Build Your Technical Reputation
          </p>

        </div>

      </div>

    </div>

  );
}

export default RegisterPage;