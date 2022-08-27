import React from 'react'
import "../style/Footer.css"
import Wave from "../img/wave.png"
import Insta from "@iconscout/react-unicons/icons/uil-instagram"
import Facebook from "@iconscout/react-unicons/icons/uil-facebook"
import Mail from "@iconscout/react-unicons/icons/uil-inbox"
function Footer() {
  return (
    <div className="footer">
        <img src={Wave} alt="" srcset="" style={{ width:'100%' }}/>
        <div className="f-content">
            <span>info.tristack@tristack.in</span>
            <div className="f-icons">
               <a href="http://">
                <Insta color='white' size='3rem'/>
               </a>
                <a href="http://">
                 <Facebook color='white' size='3rem'/>
                </a>
                 <a href="mailto:info.tristack@tristack.in">
                    <Mail color='white' size='3rem'/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer