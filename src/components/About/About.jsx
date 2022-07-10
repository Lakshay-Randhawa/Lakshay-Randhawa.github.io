import React from 'react'
import resume from '../../Resume.docx'
import './About.css'
function About() {
  return (
     <div className='about-wrapper'>
        <div className='about-heading'>
            About Me
        </div>
        <div className='about-content'>
        I am enthusiastic software developer who is passionate about technology and has a strong virtue of solving day-to-day problems with technology. Before starting my journey in this field of innovation and creativity, I had no idea what was coming next; But after getting into it, through academic teachings and self learning, I had strong feeling that this is exactly what I want to in my life. Most of my learning so far has been based off curiosity and the urge to make something new using latest technology. 
        
I also believe that being a software developer is not just about your technical skills. I have carved my personality and attitude in such a way that I am perfectly able to work in any team environment and handle any situation whether it is accepting criticism positively or trying to express my point. 
 
        </div>
        <button className='button resume'><a href={resume} download={resume} style={{textDecoration:'none'}}>Download resume</a></button>
     </div>
  )
}

export default About