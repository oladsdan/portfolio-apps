import React, { useRef, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';
import { useEffect } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const contactme =['C','o','n','t','a','c','t', ' ','m','e']
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    


    useEffect(()=> {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

    },[])

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
        .sendForm('gmail', 'template_YeJhZkgb', refForm.current, 'your-token')
        .then(
          () => {
            alert('Message successfully sent!')
            window.location.reload(false)
          },
          () => {
            alert('Failed to send the message, please try again')
          }
        )
    }


    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={contactme}
                        idx={15} />
                    </h1>
                    <p>
                        i am interested in freelance opportunites - especially ambitious or large projects, 
                        however, if you have other request or question, don't hesitate to contact me using 
                        below form either,
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul> 
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />
                                    
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="email" required />
                                </li>
                                <li>
                                    <input placeholder="subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                                
                            </ul>
                        </form>
                    </div> 
                                  
                </div>
                 
                
            </div>
            <Loader type="pacman" />

        </>

    )
}

export default Contact