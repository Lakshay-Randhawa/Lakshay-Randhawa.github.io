import React from 'react'
import resume from '../../Resume.docx'
import './About.css'
function About() {
  return (
     <div className='about-wrapper'>
        <div className='about-heading'>
            About Me
        </div>
        <div className='about-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur enim beatae quae quisquam et aspernatur sed dolorem laudantium odio quibusdam repudiandae, commodi, quaerat quis, assumenda eligendi temporibus iure cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rerum tenetur ipsam sapiente vel suscipit quos dignissimos ab enim asperiores accusantium veritatis omnis, officia nobis magni itaque. Nostrum, iure iste. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique inventore deleniti sapiente asperiores at veritatis et assumenda reprehenderit ipsum eaque quis maxime molestias nostrum aut nam, a porro distinctio architecto. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus veritatis accusamus modi eos labore debitis repudiandae neque minima aspernatur incidunt similique quis, amet natus ipsa rerum soluta fugit, non ab. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur magnam dolores odio omnis, quo veritatis unde perspiciatis est aliquid esse tempore ratione ut sapiente. Amet odio et sunt. Optio, atque?
        Facilis non quos quia! Eos, ducimus iusto! Eaque nostrum est consequuntur, pariatur libero minus voluptatem. Impedit quas atque ut modi, pariatur, sapiente sit numquam, dolore amet provident ratione. Vel, rem.
        Ex nostrum molestiae ea soluta veniam modi architecto reprehenderit recusandae id expedita temporibus impedit itaque sequi laudantium esse libero dolores ipsam, voluptatum qui iusto earum accusantium eaque deleniti! Eius, dolorum.</div>
        <button className='button resume'><a href={resume} download={resume} style={{textDecoration:'none'}}>Download resume</a></button>
     </div>
  )
}

export default About