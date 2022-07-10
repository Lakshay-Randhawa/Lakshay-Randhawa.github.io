import React, { useContext } from "react";
import "./Project.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";

import fitness from "../../img/feel-good-first.PNG";


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
        <SwiperSlide className="project">
          <span className="project-wrapper">
            <img src={fitness} alt="" />
            <span className="project-header">Feel Good First</span>
            <div className="in-prog">In progress</div>
            <span className="project-content">It is fitness website which is created with MERN stack and allows trainers and clinents to interact.</span>
            <span></span>
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={fitness}  alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fitness} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fitness}  alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default projects;
