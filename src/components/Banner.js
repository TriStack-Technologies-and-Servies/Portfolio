import React from 'react'
import "../style/Banner.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
function Banner() {
  return (
    <div className="banner">
        <Carousel showThumbs={true}
        showStatus={false}
        infiniteLoop
        useKeyboardArrow
        transitionTime={1000}
        width="100%"
        autoPlay={true}
        >
            <div className="slides" >
               <p>'Success begin from motivation of failure'</p>
            </div>
            <div className="slides" >
               <p>'create whatever cause a revolution in your heart'</p>
            </div>
            <div className="slides" >
               <p>'Success begin from motivation of failure'</p>
            </div>
            <div className="slides">
                <p>'When things go wrong, don't go with them.'</p>
            </div>
        </Carousel>
       
    </div>
  )
}

export default Banner