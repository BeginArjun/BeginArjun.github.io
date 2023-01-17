import './index.scss';
import {Link, NavLink} from 'react-router-dom';
import LogoA from '../../assets/images/logo-preload-1.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome,faUser} from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
    faTwitter,
  } from '@fortawesome/free-brands-svg-icons'
const Sidebar=()=>{
    return(
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoA} alt="logo-web"></img>
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active"  className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                </NavLink>
            </nav>
            <ul>
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
        </div>
    )
}
export default Sidebar;