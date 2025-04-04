import React from 'react'
import "./Navbar.css"
import logo from "../../Images and pictures/it-service.png"

export default function Navbar(){


    return(
        <div className='navbar'>
            <img src={logo} className='picture'/>
            <ul className='nav-menu'>
                <li>Home</li>
                <li>About Me</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className="nav-connect">Connect With Me</div>
        </div>
    )
}


