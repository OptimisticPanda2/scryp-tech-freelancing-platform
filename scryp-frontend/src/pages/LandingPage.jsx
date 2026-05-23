import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import Footer from "../components/Footer";

import "./LandingPage.css";

function LandingPage() {

  const categories = [
    "Cyber Security",
    "Penetration Testing",
    "Backend Development",
    "API Development",
    "Automation",
    "Authentication Systems",
    "DevOps",
    "AI Tools"
  ];

  return (
    <>

      <Navbar />

      <HeroSlider />

      {/* CATEGORY SECTION */}

      <section className="categories container">

        <h2 className="section-title">
          Explore Categories Like
        </h2>

        <div className="category-grid">

          {
            categories.map((item, index) => (

              <div className="category-card glass" key={index}>

                <h3>
                  {item}
                </h3>

              </div>

            ))
          }

        </div>

      </section>

      {/* LIVE MARKETPLACE */}

      <section className="marketplace container">

        <h2 className="section-title">
          Live Technical Marketplace
        </h2>

        <div className="market-grid">

          <div className="market-card glass">

            <h3>
              Full Stack Authentication System
            </h3>

            <p>
              JWT + Spring Boot + React Secure Login System
            </p>

            <span>
              ₹4,999
            </span>

          </div>

          <div className="market-card glass">

            <h3>
              Penetration Testing Service
            </h3>

            <p>
              Advanced Website Vulnerability Testing
            </p>

            <span>
              ₹8,500
            </span>

          </div>

          <div className="market-card glass">

            <h3>
              Secure REST API Development
            </h3>

            <p>
              Enterprise Grade API Security Implementation
            </p>

            <span>
              ₹6,999
            </span>

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section className="how container">

        <h2 className="section-title">
          How SCRYP Works
        </h2>

        <div className="how-grid">

          <div className="how-card glass">
            <h3>1. Create Profile</h3>
            <p>
              Build your technical profile with GitHub and portfolio proof.
            </p>
          </div>

          <div className="how-card glass">
            <h3>2. Publish Services</h3>
            <p>
              Add technical freelancing services.
            </p>
          </div>

          <div className="how-card glass">
            <h3>3. Get Clients</h3>
            <p>
              Receive project requests and build your technical reputation.
            </p>
          </div>

        </div>

      </section>

      {/* WHY SCRYP */}

      <section className="features container">

        <h2 className="section-title">
          Why SCRYP Is Different
        </h2>

        <div className="feature-grid">

          <div className="feature-card glass">

            <h3>
              Cyber Security Experts
            </h3>

            <p>
              Hire ethical hackers, penetration testers and security engineers.
            </p>

          </div>

          <div className="feature-card glass">

            <h3>
              Technical Proof Services
            </h3>

            <p>
              GitHub projects, backend systems and real proof-based freelancing.
            </p>

          </div>

          <div className="feature-card glass">

            <h3>
              Premium Marketplace
            </h3>

            <p>
              Modern technical freelancing ecosystem for developers.
            </p>

          </div>

        </div>

      </section>
      <Footer />
    </>
    
  );
  
}

export default LandingPage;