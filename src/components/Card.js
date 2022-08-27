import React from 'react'
import "../style/Card.css"
function Card({emoji,heading,details}) {
  return (
    <div className="card">
        <img src={emoji} alt="" srcset="" />
        <span>{heading}</span>
        <span>{details}</span>
        <button className="c-button">Learn More</button>
    </div>
  )
}

export default Card