import React from 'react'
import './Navbar.css'
import logo from '../../img/logo.png'

function Navbar() {
  return (
    <>
      <div className='nav-wrapper'>
         <div className='nav-left'>
            <div className='logo'>
                <img src={logo} /> 
            </div>
           
         </div>
         {/* <div className='nav-right'>
            <div className='nav-list'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact Me</li>
                </ul>
            </div>
            <span>Toggle switch</span>
         </div> */}
      </div>
    </>
  )
}

export default Navbar