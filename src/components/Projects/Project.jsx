import React, { useContext } from "react";
import "./Project.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { PauseOutlined, CheckOutlined } from "@ant-design/icons";

import fitness from "../../img/feel-good-first.PNG";
import cryptoTracker from "../../img/crypto-tracker.PNG"


const projects = () => {

  return (
    <div className="projects" id="projects">

      <span className="projects-header">Recent Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="projects-slider"
      >
        {/* Feel good first  */}
        <SwiperSlide >
          <span className="project-wrapper in-prog">
            <img src={fitness} alt="" />
            <span className="project-header">Feel Good First</span>
            <div className="prog-badge ">In progress <PauseOutlined /></div>
            <span className="project-content">It is fitness website which is created with MERN stack and allows trainers and clinents to interact.</span>
            <span></span>
          </span>
        </SwiperSlide>

        {/* Crypto-tracker  */}
        <SwiperSlide>
        <span className="project-wrapper completed">
            <a href='https://lakshayrandhawa.me/crypto-tracker/'><img src={cryptoTracker} alt="" /></a>
            <span className="project-header ">Crypto Tracker</span>
            <div className="prog-badge ">Completed <CheckOutlined /></div>
            <span className="project-content">It is a crypto currency tracking app which fetches real time data about different crypto using an API </span>
            <span></span>
          </span>
        </SwiperSlide>
   
      </Swiper>
    </div>
  );
};

export default projects;
