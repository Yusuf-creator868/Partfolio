import React from 'react'
import "./Service.css"
import data from "../../Data/services-data"
import arrow_icon from "../../Images and pictures/right-arrow.png"

const services = () => {
  return (
    <div className='services'>
      <div className="services-title">
        <h1>My services</h1>
      </div>
      <div className="services-container">
        {data.map(every => {
          return(
            <div  className='services-format'>
              <h3>{every.num}</h3>
              <h2>{every.name}</h2>
              <p>{every.desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default services
