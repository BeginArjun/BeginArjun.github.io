import './index.scss'
import LogoA from '../../assets/images/logo-a.png'
import AnimatedLetters from '../AnimatedLetters'
import { Link } from 'react-router-dom'
import React from 'react'
import Logo from './Logo'
import Loader from 'react-loaders'
const Home=()=>{
    const [letterClass,setLetterClass]=React.useState('text-animate')
    const nameArray=['r','j','u','n',' ','S','h','a','r','m','a',',']
    const jobArray=['w','e','b',' ','d','e','v','e','l','o','p','e','r']

    React.useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
        <>
        <div className='container home-page'>
            <div className="text-zone">
            <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoA} alt="text-logo" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
                </h1>
                <h2>
                    Frontend Developer / Javascript Lover / CSE Student
                </h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman" />
        </>
    )
}
export default Home