import './index.scss';
import {Link, NavLink} from 'react-router-dom';
import { useState } from 'react';
import LogoA from '../../assets/images/logo-preload-1.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome,faUser,faClose,faBars} from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
    faTwitter,
  } from '@fortawesome/free-brands-svg-icons'
const Sidebar=()=>{
    const [showNav, setShowNav] = useState(false);
    return(
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoA} alt="logo-web"></img>
            </Link>
            <nav className={showNav?'mobile-nav show':'hide'}>
                <NavLink exact="true" activeclassname="active" onClick={()=>setShowNav(false)} to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" onClick={()=>setShowNav(false)} className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" onClick={()=>setShowNav(false)}  className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                </NavLink>
                <FontAwesomeIcon 
                onClick={() => setShowNav(false)}
                 icon={faClose}
                color="#ffd700"
                size="3x"
                className='close-icon' />
            </nav>
            <ul className={showNav?'show':'hide'}>
                <li>
                    <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/arjun-sharma-a43974198/'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href='https://github.com/BeginArjun'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href='https://twitter.com/aRJUN_SHARMA__'>
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon 
            onClick={() => setShowNav(true)}
            icon={faBars}
            color="#ffd700"
            size="3x"
            className={showNav?'hide':'show hamburger-icon'} />
        </div>
    )
}
export default Sidebar;