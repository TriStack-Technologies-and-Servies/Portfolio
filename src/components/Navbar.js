import React from 'react'
import { Link } from 'react-scroll'
import "../style/Navbar.css"
import Toggle from './Toggle'
function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">TriStack</div>
            <span><Toggle/></span>
            
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:"none"}}>
                    <Link spy={true} to ='works' smooth ={true}>
                        <li>About</li>
                    </Link>
                    <Link spy={true} to ='services' smooth ={true}>
                        <li>Services</li>
                    </Link>
                    <Link spy={true} to ='Home' smooth ={true} activeClass="activeClass">
                        <li>Home</li>
                    </Link>
                    <span>play</span>
                </ul>
            </div>
            <button className="button n-button">Say Hi !</button>
        </div>
    </div>
  )
}

export default Navbar