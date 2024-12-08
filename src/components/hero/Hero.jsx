import React from 'react'
import './hero.css'
import picture from '../../assets/1.jpg'
const Hero = () => {
  return (
    <div class="container" id="home">
      <div class="intro">
        <p class="title">Hello, Yoga Amnan <span>Here!</span></p>
        <p class="description"><span>Technology</span> Influencer From Village</p>
        <img src={picture} alt="yoga amnan foto 1" class="img-foto" />
      </div>
    </div>
  )
}

export default Hero