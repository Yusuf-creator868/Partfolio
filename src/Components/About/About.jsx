import React from 'react'
import "./About.css"
import Only from "../../Images and pictures/only.png"
import MyPic from "../../Images and pictures/photo_2025-02-19_20-07-48.jpg"


const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>Abou me</h1>
        <img src={Only} alt=''/>
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={MyPic} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am an experienced frontend developer with over a year of professional expertise in the field. Through my career, I have had privilege of collaborating with prestigious organizations, contributing to their growth and success.</p>
                <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width: "70%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width: "60%"}}/></div>
                <div className="about-skill"><p>UI Design</p><hr style={{width: "50%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achievement">
          <h1>20+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr/>
        <div className="about-achievement">
          <h1>10+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
