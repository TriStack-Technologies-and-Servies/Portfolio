import React, { useContext } from 'react'
import '../style/Work.css'
import aws from '../img/aws.jfif'
import reactimg from '../img/react.png'
import nextjs from '../img/nextjs.png'
import django from '../img/jango.png'
import wordPress from '../img/wordpress.png'
import { themeContext } from './context'
import {motion} from "framer-motion"
function Work() {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
  return (
    <div className='works' id='works'>
        <div className="content">
            <span style={{color : darkMode ? "wheat" : " "}}>Connected With</span>
            <span>Creative Designs <br /> & Technologies</span>
            <span>
            We Design the Application with Complete analysis
            <br />
            <br />
            Work on the Application Needs on the Technologies
            <br />
            <br />
            The Robust design and Architectural analysis will be the Initail part of the Development 
            <br/>
             Review the every module and gain more requirement needs from <span style={{color:'black',fontSize:"2rem",fontWeight:"bold"}}>Clients</span> 
            </span>
            <div className="blur s-blur2" style={{background : "var(--purple)"}}></div>
            <div className="blur s-blur1" style={{background : "var(--blueCard)"}}></div>
        </div>
        

        <div className="w-right">
            <motion.div 
            initial={{rotate:45}}
            whileInView={{rotate:0}}
            viewport={{margin:'-40px'}}
            transition={{duration:3.5,type:'spring'}}
            className="w-mainCricle">
                <div className="w-secCircle">
                    <img src={reactimg} alt="" srcset="" />
                </div>
                <div className="w-secCircle">
                    <img src={django} alt="" srcset="" />
                </div>
                <div className="w-secCircle">
                    <img src={aws} alt="" srcset="" />
                </div>
                <div className="w-secCircle">
                    <img src={nextjs} alt="" srcset="" />
                </div>
                <div className="w-secCircle">
                    <img src={wordPress} alt="" srcset="" />
                </div>
            </motion.div>
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Work