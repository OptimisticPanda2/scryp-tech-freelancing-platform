import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./HeroSlider.css";

import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
import video3 from "../assets/videos/video3.mp4";
import video4 from "../assets/videos/video4.mp4";

function HeroSlider() {

  const videos = [
    video1,
    video2,
    video3,
    video4
  ];

  return (
    <div className="hero-slider-wrapper">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        loop={true}
        className="hero-swiper"
      >

        {
          videos.map((video, index) => (

            <SwiperSlide key={index}>

              <div className="video-slide">

                <video
                  src={video}
                  autoPlay
                  muted
                  loop
                  playsInline
                />

                <div className="video-overlay">

                  <h1>
                    SCRYP
                    
                  </h1>

                  <p>
                    Secure Technical Freelancing Platform
                  </p>

                  <div className="hero-buttons">

                    <button className="neon-btn" onClick={() => window.location.href="/Register"}>
                       
                      Join As Freelancer
                    </button>
 
                  </div>

                </div>

              </div>

            </SwiperSlide>

          ))
        }

      </Swiper>

    </div>
  );
}

export default HeroSlider;