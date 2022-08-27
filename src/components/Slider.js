import React, { useContext } from 'react'
import "../style/Slider.css"
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import steve from '../img/jobs.jpeg'
import jackma from '../img/JackMa.jpeg'
import sundar from '../img/sundar.jpeg'
import Elonmask from '../img/Elonmask.jpeg'
import { themeContext } from './context'

function Slider() {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
  return (
    
    <div className="sliders">
        <span style={{color : darkMode ? "wheat" :" "}}>Learn From Greats</span>
        <span>Youtube References</span>

        <Swiper 
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className = "sliders-slide"
        >
            <SwiperSlide>
                <img onClick={console.log("steve")} src={steve} alt="" srcset="" />
            </SwiperSlide>
            <SwiperSlide>
                <img onClick={console.log("Elon musk")} src={Elonmask} alt="" srcset="" />
            </SwiperSlide>
            <SwiperSlide>
                <img onClick={console.log("sundar")} src={sundar} alt="" srcset="" />
            </SwiperSlide>
            <SwiperSlide>
                <img  src={jackma} alt="" srcset="" />
            </SwiperSlide>
             {/* <SwiperSlide>   
                <img src="" alt="" srcset="" />
            </SwiperSlide> */}
            {/* <YoutubeBackground
            className="yt"
            videoId={"_YzD9KW82sk"} 
            playerOptions={{ mute: 1, loop: 8, autoplay: 0 }}
            >
            <div className="App">
                <div></div>
            </div>
        </YoutubeBackground> */}
        </Swiper>
        
    </div>
  )
}

export default Slider