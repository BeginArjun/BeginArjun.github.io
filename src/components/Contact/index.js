import './index.scss';
import Loader from 'react-loaders'
import React from 'react'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser';
const Contact=()=>{
    const [letterClass,setLetterClass]=React.useState('text-animate')
    React.useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])
      const refForm=React.useRef()
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_p7jktmf', 'template_vo919kl', refForm.current, 'UZ3xVT7kFonjvU7Bp')
          .then(() => {
              alert('Message Successfully Sent')
              window.location.reload(false)
          }, (error) => {
              console.log(error.text);
          });
      };
    return(
        <>
        <div className="container contact-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    strArray={"Contact Me".split("")}
                    letterClass={letterClass}
                    idx={15}
                    />
                </h1>
                <p>Please drop in any requests
                    or questions you may have. Don't hesitate to 
                    contact me using the form below.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder='Name'  required/>
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder='Email'  required/>
                            </li>
                            <li>
                                <input placeholder="Subject"  type="text" required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND" />
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
export default Contact;