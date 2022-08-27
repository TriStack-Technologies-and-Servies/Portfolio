import React, { useContext, useRef, useState } from 'react'
import '../style/Contact.css'
import emailjs from '@emailjs/browser';
import { themeContext } from './context';


function Contact() {
    const form = useRef();

    const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8jn614w', 'template_p89itkm', form.current, 'mn_BDtLkDtuMRHkbR')
      .then((result) => {
          console.log(result.text);
            setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="content">
                <span style={{color : darkMode ? "wheat" : " "}}>Get in Touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1"
                style={{backgroud: "#ABF1FF94"}}
                >
                </div>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail} action="">
                <input type="text" className='user' name="user_name" id="" placeholder='Name' />
                <input type="email" name="user_email" className='user' id="" placeholder='Email' />
                <textarea name="message" className='user' placeholder='Message' id="" cols="30" rows="10"/>
                <input type="submit" value="Send" className='button'/>
                <span>{done && "Thanks for contactin me!"}</span>
                <div 
                className="blur c-blur1"
                style={{background : "var(--purple)"}}
                ></div>
            </form>
        </div>
    </div>
  )
}

export default Contact