import './index.scss'
import AnimatedLetters from '../../AnimatedLetters'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import {
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
    faPython,
  } from '@fortawesome/free-brands-svg-icons'
const About=()=>{
    const [letterClass,setLetterClass]=React.useState('text-animate')

    React.useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    return(
        <>
            <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={"About Me".split("")}
                    idx={15}
                    />
                </h1>
                <p>
                I am a Frontend Developer with a passion for creating unique and business-focused user experiences. My goal is to help businesses achieve their objectives by designing intuitive and engaging websites and online applications. I believe that the user experience is the key to success in today's digital world,
                 and I strive to create designs that are both functional and aesthetically pleasing.
                </p>
                <p>
                When I'm not working on web development projects, I enjoy indulging in my love of movies. As a cinephile, I'm always on the lookout for new films 
                to watch and analyze. I find that movies are a great source of inspiration for my work,
                as they often showcase innovative storytelling techniques and visual design.
                </p>
                <p>
                In addition to watching movies, I also enjoy writing tech blogs in my free time.
                 Through my blog posts, I aim to share my knowledge and insights with others in the tech community.
                 Writing is a great way for me to organize my thoughts and reflect on my experiences as a developer.
                </p>
                <p>
                Overall, I'm passionate about using technology to create meaningful experiences for users. 
                Whether it's through web development or writing, I'm always looking for ways to make a positive impact.
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faGitAlt} color="#ec4d28"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faHtml5}  color="#f06529"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color="#efd81d"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faPython} color="#4B8BBE"/>
                    </div>
                </div>
            </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}
export default About