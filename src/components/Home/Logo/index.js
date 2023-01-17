import './index.scss';
import LogoA from '../../../assets/images/mainLogo.png'
const Logo=()=>{
    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoA} alt="solid-logo"/>
        </div>
    )
}
export default Logo;