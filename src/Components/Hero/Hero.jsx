import React from 'react'
import "./Hero.css"
import Hat from "../../Images and pictures/photo_2025-02-19_20-07-48.jpg"

const Hero = () => {
  return (
    <div className='hero'>
      <img src={Hat} alt=''/>
      <h1><span>I'm Yusuf,</span> frontend developer based in Uzbekistant.</h1>
      <p>I am a frontend developer from Uzbekistant, Tashkent with multiple Certificates from the programming course known as a "Scrimba" and CS student of 
        <br/>"Westminster University in Tashkent".</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
