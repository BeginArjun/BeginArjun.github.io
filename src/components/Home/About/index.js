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
                <p>As a Computer Science student, I am deeply invested in my academic pursuits. 
                    In my spare time, I enjoy indulging in my passion for film and engaging in competitive coding activities. I am particularly interested in web development and am currently honing my skills in ReactJS. I possess a strong foundation in programming languages such as C++ and Python, 
                    as evidenced by the various projects I have completed <a target="_blank" rel="noreferrer" href='https://github.com/BeginArjun'>(See my Github)</a>
                </p>
                <p>Currently, I am pursuing a Bachelor of Technology degree at Lovely Professional University, 
                    where I am continually motivated to push the boundaries of my knowledge and expertise.
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