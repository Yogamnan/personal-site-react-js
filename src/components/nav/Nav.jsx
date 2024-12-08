import React from 'react'
import './nav.css'
import { FaAnglesUp } from "react-icons/fa6";

const Nav = () => {
  return (
    <header>
      <div class="logo">
      <h1 class="logo-title">AMNANNN</h1>
      </div>
      <nav>
        <ul>
          <div className='icon'><li><a href="#home"><FaAnglesUp /></a></li></div>
          <li><a href="#about">ABOUT</a></li>
          <li></li>
          <li><a href="#education">MY SKILL</a></li>
          <li></li>
          <li><a href="#experience">EXPERIENCE</a></li>
          <li></li>
          <li><a href="mailto:amnannajid3@gmail.com">KONTAK</a></li>
        </ul>
      </nav>
      
    </header>
  )
}

export default Nav