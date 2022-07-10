import React from 'react'
import './Intro.css'
import Typewriter from 'typewriter-effect'
import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
import instagram from '../../img/instagram.png'
import me from '../../img/me.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import { motion } from  'framer-motion'
import glassesimoji from "../../img/glassesimoji.png";

function Intro() {
  // Transition
  const transition = { duration: 2, type: "spring" };

  return (
  <div className='Intro'>
    <div className='i-left'>
        <div className='i-name'>
            <span>I am Lakshay !!</span>
          
              
              <Typewriter 
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                cursorClassName: 'cursor',
                strings: [
                  "A Full Stack Developer",
                  "A Problem Solver",
                  "A Coder",
                  "An Enthusiast"
                ]
              }}/>
          
        </div>
        <button className="button i-button">Hire me</button>
        <div className='i-icons'>
             <a href='https://github.com/Lakshay-Randhawa'><img src={github} /></a>
             <a href='https://www.linkedin.com/in/lakshay-randhawa-8a59751b7/'><img src={linkedin} /></a>
             <a href=''><img src={instagram} /></a>
        </div>
    </div>
   <div className='i-right'>
   
      <img src={Vector1} alt="" />
      <img src={Vector2} alt="" />
      <img src={me}alt="" />

      <motion.img
          initial={{ left: "-34%", top:"-33%", height:'150px' }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
          <div
            className="blur"
            style={{
              background: "#C1F5FF",
              top: "17rem",
              width: "21rem",
              height: "11rem",
              left: "-9rem",
            }}
            ></div>
        </div>
  </div>

//    <div className='Intro'>
//      <span>Hey!! I am </span>
//      <span>Full stack developer</span>
//    </div>
  )
}

export default Intro