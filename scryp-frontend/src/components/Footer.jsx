import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";

function Footer() {
  return (

    <footer className="footer">

      <div className="footer-container container">

        {/* LEFT */}

        <div className="footer-brand">

          <h2>
            SCRYP
          </h2>

          <p>
            Futuristic technical freelancing marketplace focused on
            cybersecurity, backend systems, APIs and proof-based services.
          </p>

        </div>

        {/* CENTER */}

        <div className="footer-links">

          <h3>
            Quick Links
          </h3>

          <a href="/">
            Home
          </a>

          <a href="/services">
            Services
          </a>

          <a href="/login">
            Login
          </a>

          <a href="/register">
            Register
          </a>

        </div>

        {/* RIGHT */}

        <div className="footer-socials">

          <h3>
            Connect
          </h3>

          <div className="social-icons">

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2025 SCRYP • Built for the next generation of technical freelancers.
        </p>

      </div>

    </footer>

  );
}

export default Footer;