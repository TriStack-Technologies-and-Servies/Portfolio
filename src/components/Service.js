import React, { useContext } from 'react'
import "../style/Services.css"
import HeartEmoji from "../img/heartemoji.png";
import Humble from "../img/humble.png";
import Glasses from "../img/glasses.png";
import webdev from "../img/webdev.png"
import design from "../img/designinng.png"
import hosting from "../img/hosting.png"
import Card from './Card';
import { themeContext } from './context';
import {motion} from "framer-motion"

function Service() {
    const transition = {duration : 1,type :'spring'}
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='services'>
        <div className="content">
            <span style={{color : darkMode ? "wheat" : " "}}>Our</span>
            <span>Services</span>
            <span>
            It turned out that Emmet, 
            <br />
            React and VS Code already had a relationship👨‍👩‍👦 that I didn't know of. 
            <br />
            You know what🤔 Let me just show you how to enable it in VS Code.
            </span>
        </div>
        <div className="cards">
            <motion.div
            whileInView={{top:"-4rem",left:'18rem'}}
            initial={{top:"-7rem",left:'23rem'}}
            transition = {transition}
            style={{top:"-4rem",left:'18rem'}}>
                <Card 
                emoji = {design}
                heading = "Design"
                details = "Photoshop ,Adobe, Adobe XD"/>
            </motion.div>
            <motion.div 
            initial ={{top:'17rem',left:'0rem'}}
            whileInView ={{top:"14rem",left:'5rem'}}
            transition = {transition}
            style={{top:"14rem",left:'5rem'}}>
                <Card 
                emoji = {webdev}
                heading = "WEB DEVELOPING"
                details = "Web designing is brainpower made visible"/>
            </motion.div>
            <motion.div
            initial ={{top:'17rem',left:'26rem'}}
            whileInView ={{top:"15rem",left:'21rem'}}
            transition = {transition}
            
            style={{top:"15rem",left:'21rem'}}>
                <Card 
                emoji = {hosting}
                heading = "HOSTING"
                details = "Power your business with Internet"/>
            </motion.div>
            <motion.div 
            initial ={{top:'-7rem',left:'0rem'}}
            whileInView ={{top:"-5rem",left:'2rem'}}
            transition = {transition}
            style={{top:"-5rem",left:'2rem'}}>
                <Card 
                emoji = {hosting}
                heading = "HOSTING"
                details = "Power your business with Internet"/>
            </motion.div>
            <div className="blur s-blur2" style={{background : "var(--purple)"}}></div>
            <div className="blur s-blur1" style={{background : "var(--blueCard)"}}></div>
        </div>
    </div>
  )
}

export default Service