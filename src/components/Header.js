import React from 'react'
import '../style/Header.css'
import Github from '../img/github.png'
import LinkedIn from '../img/linkedin.png'
import Insta from '../img/instagram.png'
import vector1 from '../img/Vector1.png'
import vector2 from '../img/Vector2.png'
import boy from '../img/boy.png'
import thumbsup from '../img/thumbup.png'
import crown from '../img/crown.png'
import emoji from '../img/glassesimoji.png'
import FloatingDiv from './FloatingDiv'
import { themeContext } from './context'
import {useContext} from 'react'
import { motion } from 'framer-motion'
function Header() {
    const transition = {duration :2,type :'spring'}
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
  return (
    <div className="intro" id='Home'>
        <div className="i-left">
            <div className="i-name">
                <span style={{color : darkMode?'wheat':" "}}>Hy! Clients ,</span> 
                <span>TriStack Technology & Services</span>
                <span>Revolution Starts from Here , Think Big Make it Than Bigger !</span>
            </div>
            <button className="button i-button">Let's Connect</button>
            <div className="i-icons">
                <img src={Github} alt="" srcset="" />
                <img src={LinkedIn} alt="" srcset="" />
                <img src={Insta} alt="" srcset="" />
            </div>
        
        </div>
       

        <div className="i-right">
            <img src={vector1} alt="" srcset="" />
            <img src={vector2} alt="" srcset="" />
            <img className='boy' src={boy} alt="" srcset="" />
            <motion.img
            initial ={{left:'-36%'}}
            whileInView ={{left :'-22%'}}
            transition = {transition}
            className='emoji' src={emoji}alt =''/>
            <motion.div
            initial ={{top:'-5%',left:'78%'}}
            whileInView ={{left :'68%'}}
            transition = {transition}
            className="floating-div" style={{top:"-5%" ,left:"70%"}}>
                <FloatingDiv image ={crown} txt1 ='WEB' txt2='DEVELOPMENT' />
            </motion.div>
            <motion.div
            initial ={{top:'64%',left:'-5%'}}
            whileInView ={{left :'0%'}}
            transition = {transition}
            className="floating-div" style={{top:"18rem" ,left:"0rem"}}>
                <FloatingDiv image ={thumbsup} txt1 ='CREATIVE' txt2='DESIGINS' />
            </motion.div>
            <motion.div
            initial ={{top:'20rem',left:'80%'}}
            whileInView ={{left :'73%'}}
            transition = {transition}
            className="floating-div" style={{top:"20rem" ,left:"73%"}}>
                <FloatingDiv image ={thumbsup} txt1 ='CREATIVE' txt2='DESIGINS' />
            </motion.div>

            <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
            <div className="blur" 
            style={{
                background:"#C1F5FF",
                top:'22rem',
                width:'21rem',
                height:'11rem',
                left:'-7rem'

        }}></div>
        </div>
    </div>
  )
}

export default Header